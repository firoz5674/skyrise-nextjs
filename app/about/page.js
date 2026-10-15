
import React from 'react'
import RootLayout from '../layout'
import Head from 'next/head'
import AboutMain from '../components/page-sections/about'

export const metadata = {
  title: 'About Skyrise | Construction & Interior Company in New Delhi',
  description:
    'Founded in 1998 by Mr. Mohd Rashid, Skyrise is a New Delhi construction and interior company building tensile structures, porta cabins and PUF panels.',
  alternates: { canonical: 'https://www.skyriseconstruction.in/about' },
  openGraph: {
    title: 'About Skyrise | Construction & Interior Company in New Delhi',
    url: 'https://www.skyriseconstruction.in/about',
    type: 'website',
    locale: 'en_IN',
  },
};

const About = () => {

  return (
    <main>
      <AboutMain />
    </main>
  )
}

export default About