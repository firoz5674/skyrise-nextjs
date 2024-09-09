
import Image from 'next/image'
import React from 'react'
import featureBg from "../../assets/images/common/feature-bg2.png";
import spiderLeft from "../../assets/images/common/spider-left.png";

const TopFeatures = () => {
  return (
    <section className='bg-[hsl(210,25%,97%,1)] relative py-[300px] z-1'>
      <Image
        src={featureBg}
        className="w-full h-full absolute top-[50%] object-cover translate-y-[-50%]"
        priority
        alt=""
      />
      {/* <Image
        src={spiderLeft}
        className="w-full h-auto absolute left-[0%] top-[0%] object-cover"
        priority
        alt=""
      /> */}
    </section>
  )
}

export default TopFeatures