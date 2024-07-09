import { Link } from "@builder.io/qwik-city";
import React from "React";
import { TurnDownArrowRightLight, TurnUpArrowRightBlack } from "../icons";
import { Button } from "../button";

// ************************************* HOME PAGE ************************************ //
export const Item = (props: { name: string; link?: string }) => {
  return (
    <div className="w-full">
      <div className="flex items-start space-x-4 text-2xl lg:text-4xl py-4 lg:py-8 bg-[white] dark:bg-[#1E2124]">
        <div className="text-dark">
          <TurnUpArrowRightBlack />
        </div>
        <span className="capitalize font-light cursor-pointer">
          {props.name}
        </span>
      </div>
    </div>
  );
};

export const Item2 = (props: { name: string; link?: string }) => {
  return (
    <div className="w-full">
      <div className="flex items-start space-x-4 text-2xl lg:text-4xl py-4 lg:py-8">
        <div className="text-dark">
          <TurnDownArrowRightLight />
        </div>
        <span className="capitalize font-light cursor-pointer">
          {props.name}
        </span>
      </div>
    </div>
  );
};
// XX ************************************* HOME PAGE ************************************ XX //

// ************************************* CAREER PAGE ************************************ //
export const JobInfo = (props: {
  position: string;
  period: string;
  location: string;
}) => {
  return (
    <div className="sm:pl-36 lg:py-10 fonts-space-grotesk text-[#1E2124] dark:text-[#fafafa]">
      <div className="flex flex-col justify-between items-start md:flex md:flex-row md:items-center md:justify-between lg:flex lg:flex-row lg:justify-between lg:items-start xl:flex xl:flex-row xl:justify-between xl:items-start">
        <Link href="/careerdesc">
          <div className="flex flex-row items-center gap-4">
            <TurnDownArrowRightLight />
            <h3 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl text-[#1E2124] dark:text-[#fafafa]">
              {props.position}
            </h3>
          </div>
        </Link>

        <div className="flex flex-col items-start">
          <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl text-[#1E2124] dark:text-[#fafafa]">
            {props.period}
          </p>
          <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl text-[#1E2124] dark:text-[#fafafa]">
            {props.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Benefits = (props: {
  benefit1: string;
  benefit2: string;
  benefit3: string;
}) => {
  return (
    <div className="px-12 py-12 flex flex-col justify-between items-start md:flex md:flex-col md:items-start md:justify-between lg:flex lg:flex-col lg:justify-between lg:items-start xl:flex xl:flex-row xl:justify-between xl:items-start">
      <div className="flex flex-col items-start">
        <p className="tracking-[-.11em] text-[1.5rem] text-left align-left fonts-space-grotesk text-[#767676]">
          -- 01
        </p>
        <h1 className="tracking-[.05em] text-[1.5rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.8rem] fonts-space-grotesk text-[#1E2124] dark:text-[#fafafa]">
          {props.benefit1}
        </h1>
      </div>
      <div className="flex flex-col items-start">
        <p className="tracking-[-.11em] text-[1.5rem] text-left align-left fonts-space-grotesk text-[#767676]">
          -- 02
        </p>
        <h1 className="tracking-[.05em] text-[1.5rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.8rem] fonts-space-grotesk text-[#1E2124] dark:text-[#fafafa]">
          {props.benefit2}
        </h1>
      </div>
      <div className="flex flex-col items-start">
        <p className="tracking-[-.11em] text-[1.5rem] text-left align-left fonts-space-grotesk text-[#767676]">
          -- 03
        </p>
        <h1 className="tracking-[.05em] text-[1.5rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.8rem] fonts-space-grotesk text-[#1E2124] dark:text-[#fafafa]">
          {props.benefit3}
        </h1>
      </div>
    </div>
  );
};

export function CareerImg({
  career1,
  career2,
  career3,
  career4,
  career5,
  career6,
}) {
  return (
    <>
      <div className="px-2 lg:px-16 sm:pt-32 flex flex-col justify-between items-center md:flex md:flex-col md:items-center md:justify-between lg:flex lg:flex-row lg:justify-between lg:items-start xl:flex xl:flex-row xl:justify-between xl:items-start">
        <div className="flex flex-col items-start">
          <div className="">
            <img
              src={career1}
              alt=""
              className="h-28 sm:h-38 md:w-62 w-39 pb-3 lg:h-28 lg:pr-2 xl:h-38 xl:w-39 2xl:pr-0"
            />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="">
            <img
              src={career2}
              alt=""
              className="h-28 sm:h-38 md:w-62 w-39 pb-3 lg:h-28 xl:h-38 xl:w-39"
            />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="">
            <img
              src={career3}
              alt=""
              className="h-28 w-39 sm:h-38 md:w-62 pb-3 lg:h-28 lg:pl-2 xl:h-38 xl:w-62 2xl:pl-0"
            />
          </div>
        </div>
      </div>

      <div className="px-2 sm:px-16 sm:pb-32 flex flex-col justify-between items-center md:flex md:flex-col md:items-center md:justify-between lg:flex lg:flex-row lg:justify-between lg:items-start xl:flex xl:flex-row xl:justify-between xl:items-start">
        <div className="flex flex-col items-start">
          <div className="">
            <img
              src={career4}
              alt=""
              className="h-28 w-39 md:w-62 md:h-38 lg:w-49 lg:h-28 lg:pr-2 pb-3 2xl:pr-0"
            />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="">
            <img
              src={career5}
              alt=""
              className="h-28 w-39 md:w-62 md:h-38 lg:w-51 lg:h-28 pb-3"
            />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="">
            <img
              src={career6}
              alt=""
              className="h-28 w-39 md:w-62 md:h-38 lg:w-33 lg:h-28 lg:pl-2 pb-3 2xl:pl-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export const AbsoluteImgText = (props: { text1: string; text2: string }) => {
  return (
    <div className="relative">
      <div className="pb-3 bottom-32 left-12 absolute sm:bottom-40 sm:left-16 md:bottom-40 md:left-16 lg:bottom-52 lg:left-30 xl:bottom-52 xl:left-32">
        <div className="lg:max-w-[92vw] 2xl:max-w-[1500px] mx-auto text-[1rem] sm:text-[3rem] md:text-[4rem] lg:text-[6.25rem] fonts-space-grotesk text-2xl text-[#FAFAFA]">
          <h1 className="tracking-[.04em] md:pb-8 lg:pb-8 xl:pb-8">
            {props.text1}
          </h1>
        </div>
        <div className="tracking-[.04em] text-0.2xl sm:text-xl md:text-2xl lg:text-2xl fonts-space-grotesk text-[#fafafa]">
          <h1>{props.text2}</h1>
        </div>
      </div>
    </div>
  );
};
// XX ************************************* CAREER PAGE ************************************ XX //

// ************************************* CAREER DESCRIPTION PAGE ************************************ //
export const JobRoleInfo = (props: {
  profileTitle: string;
  location: string;
}) => {
  return (
    <div className="sm:px-16 flex flex-col md:flex md:flex-col lg:flex lg:flex-row lg:justify-between lg:items-start xl:flex xl:flex-row xl:justify-between xl:items-start">
      <div className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl fonts-space-grotesk">
        <h1 className="tracking-[.05em] text-[2rem] lg:text-[3.5rem] fonts-space-grotesk">
          {props.profileTitle}
        </h1>
        <h1 className="tracking-[.15em] py-6 text-[1rem] lg:text-[1.5rem] uppercase fonts-space-grotesk text-[#767676]">
          {props.location}
        </h1>
      </div>
      <Button btnText="Apply for this job" />
    </div>
  );
};
// XX ************************************* CAREER DESCRIPTION PAGE ************************************ XX //
