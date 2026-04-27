'use client'

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LandingPageMenu from "../components/LandingPageMenu";
import LeftDecoratorLP from "../components/LeftDecoratorLP";
import RightDecoratorLP from "../components/RightDecoratorLP";


export default function Home() {
  return (
    <>
      <LandingPageMenu />
      <Hero />
      <LeftDecoratorLP />
      <RightDecoratorLP />
      <Footer />      
    </>
  );
}
