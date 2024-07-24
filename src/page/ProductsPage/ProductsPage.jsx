import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section from '../../components/Section/Section';

const ProductsPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://localhost:7050/api/books', {
          params: {
            pageIndex: null,
            pageSize: null,
            bookName: null,
            minPrice: null,
            maxPrice: null,
            categoryId: null,
          },
        });

        setBooks(response.data.data || []);
        setLoading(false);
      } catch (error) {
        setError('Unable to fetch books at this time. Please try again later.');
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const formatPrice = (price) => {
    return price ? price.toLocaleString() : 'No Price';
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '0 120px' }}>
      {books.length > 0 ? (
       <Section
       title="Danh sach sách"
       bgColor="white"
       productItems={books}
     />
       
      ) : (
        <div>No books available</div>
      )}
    </div>
  );
};

export default ProductsPage;
