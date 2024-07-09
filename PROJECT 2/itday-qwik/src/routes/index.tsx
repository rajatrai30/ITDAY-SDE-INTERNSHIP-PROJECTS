import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import '../routes/index.css';

import HeroSection from "~/components/home/sections/HeroSection";
import { Product1 } from "~/components/home/sections/Product1";
import { Product2 } from "~/components/home/sections/Product2";
import { Product3 } from "~/components/home/sections/Product3";
import { GetStartedNow } from "~/components/sections/GetStartedNow";





export default component$(() => {
  return (
    <div className="bg-[white] dark:bg-[#1E2124]">
      <HeroSection />
      <Product1 />
      <Product2 />
      <Product3 />
      <GetStartedNow heading="get started now" para="Now in over 40 sectors and industries worldwide." button="Get Started" />
    </div>
  );
});

export const head: DocumentHead = {
  title: "iTDAY! Qwik",
};

// export const container = {
//   hidden: { opacity: 1, scale: 1 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.025,
//     },
//   },
// }
