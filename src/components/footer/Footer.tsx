import React from "react";
import logo from "../../img/logo.png";

export default function Footer<T extends React.FC>(): React.ReactElement {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="header__box footer-box">
            <a className="header__logo footer-logo" href="/">
              <img src={logo} alt="logo icon" />
              <span>
                SHTUKATUR <br /> MSK.RU
              </span>
            </a>
            <div className="header__info footer-info">
              Штукатурка стен и стяжка <br /> пола в Москве и области
            </div>
          </div>
          <div className="footer__contacts">
            <div className="footer__adress _icon-location">
              п. Московский, БЦ Румянцево, Блок Г, 3 этаж, Офис 375 Г.
            </div>
            <div className="footer__contacts-box">
              <a
                href="tel:+79035619111"
                className="footer__contacts-phone _icon-phone"
              >
                +7(903)561-91-11
              </a>
              <a
                href="mailto:info@shtukaturmsk.ru"
                className="footer__contacts-email _icon-email"
              >
                info@shtukaturmsk.ru
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__line"></div>
      <div className="container">
        <div className="footer__bottom">
          <div className="footer__copyright">
            Copyright © 2022 shtukaturmsk.Все права защищены.
          </div>
          <div className="footer__bottom-box">
            <a href="/politics" className="footer__bottom-privacy">
              Политика конфиденциальности
            </a>
            <a href="/agreement" className="footer__bottom-agreement">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
