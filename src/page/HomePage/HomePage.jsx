import React from 'react'
import TypeBookComponent from '../../components/TypeBookComponent/TypeBookComponent'
import { WapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent';

import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import banner4 from '../../assets/images/banner4.jpg';


const HomePage = () => {
  const arr = ['Thiếu nhi', 'Hài', 'Kinh dị', 'Sách giáo khoa', "Tình yêu"]
  return (
    <div style={{ padding: '0 120px' }}>
      <WapperTypeProduct>
        {arr.map((item) => {
          return <TypeBookComponent name={item} key={item} />
        })}
      </WapperTypeProduct>
      <div>
        <SliderComponent arrImages={[banner1, banner2, banner3, banner4]} />
      </div>
    </div>
  )
}

export default HomePage
