// import Image from "next/image";
import { Poppins } from "next/font/google";
// import styles from "./page.module.css";
import Navbar from "../../components/Navbar/Navbar";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import CompanyBrand from "../../components/CompanyBrand/CompanyBrand";
import PerformanceSection from "../../components/PerformanceSection/PerformanceSection";
import HighlightText from "../../components/HighlightText/HighlightText";
import MiddleSection from "../../components/MiddleSection/MiddleSection";
import RatingSection from "../../components/RatingSection/RatingSection";
import FooterSection from "../../components/FooterSection/FooterSection";
const inter = Poppins({ weight: ['400'], subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Navbar />
      <WelcomeSection />
      <CompanyBrand />
      <PerformanceSection />
      <HighlightText />
      <MiddleSection />
      <RatingSection />
      <FooterSection />
    </main>
  );
}
