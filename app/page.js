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

export const metadata = {
  title: 'Construction & Interior Design in Delhi NCR | Skyrise Construction',
  description: 'Skyrise: Delhi-based construction, turnkey interior design & tensile structure company. 25+ years, 900+ projects in Delhi NCR. Get a free site visit!',
  alternates: {
    canonical: 'https://www.skyriseconstruction.in/',
  },
  openGraph: {
    title: 'Construction & Interior Design in Delhi NCR | Skyrise Construction',
    description:
      'Turnkey interiors, construction and tensile structures across Delhi, Noida, Gurgaon, Ghaziabad and Faridabad.',
    url: 'https://www.skyriseconstruction.in/',
    type: 'website',
    locale: 'en_IN',
  },
}


export default function Home() {
  return (
    <>
      <head>
        <meta name="google-site-verification" content="TVJSR_fEOeHi_DTQh7NSGLiYEHRwHAjHu2GPe3KRbf0" />
      </head>
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
    </>
  );
}
