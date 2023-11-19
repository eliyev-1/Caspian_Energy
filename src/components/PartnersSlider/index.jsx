import React from 'react'
import Slider from "react-slick";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/img/partners/img1.png"
import "./partners.css"


const PartnersSlider = () => {
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
          <Slider className="partners__slider" {...settings}>
            <div className='partners__slider__item'>
              <img src={img1} alt="" />
            </div>
            <div className='partners__slider__item'>
              <img src={img1} alt="" />
            </div>
            <div className='partners__slider__item'>
              <img src={img1} alt="" />
            </div>
            <div className='partners__slider__item'>
              <img src={img1} alt="" />
            </div>
         
            
          </Slider>
        </>
      );
}

export default PartnersSlider