import { Col, Row, Image, Button } from 'antd'
import React, { useState } from 'react'
import imageProduct from '../../assets/images/t0.jpeg'
import imageProductSmall from '../../assets/images/t1.webp'
import imageProductSmall1 from '../../assets/images/t2.jpeg'
import imageProductSmall2 from '../../assets/images/t3.jpeg'
import imageProductSmall3 from '../../assets/images/t4.webp'
import imageProductSmall4 from '../../assets/images/t5.jpeg'
import imageProductSmall5 from '../../assets/images/t6.jpeg'
import { WrapperPriceProduct, WrapperQuantityProduct, WrapperStyleColImange, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleText, WrapperStyleTextProduct } from './style'
import { StarFilled } from '@ant-design/icons';
import { WrapperPriceText } from '../CardComponent/style'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import BuyButtonComponent from '../ButtonComponent/BuyButtonComponent '


const ProductDetailComponent = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Row style={{ padding: '16px', backgroundColor: '#fff' }}>
      <Col span={10}>
        <Image src={imageProduct} alt="image" preview="false" />
        <Row style={{ padding: '10px', justifyContent: 'space-between' }}>
          <WrapperStyleColImange span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt="image" preview="false" />
          </WrapperStyleColImange>
          <WrapperStyleColImange span={4}>
            <WrapperStyleImageSmall src={imageProductSmall1} alt="image" preview="false" />
          </WrapperStyleColImange>
          <WrapperStyleColImange span={4}>
            <WrapperStyleImageSmall src={imageProductSmall2} alt="image" preview="false" />
          </WrapperStyleColImange>
          <WrapperStyleColImange span={4}>
            <WrapperStyleImageSmall src={imageProductSmall3} alt="image" preview="false" />
          </WrapperStyleColImange>
          <WrapperStyleColImange span={4}>
            <WrapperStyleImageSmall src={imageProductSmall4} alt="image" preview="false" />
          </WrapperStyleColImange>
          <WrapperStyleColImange span={4}>
            <WrapperStyleImageSmall src={imageProductSmall5} alt="image" preview="false" />
          </WrapperStyleColImange>


        </Row>
      </Col>
      <Col span={14} style={{ padding: '0 50px' }}>
        <WrapperStyleNameProduct>Sách - Thám tử lừng danh Conan</WrapperStyleNameProduct>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <StarFilled style={{ fontSize: '16px', color: 'yellow' }} />
          <StarFilled style={{ fontSize: '16px', color: 'yellow' }} />
          <StarFilled style={{ fontSize: '16px', color: 'yellow' }} />
          <WrapperStyleText> | Đã bán 100 +</WrapperStyleText>
        </div>
        <WrapperPriceProduct>
          <WrapperStyleTextProduct>200,000 VND</WrapperStyleTextProduct>
        </WrapperPriceProduct>
        <WrapperQuantityProduct>
          <h6 style={{ margin: '10px 0' }}>Số Lượng</h6>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button onClick={decrementQuantity}>-</Button>
            <div style={{ margin: '0 10px' }}>{quantity}</div>
            <Button onClick={incrementQuantity}>+</Button>
          </div>
        </WrapperQuantityProduct>
        <BuyButtonComponent>Mua Ngay</BuyButtonComponent>
      </Col>
    </Row>
  )
}

export default ProductDetailComponent
