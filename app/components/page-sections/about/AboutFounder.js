
import Image from 'next/image'
import React, { useState } from 'react'
import aboutBg from "../../../assets/images/about-bg2.png";
import about from "../../../assets/images/about/profile2.png";
import Link from 'next/link';

const aboutText = `Skyrise Construction & Interiors company is founded by Mr. MD Rashid in 1998. We are involved in Construction and Interiors agency and serving our clients for more than 20 years in New Delhi. The company has achieved outstanding prominence through last 20 years and this is an ongoing process as it progress to build a good reputation by quoting competing pricing, keeping the honesty and giving the right involvement for each and every customer's respective requirements.
Skyrise Construction & Interiors is one of the leading constructor of Tensile Structures, Porta Cabin, PUF Insulated Panel, Aerocon Prefabricated Structure, Prefabricated Structure and specialized designers of residential and commercial interior.
We have a team of best and excellent expertise from the field of construction and interiors employed with us, we have been able to deliver, time and again, inventive and purely designed projects to our clients.
We are a team of 450 and has gained an expertise in construction and interior field over the decades.`

const AboutFounder = () => {
  const [isReadMore, setIsReadMore] = useState(true);
  const maxLength = 540;

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  }


  return (
    <section className='relative'>
      <Image
        src={aboutBg}
        className="w-full lg:w-1/2 h-full absolute right-0 top-[0%] object-cover z-[-1] translate-y-[0%]"
        priority
        alt=""
      />
      <div className='container mx-auto px-4'>
        <div className='text-center mb-28'>
          <h1 className='mb-3'>About Us</h1>
          <ul className='flex justify-center'>
            <li><Link href="/" className='inline-block mr-3'>Home</Link> <span className='inline-block mr-4'>&gt;</span> </li>
            <li><Link href="/blog" className='opa opacity-75'>About</Link></li>
          </ul>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div>
            <p className='text-primary-color bg-red-100 rounded-full italic text-base px-4 py-1 font-semibold w-max'>About Us</p>
            <h2>Building Dreams Since 1998: The Journey of Skyrise Construction & Interiors</h2>
            <p className='mb-'>{isReadMore ? aboutText.slice(0, maxLength) + '...' : aboutText}</p>
            <button className='mb-10 inline-block' onClick={toggleReadMore}>{isReadMore ? 'Read More' : 'Read Less'}</button>
            <div>
            <Link href="/contact" className='btn btn-primary' target='_blank'>Contact Us</Link>
            </div>
          </div>
          <div>
            <div>
              <Image src={about} className='w-full' priority alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutFounder