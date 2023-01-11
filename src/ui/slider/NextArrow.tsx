import React from "react";

export default function NextArrow<T extends React.FC>(
  props: any
): React.ReactElement {
  return (
    <button
      {...props}
      type="button"
      className="swiper-button-next _icon-arrow-next"
    ></button>
  );
}
