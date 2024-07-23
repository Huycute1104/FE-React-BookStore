import React from 'react';
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";
import { GrAdd } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";
import "./product-card.css";

const formatPrice = (price) => {
  return price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

const ProductCard = ({ title, productItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${productItem.id}`);
  };

  const handleAdd = (productItem) => {
    dispatch(addToCart({ product: productItem, num: 1 }));
    toast.success("Sản phẩm đã được thêm vào giỏ hàng!");
  };

  return (
    <Col md={2} sm={5} xs={10} className="product mtop">
      {title === "Giảm giá lớn" && (
        <span className="discount">{productItem.discount}% Off</span>
      )}
      <img
        loading="lazy"
        onClick={handleClick}
        src={productItem.imgUrl}
        alt=""
      />
      <div className="product-like">
        <AiOutlineHeart size={24} />
      </div>
      <div className="product-details">
        <h3 onClick={handleClick}>{productItem.productName}</h3>
        <div className="rate">
          {[...Array(5)].map((_, index) => (
            <i key={index} className="fa fa-star"></i>
          ))}
        </div>
        <div className="price">
          <h4>{formatPrice(productItem.price)}</h4>
          <button
            aria-label="Add"
            type="submit"
            className="add"
            onClick={() => handleAdd(productItem)}
          >
            <GrAdd size={20} />
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
