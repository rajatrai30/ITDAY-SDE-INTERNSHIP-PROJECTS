import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "./WelcomeSection.css";
import Link from "next/link";
// import banner1 from "../../../itday-project/src/app/assests/banner1.png";
import banner1 from '../../src/app/assests/banner1.png'

export default function WelcomeSection() {
  return (
    <>
      <div className="pt-28 px-6 sm:pl-12 sm:px-0 lg:pl-24 xl:pl-32">
        <div className="py-4">Hey, Everyone 👋</div>
        <h3 className="text-[1.5rem] lg:text-[2rem] tracking-[.04em] text-left align-left">
          There is no formula for the
          <br />
          perfect email -- Authentic and
          <br />
          honest messaging works.
        </h3>

        <div className="h-[5rem]">
          <div className="flex flex-col space-y-2 items-start lg:flex lg:flex-col lg:items-start xl:flex xl:flex-row xl:items-center xl:space-x-2 w-[100%] h-[5rem]">
            <div className="pt-2 sm:pt-0 xl:w-[13%] flex items-start">
              <button
                type="submit"
                className="flex flex-row items-center justify-center w-100% text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Request a Demo
                <svg
                  className="ml-2 flex items-center"
                  fill="#fff"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M437.5 247.5l-160-160c-7.5-7.5-20.5-7.5-28 0s-7.5 20.5 0 28L385.5 216H24c-11 0-20 9-20 20s9 20 20 20h361.5l-106 106c-7.5 7.5-7.5 20.5 0 28s20.5 7.5 28 0l160-160c7.5-7.5 7.5-20.5 0-28z" />
                </svg>

              </button>
            </div>
            <div className="w-[96%] xl:w-[76%] flex flex-row items-center justify-between">
              <div className="flex flex-row items-center Reseller">
                <img src="https://picsum.photos/300/300" alt="reseller" className="-mr-16" />
                <img src="https://picsum.photos/300/300" alt="reseller" className="-mr-16 -ml-8" />
                <img src="https://picsum.photos/300/300" alt="reseller" className="-ml-8" />
              </div>
              <div className="flex-1 pl-12">
                Join with 10,000+ users
              </div>

              <div className="w-[30%] xl:w-[20%] flex flex-row items-end justify-end">
                <a type="button" className="w-[43%] xl:w-[23%]">
                  Scroll
                </a>
                <svg
                  fill="black"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M224 402.7V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V402.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-stretch justify-center">
        <Image src={banner1} alt="" className="bannerImg py-6 sm:py-0" />
      </div>
    </>
  );
}
