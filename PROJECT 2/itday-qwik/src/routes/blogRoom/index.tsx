import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
  CircleAngularArrowLeft,
  CircleAngularArrowRight,
  RightArrow,
  Search,
} from "~/packages/utils/icons";
import blogImg1 from "../../Assets/images/blogRoom/image 21.jpg";
import blogImg2 from "../../Assets/images/blogRoom/blogImg2.jpg";
import blogImg3 from "../../Assets/images/blogRoom/blogImg3.jpg";
import blogImg4 from "../../Assets/images/blogRoom/blogImg4.jpg";
import blogImg5 from "../../Assets/images/blogRoom/blogImg5.jpg";
import blogImg6 from "../../Assets/images/blogRoom/blogImg6.jpg";
import blogImg7 from "../../Assets/images/blogRoom/blogImg7.jpg";
import blogImg8 from "../../Assets/images/blogRoom/blogImg8.jpg";
import blogImg9 from "../../Assets/images/blogRoom/blogImg9.jpg";
import blogImg10 from "../../Assets/images/blogRoom/blogImg10.jpg";

import { Cards } from "./cards";
import { Tags } from "./tags";
import { Cards1 } from "./cards1";
import { Cards3 } from "./cards3";

export default component$(() => {
  return (
    <>
      <div className="flex flex-col pt-20 md:pt-24 px-8 md:px-11 text-[1.5rem] sm:text-[2.5rem] md:text-[3.75rem] font-light leading-[6.25rem] tracking-[0.5rem] dark:bg-[#1E2124] dark:text-[#FAFAFA]">
        <h1>
          BLOG<span className="text-[#767676]">SPOT</span>
        </h1>
        <div className="text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white h-[2.5rem] w-[15rem] sm:h-[2.5rem] sm:w-[18rem] md:h-[3.37rem] md:w-[26.25rem] px-5 pr-16 text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search Article You Want"
          />
          <button type="submit" className="ml-[-2rem]">
            <Search></Search>
          </button>
        </div>
      </div>
      <div className="flex flex-col md:pt-2 px-8 md:px-11 text-[1.5rem] md:text-[2rem] font-light leading-[6.25rem] tracking-[0.3rem] dark:bg-[#1E2124] dark:text-[#FAFAFA]">
        <h1>
          TRENDING <span className="text-[#767676]">TAGS`</span>
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:flex lg:flex-row gap-8">
          <Tags name="Technology" />
          <Tags name="Design" />
          <Tags name="Application" />
          <Tags name="Frontend" />
          <Tags name="Developers" />
          <Tags name="Mobile" />
          <Tags name="Culture" />
          <Tags name="Security" />
        </div>
      </div>
      <div className="pt-4 px-8 md:px-11 pb-4 dark:bg-[#1E2124] dark:text-[#FAFAFA]">
        <h1 className="text-[1.5rem] md:text-[2rem] font-light leading-[6.25rem] tracking-[0.3rem]">
          RECENT <span className="text-[#767676]">BLOG`</span>
        </h1>
        <div className="flex flex-col md:flex-row w-[100%] h-[100%] md:h-[24rem] pb-8 ">
          <div className="w-[100%] md:w-[48%]">
            <img src={blogImg1} alt="" className="w-[100%] h-[100%]" />
          </div>
          <div className="flex flex-col bg-[#242B32] w-[100%] md:w-[52%] py-4 md:py-6 lg:py-10 px-6 md:px-8 lg:px-12 xl:px-20">
            <h2 className=" text-xl md:text-2xl text-[#767676] font-light pb-6 md:pb-4">
              Design
            </h2>
            <h1 className="capitalize text-2xl xl:text-4xl tracking-[.2em] text-[#ffffff] font-normal pb-2">
              UX Review <br /> Presentations
            </h1>
            <p className="capitalize text-sm md:text-base text-[#ffffff] font-normal">
              It is said that “Every $1 invested in UX brings $100 in
              <br /> return (Forbes)”. This sums up the importance of
              <br /> UX for any organization which is trying to grow.
            </p>
            <div className="flex flex-row pt-10 md:pt-6 lg:pt-14 items-center justify-between text-[#767676]">
              <h2 className="text-base md:text-xl lg:text-2xl text-[#767676] font-light">
                //Jul 12, 2022 //Shubham
              </h2>
              <RightArrow></RightArrow>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 px-8 md:px-11 dark:bg-[#1E2124] dark:text-[#FAFAFA]">
        <Cards
          image={blogImg2}
          title1="Technology"
          title2="UX review presentations"
          para="It is said that “Every $1 invested in UX brings $100 in return (Forbes)”. This sums up the importance of UX for any organization which is trying to grow."
          title3="//Jul 12, 2022 //Shubham"
        ></Cards>
        <Cards
          image={blogImg3}
          title1="Technology"
          title2="UX review presentations"
          para="It is said that “Every $1 invested in UX brings $100 in return (Forbes)”. This sums up the importance of UX for any organization which is trying to grow."
          title3="//Jul 12, 2022 //Shubham"
        ></Cards>
        <Cards
          image={blogImg4}
          title1="Technology"
          title2="UX review presentations"
          para="It is said that “Every $1 invested in UX brings $100 in return (Forbes)”. This sums up the importance of UX for any organization which is trying to grow."
          title3="//Jul 12, 2022 //Shubham"
        ></Cards>
        <Cards
          image={blogImg5}
          title1="Technology"
          title2="UX review presentations"
          para="It is said that “Every $1 invested in UX brings $100 in return (Forbes)”. This sums up the importance of UX for any organization which is trying to grow."
          title3="//Jul 12, 2022 //Shubham"
        ></Cards>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between gap-12 sm:gap-12 px-8 md:px-11 pt-12 dark:bg-[#1E2124] dark:text-[#FAFAFA] pb-12">
        <Cards1
          image={blogImg6}
          title1="Technology"
          title2="UX review presentations"
          title3="//Jul 12, 2022 //Shubham"
        ></Cards1>
        <Cards1
          image={blogImg7}
          title1="Technology"
          title2="UX review presentations"
          title3="//Jul 12, 2022 //Shubham"
        ></Cards1>
        <Cards1
          image={blogImg8}
          title1="Technology"
          title2="UX review presentations"
          title3="//Jul 12, 2022 //Shubham"
        ></Cards1>
      </div>

      <div className="width-[100%] h-[50rem] bg-[#1E1E1E] sm:h-[42rem] xl:h-[46rem] 2xl:h-[50rem] dark:bg-[#FAFAFA] dark:text-[#1E1E1E]">
        <div className="flex flex-row items-center justify-between pt-16 px-11">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-normal text-[#ffffff] dark:text-[#1E2124] uppercase">
            Featured Stories
          </h1>
          <button className="group w-[11rem] h-[2.5rem] relative fonts-space-grotesk overflow-hidden  outline-none focus:outline-none fonts-prompt font-medium  border border-[#ffffff] dark:border-[#1E2124] text-[#ffffff] dark:text-[#1E2124] hover:text-[black] dark:hover:text-[#FAFAFA]  px-10 py-2   z-0">
            <div className="bg-[#ffffff] dark:bg-[#1E2124] absolute block top-0 left-0 h-full -z-10 transition-all w-0 group-hover:w-full duration-300 "></div>
            <span className="transition-all z-10">View All</span>
          </button>
        </div>

        <div className=" mx-auto px-11 py-8 w-full h-[45rem]">
          <div
            id="default-carousel"
            className="relative"
            data-carousel="static"
          >
            <div className="overflow-hidden relative h-56 rounded-lg sm:h-[28rem] xl:h-[32rem] 2xl:h-[36rem]">
              <div
                className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
                data-carousel-item=""
              >
                <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                  First Slide
                </span>
                <img
                  src={blogImg9}
                  className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                />
              </div>

              <div
                className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                data-carousel-item=""
              >
                <img
                  src={blogImg9}
                  className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                />
              </div>

              <div
                className="duration-700 ease-in-out absolute inset-0 transition-all transform z-10 translate-x-full"
                data-carousel-item=""
              >
                <img
                  src={blogImg9}
                  className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                />
              </div>
            </div>

            <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
              <button
                type="button"
                className="w-[0.75rem] h-[0.813rem] rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                aria-current="false"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-[0.75rem] h-[0.813rem] rounded-full bg-white dark:bg-gray-800"
                aria-current="true"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-[0.75rem] h-[0.813rem] rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
            </div>

            <div className="flex flex-col absolute bottom-20 left-1/3 z-30 -translate-x-1/2 gap-2 uppercase text-[#F1F1F1] dark:text-[#1E2124] font-bold">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl">
                Conserving mangroves to protect local livelihoods and the planet
              </h1>
              <h2 className="text-base">June 20, 2022</h2>
            </div>

            <button
              type="button"
              className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
              data-carousel-prev=""
            >
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <CircleAngularArrowLeft />
                <span className="hidden">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
              data-carousel-next=""
            >
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <CircleAngularArrowRight />
                <span className="hidden">Next</span>
              </span>
            </button>
          </div>

          <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
        </div>
      </div>

      <div className="pt-16 px-8 md:px-11 pb-12 dark:bg-[#1E2124] dark:text-[#FAFAFA]">
        <h1 className="text-[1.5rem] md:text-[2rem] font-bold leading-10 tracking-[0.05rem] uppercase">
          More from Blog <span className="text-[#767676]">room</span>
        </h1>
        <div className="grid md:grid-cols-2 grid-rows-1 gap-2 py-10">
          <Cards3
            image={blogImg7}
            title1="Technology"
            title2="iTDAY expands commitment to protect users from mercenary spyware"
            title3="//Jul 12, 2022 //Shubham"
          ></Cards3>
          <Cards3
            image={blogImg3}
            title1="Technology"
            title2="iTDAY expands commitment to protect users from mercenary spyware"
            title3="//Jul 12, 2022 //Shubham"
          ></Cards3>
          <Cards3
            image={blogImg10}
            title1="Technology"
            title2="iTDAY expands commitment to protect users from mercenary spyware"
            title3="//Jul 12, 2022 //Shubham"
          ></Cards3>
          <Cards3
            image={blogImg5}
            title1="Technology"
            title2="iTDAY expands commitment to protect users from mercenary spyware"
            title3="//Jul 12, 2022 //Shubham"
          ></Cards3>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "iTDAY | blog",
};
