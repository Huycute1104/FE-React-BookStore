import { Badge, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { WrapperHeader, WrapperHeaderAccount, WrapperHeaderTextSpan, WrapperTextHeader } from './style';
import Search from 'antd/es/input/Search';
import {
  UserOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import "./style.css"
function HeaderComponent() {
  const { cartList } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const accessToken = useSelector((state) => state.auth.token);
  console.log(accessToken)
  useEffect(() => {
    // boxchat();
    const userInfo = getTokenInfo();
    if (userInfo) {
      setUserInfo(userInfo)
    }

  }, []);
  const getTokenInfo = () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.log(error);
      }
    }
  }
  // const boxchat = () =>{
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.id = 'hs-script-loader';
  //   script.async = true;
  //   script.defer = true;
  //   script.src = '//js-na1.hs-scripts.com/46526002.js';
  //   document.head.appendChild(script);

  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }
  const handleNavigateLogin = () => {
    navigate('/signin');
  }

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
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px' }} />
            <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
              {accessToken ? (<WrapperHeaderTextSpan>{userInfo.email}</WrapperHeaderTextSpan>) : (<WrapperHeaderTextSpan>Đăng nhập</WrapperHeaderTextSpan>)}
            </div>
          </WrapperHeaderAccount>
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
