import AboutSection from "./components/about-section";
import FlowerDesign from "./components/flower-design";
import HomeBanner from "./components/home-banner";
import TopFeatures from "./components/top-features";
import TwoCards from "./components/two-cards";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <AboutSection />
      <TwoCards />
      <TopFeatures />
      <FlowerDesign />
    </main>
  );
}
