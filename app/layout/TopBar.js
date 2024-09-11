
import Link from 'next/link'
import React from 'react'
import CloseIcon from '../components/svg-icons/close-icon'

const TopBar = () => {
  return (
    <section className='bg-topbar-gradient pt-4 pb-6 px-4'>
      <div className='text-center flex justify-between items-center'>
        <div></div>
        <div className='block lg:flex items-center'>
          <p className='text-[18px] font-semibold text-black mr-5 mb-4 lg:mb-0'>A home is not just a place, it’s a feeling of comfort and belonging.</p>
          {/* <Link href="" className='btn btn-secondary px-5 pt-[9px] pb-[10px] text-[14px]'>Contact Now</Link> */}
        </div>
        <div className='cursor-pointer'>
          <CloseIcon color="#000" size={6}  />
        </div>
      </div>
    </section>
  )
}

export default TopBar