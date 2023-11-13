import React from 'react'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../../assets/img/headerSlider/img1.jpg"

const headerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
  return (
    <>
    <Slider  className="header__slider" {...settings}>
    <div>
        <img src={img1} alt="" />
        
      </div>
      <div>
        <img src={img1} alt="" />
        
      </div>
      <div>
        <img src={img1} alt="" />
        
      </div>
     
     

    </Slider>
    
    </>
  )
}

export default headerSlider