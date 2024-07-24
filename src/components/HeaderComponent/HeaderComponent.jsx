import { Badge, Col, Dropdown, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { WrapperHeader, WrapperHeaderAccount, WrapperHeaderTextSpan, WrapperTextHeader } from './style';
import Search from 'antd/es/input/Search';
import {
  UserOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; 
import { Link } from "react-router-dom";
import "./style.css"

function HeaderComponent() {
  const { cartList } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const userInfo = getTokenInfo();
    if (userInfo) {
      setUserInfo(userInfo);
    }
  }, []);

  const getTokenInfo = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleNavigateLogin = () => {
    navigate('/signin');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    
    setUserInfo(null);
    navigate('/signin');
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';
    script.async = true;
    script.defer = true;
    script.src = '//js-na1.hs-scripts.com/46871717.js';
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/my-orders">My Orders</Link>
      </Menu.Item>
      <Menu.Item key="2" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <Link to="/" className="link-no-underline">
            <WrapperTextHeader>BookStore</WrapperTextHeader>
          </Link>
        </Col>
        <Col span={12}>
          <Search placeholder="Tìm kiếm " />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Dropdown overlay={menu} trigger={['click']}>
            <WrapperHeaderAccount>
              <UserOutlined style={{ fontSize: '30px', cursor: 'pointer' }} />
              <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                {userInfo ? (<WrapperHeaderTextSpan>{userInfo.email}</WrapperHeaderTextSpan>) : (<WrapperHeaderTextSpan>Đăng nhập</WrapperHeaderTextSpan>)}
              </div>
            </WrapperHeaderAccount>
          </Dropdown>
          <div>
            <Link to="/cart">
              <Badge count={cartList.length} size='small'>
                <ShoppingCartOutlined style={{ fontSize: '30px', color: "#fff" }} />
              </Badge>
            </Link>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
}

export default HeaderComponent;