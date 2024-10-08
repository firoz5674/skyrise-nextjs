
import React from 'react'
import RootLayout from '../layout'
import Head from 'next/head'
import AboutMain from '../components/page-sections/about'

export const metadata = {
  title: 'About Skyrise Construction & Interiors - Leading Experts in Modern Architecture & Interior Design',
  description: 'Skyrise Construction & Interiors offers expert modern architecture, interior design, and sustainable building solutions tailored to meet your unique needs.',
  alternates: {
    canonical: 'https://www.skyriseconstruction.in/about',
  },
}

const About = () => {

  return (
    <main>
      <AboutMain />
    </main>
  )
}

export default About