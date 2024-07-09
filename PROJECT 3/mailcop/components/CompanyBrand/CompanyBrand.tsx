import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
const inter = Poppins({ weight: ['300'], subsets: ["latin"] });
// import './CompanyBrand.css'
import CompanyBrandCard from "../CompanyBrandCard/CompanyBrandCard";
import brand1 from '../../src/app/assests/Company-brands/cargo.png'
import brand2 from '../../src/app/assests/Company-brands/telia.png'
import brand3 from '../../src/app/assests/Company-brands/payu.png'
import brand4 from '../../src/app/assests/Company-brands/mondaym.png'
import brand5 from '../../src/app/assests/Company-brands/telestream.png'




export default function CompanyBrand() {
  return (
    <>
      <div className="py-2">
        <div className="flex flex-row items-center justify-center Brand">
          <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-2 xl:grid xl:grid-cols-5 xl:gap-2">
            <CompanyBrandCard
              weblink={"#"}
              image={brand1}
              dataAos="fade-left"
            />
            <CompanyBrandCard
              weblink={"#"}
              image={brand2}
              dataAos="fade-right"
            />
            <CompanyBrandCard
              weblink={"#"}
              image={brand3}
              dataAos="fade-up"
            />
            <CompanyBrandCard
              weblink={"#"}
              image={brand4}
              dataAos="fade-down"
            />
            <CompanyBrandCard
              weblink={"#"}
              image={brand5}
              dataAos="fade-down"
            />
          </div>
        </div>
      </div>
    </>
  );
}
