import React from 'react'
import TypeBookComponent from '../../components/TypeBookComponent/TypeBookComponent'
import { WapperButtonMore, WapperProducts, WapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent';

import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import banner4 from '../../assets/images/banner4.jpg';
import useWindowScrollToTop from "../../hook/useWindowScrollToTop";
import { products, discoutProducts } from "../../utils/products";
import Section from "../../components/Section/Section";

const HomePage = () => {

  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );
  const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();

  const arr = ['Thiếu nhi', 'Hài', 'Kinh dị', 'Sách giáo khoa', "Tình yêu"]
  return (
    <div style={{ padding: '0 120px' }}>
      <div>
        <WapperTypeProduct>
          {arr.map((item) => {
            return <TypeBookComponent name={item} key={item} />
          })}
        </WapperTypeProduct>
      </div>

      <div >
        <SliderComponent arrImages={[banner1, banner2, banner3, banner4]} />
        <Section
          title="Giảm giá lớn"
          bgColor="#f6f9fc"
          productItems={discoutProducts}
        />
        <Section
          title="Sản phẩm mới"
          bgColor="white"
          productItems={newArrivalData}
        />
        <Section title="Sản phẩm bán tốt nhất" bgColor="#f6f9fc" productItems={bestSales} />

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px', flexWrap: 'wrap' }}>
          <WapperButtonMore textButton="Xem thêm" type="outline"
            styleButton={{
              border: '1px solid rgb()'
            }} />
        </div>
      </div>



      {/* <NavbarComponent /> */}
    </div>
  )
}

export default HomePage
