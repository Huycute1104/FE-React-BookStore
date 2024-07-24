import React, { useEffect, useState } from 'react';
import instance from '../../api/axiosCustomize';
import TypeBookComponent from '../../components/TypeBookComponent/TypeBookComponent';
import { WapperButtonMore, WapperProducts, WapperTypeProduct } from './style';
import useWindowScrollToTop from "../../hook/useWindowScrollToTop";
import Section from "../../components/Section/Section";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await instance.get('books', { 
          params: {
            pageIndex: null,
            pageSize: null,
            bookName: null,
            minPrice: null,
            maxPrice: null,
            categoryId: null,
          },
        });

        const allBooks = response.data.data || [];
        setBooks(allBooks);
        setLoading(false);
      } catch (error) {
        setError('Unable to fetch books at this time. Please try again later.');
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  useWindowScrollToTop();

  const categories = ['Thiếu nhi', 'Hài', 'Kinh dị', 'Sách giáo khoa', "Tình yêu"];

  const discountBooks = books.filter(book => book.discount > 0);
  const newArrivalBooks = books.filter(book => book.isNewArrival);
  const bestSalesBooks = books.filter(book => book.isBestSeller);

  return (
    <div style={{ padding: '0 120px' }}>
      <div>
        <WapperTypeProduct>
          {categories.map((item) => {
            return <TypeBookComponent name={item} key={item} />
          })}
        </WapperTypeProduct>
      </div>

      <div>
        <Section
          title="Giảm giá lớn"
          bgColor="#f6f9fc"
          productItems={discountBooks}
        />
        {/* <Section
          title="Sản phẩm mới"
          bgColor="white"
          productItems={newArrivalBooks}
        /> */}
        {/* <Section title="Sản phẩm bán tốt nhất" bgColor="#f6f9fc" productItems={bestSalesBooks} /> */}

        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <Section title="Danh sách sách" bgColor="white" productItems={books} />
        )}
        
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px', flexWrap: 'wrap' }}>
          <WapperButtonMore textButton="Xem thêm" type="outline"
            styleButton={{
              border: '1px solid rgb()'
            }} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
