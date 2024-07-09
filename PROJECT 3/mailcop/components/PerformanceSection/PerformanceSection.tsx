import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import './PerformanceSection.css'
import performanceImg from '../../src/app/assests/performanceBanner.png'

export default function PerformanceSection() {
    return (
        <>
            <div className="Performance mt-8 py-8 bg-[#112437] w-full relative">
                <div className="hidden PerformanceCircle absolute top-0 right-0 border rounded-full bg-[#2563EB] xl:flex items-center justify-center">
                </div>
                <div className="pt-4 lg:pt-28 flex flex-row items-center justify-center Brand">
                    <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-2 xl:grid xl:grid-cols-2 xl:gap-48">
                        <div className="">
                            <Image src={performanceImg} className="performanceImg hidden lg:block" alt={'performance card'} />
                        </div>
                        <div className="performanceSection px-4 sm:px-6">
                            <h3 className="performanceSectionHead text-[1rem] lg:text-[1rem] text-left align-left text-[#fff]">
                                Are you Ready ?
                            </h3> <br />
                            <h3 className="performanceSectionHead text-[1.5rem] lg:text-[2.5rem] xl:text-[3rem] text-left align-left text-[#fff]">
                                Ready-built email
                                <br />
                                templates for each
                                <br />
                                stage of your
                                <br />
                                customer journey.
                            </h3>
                            <p className="pt-8 performanceSectionPara text-[1rem] lg:text-[1rem] text-[#fff] text-left align-left">
                                Target your customers with precision so you can personalize and automate your<br />
                                engagements based on their unique profiles, behaviours, and traits to increase<br />
                                engagement and adoption
                            </p>
                            <button
                                type="submit"
                                className="mt-8 performanceSectionButton flex flex-row items-center justify-center w-100% text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
                    </div>
                </div>
            </div>
        </>
    );
}
