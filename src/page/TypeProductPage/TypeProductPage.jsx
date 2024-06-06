import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Row } from 'antd'
import { WapperProducts, WrapperNavbar } from './style'

const TypeProductPage = () => {
    return (
        <Row style={{padding:'0 120px',background:'#efefef',flexWrap:'nowrap',paddingTop:'10px'}}>
            <WrapperNavbar span={6}>
                <NavbarComponent />
            </WrapperNavbar>
            <WapperProducts span={18}>
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />

            </WapperProducts>

        </Row>
    )
}

export default TypeProductPage
