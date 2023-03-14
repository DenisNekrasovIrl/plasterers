import React, { FC, ReactElement, useEffect } from "react";
import AdditionalBenefit from "../components/additional-benefit/AdditionalBenefit";
import Advantages from "../components/advantages/Advantages";
import Banner from "../components/banner/Banner";
import SliderBanner from "../components/banner/slider/SliderBanner";
import Benefit from "../components/benefit/Benefit";
import Brigadier from "../components/brigadier/Brigadier";
import Calculation from "../components/calculation/Calculation";
import Connection from "../components/connection/Connection";
import Contacts from "../components/contacts/contacts";
import Ensure from "../components/ensure/Ensure";
import Examples from "../components/examples/Examples";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";
import Guarantees from "../components/guarantees/Guarantees";
import Header from "../components/header/Header";
import HowWork from "../components/how-work/HowWork";
import Includes from "../components/includes/Includes";
import Price from "../components/price/Price";
import Reviews from "../components/reviews/Reviews";
import Stages from "../components/stages/Stages";

export default function Main<T extends FC>(): ReactElement {
  // const getBanner = async function () {
  //   const res = await fetch("https://adfox.yandex.ru/api/v1?object=placement&action=info&mode=bannerPlace&placeID=1457688&bannerID=<integer>", {
  //     method: "GET",
  //     headers: {
  //       "X-Yandex-API-Key": "150f153e-c29e-4cf2-a169-29375400f9b1",
  //     },
  //   });
  // };
  // useEffect(() => {
  //   getBanner()
  // }, []);
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="page">
          <div className="container__adfox">
            <div id="adfox_167877559250214463"></div>
          </div>
          <Banner />
          <SliderBanner />
          <Advantages />
          <Benefit />
          <Calculation />
          <HowWork />
          <Price />
          <Includes />
          <Brigadier />
          <Guarantees />
          <Connection />
          <AdditionalBenefit />
          <Reviews />
          <Examples />
          <Gallery />
          <Stages />
          <Contacts />
          <Ensure />
        </main>
        <Footer />
      </div>
    </>
  );
}
