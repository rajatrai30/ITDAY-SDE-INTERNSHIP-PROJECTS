import { component$ } from "@builder.io/qwik";

export const Impact = component$(() => {
  return (
    <>
      <div
        class="animate slideFromBottom animate--delay-2s animate--med"
        className="md:mt-16 lg:mt-0 py-4 border-t-[1.5px] border-black dark:border-[#F1F1F1] w-full space-y-4"
        style="opacity: 1; transform: translateY(0%) translateZ(0px);"
      >
        <div className="flex items-center justify-between w-full">
          <h3 className="text-textGrey text-xs capitalize">latest impact</h3>
          <div className="group relative text-black dark:text-[#F1F1F1] uppercase font-light text-xs cursor-pointer w-max">
            <a>view all impact studies</a>
            <div className="w-0 group-hover:w-full transition-all absolute -bottom-1 left-0 h-[1.5px] bg-black dark:bg-[#F1F1F1]"></div>
          </div>
        </div>
        <div className="group hover:bg-[#00000000] cursor-pointer transition-all duration-300 w-full min-h-[12.5rem] h-[75%] bg-[#EB673E] border-[#EB673E] border flex flex-col items-start justify-between p-4">
          <h4 className="text-dark text-xs group-hover:text-[#EB673E] transition-all duration-300 uppercase">
            Text Impact
          </h4>
          <h1 className="text-4xl text-dark group-hover:text-[#EB673E] transition-all duration-300 uppercase">
            Swiss Re
          </h1>
        </div>
      </div>
    </>
  );
});
