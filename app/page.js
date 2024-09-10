import AboutSection from "./components/about-section";
import CallToAction from "./components/call-to-action";
import FlowerDesign from "./components/flower-design";
import HomeBanner from "./components/home-banner";
import TopFeatures from "./components/top-features";
import TwoCards from "./components/two-cards";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <AboutSection />
      <TopFeatures />
      <TwoCards />
      <FlowerDesign />
      <CallToAction />
    </main>
  );
}
