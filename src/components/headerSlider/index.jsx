import React from "react";
import Slider from "react-slick";
import "./headerSlider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/img/headerSlider/img1.jpg";
import { Link } from "react-router-dom";

const headerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "header__slider__item__img",
  };

  return (
    <>
      <Slider className="header__slider" {...settings}>
        <div className="header__slider__item">
          <div
            className="header__slider__item__img"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>

          <div className="container">
            <h1>
              Hər növ izolyasiya və tikinti materiallarının topdan və pərakəndə
              satışı
            </h1>
            <div className="learn__more__box">
              <Link to="/" className="learn__more__link link">
                Ətrafli
              </Link>
            </div>
          </div>
        </div>
        <div className="header__slider__item">
          <div
            className="header__slider__item__img"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>

          <div className="container">
            <h1>
              Hər növ izolyasiya və tikinti materiallarının topdan və pərakəndə
              satışı
            </h1>
            <div className="learn__more__box">
              <Link to="/" className="learn__more__link link">
                Ətrafli
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default headerSlider;
