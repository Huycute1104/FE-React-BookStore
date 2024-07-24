import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import useWindowScrollToTop from "../../hook/useWindowScrollToTop";
import instance from '../../api/axiosCustomize';

const Product = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // Fetch selected product
        const productResponse = await instance.get(`books/${id}`);
        const productData = productResponse.data;
        setSelectedProduct(productData);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]); // Thêm id vào dependency array

  useWindowScrollToTop();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Fragment>
      {selectedProduct && <ProductDetails selectedProduct={selectedProduct} />}
    </Fragment>
  );
};

export default Product;
