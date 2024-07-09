import { component$ } from "@builder.io/qwik";
import { TurnDownArrowRightLight } from "~/packages/utils/icons";


export const News = component$(() => {
  return (
    <>
      <div
        class="animate slideFromBottom  animate--med animate--delay-1s"
        className="py-4 border-t-[1.5px] border-black dark:border-[#F1F1F1] w-full space-y-4"
        style={{opacity: "1", transform: "translateY(0%) translateZ(0px)"}}
      >
        <div className="flex items-center justify-between w-full">
          <h3 className="text-textGrey text-xs capitalize">latest news</h3>
          <div className="group relative text-black dark:text-[#F1F1F1] uppercase font-light text-xs cursor-pointer w-max">
            <a>newsroom</a>
            <div class="w-0 group-hover:w-full transition-all absolute -bottom-1 left-0 h-[1.5px] bg-black dark:bg-[#F1F1F1]"></div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h6 className="uppercase text-xs text-textGrey font-light">
              mAY 24, 2022
            </h6>
            <div className="space-y-4">
              <div className="w-full min-h-[6.5rem] bg-black dark:bg-[#F1F1F1]"></div>
              <h1 className="leading-snug max-text-line-3">
                Palantir, Trafigura aim to track carbon emissions for the oil,
                metals industry
              </h1>
              <div className="flex items-baseline space-x-2">
                <TurnDownArrowRightLight />
                <div className="group relative text-black dark:text-[#F1F1F1] uppercase font-light text-sm cursor-pointer w-max">
                  <a>read more</a>
                  <div className="w-0 group-hover:w-full transition-all absolute bottom-0 left-0 h-[1.5px] bg-black dark:bg-[#F1F1F1]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h6 className="uppercase text-xs text-textGrey">
              january 5, 2022
            </h6>
            <div className="space-y-4">
              <div className="w-full min-h-[6.5rem] bg-black dark:bg-[#F1F1F1]"></div>
              <h1 className="leading-snug max-text-line-3">
                Palantir, Trafigura aim to track carbon emissions for the oil,
                metals industry
              </h1>
              <div className="flex items-baseline space-x-2">
                <TurnDownArrowRightLight />
                <div className="group relative text-black dark:text-[#F1F1F1] uppercase font-light text-sm cursor-pointer w-max">
                  <a>watch interview</a>
                  <div className="w-0 group-hover:w-full transition-all absolute bottom-0 left-0 h-[1.5px] bg-black dark:bg-[#F1F1F1]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
