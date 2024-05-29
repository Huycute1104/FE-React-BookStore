import React from 'react'
import Slider from 'react-slick';

const SliderComponent = ({arrImages}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
  return (
    <div>
      <Slider {...settings}>
        {arrImages.map((image)=>{
            return(
                <img src={image} alt='IMAGE' preview ={false} width="100%"/>
            )
        })}
      </Slider>
    </div>
  )
}

export default SliderComponent
