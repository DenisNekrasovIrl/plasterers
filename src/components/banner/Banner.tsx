import React, { useState } from "react";
import Order from "../../modals/order/Order";
import Thanks from "../../modals/thanks/Thanks";
import bannerImg from "../../img/banner/banner-img.png";
const Banner: React.FC = function () {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalThanks, setShowModalThanks] = useState<boolean>(false);
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__body">
          <div className="banner__content">
            <h1 className="banner__title">
              Получите идеальные стены и пол максимально{" "}
              <span>ВЫГОДНО, БЫСТРО и по ЛУЧШЕЙ цене</span> <br />в Москве и
              московской области
            </h1>
            <div className="banner__price">от 350 руб за м²</div>
            <div className="banner__warranty">Даем пожизненную гарантию</div>
            <div className="banner__text">
              Закажите замер специалиста и забронируйте ​10% скидки на каждый м²
              штукатурки до 31 августа
            </div>
            <div className="banner__box">
              <button
                onClick={() => setShowModal(true)}
                className="banner__link link"
              >
                Заказать бесплатный замер
              </button>
              <span className="banner__span">Мин. заказ от 100 м²</span>
            </div>
            <div className="banner__object object">
              <div className="object__title">1200+</div>
              <div className="object__text">обектов оштукатурили с 2017 г</div>
            </div>
          </div>
          <img src={bannerImg} alt="banner img" className="banner__img" />
        </div>
      </div>
      {showModal && (
        <Order
          setShowModal={setShowModal}
          idComponent="popup__measurer"
          title="Заказать выезд замерщика"
          setShowModalThanks={setShowModalThanks}
        />
      )}
      {showModalThanks && (
        <Thanks isReset={false} setShowModal={setShowModalThanks} />
      )}
    </section>
  );
};

export default Banner;
