import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  addToCart,
  decreaseQty,
  deleteProduct,
} from "../../redux/slice/cartSlice";
import "./Cart.css";

const formatPrice = (price) => {
  return price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {cartList.length === 0 && (
              <div>
                <h1 className="no-items product">Không có sản phẩm trong giỏ hàng</h1>
                <Link to="/">
                  <button className="btn btn-primary">Quay lại mua hàng</button>
                </Link>
              </div>
            )}
            {cartList.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      <img src={item.imgUrl} alt={item.productName} />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.productName}</h3>
                          <h4>
                            {formatPrice(item.price)} * {item.qty}
                            <span>{formatPrice(productQty)}</span>
                          </h4>
                        </Col>
                        <Col xs={12} sm={3} className="cartControl">
                          <button
                            className="incCart"
                            onClick={() =>
                              dispatch(addToCart({ product: item, num: 1 }))
                            }
                          >
                            <FaPlus size={17} />
                          </button>
                          <button
                            className="desCart"
                            onClick={() => dispatch(decreaseQty(item))}
                          >
                            <FaMinus size={17} />
                          </button>
                          <button
                            className="delete"
                            onClick={() => dispatch(deleteProduct(item))}
                          >
                            <FaTrash size={17} />
                          </button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <div className="cart-total">
              <h2>Tóm tắt giỏ hàng</h2>
              <div className="d_flex">
                <h4>Tổng giá :</h4>
                <h3>{formatPrice(totalPrice)}</h3>
              </div>
              <Link to="/checkout" className="link-no-underline">
                <button className="btn btn-primary">Tới trang thanh toán</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
