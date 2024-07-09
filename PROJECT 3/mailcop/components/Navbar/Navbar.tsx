"use client"; // this is a client component
import Image from "next/image";
import { useState } from "react";
import logo1 from '../../src/app/assests/logo1.png'
import hamburgerMenuIcon from '../../src/app/assests/icons/hamburger-menu.svg'
import closeIcon from '../../src/app/assests/icons/close.svg'
import './Navbar.css'

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="bg-[#F8F9FA] shadow-sm md:hidden fixed top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between h-16 px-4 bg-white">
          <Image src={logo1} width={40} height={40} alt="Logo" />
          <button
            onClick={handleNavToggle}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            {isNavOpen ? (
              <Image src={closeIcon} alt="Close menu" />
            ) : (
              <Image src={hamburgerMenuIcon} alt="Open menu" />
            )}
          </button>
        </div>
        <div
          className={`${isNavOpen ? "" : "hidden"
            } bg-white shadow-md`}
        >
          <ul className="pt-2 pb-4 pl-4 space-y-1">
            <li className="hover:text-blue-500">
              <a href="#">About</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:text-[blue]">
              <a href="#">Request demo</a>
            </li>
            <li className="hover:text-[blue]">
              <a href="#">Why Mailtzy</a>
            </li>
          </ul>
          <div className="pt-4 pb-2 border-t border-gray-200">
            <div className="flex items-center px-4">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Contact Us
                <svg className="pl-2 underline" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <g transform="rotate(45 8 8)">
                    <line x1="0" y1="10" x2="8" y2="2" stroke="black" stroke-width="1"></line>
                    <line x1="8" y1="2" x2="16" y2="10" stroke="black" stroke-width="1"></line>
                    <line x1="8" y1="2" x2="8" y2="24" stroke="black" stroke-width="1"></line>
                  </g>
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F9FA] shadow-md hidden md:block h-16">
        <div className="flex flex-row w-full h-full items-center">
          <div className="w-[30%] flex pl-32 items-start">
            <Image src={logo1} width={40} height={40} alt="Logo" />
          </div>
          <div className="NavItems w-[70%] flex flex-row items-center justify-between gap-[14rem]">
            <ul className="w-[60%] flex flex-row text-[16px] justify-center gap-[3rem] font-medium pl-16">
              <li className="hover:text-blue-500">
                <a href="#">About</a>
              </li>
              <li className="hover:text-blue-500">
                <a href="#">Pricing</a>
              </li>
              <li className="hover:text-[blue]">
                <a href="#">Request demo</a>
              </li>
              <li className="hover:text-[blue]">
                <a href="#">Why Mailtzy</a>
              </li>
            </ul>
            <div className="w-[30%] flex flex-row items-center space-x-2 underline pl-16">
              <a
                href="#"
                type="button"
                target="_blank"
                className="w-43%"
              >
                Contact Us
              </a>
              <svg className="underline" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(45 8 8)">
                  <line x1="0" y1="10" x2="8" y2="2" stroke="black" stroke-width="1"></line>
                  <line x1="8" y1="2" x2="16" y2="10" stroke="black" stroke-width="1"></line>
                  <line x1="8" y1="2" x2="8" y2="24" stroke="black" stroke-width="1"></line>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
