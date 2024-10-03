
import Image from 'next/image'
import React from 'react'
import ctaBg from "../../../assets/images/about/ctabg.png"
import Link from 'next/link'
// #45766f
const AboutCta = () => {
  return (
    <section className='pt-0'>
      <div className='container mx-auto px-4'>
        <div className='relative justify-between items-center rounded-3xl'>
          <div className='about-cta-bg bg-center pt-10 pb-14 px-10 rounded-2xl shadow-main-shadow w-full bg-no-repeat'>
          <div className=''>
            <h2>Our Core Values: Quality, Commitment, and Sustainability</h2>
            <p className='mb-12'>Beyond delivering excellent services, we are committed to upholding our core values of quality craftsmanship, timely execution, and sustainable practices. Every project we take on is a testament to our commitment to ensuring customer satisfaction, from the smallest renovation to the most complex construction projects.</p>
          </div>
          <div className=''>
            <Link href="/contact" className='btn btn-primary'>Get Started</Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCta