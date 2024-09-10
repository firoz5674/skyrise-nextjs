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
    <main>
      <HomeBanner />
      <AboutSection />
      <TopFeatures />
      <ServiceCard title="Our Services" />
      <TwoCards />
      <FlowerDesign />
      <CallToAction />
      <HomeContact />
    </main>
  );
}
