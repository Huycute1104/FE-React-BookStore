import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/slice/cartSlice";
import "./product-details.css";


const formatPrice = (price) => {
  return price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

const ProductDetails = ({ selectedProduct }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    if (e.target.value <= 0) {
      setError("Số lượng phải lớn hơn 0");
    } else {
      setError("");
    }
  };

  const handleAdd = (selectedProduct, quantity) => {
    if (quantity <= 0) {
      setError("Số lượng phải lớn hơn 0");
      return;
    }

    dispatch(addToCart({ product: selectedProduct, num: quantity }));
    toast.success("Sản phẩm được thêm vào giỏ hàng!");
    setError("");
  };

  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="main-image">
              <img loading="lazy" src={selectedProduct?.imgUrl} alt={selectedProduct?.productName} />
            </div>
            <div className="thumbnail-images">
              {selectedProduct?.additionalImages?.map((imgUrl, index) => (
                <img key={index} src={imgUrl} alt={`Thumbnail ${index + 1}`} />
              ))}
            </div>
          </Col>
          <Col md={6}>
            <h2>{selectedProduct?.productName}</h2>
            <div className="rate">
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <span>{selectedProduct?.avgRating} <i className="fa fa-star"></i>  đánh giá</span>
            </div>
            <div className="info">
              <span className="price">{formatPrice(selectedProduct?.price)}</span>
              <span>Loại sản phẩm: {selectedProduct?.category}</span>
            </div>
            <p>{selectedProduct?.shortDesc}</p>
            <input
              className="qty-input"
              type="number"
              placeholder="Qty"
              value={quantity}
              onChange={handleQuantityChange}
            />
            {error && <p className="error-message">{error}</p>}
            <button
              aria-label="Add"
              type="button"
              className="add"
              onClick={() => handleAdd(selectedProduct, quantity)}
            >
              Thêm vào giỏ hàng
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
