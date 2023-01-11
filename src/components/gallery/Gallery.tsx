import React from "react";
import Fancybox from "../../ui/fancybox/Fancybox";
import imgGallery1 from "../../img/photogallery/photogallery_1.jpg";
import imgGallery2 from "../../img/photogallery/photogallery_2.jpg";
import imgGallery3 from "../../img/photogallery/photogallery_3.jpg";
import imgGallery4 from "../../img/photogallery/photogallery_4.jpg";
export default function Gallery<T extends React.FC>(): React.ReactElement {
  const imgsGallery = [imgGallery1, imgGallery2, imgGallery3, imgGallery4];
  return (
    <section className="gallery">
      <div className="container">
        <h2 className="gallery__title title">Фотогалерея</h2>
        <div className="gallery__body">
          <Fancybox options={{ infinite: false }}>
            {imgsGallery.map((elem) => (
              <button
                key={elem}
                data-src={elem}
                data-fancybox="gallery"
                className="fancybox"
              >
                <img alt="photogallery img" src={elem} />
              </button>
            ))}
          </Fancybox>
        </div>
        <a href="/show-add-item-gallery" className="gallery__more">
          ПОКАЗАТЬ БОЛЬШЕ
        </a>
      </div>
    </section>
  );
}
