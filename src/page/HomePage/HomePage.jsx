import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import Section from "../../components/Section/Section";
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import banner4 from '../../assets/images/banner4.jpg';
import useWindowScrollToTop from "../../hook/useWindowScrollToTop";

const HomePage = () => {
  // State for books data, pagination, and search
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageIndex, setPageIndex] = useState(1); // Current page index
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const [totalCount, setTotalCount] = useState(0); // Total number of books

  // Fetch books data from API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://localhost:7050/api/books', {
          params: {
            pageIndex: pageIndex,
            pageSize: pageSize,
            bookName: '', // Empty search term
            minPrice: null,
            maxPrice: null,
            categoryId: null,
          },
        });
        setBooks(response.data.data || []);
        setTotalCount(response.data.totalCount || 0); // Set total count
        setLoading(false);
      } catch (error) {
        setError('Unable to fetch books at this time. Please try again later.');
        setLoading(false);
      }
    };

    fetchBooks();
  }, [pageIndex, pageSize]); // Re-fetch when pageIndex or pageSize changes

  // Hook to scroll to top on load
  useWindowScrollToTop();

  // Handler for page change
  const handlePageChange = (newPageIndex) => {
    if (newPageIndex < 1 || newPageIndex > Math.ceil(totalCount / pageSize)) {
      return; // Prevent page index out of range
    }
    setPageIndex(newPageIndex);
  };

  // Calculate total pages
  const totalPages = Math.ceil(totalCount / pageSize);

  // Inline styles
  const containerStyle = {
    padding: '0 120px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh' // Ensure container takes up full height
  };

  const paginationContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px'
  };

  const paginationButtonStyle = {
    backgroundColor: '#007bff', // Primary color
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    margin: '0 5px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease'
  };

  const paginationButtonDisabledStyle = {
    ...paginationButtonStyle,
    backgroundColor: '#cccccc', // Disabled button color
    cursor: 'not-allowed'
  };

  const paginationTextStyle = {
    fontSize: '16px',
    margin: '0 10px'
  };

  return (
    <div style={containerStyle}>
      <div>
        {/* Render image slider */}
        <SliderComponent arrImages={[banner1, banner2, banner3, banner4]} />
      </div>

      <div>
        {/* Render sections with books */}
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            <Section
              title="Danh sách sách"
              bgColor="white"
              productItems={books}
            />

            {/* Additional Sections */}
            <div style={{ marginTop: '40px' }}>
              {/* Section 1 */}
              <Section
                title="Featured Books"
                bgColor="#f9f9f9"
                productItems={books.slice(0, 5)} // Example: display the first 5 books as featured
              />

              {/* Section 2 */}
              <Section
                title="New Arrivals"
                bgColor="#e9ecef"
                productItems={books.slice(5, 10)} // Example: display the next 5 books as new arrivals
              />
            </div>
          </>
        )}
      </div>

      {/* Pagination controls */}
      <div style={paginationContainerStyle}>
        <button
          style={pageIndex === 1 ? paginationButtonDisabledStyle : paginationButtonStyle}
          onClick={() => handlePageChange(pageIndex - 1)}
          disabled={pageIndex === 1}
        >
          Previous
        </button>
        <span style={paginationTextStyle}>Page {pageIndex} of {totalPages}</span>
        <button
          style={pageIndex === totalPages ? paginationButtonDisabledStyle : paginationButtonStyle}
          onClick={() => handlePageChange(pageIndex + 1)}
          disabled={pageIndex === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HomePage;
