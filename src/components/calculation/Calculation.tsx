import React, { useState } from "react";
import imgPlasterLayer from "../../img/calculation/plasterlayer.jpg";
import imgAreaOfTheRoom from "../../img/calculation/areaoftheroom.jpg";
import imgWhereToSend from "../../img/calculation/wheretosend.jpg";
import imgDelivery from "../../img/calculation/delivery.jpg";
import { TItemsCalculation } from "./types";
import { itemsCalculation, resetItemsCalculation } from "./mokeStore";
import Order from "../../modals/order/Order";
import Thanks from "../../modals/thanks/Thanks";
export default function Calculation<T extends React.FC>(): React.ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalThanks, setShowModalThanks] = useState<boolean>(false);
  const [itemsCalc, setItemsCalc] =
    useState<TItemsCalculation>(itemsCalculation);
  const nextTabs: () => void = function () {
    const index = itemsCalc.findIndex((elem) => elem.activeTab === true);
    if (index + 1 === itemsCalc.length) return;
    const updateItemsCalc = itemsCalc.map((elem, i) => {
      if (elem.activeTab === true) {
        return { ...elem, activeTab: false, activeContent: false };
      }
      if (i === index + 1) {
        return { ...elem, activeTab: true, activeContent: true };
      }
      return elem;
    });
    setItemsCalc([...updateItemsCalc]);
  };
  const prevTabs: () => void = function () {
    const index = itemsCalc.findIndex((elem) => elem.activeTab === true);
    if (index - 1 === -1) return;
    const updateItemsCalc = itemsCalc.map((elem, i) => {
      if (elem.activeTab === true) {
        return { ...elem, activeTab: false, activeContent: false };
      }
      if (i === index - 1) {
        return { ...elem, activeTab: true, activeContent: true };
      }
      return elem;
    });
    setItemsCalc([...updateItemsCalc]);
  };
  const chooseItem: (iItemsCalc: number, iItems: number) => void = function (
    iItemsCalc,
    iItems
  ) {
    const newItemsCalc = itemsCalc.map((elem, i) => {
      if (i === iItemsCalc && elem.items) {
        const items = elem.items.map((el) => {
          return { ...el, selected: false };
        });
        const accItems = items.map((el, iEl) => {
          if (iEl === iItems) {
            return { ...el, selected: true };
          }
          return { ...el };
        });
        return { ...elem, items: accItems };
      }
      return { ...elem };
    });
    setItemsCalc([...newItemsCalc]);
  };
  const resetItems: () => void = function () {
    setItemsCalc([...resetItemsCalculation]);
  };
  return (
    <section className="calculation" id="calculation">
      <div className="container">
        <h2 className="calculation__title title">
          Расчитайте индивидуальную стоимость работ
        </h2>
        <div className="calculation__text">
          И получите <span>выезд специалиста за 24 часа</span> на Ваш обьект
        </div>
        <div className="tabs">
          <nav className="tabs__items">
            {itemsCalc.map((elem, i) => (
              <button className={`tabs__item ${elem.activeTab && "active"}`}>
                Вопрос {i + 1}
              </button>
            ))}
          </nav>

          <div className="tabs__body">
            {itemsCalc.map(
              (item, iItemsCalc) =>
                item.activeContent &&
                item.wrapperOrInnerOrItems === "items" &&
                item.imgPresent && (
                  <div className="tabs__block block-tabs">
                    <h3 className="block-tabs__title">{item.title}</h3>
                    <div className="block-tabs__items">
                      {item.items?.map((elem, iItems) => (
                        <div
                          onClick={() => chooseItem(iItemsCalc, iItems)}
                          className={`block-tabs__item ${
                            elem.selected && "active"
                          }`}
                        >
                          <div className="block-tabs__img">
                            <img
                              src={elem.img as string}
                              alt="view plaster img"
                            />
                          </div>
                          <div className="block-tabs__subtitle">
                            {elem.title}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="block-tabs__box">
                      {item.title !==
                        "Выберите вид работы,который вас интересует" && (
                        <button
                          onClick={() => prevTabs()}
                          className="block-tabs__prev"
                        >
                          Вернуться назад
                        </button>
                      )}
                      <button
                        onClick={() => nextTabs()}
                        className="block-tabs__next _icon-arrow-right"
                      >
                        далее
                      </button>
                    </div>
                  </div>
                )
            )}
            {itemsCalc.map(
              (item, iItemsCalc) =>
                item.activeContent &&
                item.wrapperOrInnerOrItems === "wrapper" &&
                !item.imgPresent && (
                  <div className="tabs__block block-tabs">
                    <h3 className="block-tabs__title">{item.title}</h3>
                    <div className="block-tabs__width">
                      {item.items?.map((elem, iItems) => (
                        <div
                          onClick={() => chooseItem(iItemsCalc, iItems)}
                          className="block-tabs__wrapper"
                        >
                          <div className="block-tabs__label">
                            <input
                              type="radio"
                              className="block-tabs__input"
                              name="radio"
                              checked={elem.selected}
                            />
                            <span
                              className={`block-tabs__span ${
                                elem.selected && "active"
                              }`}
                            >
                              {elem.title}
                            </span>
                          </div>
                        </div>
                      ))}
                      <div className="block-width__img _ibg">
                        <img src={imgPlasterLayer} alt="plasterlayer img" />
                      </div>
                    </div>
                    <div className="block-tabs__box">
                      <button
                        onClick={() => prevTabs()}
                        className="block-tabs__prev"
                      >
                        Вернуться назад
                      </button>
                      <button
                        onClick={() => nextTabs()}
                        className="block-tabs__next _icon-arrow-right"
                      >
                        далее
                      </button>
                    </div>
                  </div>
                )
            )}
            {itemsCalc.map(
              (item) =>
                item.activeContent &&
                !item.wrapperOrInnerOrItems && (
                  <div className="tabs__block block-tabs">
                    <h3 className="block-tabs__title">{item.title}</h3>
                    <div className="block-tabs__width">
                      <input
                        type="text"
                        className="tabs-block__input"
                        placeholder={
                          item.title === "Укажите площадь помещения (м²)"
                            ? "Площадь"
                            : "Укажите ваш контакт"
                        }
                      />
                      <div className="block-area__img _ibg">
                        <img
                          src={
                            item.title === "Укажите площадь помещения (м²)"
                              ? imgAreaOfTheRoom
                              : imgWhereToSend
                          }
                          alt="areaoftheroom img"
                        />
                      </div>
                    </div>
                    <div className="block-tabs__box">
                      <button
                        onClick={() => prevTabs()}
                        className="block-tabs__prev"
                      >
                        Вернуться назад
                      </button>
                      {item.title ===
                        "Укажите ваши контакты для получения сметы" && (
                        <button
                          onClick={() => setShowModal(true)}
                          className="block-tabs__next _icon-arrow-right"
                        >
                          далее
                        </button>
                      )}
                      {item.title !==
                        "Укажите ваши контакты для получения сметы" && (
                        <button
                          onClick={() => nextTabs()}
                          className="block-tabs__next _icon-arrow-right"
                        >
                          далее
                        </button>
                      )}
                    </div>
                  </div>
                )
            )}
            {itemsCalc.map(
              (item, iItemsCalc) =>
                item.activeContent &&
                item.wrapperOrInnerOrItems === "inner" && (
                  <div className="tabs__block block-tabs">
                    <h3 className="block-tabs__title">{item.title}</h3>
                    <div className="block-tabs__width">
                      <div className="block-tabs__inner">
                        {item.items?.map((elem, iEl) => (
                          <div
                            onClick={() => chooseItem(iItemsCalc, iEl)}
                            className="block-delivery__label"
                          >
                            <input type="radio" className="block-tabs__input" />
                            <span
                              className={`block-tabs__span tabs-block__input ${
                                elem.selected && "active"
                              }`}
                            >
                              {elem.title}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="block-delivery__img _ibg">
                        <img
                          src={
                            item.title ===
                            "Выберите область доставки материалов"
                              ? imgDelivery
                              : imgWhereToSend
                          }
                          alt="delivery img"
                        />
                      </div>
                    </div>
                    <div className="block-tabs__box">
                      <button
                        onClick={() => prevTabs()}
                        className="block-tabs__prev"
                      >
                        Вернуться назад
                      </button>
                      <button
                        onClick={() => nextTabs()}
                        className="block-tabs__next _icon-arrow-right"
                      >
                        далее
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <Order
          setShowModal={setShowModal}
          idComponent="popup__measurer"
          title="Заказать выезд замерщика"
          setShowModalThanks={setShowModalThanks}
        />
      )}
      {showModalThanks && (
        <Thanks
          resetItems={resetItems}
          isReset={true}
          setShowModal={setShowModalThanks}
        />
      )}
    </section>
  );
}
