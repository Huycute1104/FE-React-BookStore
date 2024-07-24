import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from '@mui/material';

const OrderDetailDialog = ({ open, order, onClose }) => {
  if (!order) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Order Details</DialogTitle>
      <DialogContent>
        <Typography variant="h6" gutterBottom>
          Order ID: {order.orderId}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Customer Name: {order.customerName}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Customer Phone: {order.customerPhone}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Order Date: {new Date(order.orderDate).toLocaleDateString()}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Total Amount: {order.total}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Status: {order.orderStatus}
        </Typography>

        <TableContainer sx={{ marginTop: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Book Name</TableCell>
                <TableCell>Unit Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Discount</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.orderDetails.map((detail) => (
                <TableRow key={detail.bookId}>
                  <TableCell>{detail.book.bookName}</TableCell>
                  <TableCell>{detail.unitPrice}</TableCell>
                  <TableCell>{detail.quantity}</TableCell>
                  <TableCell>{detail.discount}%</TableCell>
                  <TableCell>
                    {(detail.unitPrice * detail.quantity * (1 - detail.discount / 100)).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    {detail.book.images.length > 0 && (
                      <img
                        src={detail.book.images[0].url}
                        alt={detail.book.bookName}
                        style={{ width: 50, height: 75, objectFit: 'cover', borderRadius: 4 }}
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDetailDialog;
