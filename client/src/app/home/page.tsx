'use client'

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LandingPageMenu from "../components/LandingPageMenu";
import LeftDecoratorLP from "../components/LeftDecoratorLP";
import RightDecoratorLP from "../components/RightDecoratorLP";


export default function Home() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Passion+One:wght@400;700;900&display=swap" rel="stylesheet"></link>

      <body>
        <LandingPageMenu />
        <Hero />
        <LeftDecoratorLP />
        <RightDecoratorLP />
        <Footer />
      </body>
    </>
  );
}
