import { ReactNode } from "react";

interface ISlider {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  arrows?: boolean;
  vertical?: boolean;
  verticalSwiping?: boolean;
  swipeToSlide?: boolean;
  touchMove?: boolean;
  nextArrow?: ReactNode;
  prevArrow?: ReactNode;
  responsive?: Array<any>;
}

export type { ISlider };
