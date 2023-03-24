import React, { useEffect, useState } from "react";
import advantages1 from "../../img/advantages/advantages_1.jpg";
import advantages2 from "../../img/advantages/advantages_2.jpg";
import advantages3 from "../../img/advantages/advantages_3.jpg";
import advantages4 from "../../img/advantages/advantages_4.jpg";
import advantages5 from "../../img/advantages/advantages_5.jpg";
import advantages6 from "../../img/advantages/advantages_6.jpg";
export default function Advantages() {
  const imgsAdvatages = [
    advantages1,
    advantages2,
    advantages3,
    advantages4,
    advantages5,
    advantages6,
  ];
  const [country, setCountry] = useState('')
  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.yaContextCb.push(() => {
      // eslint-disable-next-line no-undef
      Ya.adfoxCode.create({
        ownerId: 1457688,
        containerId: 'adfox_167963905326079200',
        params: {
          p1: 'cxpaf',
          p2: 'idcr'
        }
      })
    })
  }, [])
  return (
    <section className="advantages">
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <input value={country} onChange={e => setCountry(e.target.value)} style={{
          width: '100%'
        }} type="text" placeholder="Найти страну" />
        <button onClick={() => setCountry('')} style={{
          color: 'yellow',
          padding: '20px',
          borderRadius: '5px',
          backgroundColor: 'black',
          marginTop: '20px'
        }}>Поиск</button>
        <div id="adfox_167963905326079200"></div>
      </div>
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
