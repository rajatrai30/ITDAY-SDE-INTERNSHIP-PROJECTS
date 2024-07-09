import { component$ } from "@builder.io/qwik";

export const Offerings = component$(() => {
  return (
    <>
      <div
        class="animate slideFromBottom  animate--med animate--delay-1s"
        className="md:mt-40 lg:mt-0 py-4 border-t-[1.5px] border-black dark:border-[#F1F1F1] w-full space-y-4"
        style="opacity: 1; transform: translateY(0%) translateZ(0px);"
      >
        <div className="flex items-center justify-between w-full">
          <h3 className="text-textGrey text-xs capitalize">Offerings</h3>
          <div className="group relative text-black dark:text-[#F1F1F1] uppercase font-light text-xs cursor-pointer w-max">
            <a>view all offerings</a>
            <div className="w-0 group-hover:w-full transition-all absolute -bottom-1 left-0 h-[1.5px] bg-black dark:bg-[#F1F1F1]"></div>
          </div>
        </div>
      </div>
    </>
  );
});
