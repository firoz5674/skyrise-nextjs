import Head from "next/head";
import AboutSection from "./components/about-section";
import CallToAction from "./components/call-to-action";
import FlowerDesign from "./components/flower-design";
import HomeBanner from "./components/home-banner";
import HomeContact from "./components/home-contact";
import ServiceCard from "./components/service-cards";
import TopFeatures from "./components/top-features";
import TwoCards from "./components/two-cards";
import { Metadata } from 'next';

export const metadata = {
  title: 'Skyrise Construction and Interiors | Residential & Commercial Construction in Delhi NCR',
  description: 'Skyrise Construction and Interiors: Expert residential & commercial construction, renovation, modular houses, and interior services in Delhi NCR. Contact us for innovative solutions.',
  canonical: 'https://www.skyriseconstruction.in/',
  ogTitle: '',
  ogMeta: '',
  ogImage: '',
  ogUrl: '',
};


export default function Home() {
  return (
    <>
      <head>
        <link rel="canonical" href="https://www.skyriseconstruction.in/" />
      </head>
      <main>
        <HomeBanner />
        <AboutSection />
        <TopFeatures />
        <ServiceCard title="Our Services" />
        <TwoCards title="Innovative Designs, Solid Construction: Your Perfect Space Awaits" />
        <FlowerDesign />
        <CallToAction />
        <HomeContact />
      </main>
    </>
  );
}
