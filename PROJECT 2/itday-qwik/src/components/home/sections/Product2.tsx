/* eslint-disable qwik/valid-lexical-scope */
import { component$, useStore } from "@builder.io/qwik";
// import * as Popover from "@radix-ui/react-popover";
import * as React from "React";
import banner1 from "../../../Assets/banner/banner1.jpg";
import { TurnDownSecArrow } from "../../../packages/utils/icons";
import { Item, Item2 } from "~/packages/utils/items";
import "./Product2.css";

export const Product2 = component$(() => {
  const store = useStore({
    fountry: false,
    gotham: false,
    apollo: false,
  });

  return (
    <>
      <div className="p-4 lg:py-10 w-full space-y-8 fonts-space-grotesk bg-[white] dark:bg-[#1E2124] text-[#1E2124] dark:text-[#fafafa]">
        <h1 className="text-[2.5rem] tracking-[.05em] sm:text-[3rem] md:text-[4rem] lg:text-[6.25rem] lg:ml-[5rem] capitalize">
          Platforms
        </h1>
        <div className="flex flex-col lg:flex lg:flex-row items-start justify-evenly bg-[white] dark:bg-[#1E2124] text-[#1E2124] dark:text-[#fafafa]">
          <div className="flex flex-col items-start lg:items-center flex-auto w-32">
            <div className="flex flex-row items-start lg:items-center cursor-pointer">
              <div
                onMouseOver$={() => {
                  store.fountry = true;
                }}
              >
                <Item name="Fountry" />
              </div>
              {store.fountry && (
                <>
                  <div
                    className="absolute z-50 bg-[white] dark:bg-[#1E2124] text-[#1E2124] dark:text-[#fafafa] flex flex-col"
                    onMouseOut$={() => {
                      store.fountry = false;
                    }}
                  >
                    <Item2 name="Fountry" />
                  </div>
                </>
              )}
            </div>
            <div>
              {store.fountry && (
                <>
                  <div
                    class="animate-pulse"
                    className="bg-[#1E2124] dark:bg-[#F1F1F1] text-[#767676] h-36 w-36 p-6 font-sans transition duration-200 ease-in-out group-hover:block"
                  >
                    <p className="font-[0.5rem] md:font-[1rem] lg:font-[1.5rem]">
                      Foundry leverages an open architecture to inform
                      closed-loop operations — connecting data, analytics, and
                      business teams to a common foundation. <br />
                      <br />
                      From data integration to operational applications, Foundry
                      is the end-to-end solution for data-driven decision-making
                      — and it's deployable in hours.
                    </p>
                    <br />
                    <br />
                    <button className="group relative flex text-base items-center space-x-4 undefined">
                      <div className="text-[#767676] flex flex-row items-start cursor-pointer gap-x-4">
                        <div class="w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                          <TurnDownSecArrow />
                        </div>

                        <a href="#">Explore Fountry</a>
                      </div>
                      <div class="absolute -bottom-2 -left-4 w-0 h-[2px] bg-[#767676] transition-all duration-300 group-hover:w-full"></div>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-center flex-auto w-32">
            <div className="flex flex-row items-start lg:items-center cursor-pointer">
              <div
                onMouseOver$={() => {
                  store.gotham = true;
                }}
              >
                <Item name="Gotham" />
              </div>
              {store.gotham && (
                <>
                  <div
                    className="absolute z-50 bg-[white] dark:bg-[#1E2124] text-[#1E2124] dark:text-[#fafafa] flex flex-col"
                    onMouseOut$={() => {
                      store.gotham = false;
                    }}
                  >
                    <Item2 name="Gotham" />
                  </div>
                </>
              )}
            </div>
            <div>
              {store.gotham && (
                <>
                  <div
                    class="animate-pulse"
                    className="bg-[#1E2124] dark:bg-[#F1F1F1] text-[#767676] h-36 w-36 p-6 font-sans"
                  >
                    <p className="font-[0.5rem] md:font-[1rem] lg:font-[1.5rem]">
                      Gotham leverages an open architecture to inform
                      closed-loop operations — connecting data, analytics, and
                      business teams to a common foundation. <br />
                      <br />
                      From data integration to operational applications, Foundry
                      is the end-to-end solution for data-driven decision-making
                      — and it's deployable in hours.
                    </p>
                    <br />
                    <br />
                    <button className="group relative flex text-base items-center space-x-4 undefined">
                      <div className="text-[#767676] flex flex-row items-start cursor-pointer gap-x-4">
                        <div class="w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                          <TurnDownSecArrow />
                        </div>

                        <a href="#">Explore Gotham</a>
                      </div>
                      <div class="absolute -bottom-2 -left-4 w-0 h-[2px] bg-[#767676] transition-all duration-300 group-hover:w-full"></div>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-center flex-auto w-32">
            <div className="flex flex-row items-start lg:items-center cursor-pointer">
              <div
                onMouseOver$={() => {
                  store.apollo = true;
                }}
              >
                <Item name="Apollo" />
              </div>
              {store.apollo && (
                <>
                  <div
                    className="absolute z-50 bg-[white] dark:bg-[#1E2124] text-[#1E2124] dark:text-[#fafafa] flex flex-col"
                    onMouseOut$={() => {
                      store.apollo = false;
                    }}
                  >
                    <Item2 name="Apollo" />
                  </div>
                </>
              )}
            </div>
            <div>
              {store.apollo && (
                <>
                  <div
                    class="animate-pulse"
                    className="bg-[#1E2124] dark:bg-[#F1F1F1] text-[#767676] h-36 w-36 p-6 font-sans"
                  >
                    <p className="font-[0.5rem] md:font-[1rem] lg:font-[1.5rem]">
                      Apollo leverages an open architecture to inform
                      closed-loop operations — connecting data, analytics, and
                      business teams to a common foundation. <br />
                      <br />
                      From data integration to operational applications, Foundry
                      is the end-to-end solution for data-driven decision-making
                      — and it's deployable in hours.
                    </p>
                    <br />
                    <br />
                    <button className="group relative flex text-base items-center space-x-4 undefined">
                      <div className="text-[#767676] flex flex-row items-start cursor-pointer gap-x-4">
                        <div class="w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                          <TurnDownSecArrow />
                        </div>

                        <a href="#">Explore Apollo</a>
                      </div>
                      <div class="absolute -bottom-2 -left-4 w-0 h-[2px] bg-[#767676] transition-all duration-300 group-hover:w-full"></div>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="">
          <div className="pt-10 px-4">
            <img
              src={banner1}
              alt=""
              className="h-76/3 md:(h-76/3 * 2) lg:h-76 w-full"
              width={10000}
              height={56.231884057971}
            />
          </div>
          <hr className="text-black" />
        </div>
      </div>
    </>
  );
});
