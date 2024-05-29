import React from 'react'
import TypeBookComponent from '../../components/TypeBookComponent/TypeBookComponent'
import Item from 'antd/es/list/Item'
import { WapperTypeProduct } from './style'

const HomePage = () => {
  const arr = ['Thiếu nhi', 'Hài', 'Kinh dị', 'Sách giáo khoa', "Tình yêu"]
  return (
    <div style={{ padding: '0 120px' }}>
      <WapperTypeProduct>
      {arr.map((item) => {
        return <TypeBookComponent name = {item} key={item}/>
      })}
      </WapperTypeProduct>
    </div>
  )
}

export default HomePage
