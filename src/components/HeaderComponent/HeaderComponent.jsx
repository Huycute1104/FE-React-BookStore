import { Col, Flex } from 'antd';
import React from 'react';
import { WrapperHeader, WrapperHeaderAccount, WrapperHeaderTextCart, WrapperHeaderTextSpan, WrapperTextHeader } from './style';
import Search from 'antd/es/input/Search';
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import getFontSizes from 'antd/es/theme/themes/shared/genFontSizes';

function HeaderComponent() {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>BookStore</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <Search placeholder="input search text" enterButton />
        </Col>
        <Col span={6} style={{display:'flex', gap:'20px'}}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px' }} />
            <div>
              <WrapperHeaderTextSpan>Đăng nhập/Đăng kí</WrapperHeaderTextSpan>
              <div>
                <WrapperHeaderTextSpan>Tài khoản</WrapperHeaderTextSpan>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <div>
              <ShoppingCartOutlined style={{fontSize:'30px',color:"#fff"}}/>
              {/* <WrapperHeaderTextSpan>Giỏ hàng</WrapperHeaderTextSpan> */}
            </div>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
}

export default HeaderComponent;
