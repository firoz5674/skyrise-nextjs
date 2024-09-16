import Head from "next/head";
import AboutSection from "./components/about-section";
import CallToAction from "./components/call-to-action";
import FlowerDesign from "./components/flower-design";
import HomeBanner from "./components/home-banner";
import HomeContact from "./components/home-contact";
import ServiceCard from "./components/service-cards";
import TopFeatures from "./components/top-features";
import TwoCards from "./components/two-cards";

export default function Home() {
  return (
    <>
      <Head>
        <title>Skyrise Construction and Interiors | Residential & Commercial Construction in Delhi NCR</title>
        <meta name="description" content="Skyrise Construction and Interiors: Expert residential & commercial construction, renovation, modular houses, and interior services in Delhi NCR. Contact us for innovative solutions." />
        <meta name="keywords" content="Your, Keywords, Here" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.skyriseconstruction.in/" />

        <meta property="og:title" content="Skyrise Construction and Interiors | Residential & Commercial Construction in Delhi NCR" />
        <meta property="og:description" content="A brief description of your website for social sharing." />
        <meta property="og:url" content="https://www.skyriseconstruction.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.yourwebsite.com/your-image.jpg" />

        <meta name="twitter:title" content="Skyrise Construction and Interiors | Residential & Commercial Construction in Delhi NCR" />
        <meta name="twitter:description" content="A brief description of your website for Twitter." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.skyriseconstruction.in//your-image.jpg" />
      </Head>
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
