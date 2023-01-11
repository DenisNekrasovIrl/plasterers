import React from "react";
import imgAddService1 from "../../img/additional-services/additional-services_1.jpg";
import imgAddService2 from "../../img/additional-services/additional-services_2.jpg";
export default function AdditionalBenefit<
  T extends React.FC
>(): React.ReactElement {
  const textAddBenefit = {
    first: [
      "Демонтаж старой проводки",
      "Установка электрощитов",
      "Установка автоматов",
      "Монтаж люстр",
      "Установка розеток, выключателей, заземления",
      "Прокладка силового кабеля",
      "Монтаж теплого пола",
    ],
    second: [
      "Установка ванн и душевых кабин",
      "Установка и замена счетчиков воды",
      "Установка и замена батарей отопления",
      "Монтаж и замена труб и стояков водоснабжения",
      "Установка и подключение бытовой техники к водопроводу",
      "Монтаж отопления в квартирах и коттеджах",
      "Замена радиаторов отопления",
    ],
  };
  return (
    <section className="benefit">
      <div className="container">
        <h2 className="benefit__title title">Дополнительно оказываем услуги</h2>
        <div className="benefit__body">
          <div className="benefit__item benefit-item">
            <div className="benefit-item__box">
              <div className="benefit-item__img _ibg">
                <img src={imgAddService1} alt="services img" />
              </div>
              <div className="benefit-item__title">Электромонтажные работы</div>
            </div>
            <ul className="benefit__list benefit-list">
              {textAddBenefit.first.map((elem) => (
                <li key={elem} className="benefit-list__item list-item">
                  {elem}
                </li>
              ))}
            </ul>
          </div>
          <div className="benefit__item benefit-item">
            <div className="benefit-item__box">
              <div className="benefit-item__img _ibg">
                <img src={imgAddService2} alt="services img" />
              </div>
              <div className="benefit-item__title">Сантехнические работы</div>
            </div>
            <ul className="benefit__list benefit-list">
              {textAddBenefit.second.map((elem) => (
                <li key={elem} className="benefit-list__item list-item">
                  {elem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
