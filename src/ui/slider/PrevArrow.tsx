import React from "react";

export default function PrevArrow<T extends React.FC>(
  props: any
): React.ReactElement {
  return (
    <button
      {...props}
      type="button"
      className="swiper-button-prev _icon-arrow-prev"
    ></button>
  );
}
