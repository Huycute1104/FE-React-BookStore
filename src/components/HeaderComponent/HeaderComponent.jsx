import { Badge, Col, Flex } from 'antd';
import React from 'react';
import { WrapperHeader, WrapperHeaderAccount, WrapperHeaderTextSpan, WrapperTextHeader } from './style';
import Search from 'antd/es/input/Search';
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';


function HeaderComponent() {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>BookStore</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <Search placeholder="Tìm kiếm " enterButton />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
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
            <Badge count={4} size='small'>
              <ShoppingCartOutlined style={{ fontSize: '30px', color: "#fff" }} />
            </Badge>
            {/* <WrapperHeaderTextSpan>Giỏ hàng</WrapperHeaderTextSpan> */}
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
}

export default HeaderComponent;
