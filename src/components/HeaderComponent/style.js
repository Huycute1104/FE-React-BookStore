import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  position: fixed; /* Fix the header at the top */
  top: 0;
  left: 0;
  width: 100%; /* Ensure it spans the full width of the page */
  padding: 10px 120px;
  background-color: rgb(125, 42, 232);
  align-items: center; /* Corrected from align-center */
  gap: 70px;
  flex-wrap: nowrap;
  z-index: 1000; /* Make sure it stays above other content */
`;

export const WrapperTextHeader = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;

export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  font-size: 12px;
`;

export const WrapperHeaderTextSpan = styled.span`
  font-size: 12px;
  color: #fff;
`;
