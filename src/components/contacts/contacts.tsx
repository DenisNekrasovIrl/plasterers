import React from "react";

export default function Contacts<T extends React.FC>(): React.ReactElement {
  return (
    <section className="contacts">
      <h2 className="contacts__title title">Ждем Вас в нашем офисе</h2>
      <div className="map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36034.97764128578!2d37.40961484025651!3d55.63357651202593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b552884b46badf%3A0xe5487f3bb447f2ad!2z0JHQpiDQoNGD0LzRj9C90YbQtdCy0L4!5e0!3m2!1sru!2sru!4v1671802060089!5m2!1sru!2sru"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contacts__item">
        <div className="contacts__adress _icon-location">
          <span className="">Адрес:</span>
          <p>п. Московский, БЦ Румянцево, Блок Г, 3 этаж, Офис 375 Г.</p>
        </div>
        <div className="contacts__operating _icon-time">
          <span>Режим работы:</span>
          <p>9:00-20:00 без выходных</p>
        </div>
        <div className="contacts__phone _icon-phone">
          <span>Телефон:</span> <a href="tel:+79035619111">+7(903)561-91-11</a>
        </div>
        <div className="contacts__email _icon-email">
          <span>Email:</span>{" "}
          <a href="mailto:info@shtukaturmsk.ru">info@shtukaturmsk.ru</a>
        </div>
      </div>
    </section>
  );
}
