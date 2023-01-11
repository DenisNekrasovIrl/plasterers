import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import notFound from "../img/notFound.png";
export default function Error<T extends React.FC>(): React.ReactElement {
  return (
    <main className="not-found__wrapper">
      <Header />
      <div className="not-found">
        <h1 className="not-found__title">Что-то пошло не так.</h1>
        <p className="not-found__text">
          Страницы по данному адресу не существует!
        </p>
        <img src={notFound} alt="not-found" />
      </div>
      <Footer />
    </main>
  );
}
