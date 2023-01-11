import React from "react";
import Slider from "react-slick";
import { ISlider } from "./types";

const SliderBanner: React.FC = function () {
  const settings: ISlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="banner__slider">
      <div className="container">
        <div className="banner__wrapper swiper-wrapper">
          <Slider {...settings}>
            <div className="banner__slide swiper-slide">
              <div className="banner__item banner-item">
                <div className="banner-item__num">120 м²</div>
                <div className="banner-item__text">
                  в день - скорость работы бригады
                </div>
              </div>
            </div>
            <div className="banner__slide swiper-slide">
              <div className="banner__item banner-item">
                <div className="banner-item__num">100%</div>
                <div className="banner-item__text">
                  чистота и порядок на рабочем месте
                </div>
              </div>
            </div>
            <div className="banner__slide swiper-slide">
              <div className="banner__item banner-item">
                <div className="banner-item__num">24/7</div>
                <div className="banner-item__text">работаем без перырывов</div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderBanner;
