import React from "react";
import { Link } from "react-scroll";
import imgPlaster1 from "../../img/price/shtukaturka_1.jpg";
import imgFloor1 from "../../img/price/pol_1.jpg";
export default function Price<T extends React.FC>(): React.ReactElement {
  return (
    <section className="price" id="price">
      <div className="container">
        <h2 className="price__title title">Стоимость работ</h2>
        <div className="price__body">
          <div className="price__item item-price">
            <div className="item-price__box">
              <img
                src={imgPlaster1}
                alt="shtukaturka img"
                className="item-price__img"
              />
              <div className="item-price__title">
                Механизированная штукатурка
              </div>
            </div>
            <div className="price__list-box">
              <ul className="price__list list-price">
                <li className="price__list-name">Гипсовая без маяков</li>
                <li className="price__list-name">Гипсовая под обои</li>
                <li className="price__list-name">Цементно-песчаная</li>
                <li className="price__list-name">Штукатурка потолка</li>
              </ul>
              <ul className="price__list">
                <li className="price__list-prices">от 290 руб/м²</li>
                <li className="price__list-prices">от 350 руб/м²</li>
                <li className="price__list-prices">от 390 руб/м²</li>
                <li className="price__list-prices">от 800 руб/м²</li>
              </ul>
            </div>
            <Link
              className="price__link link"
              to="calculation"
              smooth={true}
              duration={500}
            >
              Заказать штукатурку стен
            </Link>
          </div>
          <div className="price__item item-price">
            <div className="item-price__box">
              <img src={imgFloor1} alt="pol img" className="item-price__img" />
              <div className="item-price__title">Полусухая стяжка пола</div>
            </div>
            <div className="price__list-box">
              <ul className="price__list list-price">
                <li className="price__list-name">Черновая стяжка пола</li>
                <li className="price__list-name">Базовая</li>
                <li className="price__list-name">Улучшенная</li>
                <li className="price__list-name">Премиум</li>
              </ul>
              <ul className="price__list">
                <li className="price__list-prices">от 350 руб/м²</li>
                <li className="price__list-prices">от 400 руб/м²</li>
                <li className="price__list-prices">от 460 руб/м²</li>
                <li className="price__list-prices">от 520 руб/м²</li>
              </ul>
            </div>
            <Link
              className="price__link link"
              to="calculation"
              smooth={true}
              duration={500}
            >
              Заказать стяжку пола
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
