import React, { FC, ReactElement, useEffect, useLayoutEffect, useState } from "react";
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
  const [layout, setLayout] = useState('desctop');
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
    if (document.documentElement.clientWidth >= 1280) {
      setLayout('desctop')
      //   // desctop
      window.yaContextCb.push(() => {
        // eslint-disable-next-line no-undef
        Ya.adfoxCode.create({
          ownerId: 1457688,
          containerId: 'adfox_167931750437195494',
          params: {
            p1: 'cxpis',
            p2: 'idjv'
          }
        })
      })
    }
    if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768) {
      setLayout('tablet')
      // mobile - 640px
      window.yaContextCb.push(() => {
        // eslint-disable-next-line no-undef
        Ya.adfoxCode.create({
          ownerId: 1457688,
          containerId: 'adfox_16793172127941757',
          params: {
            p1: 'cxrcu',
            p2: 'idjv'
          }
        })
      })
      setTimeout(() => document.querySelector('.banner-ht').children[0].children[0].style.width = '100vw', 500)
    }
    if (document.documentElement.clientWidth < 768 && document.documentElement.clientWidth >= 320) {
      setLayout('mobile')
      window.yaContextCb.push(() => {
        // eslint-disable-next-line no-undef
        Ya.adfoxCode.create({
          ownerId: 1457688,
          containerId: 'adfox_167931708269983910',
          params: {
            p1: 'cxrcx',
            p2: 'idjv'
          }
        })
      })
      setTimeout(() => document.querySelector('.banner-ht').children[0].children[0].style.width = '100vw', 500)
    }
    window.yaContextCb.push(() => {
      // eslint-disable-next-line no-undef
      Ya.adfoxCode.create({
        ownerId: 1457688,
        containerId: 'adfox_167938911405652106',
        params: {
          p1: 'cxrer',
          p2: 'idqd'
        }
      })
    })
  }, [])
  return (
    <>
      <div className="banner-ht" style={{ display: 'flex', justifyContent: 'center', margin: '25px 0' }}><div id="adfox_167895533089117900"></div></div>
      <div className="wrapper">
        <Header />
        <div style={{
          margin: '25px 0'
        }}>
          {layout === 'mobile' && <div style={{ display: 'flex', justifyContent: 'center' }}><div id="adfox_167931708269983910"></div></div>}
          {layout === 'tablet' && <div style={{ display: 'flex', justifyContent: 'center' }}><div id="adfox_16793172127941757"></div></div>}
          {layout === 'desctop' && <div style={{ display: 'flex', justifyContent: 'center' }}><div id="adfox_167931750437195494"></div></div>}
        </div>
        <main className="page" style={{ display: 'flex', justifyContent: 'center', width: '1280px', margin: 'auto', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-180px', right: '-480px',  zIndex: -1 }}><div id="adfox_167895933918077592"></div></div>
          <div style={{
            width: '1280px',
            margin: 'auto'
          }}>
            <Banner />

            <SliderBanner />
            <div style={{ display: 'flex', justifyContent: 'center' }}><div id="adfox_167938911405652106"></div></div>
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
          <div style={{ position: 'absolute', top: '-180px', left: '-480px', zIndex: -1 }}><div id="adfox_167896689561587795"></div></div>
        </main>
        <Footer />
      </div>
    </>
  );
}
