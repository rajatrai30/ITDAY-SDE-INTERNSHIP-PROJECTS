import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import { GetStartedNow } from "~/components/sections/GetStartedNow";
import banner1 from "../../Assets/banner/banner1.jpg";
import { RightArrow } from "~/packages/utils/icons";
import React from "React";

export default component$(() => {
  return (
    <>
      <div className="p-4 pt-40 space-y-8 fonts-space-grotesk bg-[white] dark:bg-[#1E2124] text-[#1E2124] dark:text-[#fafafa]">
        <div className="flex flex-col md:flex md:flex-col lg:flex lg:flex-row lg:justify-between lg:items-start xl:flex xl:flex-row xl:justify-between xl:items-start">
          <div className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl fonts-space-grotesk">
            <h1 className="pb-4 tracking-[.04em] text-3xl sm:text-2xl md:text-2xl lg:text-3xl fonts-space-grotesk">
              We believe in augmenting <br />
              human intelligence, not <br />
              replacing it.
            </h1>
          </div>
          <div className="tracking-[.05em] lg:max-w-[92vw] 2xl:max-w-[1500px] text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5.25rem] leading-none fonts-space-grotesk">
            <h1>Why We’re Here</h1>
          </div>
        </div>
        <div className="pb-4 sm:pb-12">
          <img
            src={banner1}
            alt=""
            className="h-76/3 md:(h-76/3 * 2) lg:h-76 w-full"
          />
        </div>
        <hr className="text-[#767676] dark:text-[#767676]" />
        <div className="p-4 sm:p-8 lg:py-10 w-full space-y-8 fonts-space-grotesk text-[#1E2124] dark:text-[#fafafa]">
          <div className="grid grid-cols sm:pl-10">
            <h3 className="tracking-[.04em] text-[1.5rem] text-3xl sm:text-[1.8rem] md:text-[2rem] text-left align-left">
              With good data and the right <br /> technology, people and
              institutions
              <br />
              today can still solve hard problems
              <br /> and change the world for the better.
            </h3>{" "}
            <br />
            <h3 className="text-xl text-left align-left">
              In 2020, when we looked at the available technology, we saw <br />
              products that were too rigid to handle novel problems, and <br />
              custom systems that took too long to deploy and required too{" "}
              <br /> many services to maintain and improve.
              <br /> We saw automated approaches that failed against adaptive{" "}
              <br />
              adversaries, and all-or-nothing access controls that forced <br />
              organizations to make unacceptable trade-offs between <br />
              collaborating and securing sensitive data from misuse. <br />{" "}
              <br /> We saw a need for a different kind of technology, and we
              knew it <br /> would take a different kind of company to build it.
              That’s why we <br /> founded iTDAY.
            </h3>
          </div>
        </div>

        <hr className="text-[#767676] dark:text-[#767676]" />
        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[6.25rem] lg:ml-[5rem] capitalize">
          What we do
        </h1>
        <div className="sm:pl-20">
          <hr className="text-[#767676] dark:text-[#767676]" />
        </div>
        <div className="sm:pl-16 lg:py-10 space-y-8 fonts-space-grotesk text-[#1E2124] dark:text-[#fafafa]">
          <div className="flex flex-col items-start md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-2 lg:gap-4 xl:grid xl:grid-cols-2 xl:gap-4">
            <div className="pl-4 pb-4">
              <h3 className="tracking-[.05em] text-3xl font-large">
                We make products for human-driven analysis of real-world data
              </h3>
            </div>
            <div className="right-0 pl-4">
              <h3 className="tracking-[.05em] text-2xl pb-6">
                We’re focused on creating the world’s best user experience for
                working with data, one that empowers people to ask and answer
                complex questions without requiring them to master querying
                languages, statistical modeling, or the command line.
              </h3>

              <div className="flex flex-col items-start justify-between lg:flex lg:flex-row lg:items-start lg:justify-between">
                <p className="tracking-[.05em] text-[1rem] text-[#767676] fonts-space-grotesk pb-3">
                  To achieve this, we build platforms for <br /> integrating,
                  managing, and securing data <br /> on top of which we layer
                  applications for <br />
                  fully interactive human-driven, machine- <br /> assisted
                  analysis.
                </p>
                <Link href="/">
                  <button className="group relative flex text-base items-center space-x-4 undefined">
                    <div className="text-[#1E2124] dark:text-[#fafafa] font-medium flex flex-row gap-5 justify-center items-center font-sans">
                      <span>Our Platforms</span>
                      <div class="text-black w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                        <RightArrow />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -left-4 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:pl-20">
          <hr className="text-[#767676] dark:text-[#767676]" />
        </div>

        <div className="sm:pl-16 lg:py-10 space-y-8 fonts-space-grotesk text-[#1E2124] dark:text-[#fafafa]">
          <div className="flex flex-col items-start md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-2 lg:gap-4 xl:grid xl:grid-cols-2 xl:gap-4">
            <div className="pl-4 pb-4">
              <h3 className="tracking-[.05em] text-3xl font-large">
                We build our company <br /> around mission-driven <br />
                engineering
              </h3>
            </div>
            <div className="right-0 pl-4">
              <h3 className="tracking-[.05em] text-2xl pb-6">
                We’re engineers, not academics.
              </h3>

              <div className="flex flex-col items-start justify-between lg:flex lg:flex-row lg:items-start lg:justify-between">
                <p className="tracking-[.05em] text-[1rem] text-[#767676] fonts-space-grotesk pb-3">
                  At our offices around the world, we’ve <br /> assembled a team
                  that combines practical <br /> expertise in distributed
                  systems <br />
                  infrastructure, big data processing, user <br /> experience
                  design, and data science. <br /> Whatever their role, each
                  iTDAYian <br /> combines an uncompromising engineering <br />
                  mindset with an unwavering focus on <br /> executing in
                  service of the mission.
                </p>
                <Link href="/">
                  <button className="group relative flex text-base items-center space-x-4 undefined">
                    <div className="text-[#1E2124] dark:text-[#fafafa] font-medium flex flex-row gap-5 justify-center items-center font-sans">
                      <span>Our People</span>
                      <div class="text-black w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                        <RightArrow />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -left-4 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:pl-20">
          <hr className="text-[#767676] dark:text-[#767676]" />
        </div>

        <div className="tracking-[.05em] sm:pl-16 lg:py-10 space-y-8 fonts-space-grotesk text-[#1E2124] dark:text-[#fafafa]">
          <div className="flex flex-col items-start md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-2 lg:gap-4 xl:grid xl:grid-cols-2 xl:gap-4">
            <div className="pl-4 pb-4">
              <h3 className="text-3xl font-large">
                We meet the problems <br /> where they live
              </h3>
            </div>
            <div className="right-0 pl-4">
              <h3 className="tracking-[.05em] text-2xl pb-6">
                Our customers have data and a deep <br /> understanding of the
                problems they <br /> face. We have proven products and <br /> an
                engineering mindset.
              </h3>

              <div className="flex flex-col items-start justify-between lg:flex lg:flex-row lg:items-start lg:justify-between">
                <p className="tracking-[.05em] text-[1rem] text-[#767676] fonts-space-grotesk pb-3">
                  We send our engineers into the field to work <br /> directly
                  with our customers—deploying our <br /> products, integrating
                  their data, optimizing <br /> their workflows, and producing
                  operational <br /> results in weeks, not years. By
                  establishing <br /> a true partnership, we help customers get{" "}
                  <br /> the most out of our products and <br />
                  engineering expertise.
                </p>
                <Link href="/">
                  <button className="group relative flex text-base items-center space-x-4 undefined">
                    <div className="text-[#1E2124] dark:text-[#fafafa] font-medium flex flex-row gap-5 justify-center items-center font-sans">
                      <span>
                        Challenges We Help <br /> Our Customers Face
                      </span>
                      <div class="text-black w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                        <RightArrow />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -left-4 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="text-[#767676] dark:text-[#767676]" />
        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[6.25rem] lg:ml-[5rem] capitalize">
          Where we’re going
        </h1>
        <div className="sm:pl-16">
          <hr className="text-[#767676] dark:text-[#767676]" />
        </div>

        <div className="pl-4 sm:pl-16 lg:py-16 fonts-space-grotesk text-[#1E2124] dark:text-[#fafafa]">
          <div className="flex flex-col items-start md:flex md:flex-row md:justify-between lg:flex lg:flex-row lg:justify-between xl:flex xl:flex-row xl:justify-between">
            <div></div>
            <div className="pr-10">
              <h3 className="tracking-[.05em] text-3xl text-left align-left">
                Organizations around the world are using <br /> Palantir to help
                them do their most <br /> important work. <br /> <br />
              </h3>
              <h3 className="tracking-[.05em] text-xl">
                With Palantir, investigators are uncovering human trafficking
                rings, <br /> finding exploited children, and unraveling complex
                financial crimes. <br /> <br /> Humanitarian response
                organizations are directing resources more <br /> effectively to
                communities affected by natural disasters. Prosecutors <br />{" "}
                are building stronger cases against insider traders. Public
                health <br /> officials are tracking and containing the spread
                of deadly diseases. <br /> Information security specialists are
                defending against the theft of <br />
                intellectual property, while oversight authorities are auditing
                user <br /> activity to protect sensitive data from misuse or
                abuse. And this is <br /> just the beginning. <br /> <br /> We
                are working to build a future in which public institutions,{" "}
                <br /> commercial enterprises, and non-profit organizations can
                use data to <br /> function as they were designed—to fulfill the
                mandates with which <br /> they’ve been entrusted, to deliver
                value to customers, and to <br /> distribute aid to those most
                in need.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-6 fonts-space-grotesk">
        <hr className="text-[#767676] dark:text-[#767676]" />
      </div>
      <GetStartedNow
        heading="get started now"
        para="Now in over 40 sectors and industries worldwide."
        button="Get Started"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "iTDAY | About",
};
