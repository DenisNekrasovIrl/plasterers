import React from "react";

export default function Connection<T extends React.FC>(): React.ReactElement {
  return (
    <section className="connection">
      <div className="container">
        <div className="connection__body">
          <h2 className="connection__title title">
            Если вы прораб и у Вас большие объемы
            <span>- сделаем скидку!</span>
          </h2>
          <span className="connection__text brigadier__connection">
            Звоните, договоримся
          </span>
          <a href="tel+79035619111" className="connection__phone">
            +7(903)561-91-11
          </a>
          <div className="connection__box">
            <span className="connection__whatsapp brigadier__connection">
              Или пишите на WhatsApp
            </span>
            <a href="/" className="connection__link link">
              Написать в Whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
