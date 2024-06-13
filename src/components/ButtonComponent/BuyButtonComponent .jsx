import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const BuyButton = styled(Button)`
  background-color: #ff4d4f;
  color: white;
  border: none;
  &:hover {
    background-color: #ff7875;
  }
`;

const BuyButtonComponent = ({ children, onClick }) => {
  return (
    <BuyButton onClick={onClick}>{children}</BuyButton>
  );
};

export default BuyButtonComponent;
