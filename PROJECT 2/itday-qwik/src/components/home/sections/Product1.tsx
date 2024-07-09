import { component$ } from "@builder.io/qwik";
import { RightArrow } from "~/packages/utils/icons";

export const Product1 = component$(() => {
  return (
    <div className="p-4 lg:py-10 space-y-8 dark:bg-[#1E2124] dark:text-[#FAFAFA]">
      <div className="grid grid-cols-2 gap-x-4 p-4 py-10">
        <p></p>
        <h1 className="lg:ml-[5rem] capitalize text-3xl lg:text-4xl text-right">
          Generating Alpha Amidst <br /> Continuous Disruption
        </h1>
      </div>
      <div className="w-full flex items-center">
        <div className="w-full lg:w-[90vw] grid grid-cols-1 md:grid-cols-2 gap-4 h-auto">
          <div className="grid grid-cols-2 gap-x-4 p-4 py-10">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[#1E2124] dark:text-[#FAFAFA]">
                We are entering an era of continuous disruption.
              </h3>
              <p className="text-[#767676]">
                In this context, Palantir recognizes our customers existential
                need to utilize software to generate competitive advantage — or,
                alpha. Everyone else will find themselves in a perpetual game of
                catchup.
              </p>
            </div>
            <div className="h-full flex flex-col items-start justify-between space-y-4">
              <p className="text-[#767676]">
                We've advanced beyond incremental efficiencies to bring
                intelligence to the core of everything that matters most to your
                enterprise.
              </p>
              <div>
                <button class="group relative flex text-base items-center space-x-4 undefined">
                  <span>Learn More About Alpha Generation</span>
                  <div class="text-black dark:text-[#FAFAFA] w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                    <RightArrow></RightArrow>
                  </div>
                  <div class="absolute -bottom-2 -left-4 w-0 h-[2px] bg-black dark:bg-[#FAFAFA] transition-all duration-300 group-hover:w-full"></div>
                </button>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>
      <div>
        <hr className="text-black" />
      </div>
    </div>
  );
});
