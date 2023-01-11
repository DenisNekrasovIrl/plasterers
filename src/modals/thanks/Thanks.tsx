import React from "react";
import iconClose from "../../img/icons/close.svg";
import { IPropsThanks } from "./types";
export default function Thanks<T extends React.ReactElement>(
  props: IPropsThanks
): React.ReactElement {
  const resetItemsCalc = function () {
    if (props.resetItems) {
      props.resetItems();
      props.setShowModal(false);
    }
  };
  return (
    <div className={`popup`}>
      <div className="popup__body">
        <div className="popup__content">
          {!props.isReset && (
            <span
              onClick={() => props.setShowModal(false)}
              className="popup__close"
            >
              <img src={iconClose} alt="close icon" />
            </span>
          )}
          {props.isReset && (
            <span onClick={() => resetItemsCalc()} className="popup__close">
              <img src={iconClose} alt="close icon" />
            </span>
          )}
          <h3 className="popup__title thanks-title">Спасибо!</h3>
          <p className="popup__text">В ближайшее время мы с вами свяжемся!</p>
          {!props.isReset && (
            <button
              onClick={() => props.setShowModal(false)}
              className="popup__btn link"
            >
              Хорошо
            </button>
          )}
          {props.isReset && (
            <button
              onClick={() => resetItemsCalc()}
              className="popup__btn link"
            >
              Хорошо
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
