import React, { useState } from "react";
import Order from "../../modals/order/Order";
import Thanks from "../../modals/thanks/Thanks";

export default function Stages<T extends React.FC>(): React.ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalThanks, setShowModalThanks] = useState<boolean>(false);
  const stagesOptions: Array<{
    title: string;
    text: string;
    index: number;
  }> = [
    {
      title: "Оставьте заявку на бесплатный замер",
      text: `По телефону:+7 (905) 731-62-62 или через форму обратной связи на
      нашем сайте`,
      index: 1,
    },
    {
      title: "Наш специалист производит замер",
      text: `Мы с Вами свяжемся, обсудим все вопросы и согласуем удобное для
      Вас время приезда замерщика`,
      index: 2,
    },
    {
      title: "Расчитываем бюджет и заключаем договор",
      text: `Материалы будут включены в стоимость, а доставку и уборку мы
      осущетвляем за свой счет`,
      index: 3,
    },
    {
      title: "Выполняем работу - Вы проверяете",
      text: `Вы ни чем не рискуете и делаете оплату только после полной приемки
      работы, по карте, безналу или наличными`,
      index: 4,
    },
    {
      title: "Вы получаете гарантии 5 лет",
      text: `Мы работаем до договору с физическими и юридическими лицами`,
      index: 5,
    },
  ];
  return (
    <section className="stages">
      <div className="container">
        <h2 className="stages__title title">Этапы работ</h2>
        <div className="stages__body">
          {stagesOptions.map((elem) => (
            <div key={elem.index} className="stages__item item-stages">
              <span className="item-stages__num">{elem.index}</span>
              <div className="item-stages__title">{elem.title}</div>
              <div className="item-stages__text">{elem.text}</div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="stages__link link"
        >
          Заказать звонок
        </button>
      </div>
      {showModal && (
        <Order
          setShowModal={setShowModal}
          idComponent="popup__phone"
          title="Заказать звонок"
          setShowModalThanks={setShowModalThanks}
        />
      )}
      {showModalThanks && (
        <Thanks isReset={false} setShowModal={setShowModalThanks} />
      )}
    </section>
  );
}
