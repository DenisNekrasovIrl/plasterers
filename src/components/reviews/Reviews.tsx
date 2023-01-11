import React from "react";
import Slider from "react-slick";
import { ISlider } from "../banner/slider/types";
import imgReviews1 from "../../img/reviews/reviews_1.jpg";
import imgReviews2 from "../../img/reviews/reviews_2.jpg";
import imgReviews3 from "../../img/reviews/reviews_3.jpg";
import iconPlay from "../../img/icons/play.svg";
import NextArrow from "../../ui/slider/NextArrow";
import PrevArrow from "../../ui/slider/PrevArrow";
export default function Reviews<T extends React.FC>(): React.ReactElement {
  const itemsSlider = [
    {
      link: false,
      img: imgReviews1,
      id: 1,
    },
    {
      link: true,
      img: imgReviews1,
      id: 2,
    },
    {
      link: false,
      img: imgReviews2,
      id: 3,
    },
    {
      link: false,
      img: imgReviews3,
      id: 4,
    },
    {
      link: false,
      img: imgReviews2,
      id: 5,
    },
    {
      link: false,
      img: imgReviews3,
      id: 6,
    },
  ];
  const settingsSlider: ISlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 680,
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
    <section className="reviews" id="reviews">
      <div className="container">
        <h2 className="reviews__title title">Отзывы о нашей работе</h2>
        <div className="reviews__body">
          <div className="reviews__slider swiper">
            <div className="reviews__wrapper swiper-wrapper">
              <Slider {...settingsSlider}>
                {itemsSlider.map((elem) => (
                  <div key={elem.id} className="reviews__slide swiper-slide">
                    {elem.link && (
                      <div className="reviews__video">
                        <a
                          href="https://www.youtube.com/embed/uw-gecBFMdw"
                          className="reviews__link"
                          data-fancybox
                        >
                          <img src={iconPlay} alt="play icon" />
                        </a>
                      </div>
                    )}
                    {!elem.link && (
                      <div className="reviews__img">
                        <img src={elem.img} alt="reviews img" />
                      </div>
                    )}
                  </div>
                ))}
              </Slider>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
