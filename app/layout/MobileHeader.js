import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.png";
import BarIcon from "../components/svg-icons/bar-icon";
import { NAV_MENU } from "../data";
import Link from "next/link";
import CloseIcon from "../components/svg-icons/close-icon";

const MobileHeader = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleOutsideClick = (e) => {
    if(mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
      setOpenMobileMenu(false);
    }
  }

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  
  useEffect(() => {
    if(openMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [openMobileMenu])

  return (
    <>
      <header className="py-2 px-4 block md:hidden">
        <div className="flex justify-between">
          <Link href="/"><Image src={logo} className="w-40 h-full" priority alt="" /></Link>
          <div onClick={toggleMobileMenu}>
            <BarIcon color="#020390" size={36} />
          </div>
        </div>
      </header>
      {openMobileMenu && (
        <div
          ref={mobileMenuRef}
          className={`fixed z-50 h-full top-0 w-[70%] bg-white p-2 block md:hidden"
          }`}
        >
          <div className="pt-20 pl-4">
            <Image
              src={logo}
              className="w-[200px] mb-7 h-full object-contain"
              priority
              alt=""
            />
            <ul>
              {NAV_MENU.map((menu, index) => {
                console.log(index, "index");
                return (
                  <li key={menu.id} className="mb-3">
                    <Link
                      onClick={toggleMobileMenu}
                      href={menu.link}
                      className={`px-6 font-semibold text-[17px] text-heading-color ${
                        menu.id === 5
                          ? "btn btn-primary !text-[14px] text-white ml-6 px-5 pt-[6px] pb-2 mt-4 inline-block"
                          : ""
                      }`}
                    >
                      {menu.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="absolute right-[10px] top-[13px] cursor-pointer" onClick={toggleMobileMenu}>
            <CloseIcon size={28} />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
