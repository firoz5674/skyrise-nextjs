
import React from 'react'
import logo from "../assets/images/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import ChevRight from '../components/svg-icons/chev-right';
import footerGlitter from "../assets/images/footer-glitter.png"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <section className='bg-[#150d28] py-16 relative'>
        <div className='container mx-auto px-4'>
          <div className='glitter1 hidden lg:block'>
            <Image src={footerGlitter} className='w-[210px] mb-6' priority alt='' />
          </div>
          <div className='glitter2 hidden lg:block'>
            <Image src={footerGlitter} className='w-[210px] mb-6' priority alt='' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
            <div>
              <Image src={logo} className='w-[210px] mb-6' priority alt='' />
              <p className='text-[17px] text-[#9c9c9c]'>At <strong>Skyrise Construction & Interiors</strong>, we turn ideas into reality. Whether you’re looking to build a new space, renovate an existing one, or design interiors that reflect your style, our team of experienced professionals is here to help. With a focus on quality craftsmanship, innovative designs, and sustainable practices, we create spaces that are both functional and beautiful.</p>
            </div>
            <div className='ml-0 lg:ml-[16%]'>
              <h3 className='text-white opacity-80 mb-6'>Quick Service</h3>
              <ul>
                <li className='flex items-center mb-5'>
                  <ChevRight size={22} color="#9c9c9c" className="mr-4" />
                  <Link href="" className='text-[#9c9c9c] text-[17px]'>Home Renovation</Link>
                </li>
                <li className='flex items-center mb-5'>
                  <ChevRight size={22} color="#9c9c9c" className="mr-4" />
                  <Link href="" className='text-[#9c9c9c] text-[17px]'>Office Interior</Link>
                </li>
                <li className='flex items-center mb-5'>
                  <ChevRight size={22} color="#9c9c9c" className="mr-4" />
                  <Link href="" className='text-[#9c9c9c] text-[17px]'>Commercial Interior</Link>
                </li>
                <li className='flex items-center mb-5'>
                  <ChevRight size={22} color="#9c9c9c" className="mr-4" />
                  <Link href="" className='text-[#9c9c9c] text-[17px]'>Home Interior</Link>
                </li>
                <li className='flex items-center mb-5'>
                  <ChevRight size={22} color="#9c9c9c" className="mr-4" />
                  <Link href="" className='text-[#9c9c9c] text-[17px]'>Structural Engineering</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-white opacity-80 mb-6'>Quick Contact</h3>
              <ul>
                <li className='flex items-center mb-5'>
                  <ChevRight size={22} color="#9c9c9c" className="mr-4" />
                  <Link href="tel:+919312148849" target='_blank' className='text-[#9c9c9c] text-[17px]'>+91-9312-1488-49</Link>
                </li>
                <li className='flex items-center mb-5'>
                  <ChevRight size={22} color="#9c9c9c" className="mr-4" />
                  <Link href="tel:+917291994355" target='_blank' className='text-[#9c9c9c] text-[17px]'> +91-7291-9943-55</Link>
                </li>
                <li className='flex items-center mb-5'>
                  <ChevRight size={22} color="#9c9c9c" className="mr-4" />
                  <Link href="mailto:skyrise30@gmail.com" target='_blank' className='text-[#9c9c9c] text-[17px]'>skyrise30@gmail.com</Link>
                </li>
                <li className='flex items-center mb-5'>
                  <ChevRight size={22} color="#9c9c9c" className="mr-4" />
                  <Link href="" className='text-[#9c9c9c] text-[17px]'>C 373 Ground Floor DDA Flats jasola vihar Sarita Vihar , New Delhi 110025</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#030106] py-6 text-center'>
        <p className='text-[16px] text-white opacity-80'>&copy; {year} All Rights Reserved | Skyrise Construction & Interiors</p>
      </section>
    </>
  )
}

export default Footer