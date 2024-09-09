"use client"
import React from 'react'
import useWindowWidth from '../hooks/useWindowWidth'
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const Header = () => {
  const windowWidth = useWindowWidth();
  return (
    <div>
      {windowWidth < 992 ? (
        <MobileHeader />
      ) : (
        <DesktopHeader />
      )}
    </div>
  )
}

export default Header