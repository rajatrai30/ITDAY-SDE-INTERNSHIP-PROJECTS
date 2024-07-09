import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import './FooterSection.css'
import logo2 from '../../src/app/assests/logo2.png'

export default function FooterSection() {
    return (
        <>
            <div className="Footer bg-[#112437] w-full relative">
                <div className="px-8 sm:px-12 md:px-16 py-14 md:py-24 lg:max-w-[88vw] xl:max-w-[24vw] 2xl:max-w-[1400px] mx-auto">
                    <div className="flex flex-col items-start justify-between Brand sm:flex sm:flex-row">
                        <div className="">
                            <h3 className="FooterSectionHead text-[1.5rem] lg:text-[3rem] text-[#fff]">
                                Hey There, Create your
                                <br />
                                Free account
                            </h3>
                        </div>
                        <div className="">
                            <button
                                type="submit"
                                className="mt-8 FooterSectionButton flex flex-row items-center justify-center w-100% text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign up Now
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
                    </div>
                </div>
                <div className="px-2 md:px-2 sm:py-4">
                    <hr className="text-[#767676] dark:text-[#767676]" />
                </div>

                <div className="px-8 py-10 sm:px-10 sm:py-24 lg:max-w-[85vw] 2xl:max-w-[1350px] mx-auto">
                    <div className="flex flex-col items-start gap-12 justify-between md:flex md:flex-row">
                        <div>
                            <div className="py-2 flex flex-row items-center">
                                <Image src={logo2} width={40} height={40} alt="Logo" />
                                <h3 className="FooterSectionHead text-[1rem] lg:text-[1.2rem] text-[#fff]">
                                    Mailtzy
                                </h3>
                            </div>
                            <h3 className="FooterSectionHead text-[1.5rem] lg:text-[1.5rem] text-[#fff]">
                                There is no formula for the
                                <br />
                                perfect email - Authentic and
                                <br />
                                honest messaging works.
                            </h3>
                        </div>

                        <div className="FooterSection grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-12 xl:grid xl:grid-cols-2 xl:gap-16 items-start">
                            <div className="text-[#fff]">
                                <h3 className="performanceSectionHead text-[1.5rem] lg:text-[1.5rem] text-[#fff]">
                                    About Mailtzy
                                </h3>
                                <ul className="py-2 flex flex-col text-[16px] justify-center gap-[1rem]">
                                    <li className="hover:text-[#2563EB]">
                                        <a href="#">About Us</a>
                                    </li>
                                    <li className="hover:text-[#2563EB]">
                                        <a href="#">Solution</a>
                                    </li>
                                    <li className="hover:text-[#2563EB]">
                                        <a href="#">Pricing</a>
                                    </li>
                                    <li className="hover:text-[#2563EB]">
                                        <a href="#">Promotion</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-row items-center justify-between text-[#fff]">
                                <div className="flex-1 md:pl-2">
                                    <h3 className="FooterSectionHead text-[1.5rem] lg:text-[1.5rem] text-[#fff]">
                                        Product
                                    </h3>
                                    <ul className="py-2 flex flex-col text-[16px] justify-center gap-[1rem]">
                                        <li className="hover:text-[#2563EB]">
                                            <a href="#">Email Creator</a>
                                        </li>
                                        <li className="hover:text-[#2563EB]">
                                            <a href="#">Email Template</a>
                                        </li>
                                        <li className="hover:text-[#2563EB]">
                                            <a href="#">Dashboard Stats</a>
                                        </li>
                                        <li className="hover:text-[#2563EB]">
                                            <a href="#">Daily Report</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <h3 className="pb-6 px-2 align-center text-center text-[1rem] lg:text-[1.2rem] text-[#767676]">
                        Copyright © 2023 ABC Group Pte Ltd. All Rights Reserved
                    </h3>
                </div>
            </div>
        </>
    );
}
