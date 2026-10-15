export const SITE = 'https://www.skyriseconstruction.in';
const ORG_ID = `${SITE}/#organization`;
const CITIES = ['Delhi', 'New Delhi', 'Noida', 'Greater Noida', 'Gurugram', 'Ghaziabad', 'Faridabad'];

export const organization = {
  '@type': 'GeneralContractor',
  '@id': ORG_ID,
  name: 'Skyrise Construction & Interiors',
  alternateName: ['Skyrise', 'Skyrise Construction'],
  url: SITE,
  logo: `${SITE}/skyrise-logo.webp`,
  image: `${SITE}/skyrise-logo.webp`,
  description:
    'Delhi-based construction, interior design and tensile structure company. Builders of porta cabins, PUF insulated panel structures and prefabricated buildings across Delhi NCR since 1998.',
  email: 'skyrise30@gmail.com',
  telephone: '+91-9312148849',
  foundingDate: '1998',
  founder: { '@id': `${SITE}/about#founder` },
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 120 },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C 373 Ground Floor, DDA Flats, Jasola Vihar, Sarita Vihar',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110025',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 28.634930, longitude: 77.30001018991759 },
  hasMap: 'https://share.google/dMedNS5ERfgJLzKHK',
  // TODO: add opening hours if you want them shown
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:30', closes: '18:30' }],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9312148849',
    email: 'skyrise30@gmail.com',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
  },
  areaServed: CITIES.map((name) => ({ '@type': 'City', name })),
  knowsAbout: [
    'Construction', 'Interior design', 'Turnkey interior design', 'Tensile structures',
    'Porta cabins', 'PUF insulated panels', 'Aerocon prefabricated structures', 'Container homes',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Skyrise services',
    itemListElement: [
      'House and commercial construction', 'Turnkey interior design', 'Architectural services',
      'Office interior design', 'Renovation and remodeling', 'Custom furniture', 'Container homes',
      'Prefabricated modular houses', 'Tensile structures', 'Porta cabins', 'PUF insulated panel structures',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
  // TODO: add only real, live profiles (Google Business Profile, Facebook, Instagram, LinkedIn, IndiaMART, Justdial)
  sameAs: [],
};

export const website = {
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  url: SITE,
  name: 'Skyrise Construction & Interiors',
  inLanguage: 'en-IN',
  publisher: { '@id': ORG_ID },
};

export const founder = {
  '@type': 'Person',
  '@id': `${SITE}/about#founder`,
  name: 'Mohd Rashid',
  jobTitle: 'Founder',
  worksFor: { '@id': ORG_ID },
  url: `${SITE}/about`,
  // image: `${SITE}/mohd-rashid.webp`, // TODO: add once the founder photo is uploaded
};

export const aboutPage = {
  '@type': 'AboutPage',
  '@id': `${SITE}/about#webpage`,
  url: `${SITE}/about`,
  name: 'About Skyrise | Construction & Interior Company in New Delhi',
  isPartOf: { '@id': `${SITE}/#website` },
  about: { '@id': ORG_ID },
  inLanguage: 'en-IN',
};

export const breadcrumb = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({
    '@type': 'ListItem', position: i + 1, name, item: `${SITE}${path}`,
  })),
});

// Accepts an array of [question, answer] pairs OR objects like
// { question, answer } / { q, a }. Returns null if there is nothing valid,
// so the page simply gets no FAQ schema instead of crashing.
export const faqSchema = (faqs) => {
  if (!Array.isArray(faqs)) return null;
  const mainEntity = faqs
    .map((f) => {
      const q = Array.isArray(f) ? f[0] : f?.question ?? f?.q;
      const a = Array.isArray(f) ? f[1] : f?.answer ?? f?.a;
      return q && a ? { '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } } : null;
    })
    .filter(Boolean);
  return mainEntity.length ? { '@type': 'FAQPage', mainEntity } : null;
};

export const serviceSchema = ({ name, description, path }) => ({
  '@type': 'Service',
  name,
  description,
  url: `${SITE}${path}`,
  provider: { '@id': ORG_ID },
  areaServed: CITIES.map((n) => ({ '@type': 'City', name: n })),
});
