
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { twoCardsData } from '@/app/data';

const TwoCards = () => {
  return (
    <section className='pb-[120px]'>
      <div className='container mx-auto px-4'>
        <h2 className='text-center mb-20'>Lorem ipsum dolor sit</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {twoCardsData.map((card, index) => {
            return (
              <div className={`rounded-2xl relative ${index === 0 ? 'bg-[#f3ebff]' : 'bg-[#ffcbe7]'}  pt-10 pb-20 px-14 z-10`} key={card}>
                <Image src={card.bgImage} className='absolute top-[50%] overflow-hidden z-[-1] object-cover left-0 w-full h-full translate-y-[-50%]' priority alt="" />
                <h3>{card.cardTitle}</h3>
                <p className='mt-7 mb-12'>{card.cardDesc}</p>
                <Link href="" className='btn btn-outlined'>Contact Now</Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TwoCards