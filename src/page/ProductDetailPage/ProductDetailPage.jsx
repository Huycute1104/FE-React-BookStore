import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import useWindowScrollToTop from "../../hook/useWindowScrollToTop";
import axios from 'axios';

const Product = () => {
  const { id } = useParams();
  console.log(id);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // Fetch selected product
        const productResponse = await axios.get(`https://localhost:7050/api/books/${id}`);
        const productData = productResponse.data;
        setSelectedProduct(productData);
        console.log(selectedProduct);
        

        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

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
