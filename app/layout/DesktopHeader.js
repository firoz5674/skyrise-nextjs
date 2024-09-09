
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { NAV_MENU } from '../data';
import logo from "../assets/images/logo.png";

const DesktopHeader = () => {
  return (
    <header className='bg-white py-5 px-14'>
      <nav className='flex justify-between items-center'>
        <Image src={logo} className='w-[210px]' priority alt='' />
        <ul className='flex items-center'>
          {NAV_MENU.map((menu, index) => {
            console.log(index, 'index');
            return (
              <Link href={`#${menu.link}`} key={menu.id}
                className={`px-6 font-semibold text-[17px] text-heading-color ${menu.id === 5 ? 'btn btn-primary text-[16px] text-white ml-6 px-5 py-3 text-md' : ''}`}>{menu.label}</Link>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default DesktopHeader