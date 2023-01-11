import React from "react";
import imgHowWork1 from "../../img/how-work/how-work_1.png";
import imgMaterial1 from "../../img/how-work/material_1.jpg";
import imgMaterial2 from "../../img/how-work/material_2.jpg";
import imgMaterial3 from "../../img/how-work/material_3.jpg";
import imgMaterial4 from "../../img/how-work/material_4.jpg";
import imgMaterial5 from "../../img/how-work/material_5.jpg";
import imgMaterial6 from "../../img/how-work/material_6.jpg";
import imgMaterial7 from "../../img/how-work/material_7.jpg";
export default function HowWork<T extends React.FC>(): React.ReactElement {
  const imgsMaterial = [
    {
      img: imgMaterial1,
      title: "Гипсовая смесь Эконом JetBau/",
    },
    {
      img: imgMaterial2,
      title: "Knauf МП-75/ KREISEL 501",
    },
    {
      img: imgMaterial3,
      title: "Маяк штукатурный 6мм",
    },
    {
      img: imgMaterial4,
      title: "Уголок штукатурный 35х35мм",
    },
    {
      img: imgMaterial5,
      title: "Сетка штукатурная синтетическая",
    },
    {
      img: imgMaterial6,
      title: "Бетонконтакт",
    },
    {
      img: imgMaterial7,
      title: "Грунтовка KNAUF Миттельгрунд",
    },
  ];
  const textItemHowWork = [
    {
      text: [
        "Лучшую штукатурная станция на Вашем объекте",
        "Немецкое качество",
        "Максимально ровные стены и пол",
        "Хорошая адгезия, за счет однородной смеси",
      ],
    },
    {
      text: [
        "Взять материалы без перекупов, напрямую от диллера",
        "Сэкономить до 30% на материале",
        "Получить бесплатную доставку",
        "Получить гарантию на всю продукцию и работу",
        "100% экологические материалы",
      ],
    },
  ];
  return (
    <section className="how-work">
      <div className="container">
        <h2 className="how-work__title title">
          Как мы обеспечим Вам ровные стены и пол быстро и выгодно
        </h2>
        <div className="how-work__inner">
          <div className="how-work__item item-work">
            <h3 className="item-work__title">
              Штукатурная станция PFT RITMO XL позволит получить Вам:
            </h3>
            <ul className="how-work__list">
              {textItemHowWork[0].text.map((elem) => (
                <li key={elem} className="how-work__text">
                  {elem}
                </li>
              ))}
            </ul>
            <div className="how-work__img">
              <img src={imgHowWork1} alt="how work img" />
            </div>
          </div>
          <div className="how-work__item item-work">
            <h3 className="item-work__title">
              У нас - свой склад материалов. Это позволит Вам:
            </h3>
            <ul className="how-work__list">
              {textItemHowWork[1].text.map((elem) => (
                <li key={elem} className="how-work__text">
                  {elem}
                </li>
              ))}
            </ul>
            <div className="how-work__box">
              <div className="how-work__top top-box">
                {imgsMaterial.map(({ img, title }) => (
                  <div key={img} className="top-box">
                    <img src={img} alt="materials img" />
                    {title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
