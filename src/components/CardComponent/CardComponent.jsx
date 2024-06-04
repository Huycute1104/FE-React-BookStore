import React from 'react'
import { StyleNameProduct, WrapperDiscountText, WrapperImage, WrapperPriceText, WrapperReportText } from './style'
import { StarFilled } from '@ant-design/icons';

const CardComponent = () => {
    return (
        <WrapperImage
            hoverable
            headStyle={{width:'200px'}}
            style={{ width: 240 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <StyleNameProduct>Book</StyleNameProduct>
            <WrapperReportText>
            <span>Số lượng : 100 | </span>
                <span style={{marginLeft:'8px'}}>
                    <span>4.5</span> <StarFilled style={{ fontSize: '10px', color: 'yellow' }} />
                </span>
                
            </WrapperReportText>
            <WrapperPriceText>
                100000
                <WrapperDiscountText>-10%</WrapperDiscountText>

            </WrapperPriceText>
        </WrapperImage>
    )
}

export default CardComponent
