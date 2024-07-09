// import { component$ } from "@builder.io/qwik";

import { Link } from "@builder.io/qwik-city";

export const GetStartedNow = (props: { heading: string; para: string; button: string }) => {
  return (
    <div className="p-4 md:px-6 lg:py-10 w-full space-y-8 dark:bg-[#1e2124] dark:text-[#FAFAFA]">
      <h3 className="lg:ml-[5rem] capitalize text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[6.25rem] tracking-wide">
        {props.heading}
      </h3>
      <div className="w-full flex items-start justify-end">
        <div className="max-w-[25rem] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
          <p className="text-md text-textGrey">{props.para}</p>
          <Link href="/getStartedForm">
            <button className=" md:block group w-[11rem] h-[2.5rem] relative fonts-space-grotesk overflow-hidden  outline-none focus:outline-none fonts-prompt font-medium  border  border-[black] dark:border-[#F1F1F1] text-[black] dark:text-[#F1F1F1] hover:text-[#ffffff] dark:hover:text-[black]  px-10 py-2  undefined z-0">
              <div className="bg-[black] dark:bg-[#F1F1F1] absolute block top-0 left-0 h-full -z-10 transition-all w-0 group-hover:w-full duration-300 "></div>
              <span className="transition-all z-10">{props.button}</span>
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};
