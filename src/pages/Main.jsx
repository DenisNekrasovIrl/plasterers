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

export default function Main() {
  // const getBanners = async function () {
  //   const res = await fetch(
  //     "api/v1?object=account&action=list&actionObject=activeBanners&date=YYYY-MM-DD",
  //     {
  //       method: "GET",
  //       headers: {
  //         "X-Yandex-API-Key": "613a1820-ddcf-43b3-8bfb-fab9a3e828a6",
  //       },
  //     }
  //   );
  //   const json = await res.json();
  //   console.log(json);
  // };
  // useEffect(() => {
  //   getBanners();
  // }, []);
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="page">
          {/* <div id="adfox_167879720573525808"></div> */}
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
