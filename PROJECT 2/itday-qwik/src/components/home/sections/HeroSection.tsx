import { component$ } from "@builder.io/qwik";
import banner1 from "../../../Assets/banner/banner1.jpg";

export default component$(() => {
  return (
    <div className="pt-32 lg:max-w-[92vw] 2xl:max-w-[1500px] mx-auto bg-[white] dark:bg-[#1E2124] text-[#1E2124] dark:text-[#fafafa]">
      <div className="px-4 text-[2.5rem] tracking-[.05em] pb-10 sm:text-[3rem] md:text-[4rem] lg:text-[6.25rem] leading-none fonts-space-grotesk">
        <h1>
          Foundational Software
          <br />
          of Tomorrow.
          <br />
          Delivered Today.™
        </h1>
      </div>
      <div className="px-4">
        <img
          src={banner1}
          alt=""
          className="h-76/3 md:(h-76/3 * 2) lg:h-76 w-full"
          width={10000}
          height={56.231884057971}
        />
      </div>
      <div className="py-8 lg:py-10 px-6 lg:px-32">
        <h3 className="text-[1.5rem] lg:text-[2rem] tracking-[.04em] text-left align-left">
          We build softwares that empowers
          <br />
          organization to effectively
          <br />
          intergrate their data, decisions and
          <br />
          operations
        </h3>
      </div>
      <div />
      <div className="py-4 px-6">
      <hr className="text-[#767676]" />
      </div>
    </div>
  );
});
