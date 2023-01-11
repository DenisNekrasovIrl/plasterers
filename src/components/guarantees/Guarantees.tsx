import React from "react";
import imgGuarantees from "../../img/guarantees/guarantees.jpg";
export default function Guarantees<T extends React.FC>(): React.ReactElement {
  return (
    <section className="guarantees">
      <div className="container">
        <div className="guarantees__body">
          <div className="guarantees__img _ibg">
            <img src={imgGuarantees} alt="guarantees img" />
          </div>
          <div className="guarantees__item">
            <h2 className="guarantees__title title">
              Вы получаете 3-ой, усиленный пакет гарантий
            </h2>
            <div className="guarantees__warranty banner__warranty">
              Даем пожизненную гарантию
            </div>
            <ul className="guarantees__list">
              <li className="list-item">
                Оплата за материал, только после доставки на объект
              </li>
              <li className="list-item">
                Полная оплата за работу только после выполнении и принятия Вами
              </li>
              <li className="list-item">
                Гарантируем что Вам не придется переделывать нашу работу
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
