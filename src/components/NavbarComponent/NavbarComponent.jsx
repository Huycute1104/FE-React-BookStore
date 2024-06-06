import React from 'react'
import { WapperContent, WapperLableText, WapperText, WrapperTextPrice } from './style'
import { type } from '@testing-library/user-event/dist/type'
import { Checkbox, Rate } from 'antd'

const NavbarComponent = () => {
    const onChange = () => {

    }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WapperText>{option}</WapperText>
                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group
                        style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox style={{ marginLeft: 0 }} value={option.value}>{option.label}</Checkbox>
                            )
                        })
                        }
                        <Checkbox value="B">B</Checkbox>
                    </Checkbox.Group>
                )
            case 'star':
                return (
                    options.map((option) => {
                        return (
                            <div style={{display:'flex',gap:'4px'}}>
                            <Rate style={{fontSize:'12px'}} disabled defaultValue={option}/>
                            {/* <span>'{option}'</span> */}
                            </div>
                        )
                    })

                )
                case 'price':
                return (
                    options.map((option) => {
                        return (
                            <WrapperTextPrice>{option}</WrapperTextPrice>
                        )
                    })

                )
            default:
                return {}
        }
    }
    return (
        <div style={{backgroundColor:'#fff'}}> 
            <WapperLableText>Label</WapperLableText>
            <WapperContent>
                {renderContent('text', ['Thiếu nhi', 'Hài', 'Kinh dị', 'Sách giáo khoa', "Tình yêu"])}
            </WapperContent>
            <WapperContent>
                {renderContent('checkbox', [
                    { value: 'a', label: 'A' },
                    { value: 'b', label: 'B' }
                ])}
            </WapperContent>
            <WapperContent>
                {renderContent('star', [3, 4, 5])}
            </WapperContent>
            <WapperContent>
                {renderContent('price', ['Dưới 100k','Trên 100k'])}
            </WapperContent>
        </div>
    )
}

export default NavbarComponent
