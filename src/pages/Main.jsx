import React, { FC, ReactElement, useLayoutEffect } from "react";
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


  useLayoutEffect(() => {
    window.yaContextCb.push(() => {
      // eslint-disable-next-line no-undef
      Ya.adfoxCode.create({
        ownerId: 1457688,
        containerId: 'adfox_167895533089117900',
        params: {
          p1: 'cxpaf',
          p2: 'idcr'
        }
      })
    })
    window.yaContextCb.push(() => {
      // eslint-disable-next-line no-undef
      Ya.adfoxCode.create({
        ownerId: 1457688,
        containerId: 'adfox_167895933918077592',
        params: {
          p1: 'cxnxl',
          p2: 'idcq'
        }
      })
    })
    window.yaContextCb.push(() => {
      // eslint-disable-next-line no-undef
      Ya.adfoxCode.create({
        ownerId: 1457688,
        containerId: 'adfox_167896689561587795',
        params: {
          p1: 'cxoui',
          p2: 'idcq'
        }
      })
    })
    window.yaContextCb.push(() => {
      // eslint-disable-next-line no-undef
      Ya.adfoxCode.create({
        ownerId: 1457688,
        containerId: 'adfox_167896836525063919',
        params: {
          p1: 'cxpis',
          p2: 'idjv'
        }
      })
    })
  }, [])
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div id="adfox_167895533089117900"></div>
      </div>
      <div className="wrapper">
        <Header />
        <div style={{ display: 'flex', justifyContent: 'center' }}><div id="adfox_167896836525063919"></div></div>
        <main className="page" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', top: '-115px' }}><div id="adfox_167895933918077592"></div></div>
          <div>
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
          </div>
          <div style={{ position: 'relative', top: '-115px' }}><div id="adfox_167896689561587795"></div></div>
        </main>
        <Footer />
      </div>
    </>
  );
}
