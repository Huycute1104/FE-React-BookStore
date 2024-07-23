import React from "react";
import { Link } from "react-router-dom";
import "./404NotFound.css";

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oops! Không tìm thấy trang.</p>
        <Link to="/" className="notfound-link">
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
