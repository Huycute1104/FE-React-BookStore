import React, { useState, useEffect } from 'react';
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Pagination,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InfoIcon from '@mui/icons-material/Info';
import { toast, ToastContainer } from 'react-toastify';
import OrderDetailDialog from './OrderDetailDialog';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    pageSize: 10,
    totalCount: 0,
  });
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const fetchOrders = async () => {
    try {
      const apiUrl = 'https://localhost:7050/api/orders/customer';
      const response = await axios.get(apiUrl, {
        params: {
          pageIndex: pagination.currentPage,
          pageSize: pagination.pageSize,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.items) {
        setOrders(response.data.items);
        setPagination({
          currentPage: response.data.currentPage,
          totalPages: response.data.totalPages,
          pageSize: response.data.pageSize,
          totalCount: response.data.totalCount,
        });
      } else {
        console.error('Unexpected response structure:', response.data);
      }
    } catch (error) {
      console.error('Error fetching orders:', error.message || error);
      toast.error('Failed to fetch orders.');
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [pagination.currentPage, pagination.pageSize, token]);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = orders;

      if (statusFilter) {
        filtered = filtered.filter((order) => order.orderStatus === statusFilter);
      }

      if (searchText) {
        filtered = filtered.filter((order) =>
          order.orderId.toString().includes(searchText.toLowerCase())
        );
      }

      if (startDate && endDate) {
        filtered = filtered.filter((order) => {
          const orderDate = new Date(order.orderDate);
          return orderDate >= new Date(startDate) && orderDate <= new Date(endDate);
        });
      }

      setOrders(filtered);
    };

    applyFilters();
  }, [statusFilter, searchText, startDate, endDate, orders]);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const handlePageChange = (event, value) => {
    setPagination((prev) => ({
      ...prev,
      currentPage: value,
    }));
  };

  return (
    <Box>
      <Box marginBottom={2} display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Search by Order ID"
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <FormControl variant="outlined">
          <InputLabel>Status</InputLabel>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            label="Status"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Processing">Processing</MenuItem>
            <MenuItem value="Shipped">Shipped</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
            {/* Add more status options as needed */}
          </Select>
        </FormControl>
        <TextField
          label="Start Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <TextField
          label="End Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </Box>
      <TableContainer sx={{ marginTop: '40px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order Number</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Total Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <TableRow key={order.orderId}>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{new Date(order.orderDate).toLocaleDateString()}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{order.orderStatus}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleViewDetails(order)}>
                      <InfoIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="5">No orders found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={pagination.totalPages}
        page={pagination.currentPage}
        onChange={handlePageChange}
        color="primary"
        sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}
      />
      <ToastContainer />
      <OrderDetailDialog
        open={Boolean(selectedOrder)}
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </Box>
  );
};

export default MyOrder;
