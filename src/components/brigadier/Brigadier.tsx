import React from "react";
import imgBrigadier from "../../img/brigadier/brigadier.png";
export default function Brigadier<T extends React.FC>(): React.ReactElement {
  return (
    <section className="brigadier">
      <div className="container">
        <div className="brigadier__body">
          <div className="brigadier__item">
            <div className="brigadier__title">
              За Вами будет закреплен профессиональный бригадир, с возможностью
              быстро решать все возникающие вопросы 24/7
            </div>
            <div className="brigadier__text">
              Ежедневный отчет о проделанной работе
            </div>
            <span className="brigadier__connection">Связаться напрямую:</span>
            <a className="brigadier__phone" href="tel+79035619111">
              +7(903)561-91-11
            </a>
            <a href="/" className="brigadier__link link">
              Написать в Whatsapp
            </a>
          </div>
          <div className="brigadier__img _ibg">
            <img src={imgBrigadier} alt="brigadier img" />
          </div>
        </div>
      </div>
    </section>
  );
}
