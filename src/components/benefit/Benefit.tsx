import React from "react";
import benefit1 from "../../img/benefit/benefit_1.png";
import benefit2 from "../../img/benefit/benefit_2.png";
export default function Benefit<T extends React.FC>(): React.ReactElement {
  return (
    <section className="benefit">
      <div className="container">
        <h2 className="benefit__title title">Почему это выгодно Вам?</h2>
        <div className="benefit__body">
          <div className="benefit__item benefit-item">
            <div className="benefit-item__box">
              <div className="benefit-item__img _ibg">
                <img src={benefit1} alt="benefit img" />
              </div>
              <div className="benefit-item__title">
                Преимущества механизированной штукатурки стен
              </div>
            </div>
            <ul className="benefit__list benefit-list">
              <li className="benefit-list__item list-item">
                Идеально ровные стены - в <span>5 раз быстрее</span> обычного
                способа
              </li>
              <li className="benefit-list__item list-item">
                <span>Экономия до 40%</span> с Вашего бюджета благодаря
                применению машинной технологии
              </li>
              <li className="benefit-list__item list-item">
                Если вы делаете штукатурку под обои у нас,{" "}
                <span>шпаклевка вам не понадобится!</span>
              </li>
              <li className="benefit-list__item list-item">
                Готовый <span>результат за 1-4 дня</span> блягодаря специальному
                оборуованию
              </li>
            </ul>
          </div>
          <div className="benefit__item benefit-item">
            <div className="benefit-item__box">
              <div className="benefit-item__img _ibg">
                <img src={benefit2} alt="benefit img" />
              </div>
              <div className="benefit-item__title">
                Преимущества сухой стяжки пола
              </div>
            </div>
            <ul className="benefit__list benefit-list">
              <li className="benefit-list__item list-item">
                Самый быстрый спосок получения{" "}
                <span>идеально ровного пола</span> у Вас в помещении или дома
              </li>
              <li className="benefit-list__item list-item">
                Полная <span>сохранность от возможных протечек</span> потолка
                Ваших соседей
              </li>
              <li className="benefit-list__item list-item">
                <span>Высокая ударопрочность</span> и отличная устойчивость к
                механическим нагрузкам
              </li>
              <li className="benefit-list__item list-item">
                Вы сможете ходить по ровному полу уже <span>через 8 часов</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
