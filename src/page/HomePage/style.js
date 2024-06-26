import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WapperTypeProduct = styled.div`
display : flex;
align-items : center;
gap: 16px;
justify-content: flex-start;
border-bottom : 1px solid  blue;
height : 40px;
`

export const WapperButtonMore = styled(ButtonComponent)`
&:hover{
    color:#fff;
    background: rbg(13,92,182);
}
`

export const WapperProducts = styled.div`
display: flex;
justify-content:center;
gap:15px;
margin-top:20px;
flex-wrap:wrap;
`