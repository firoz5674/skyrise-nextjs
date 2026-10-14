"use client"
// import Head from "next/head";
// import AboutSection from "./components/about-section";
// import CallToAction from "./components/call-to-action";
// import FlowerDesign from "./components/flower-design";
// import HomeBanner from "./components/home-banner";
// import HomeContact from "./components/home-contact";
// import ServiceCard from "./components/service-cards";
// import TopFeatures from "./components/top-features";
// import TwoCards from "./components/two-cards";
// import { Metadata } from 'next';
// import { useEffect, useState } from "react";
// import HeroNew from "./components/hero-new";

// import Footer from "./components/layout/Footer"
// import Header from "./components/layout/Header"
import CtaBold from "./components/sections/CtaBold"
import CtaSplit from "./components/sections/CtaSplit"
import DesignBuild from "./components/sections/DesignBuild"
import Faq from "./components/sections/Faq"
import Hero from "./components/sections/Hero"
import Process from "./components/sections/Process"
import ProjectsGallery from "./components/sections/ProjectsGallery"
import PropertyJourney from "./components/sections/PropertyJourney"
import ReliablePartner from "./components/sections/ReliablePartner"
import ServicesReveal from "./components/sections/ServicesReveal"
import SpacesWeServe from "./components/sections/SpacesWeServe"
import WhyChoose from "./components/sections/WhyChoose"

export default function Home() {

  return (
    <>
      <head>
        <link rel="canonical" href="https://www.skyriseconstruction.in/" />
        <meta name="msvalidate.01" content="EAC997A22129642FBDDB016FBB713339" />
        <meta name="google-site-verification" content="TVJSR_fEOeHi_DTQh7NSGLiYEHRwHAjHu2GPe3KRbf0" />
      </head>
      <main>
        <main>
          <Hero />
          <ProjectsGallery />
          <ServicesReveal />
          <CtaSplit />
          <WhyChoose />
          <Process />
          <PropertyJourney />
          <ReliablePartner />
          <SpacesWeServe />
          <CtaBold />
          <DesignBuild />
          <Faq />
        </main>
      </main>
    </>

    // <>
    //   <head>
    //     <link rel="canonical" href="https://www.skyriseconstruction.in/" />
    //     <meta name="msvalidate.01" content="EAC997A22129642FBDDB016FBB713339" />
    //     <meta name="google-site-verification" content="TVJSR_fEOeHi_DTQh7NSGLiYEHRwHAjHu2GPe3KRbf0" />
    //   </head>
    //   <main>
    //     <HomeBanner />
    //     <AboutSection />
    //     <TopFeatures />
    //     <ServiceCard title="Our Services" />
    //     <TwoCards title="Innovative Designs, Solid Construction: Your Perfect Space Awaits" />
    //     <FlowerDesign />
    //     <CallToAction />
    //     <HomeContact />
    //   </main>
    // </>
  );
}
