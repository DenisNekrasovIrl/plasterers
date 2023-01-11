import React, { useEffect, useState } from "react";
import ReactBeforeSliderComponent, {
  Image,
} from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import examples1 from "../../img/examples/examples_1.jpg";
import examples2 from "../../img/examples/examples_2.jpg";
import { IStateExamples } from "./types";
export default function Examples<T extends React.FC>(): React.ReactElement {
  const imgsBeforeAndAfter = [
    {
      firstImg: {
        imageUrl: examples1,
      },
      secondImg: {
        imageUrl: examples2,
      },
      id: 1,
    },
    {
      firstImg: {
        imageUrl: examples1,
      },
      secondImg: {
        imageUrl: examples2,
      },
      id: 2,
    },
    {
      firstImg: {
        imageUrl: examples1,
      },
      secondImg: {
        imageUrl: examples2,
      },
      id: 3,
    },
    {
      firstImg: {
        imageUrl: examples1,
      },
      secondImg: {
        imageUrl: examples2,
      },
      id: 4,
    },
    {
      firstImg: {
        imageUrl: examples1,
      },
      secondImg: {
        imageUrl: examples2,
      },
      id: 5,
    },
  ];
  const [slider, setSlider] = useState<IStateExamples>({
    imgsBeforeAndAfter,
    active: 1,
  });
  const changeSlidePrev = () => {
    if (slider.active - 1 !== 0) {
      setSlider({ ...slider, active: slider.active - 1 });
    }
  };
  const changeSlideNext = () => {
    if (slider.active + 1 !== slider.imgsBeforeAndAfter.length + 1) {
      setSlider({ ...slider, active: slider.active + 1 });
    }
  };
  useEffect(() => {
    const elem = document.querySelector(
      ".examples__wrapper-item"
    ) as unknown as HTMLElement;
    const timer = setTimeout(
      () => elem.classList.toggle("examples__wrapper-item--active"),
      0
    );
    return function () {
      clearTimeout(timer);
      setTimeout(
        () => elem.classList.toggle("examples__wrapper-item--active"),
        550
      );
    };
  }, [slider.active]);
  return (
    <section className="examples" id="examples">
      <div className="container">
        <h2 className="examples__title title">Примеры работ</h2>
        <div className="examples__body">
          <div className="examples__slider swiper">
            <div className="examples__wrapper swiper-wrapper">
              {
                <div
                  id={
                    slider.imgsBeforeAndAfter.find(
                      (elem) => elem.id === slider.active
                    )?.id as unknown as string
                  }
                  className={`examples__wrapper-item`}
                >
                  <ReactBeforeSliderComponent
                    firstImage={
                      slider.imgsBeforeAndAfter.find(
                        (elem) => elem.id === slider.active
                      )?.firstImg as unknown as Image
                    }
                    secondImage={
                      slider.imgsBeforeAndAfter.find(
                        (elem) => elem.id === slider.active
                      )?.secondImg as unknown as Image
                    }
                    withResizeFeel={false}
                  />
                </div>
              }
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <button
            onClick={changeSlidePrev}
            type="button"
            className="swiper-button-prevv _icon-arrow-prev"
          ></button>
          <button
            onClick={changeSlideNext}
            type="button"
            className="swiper-button-nextt _icon-arrow-next"
          ></button>
        </div>
      </div>
    </section>
  );
}
