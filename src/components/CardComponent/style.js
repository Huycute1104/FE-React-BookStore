import { Card } from "antd";
import styled from "styled-components";

export const StyleNameProduct = styled.div`
font-weigh:400;
font-size:20px;
line-height:16px;
color: rbg(56,56,67)
`
export const WrapperReportText =styled.div`
font-size:14px;
color: rbg(128,128,137);
display:flex;
align-items:center;
`
export const WrapperPriceText =styled.div`
font-weigh:500;
font-size:16px;
color: red;
`
export const WrapperDiscountText =styled.span`
font-weigh:500;
font-size:12px;
color: red;
`

export const WrapperImage = styled(Card)`
width : 200px;
& img{
    heigh:20opx;
    width:200px;
}
`