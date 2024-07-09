import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HeroSection, Product1, Product2, Product3 } from "../components/home";
import GetStarted from "../components/sections/GetStartedNow";
import { Navbar } from "../modules/navigation";
import { Button, EvenToLeftTitle } from "../packages/utils";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>iTDAY</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className="bg-white text-dark dark:bg-dark dark:text-white py-2">
        <main className="w-screen px-4 mt-[5rem]">
          <HeroSection />

          <div className="pixelate w-full overflow-hidden mb-16">
            <Image
              layout="responsive"
              priority
              width={100}
              height={56.231884057971}
              src="/assets/banner/banner1.jpg"
            />
          </div>
          <div className="py-9">
            <h3 className="text-3xl text-center ml-44 mr-44">
              We build softwares that empowers organization to effectively
              intergrate their data, decisions and operations
            </h3>
          </div>
         
          <hr className="text-dark dark:text-white" />

          <Product1 />

          <hr className="text-dark dark:text-white" />

          <Product2 />

          <div className="pixelate w-full overflow-hidden mb-16">
            <Image
              layout="responsive"
              priority
              width={100}
              height={56.231884057971}
              src="/assets/banner/banner1.jpg"
            />
          </div>

          <hr className="text-dark dark:text-white" />

          <Product3 />

          <hr className="text-dark dark:text-white" />

          <GetStarted />
        </main>
      </div>
    </>
  );
};

export default Home;
