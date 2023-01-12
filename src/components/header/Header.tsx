import React, { useState } from "react";
import logo from "../../img/logo.png";
import whatsUp from "../../img/icons/whatsapp.svg";
import Menu from "./subcomponents/Menu";
const Header: React.FC = function () {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__box">
            <a className="header__logo" href="/">
              <img src={logo} alt="logo icon" />
              <span>
                SHTUKATUR <br /> MSK.RU
              </span>
            </a>
            <div className="header__info">
              Штукатурка стен и стяжка <br /> пола в Москве и области
            </div>
          </div>
          <div className="header__menu menu">
            <button
              onClick={() => setShowMenu(!showMenu)}
              type="button"
              className={`menu__icon icon-menu ${showMenu && "active"}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav className={`menu__body ${showMenu && "menu__show"}`}>
              <Menu setShowMenu={setShowMenu} />
              <div className="header__phone-box phone-box__menu">
                <div className="header__phone">
                  <a className="header__num _icon-good" href="tel:+79057316262">
                    +7(905)731-62-62
                  </a>
                  <span>Ежедневно с 10:00 до 20:00</span>
                </div>
                <a href="/" className="header__whatsapp">
                  <img src={whatsUp} alt="whatsapp icon" />
                </a>
              </div>
            </nav>
          </div>
          <div className="header__phone-box">
            <div className="header__phone">
              <a className="header__num _icon-good" href="tel:+79057316262">
                +7(905)731-62-62
              </a>
              <span>Ежедневно с 10:00 до 20:00</span>
            </div>
            <a href="/" className="header__whatsapp">
              <img src={whatsUp} alt="whatsapp icon" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
