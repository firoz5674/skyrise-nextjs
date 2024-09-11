
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { twoCardsData } from '@/app/data';
import spiralImg from "../../assets/images/spiral.png";
import girlImg from "../../assets/images/girl.png";
import arrowImg from "../../assets/images/arrow.png";

const TwoCards = ({title}) => {
  return (
    <section className='pb-[120px]'>
      <div className='container mx-auto px-4'>
        <h2 className='text-center mb-20 px-0 lg:px-[20%]'>{title}</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
          {twoCardsData.map((card, index) => {
            return (
              <div className={`rounded-2xl relative ${index === 0 ? 'bg-[#f3ebff]' : 'bg-[#ffcbe7]'}  pt-10 pb-20 px-6 lg:px-14 z-10`} key={card}>
                <Image src={card.bgImage} className='absolute top-[50%] overflow-hidden z-[-1] object-cover left-0 w-full h-full translate-y-[-50%]' priority alt="" />
                <h3>{card.cardTitle}</h3>
                <p className='mt-7 mb-12'>{card.cardDesc}</p>
                <Link href="" className='btn btn-outlined'>Contact Now</Link>
              </div>
            )
          })}
        </div>
        <div className='bg-[#ffeff4] relative z-[1] rounded-2xl px-4  py-16 lg:py-8 two-cards-cta'>
        <Image src={spiralImg} className='absolute right-0 z-[-1]' priority alt="" />
          <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center'>
            <div>
              <Image src={girlImg} className='' priority alt="" />
            </div>
            <div>
              <h3>Don&apos;t Talk On a Call</h3>
              <p className='mb-12'>Just leave us a mail, W&apos;ll get back you soon</p>
              <Link href="mailto:skyrise30@gmail.com" className='btn btn-black pt-[19px] pb-[20px]' target='_blank'>skyrise30@gmail.com</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoCards