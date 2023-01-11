import React, { useState } from "react";
import { Select, MenuItem, FormControl } from "@mui/material";
import Thanks from "../../modals/thanks/Thanks";
export default function Ensure<T extends React.FC>(): React.ReactElement {
  const [select, setSelect] = useState(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <section className="ensure">
      <div className="container">
        <div className="ensure__body">
          <h2 className="ensure__title title">
            Убедитесь лично в нашей экспертности
          </h2>
          <div className="ensure__box">
            <span>Позвоните напрямую:</span>{" "}
            <a href="tel:+79035619111">+7(903)561-91-11</a>
            <a href="/" className="ensure__link">
              Написать в Whatsapp
            </a>
          </div>
          <div className="ensure__text">
            Или оставьте заявку на звонок и мы вам перезвоним
          </div>
          <div className="ensure__form">
            <FormControl>
              <Select
                value={select}
                onChange={(e) => setSelect(Number(e.target.value))}
                className="ensure__select select"
              >
                <MenuItem selected disabled value={1}>
                  Вид работы, который интересует
                </MenuItem>
                <MenuItem value={2}>Гипсовая штукатурка</MenuItem>
                <MenuItem value={3}>Песчано-цементная штукатурка</MenuItem>
                <MenuItem value={4}>Стяжка пола</MenuItem>
                <MenuItem value={5}>Шпаклевка</MenuItem>
                <MenuItem value={6}>Перегородки</MenuItem>
              </Select>
            </FormControl>
            <input
              type="tel"
              className="ensure__input"
              placeholder="+7 (___) ___-__-__"
            />
            <button
              onClick={() => setShowModal(true)}
              className="ensure__form-link link"
            >
              перезвоните мне
            </button>
          </div>
          <div className="ensure__personal">
            Нажимая кнопку «отправить заявку», вы даете согласие на{" "}
            <a href="/processing-data-user">обработку персональных данных</a>
          </div>
        </div>
      </div>
      {showModal && (
        <Thanks
          isReset={false}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </section>
  );
}
