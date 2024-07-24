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
  if (price === undefined || price === null) {
    return "N/A"; // Or you can return a default value or empty string
  }
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

  // Check if productItem.images is defined and has at least one image
  const imageUrl = productItem?.images?.[0]?.url || "path/to/default-image.jpg";

  return (
    <Col md={2} sm={5} xs={10} className="product mtop">
      {title === "Giảm giá lớn" && (
        <span className="discount">{productItem.discount}% Off</span>
      )}
      <img
        loading="lazy"
        onClick={handleClick}
        src={imageUrl}
        alt={productItem?.name || "Product Image"}
      />
      <div className="product-like">
        <AiOutlineHeart size={24} />
      </div>
      <div className="product-details">
        <h3 onClick={handleClick}>{productItem.name}</h3>
        <div className="rate">
          {[...Array(5)].map((_, index) => (
            <i key={index} className="fa fa-star"></i>
          ))}
        </div>
        <div className="price">
          <h4>{formatPrice(productItem.unitPrice)}</h4>
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
