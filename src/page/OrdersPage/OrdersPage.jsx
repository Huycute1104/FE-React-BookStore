import React, { useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Checkout.css";

const formatPrice = (price) => {
  return price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

const Checkout = () => {
  const { cartList } = useSelector((state) => state.cart);
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
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
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
    </section>
  );
};

export default Checkout;
