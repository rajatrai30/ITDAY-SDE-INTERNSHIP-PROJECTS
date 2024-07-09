import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import banner2 from "../../Assets/banner/banner2.jpg";
import {
  JobInfo,
  CareerImg,
  Benefits,
  AbsoluteImgText,
} from "~/packages/utils/items";
import { GetStartedNow } from "~/components/sections/GetStartedNow";
import { SearchBar } from "~/packages/utils/searchBar";
import career1 from "../../Assets/Images/CareerPage/career1.jpg";
import career2 from "../../Assets/Images/CareerPage/career2.jpg";
import career3 from "../../Assets/Images/CareerPage/career3.jpg";
import career4 from "../../Assets/Images/CareerPage/career4.jpg";
import career5 from "../../Assets/Images/CareerPage/career5.jpg";
import career6 from "../../Assets/Images/CareerPage/career6.jpg";

export default component$(() => {
  return (
    <>
      <div className="p-4 pt-40 space-y-8 fonts-space-grotesk bg-[white] dark:bg-[#1E2124] text-[#1E2124] dark:text-[#fafafa]">
        <div className="pixelate w-full overflow-hidden mb-20 pb-10">
          <img
            src={banner2}
            alt=""
            className="h-57/3 md:(h-57/3 * 2) lg:h-57 w-full bg-[#1E2124]"
          />
        </div>

        <AbsoluteImgText
          text1="Work with us"
          text2="We build softwares that empowers"
        />

        <SearchBar search="Search job" button="Search" />
        <hr className="text-[#767676] dark:text-[#767676]" />

        <div className="md:pl-32 lg:pl-32 xl:pl-32 lg:py-10 w-full space-y-8 fonts-space-grotesk text-[#1E2124] dark:text-[#fafafa]">
          <div className="flex flex-col items-start md:flex md:flex-col md:items-start lg:flex lg:flex-row lg:justify-between lg:items-start xl:flex xl:flex-row xl:justify-between xl:items-start">
            <h1 className="tracking-[.04em] text-[4rem] md:text-[4rem] lg:text-[6rem] text-left align-left fonts-space-grotesk">
              Jobs
            </h1>
            <br />
            <h1 className="tracking-[.05em] text-[2rem] lg:text-[3.5rem] fonts-space-grotesk">
              250 job
            </h1>
          </div>
        </div>

        <div className="sm:pl-36">
          <hr className="text-[#767676] dark:text-[#767676]" />
        </div>
        <JobInfo
          position="UI/ UX Design"
          period="2 years exp."
          location="Benglore, India"
        />
        <div className="sm:pl-36">
          <hr className="text-[#767676] dark:text-[#767676]" />
        </div>

        <JobInfo
          position="Web design"
          period="2 years exp."
          location="Benglore, India"
        />

        <div className="sm:pl-36">
          <hr className="text-[#767676] dark:text-[#767676]" />
        </div>

        <JobInfo
          position="Graphics design"
          period="2 years exp."
          location="Benglore, India"
        />

        <div className="sm:pl-36">
          <hr className="text-[#767676] dark:text-[#767676]" />
        </div>

        <JobInfo
          position="Digital Marketing"
          period="2 years exp."
          location="Benglore, India"
        />

        <div className="sm:pl-36">
          <hr className="text-[#767676] dark:text-[#767676]" />
        </div>

        <JobInfo
          position="HR"
          period="2 years exp."
          location="Benglore, India"
        />

        <div className="sm:pl-36">
          <hr className="text-[#767676] dark:text-[#767676]" />
        </div>
        <div className="sm:pl-36">
          <h1 className="tracking-[.05em] text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] text-left align-left fonts-space-grotesk text-[#1E2124] dark:text-[#fafafa]">
            Perks and benefits
          </h1>
          <div className="gap-28">
            <Benefits
              benefit1="Stay Healthy"
              benefit2="Save for the future"
              benefit3="Family"
            />
            <Benefits
              benefit1="Stay Healthy"
              benefit2="Save for the future"
              benefit3="Family"
            />
            <Benefits
              benefit1="Stay Healthy"
              benefit2="Save for the future"
              benefit3="Family"
            />
          </div>
        </div>

        <CareerImg
          career1={career1}
          career2={career2}
          career3={career3}
          career4={career4}
          career5={career5}
          career6={career6}
        />
      </div>
      <div className="px-4 fonts-space-grotesk">
        <hr className="text-[#767676] dark:text-[#767676]" />
      </div>
      <GetStartedNow
        heading="get started now"
        para="Now in over 40 sectors and industries worldwide."
        button="Get Started"/>
    </>
  );
});

export const head: DocumentHead = {
  title: "iTDAY | Career",
};
