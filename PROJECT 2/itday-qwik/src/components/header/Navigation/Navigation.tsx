import { component$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { TurnDownArrowRightLight } from "~/packages/utils/icons";

const Navigation = component$(() => {
  const store = useStore({
    bars: false,
  });

  return (
    <>
      <div
        className="py-4 border-t-[1.5px] border-black w-full row-span-full space-y-4"
        style="opacity: 1; transform: translateY(0%) translateZ(0px);"
      >
        <h3 className="text-textGrey text-xs capitalize">Navigation</h3>
        <nav className="flex flex-col space-y-3">
          <a
            className="text-[2rem] hover:opacity-75 transition-all  flex space-x-2 tracking-wide undefined"
            href="/"
          >
            Generate Alpha
          </a>
          <a
            className="text-[2rem] hover:opacity-75 transition-all  flex space-x-2 tracking-wide undefined"
            href="/"
          >
            Our Platforms
          </a>
          <a
            className="text-[2rem] hover:opacity-75 transition-all  flex space-x-2 tracking-wide undefined"
            href="/"
          >
            <TurnDownArrowRightLight />
            <span>Fountry</span>
          </a>
          <a
            className="text-[2rem] hover:opacity-75 transition-all  flex space-x-2 tracking-wide undefined"
            href="/"
          >
            <TurnDownArrowRightLight />
            <span>gotham</span>
          </a>
          <a
            className="text-[2rem] hover:opacity-75 transition-all  flex space-x-2 tracking-wide undefined"
            href="/"
          >
            <TurnDownArrowRightLight />
            <span>apollo</span>
          </a>
          <a
            className="text-[2rem] hover:opacity-75 transition-all  flex space-x-2 tracking-wide undefined"
            href="/"
          >
            Offerings
          </a>
          <a
            className="text-[2rem] hover:opacity-75 transition-all  flex space-x-2 tracking-wide undefined"
            href="/"
          >
            Impact Studies
          </a>
          <a
            className="text-[2rem] hover:opacity-75 transition-all  flex space-x-2 tracking-wide undefined"
            href="/"
          >
            Careers
          </a>

          <Link
            className="text-[2rem] hover:opacity-75 transition-all  flex space-x-2 tracking-wide undefined"
            href="/about"
            onClick$={() => {
                store.bars = true;
              }}          >
            About iTDAY
          </Link>
        </nav>
      </div>
    </>
  );
});

export default Navigation;
