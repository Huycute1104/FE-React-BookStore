import React, { Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WapperProducts, WrapperNavbar } from './style'

const TypeProductPage = () => {
    const onChange = () => {
        // Pagination change handler
    }

    return (
        <div style={{ padding: '0 120px', background: '#efefef' }}>
            <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
                <WrapperNavbar span={6}>
                    <NavbarComponent />
                </WrapperNavbar>
                <Col span={18}>
                    <WapperProducts>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </WapperProducts>
                    <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{textAlign:'center', marginTop: '20px' }} />
                </Col>
            </Row>
        </div>
    )
}

export default TypeProductPage
