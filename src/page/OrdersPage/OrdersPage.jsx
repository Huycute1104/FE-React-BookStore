import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import instance from '../../api/axiosCustomize'; // Import instance
import "./Checkout.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formatPrice = (price) => {
  return price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

const Checkout = () => {
  const { cartList } = useSelector((state) => state.cart);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.unitPrice,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Tên là bắt buộc"),
      address: Yup.string().required("Địa chỉ là bắt buộc"),
      phone: Yup.string()
        .required("Số điện thoại là bắt buộc")
        .matches(/^[0-9]+$/, "Số điện thoại không hợp lệ")
        .min(10, "Số điện thoại phải có ít nhất 10 chữ số"),
    }),
    onSubmit: async (values) => {
      const orderData = {
        orderDate: new Date().toISOString(),
        total: totalPrice,
        customerName: values.name,
        customerPhone: values.phone,
        orderDetailDtos: cartList.map(item => ({
          bookId: item.id,
          unitPrice: item.unitPrice,
          quantity: item.qty,
          discount: 0, // You can add discount logic if needed
        })),
      };
      console.log("Submitting order:", orderData);
      
      try {
        const response = await instance.post('/orders', orderData, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const url = response.data; // Assuming response.data contains the URL
        console.log("Response URL:", url);

        // Open the URL in a new tab
        window.open(url, '_blank');
      } catch (error) {
        console.error("Error placing the order:", error.response ? error.response.data : error.message);
        // Handle error response
        toast.error("Error placing the order. Please try again.");
      }
    },
  });

  const handleTokenChange = (event) => {
    const newToken = event.target.value;
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  return (
    <section className="checkout">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1>Thông tin thanh toán</h1>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Tên</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.name && formik.errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.address && formik.errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.address}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.phone && formik.errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.phone}
                </Form.Control.Feedback>
              </Form.Group>
              <Button className="btn-primary" variant="primary" type="submit">
                Thanh toán
              </Button>
            </Form>
          </Col>
          <Col md={4}>
            <div className="order-summary">
              <h2>Tóm tắt đơn hàng</h2>
              <div className="d_flex">
                <h4>Tổng giá :</h4>
                <h3>{formatPrice(totalPrice)}</h3>
              </div>
              <Link to="/cart" className="link-no-underline">
                <Button className="btn-secondary" variant="secondary">
                  Quay lại giỏ hàng
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
};

export default Checkout;
