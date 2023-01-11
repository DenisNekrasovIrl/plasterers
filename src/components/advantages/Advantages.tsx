import React from "react";
import advantages1 from "../../img/advantages/advantages_1.jpg";
import advantages2 from "../../img/advantages/advantages_2.jpg";
import advantages3 from "../../img/advantages/advantages_3.jpg";
import advantages4 from "../../img/advantages/advantages_4.jpg";
import advantages5 from "../../img/advantages/advantages_5.jpg";
import advantages6 from "../../img/advantages/advantages_6.jpg";
export default function Advantages<T extends React.FC>(): React.ReactElement {
  const imgsAdvatages = [
    advantages1,
    advantages2,
    advantages3,
    advantages4,
    advantages5,
    advantages6,
  ];
  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__items">
          {imgsAdvatages.map((elem) => (
            <div key={elem} className="advantages__item">
              <div className="advantages__img _ibg">
                <img src={elem} alt="advantages img" />
              </div>
              <div className="advantages__title">
                Ровные стены и пол без трещин и усадки
              </div>
              <div className="advantages__text">
                Благодаря современной технике и мастерам с отпытом от 5 лет Вы
                останетесь довольны качеством
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
