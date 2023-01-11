import React from "react";
import { IPropsOrder } from "./types";
import iconClose from "../../img/icons/close.svg";
export default function Order<T extends React.FC>(
  props: IPropsOrder
): React.ReactElement {
  const changeModal: () => void = function () {
    if (props.setShowModal && props.setShowModalThanks) {
      props.setShowModalThanks(true);
      props.setShowModal(false);
    }
  };
  return (
    <div className="popup" id={props.idComponent}>
      <div className="popup__body">
        <div className="popup__content">
          <span
            onClick={() => props.setShowModal && props.setShowModal(false)}
            className="popup__close"
          >
            <img src={iconClose} alt="close icon" />
          </span>
          <h3 className="popup__title">{props.title}</h3>
          <p className="popup__text">
            Оставьте заявку на звонок и мы вам перезвоним
          </p>
          <input
            className="ensure__input popup__input"
            type="text"
            placeholder="+7 (___) ___-__-__"
          />
          <button onClick={changeModal} className="popup__btn link">
            отправить
          </button>
          <div className="ensure__personal popup__personal">
            Нажимая кнопку «отправить заявку», вы даете согласие на обработку
            персональных данных
          </div>
        </div>
      </div>
    </div>
  );
}
