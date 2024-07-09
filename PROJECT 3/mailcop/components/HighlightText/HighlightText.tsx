import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
// import './HighlightText.css'
import performanceImg from '../../src/app/assests/performanceBanner.png'

export default function HighlightText() {
    return (
        <>
            <div className="pt-12 flex flex-col items-center justify-center w-full">
                <h3 className="px-4 sm:px-0 text-[1rem] lg:text-[1.3rem] text-[#112437] align-center text-center">
                    Start free with 100&apos;s of best practice templates👋
                </h3> <br />
                <h3 className="align-center text-center text-[1.5rem] lg:text-[3rem] text-[#112437] text-bold">
                    Scale your Customer
                    <br />
                    Communication with ease
                </h3>
            </div>
        </>
    );
}
