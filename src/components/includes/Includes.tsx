import React from "react";
import { Link } from "react-scroll";
import imgTeam from "../../img/includes/team.jpg";
import imgMaterial from "../../img/includes/material.jpg";
import imgDelivery from "../../img/includes/delivery.jpg";
import imgGarbage from "../../img/includes/garbage.jpg";
import imgWarranty from "../../img/includes/warranty.jpg";
export default function Includes<T extends React.FC>(): React.ReactElement {
  const itemSettings = [
    {
      title: "Бригада из 3-8 человек под контролем старшего бригадира",
      text: "Только люди с опытом",
      img: imgTeam,
      link: null,
    },
    {
      title: "Экономия до 30% на материалах",
      text: `Закупаем штукатурку напрямую с завода по оптовым ценам и храним на
      собственном складе`,
      img: imgMaterial,
      link: null,
    },
    {
      title: "Доставка материала до двери",
      text: "Полностью берем на себя доставку и погрузку материала",
      img: imgDelivery,
      link: null,
    },
    {
      title: "Вывоз мусора",
      text: "После нас остается чистое помещение и наша работа",
      img: imgGarbage,
      link: null,
    },
    {
      title: "Гарантия 5 лет",
      text: "Мы исправим все за свой счет",
      img: imgWarranty,
      link: null,
    },
    {
      title: "Расчитайте индивидуальную стоимость работ",
      text: `И получите бесплатный выезд специалиста в ближайшие 24 часа на Ваш
      объект`,
      img: null,
      link: "УЗНАТЬ СТОИМОСТЬ",
    },
  ];
  return (
    <section className="includes">
      <div className="container">
        <h2 className="includes__title title">В стоимость работы включено:</h2>
        <div className="includes__body">
          {itemSettings.map((elem, i) => (
            <div
              className={
                (!itemSettings[i + 1] &&
                  "includes__item item-includes--link") ||
                "includes__item item-includes"
              }
            >
              {elem.img && (
                <img
                  src={elem.img}
                  alt="brigada img"
                  className="includes__img"
                />
              )}
              <div className="item-includes__title">{elem.title}</div>
              <div className="item-includes__text">{elem.text}</div>
              {elem.link && (
                <Link
                  className="item-includes__link"
                  to="calculation"
                  smooth={true}
                  duration={500}
                >
                  {elem.link}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
