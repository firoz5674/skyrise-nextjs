
import Link from 'next/link'
import React from 'react'
import CloseIcon from '../components/svg-icons/close-icon'

const TopBar = () => {
  return (
    <section className='bg-topbar-gradient pt-3 pb-5 px-4'>
      <div className='text-center flex justify-between items-center'>
        <div></div>
        <div className='block lg:flex items-center'>
          <p className='text-base mr-5 mb-4 lg:mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link href="" className='btn btn-secondary px-5 pt-[9px] pb-[10px] text-[14px]'>Contact Now</Link>
        </div>
        <div className='cursor-pointer'>
          <CloseIcon color="#000" size={6}  />
        </div>
      </div>
    </section>
  )
}

export default TopBar