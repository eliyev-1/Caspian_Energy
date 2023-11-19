import React from 'react'
import Slider from "react-slick";
import "./certificatSlider.css"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/img/certificate/img1.jpg"

const CertificateSlider = () => {
    const settings = {
      dots: false,
      
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
     
    };
  
    return (
      <>
        <Slider className="certificate__slider" {...settings}>
          <div className='certificate__slider__item'>
            <img src={img1} alt="" />
          </div>
          <div className='certificate__slider__item'>
            <img src={img1} alt="" />
          </div>
          <div className='certificate__slider__item'>
            <img src={img1} alt="" />
          </div>
          <div className='certificate__slider__item'>
            <img src={img1} alt="" />
          </div>
          
        </Slider>
      </>
    );
  };
  
  export default CertificateSlider;
  