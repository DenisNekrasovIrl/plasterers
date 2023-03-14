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
  useEffect(() => {
    window.yaContextCb.push(() => {
      // eslint-disable-next-line no-undef
      Ya.adfoxCode.create({
        ownerId: 1457688,
        containerId: "adfox_16787914940793395",
        params: {
          p1: "cxnxl",
          p2: "idcq",
        },
      });
    });
  }, []);
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="page">
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
