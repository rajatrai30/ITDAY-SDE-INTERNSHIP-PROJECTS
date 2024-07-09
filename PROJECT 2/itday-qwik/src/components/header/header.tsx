import { component$, useStore} from "@builder.io/qwik";
// import { QwikLogo } from '../icons/qwik';
// import styles from "./header.css?inline";
import '../header/header.css';
import {
  Bars,
  Cross,
  RightArrow,
  Search,
  TurnDownArrowRightLight,
} from "~/packages/utils/icons";
import logo from "../../Assets/Images/logo1.png";
import { Link } from "@builder.io/qwik-city";
// import Navigation from "./Navigation/Navigation";
import { News } from "./Navigation/News";
import { Offerings } from "./Navigation/Offerings";
import { Impact } from "./Navigation/Impact";
// import { Links } from "./Navigation/Links";

export default component$(() => {
  // useStylesScoped$(styles);

  const store = useStore({
    bars: false,
  });

  return (
    <header className=" fixed top-0 left-0 z-50 py-3 bg-white dark:bg-[#1E2124] text-[#1E1E1E] dark:text-white w-full">
      <div className="w-full max-w-[1500px] mx-auto flex items-center justify-between p-4 px-6 md:px-6">
        <Link href="/">
        <img src={logo} alt="Logo" />
        </Link>

        <div className="flex items-center space-x-8 lg:space-x-16">
          <Link href="/getStartedForm">
            <button className="hidden md:block group w-[11rem] h-[2.5rem] relative fonts-space-grotesk overflow-hidden  outline-none focus:outline-none fonts-prompt font-medium  border  border-[black] dark:border-[#F1F1F1] text-[black] dark:text-[#F1F1F1] hover:text-[#ffffff] dark:hover:text-[black]  px-10 py-2  undefined z-0">
              <div className="bg-[black] dark:bg-[#F1F1F1] absolute block top-0 left-0 h-full -z-10 transition-all w-0 group-hover:w-full duration-300 "></div>
              <span className="transition-all z-10">Get Started</span>
            </button>
          </Link>

          <div className="flex items-center w-[5rem] h-[2.5rem] border border-[#1E2124] dark:border-[#ffffff] justify-evenly">
            <button>
              <Search />
            </button>
            <button
              onClick$={() => {
                store.bars = true;
              }}
            >
              <Bars />
            </button>
            {store.bars && (
              <>
                <div>
                  <header className="w-full fixed top-0 left-0 z-50 py-3 bg-white dark:bg-[#1E2124] text-[#1E1E1E] dark:text-white">
                    <div className="w-full max-w-[1500px] mx-auto flex items-center justify-between p-4 px-6 md:px-6">
                      <Link href="/">
                      <img src={logo} alt="Logo" />
                      </Link>

                      <div className="flex items-center space-x-8 lg:space-x-16">
                        <Link href="/getStartedForm">
                          <button className="hidden md:block group w-[11rem] h-[2.5rem] relative fonts-space-grotesk overflow-hidden  outline-none focus:outline-none fonts-prompt font-medium  border  border-[black] dark:border-[#F1F1F1] text-[black] dark:text-[#F1F1F1] hover:text-[#ffffff] dark:hover:text-[black]  px-10 py-2  undefined z-0">
                            <div className="bg-[black] dark:bg-[#F1F1F1] absolute block top-0 left-0 h-full -z-10 transition-all w-0 group-hover:w-full duration-300 "></div>
                            <span className="transition-all z-10">
                              Get Started
                            </span>
                          </button>
                        </Link>

                        <div className="flex items-center w-[5rem] h-[2.5rem] border border-[#1E2124] dark:border-[#ffffff] justify-evenly">
                          <button>
                            <Search />
                          </button>
                          <button
                            onClick$={() => {
                              store.bars = false;
                            }}
                          >
                            <Cross />
                          </button>
                        </div>
                      </div>
                    </div>
                  </header>

                  <div class="animate slideFromTop animate--fast " className=" h-screen overflow-hidden transition-all duration-300 fixed top-0 left-0 w-screen bg-white dark:bg-[#1E2124] text-black dark:text-[#F1F1F1] z-30 overflow-y-auto px-6">
                    <div className="p-4 mt-[6rem] h-[43rem] overflow-y-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-4 lg:grid-rows-2 gap-x-8 gap-y-4 lg:gap-y-12 xl:gap-y-4 dark:bg-[#1E2124] dark:text-[#F1F1F1]">
                      {/* <Navigation></Navigation> */}
                      <div
                        class="animate slideFromBottom animate--med animate--delay-1s"
                        className="py-4 border-t-[1.5px] border-black dark:border-[#F1F1F1] w-full row-span-full space-y-4"
                        style="opacity: 1; transform: translateY(0%) translateZ(0px);"
                      >
                        <h3 className="text-textGrey text-xs capitalize">
                          Navigation
                        </h3>
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
                          <div
                            onClick$={() => {
                              store.bars = false;
                            }}
                          >
                            <Link
                              className="text-[2rem] hover:opacity-75 transition-all  flex space-x-2 tracking-wide undefined"
                              href="/career"
                            >
                              Careers
                            </Link>
                          </div>
                          <div
                            onClick$={() => {
                              store.bars = false;
                            }}
                          >
                            <Link
                              className="text-[2rem] hover:opacity-75 transition-all  flex space-x-2 tracking-wide undefined"
                              href="/about"
                            >
                              About iTDAY
                            </Link>
                          </div>
                        </nav>
                      </div>
                      <News></News>
                      <Offerings></Offerings>
                      <Impact></Impact>
                      {/* <Links></Links> */}
                      <div
                        class="animate slideFromBottom animate--delay-2s animate--med"
                        className="md:mt-44 lg:mt-0 py-4 border-t-[1.5px] border-black dark:border-[#F1F1F1] w-full flex items-start justify-between"
                        style="opacity: 1; transform: translateY(0%) translateZ(0px);"
                      >
                        <h3 className="text-textGrey text-xs capitalize">
                          quick links
                        </h3>
                        <div className="space-y-2 text-left">
                          <div
                            onClick$={() => {
                              store.bars = false;
                            }}
                          >
                            <Link
                              className="group relative text-black dark:text-[#F1F1F1] uppercase font-light text-xs cursor-pointer w-max"
                              href="/blogRoom"
                            >
                              <a className="flex items-center space-x-2">
                                <span className="font-medium">Blog</span>
                                <div className="-translate-x-2 w-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all text-sm">
                                  <RightArrow />
                                </div>
                              </a>
                              <div className="w-0 group-hover:w-[30%] transition-all absolute -bottom-1 left-0 h-[1.5px] bg-black dark:bg-[#F1F1F1]"></div>
                            </Link>
                          </div>
                          <div className="group relative text-black dark:text-[#F1F1F1] uppercase font-light text-xs cursor-pointer w-max">
                            <a className="flex items-center space-x-2">
                              <span className="font-medium">Newsroom</span>
                              <div className="-translate-x-2 w-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all text-sm">
                                <RightArrow />
                              </div>
                            </a>
                            <div className="w-0 group-hover:w-full transition-all absolute -bottom-1 left-0 h-[1.5px] bg-black dark:bg-[#F1F1F1]"></div>
                          </div>
                          <div className="group relative text-black dark:text-[#F1F1F1] uppercase font-light text-xs cursor-pointer w-max">
                            <a className="flex items-center space-x-2">
                              <span className="font-medium">
                                Letter from the ceo
                              </span>
                              <div className="-translate-x-2 w-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all text-sm">
                                <RightArrow />
                              </div>
                            </a>
                            <div className="w-0 group-hover:w-full transition-all absolute -bottom-1 left-0 h-[1.5px] bg-black dark:bg-[#F1F1F1]"></div>
                          </div>
                          <div className="group relative text-black dark:text-[#F1F1F1] uppercase font-light text-xs cursor-pointer w-max">
                            <a className="flex items-center space-x-2">
                              <span className="font-medium">
                                Information Security
                              </span>
                              <div className="-translate-x-2 w-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all text-sm">
                                <RightArrow />
                              </div>
                            </a>
                            <div className="w-0 group-hover:w-full transition-all absolute -bottom-1 left-0 h-[1.5px] bg-black dark:bg-[#F1F1F1]"></div>
                          </div>
                          <div className="group relative text-black dark:text-[#F1F1F1] uppercase font-light text-xs cursor-pointer w-max">
                            <a className="flex items-center space-x-2">
                              <span className="font-medium">Insights</span>
                              <div className="-translate-x-2 w-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all text-sm">
                                <RightArrow />
                              </div>
                            </a>
                            <div className="w-0 group-hover:w-full transition-all absolute -bottom-1 left-0 h-[1.5px] bg-black dark:bg-[#F1F1F1]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
});

