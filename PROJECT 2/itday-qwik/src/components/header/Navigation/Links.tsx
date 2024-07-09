import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { RightArrow } from "~/packages/utils/icons";

export const Links = component$(() => {
  return (
    <>
      <div
        className="py-4 border-t-[1.5px] border-black w-full flex items-start justify-between"
        style="opacity: 1; transform: translateY(0%) translateZ(0px);"
      >
        <h3 className="text-textGrey text-xs capitalize">quick links</h3>
        <div className="space-y-2 text-left">
          <Link className="group relative text-black uppercase font-light text-xs cursor-pointer w-max" href="/blog">
            <a className="flex items-center space-x-2">
              <span className="font-medium">Blog</span>
              <div className="-translate-x-2 w-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all text-sm">
                <RightArrow />
              </div>
            </a>
            <div className="w-0 group-hover:w-full transition-all absolute -bottom-1 left-0 h-[1.5px] bg-black"></div>
          </Link>
          <div className="group relative text-black uppercase font-light text-xs cursor-pointer w-max">
            <a className="flex items-center space-x-2">
              <span className="font-medium">Newsroom</span>
              <div className="-translate-x-2 w-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all text-sm">
                <RightArrow />
              </div>
            </a>
            <div className="w-0 group-hover:w-full transition-all absolute -bottom-1 left-0 h-[1.5px] bg-black"></div>
          </div>
          <div className="group relative text-black uppercase font-light text-xs cursor-pointer w-max">
            <a className="flex items-center space-x-2">
              <span className="font-medium">Letter from the ceo</span>
              <div className="-translate-x-2 w-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all text-sm">
                <RightArrow />
              </div>
            </a>
            <div className="w-0 group-hover:w-full transition-all absolute -bottom-1 left-0 h-[1.5px] bg-black"></div>
          </div>
          <div className="group relative text-black uppercase font-light text-xs cursor-pointer w-max">
            <a className="flex items-center space-x-2">
              <span className="font-medium">Information Security</span>
              <div className="-translate-x-2 w-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all text-sm">
                <RightArrow />
              </div>
            </a>
            <div className="w-0 group-hover:w-full transition-all absolute -bottom-1 left-0 h-[1.5px] bg-black"></div>
          </div>
          <div className="group relative text-black uppercase font-light text-xs cursor-pointer w-max">
            <a className="flex items-center space-x-2">
              <span className="font-medium">Insights</span>
              <div className="-translate-x-2 w-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all text-sm">
                <RightArrow />
              </div>
            </a>
            <div className="w-0 group-hover:w-full transition-all absolute -bottom-1 left-0 h-[1.5px] bg-black"></div>
          </div>
        </div>
      </div>
    </>
  );
});
