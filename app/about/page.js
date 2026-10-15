import AboutMain from '../components/page-sections/about';
import JsonLd from '../components/JsonLd';
import { founder, aboutPage, breadcrumb } from '../lib/schema';

export const metadata = {
  title: 'About Skyrise | Construction & Interior Company in New Delhi',
  description:
    'Founded in 1998 by Mr. Mohd Rashid, Skyrise is a New Delhi construction and interior company building tensile structures, porta cabins and PUF panels.',
  alternates: { canonical: 'https://www.skyriseconstruction.in/about' },
  openGraph: {
    title: 'About Skyrise | Construction & Interior Company in New Delhi',
    description:
      'Founded in 1998 by Mr. Mohd Rashid, Skyrise builds tensile structures, porta cabins and PUF panel structures across Delhi NCR.',
    url: 'https://www.skyriseconstruction.in/about',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function About() {
  return (
    <main>
      <JsonLd graph={[aboutPage, founder, breadcrumb([['Home', '/'], ['About', '/about']])]} />
      <AboutMain />
    </main>
  );
}
