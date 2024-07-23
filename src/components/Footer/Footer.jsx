import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>BookStore</h1>
            </div>
            <p>BookStore.</p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Về Chúng Tôi</h2>
            <ul>
              <li>Nghề Nghiệp</li>
              <li>Cửa Hàng Của Chúng Tôi</li>
              <li>Chăm Sóc Của Chúng Tôi</li>
              <li>Điều Khoản & Điều Kiện</li>
              <li>Chính Sách Bảo Mật</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Chăm Sóc Khách Hàng</h2>
            <ul>
              <li>Trung Tâm Trợ Giúp</li>
              <li>Cách Mua Hàng</li>
              <li>Theo Dõi Đơn Hàng</li>
              <li>Mua Sắm Doanh Nghiệp & Số Lượng Lớn</li>
              <li>Trả Hàng & Hoàn Tiền</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Liên Hệ Với Chúng Tôi</h2>
            <ul>
              <li>FPT HCM</li>
              <li>Email: rosaceaee@gmail.com</li>
              <li>Điện Thoại: +84 1123 456 780</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
