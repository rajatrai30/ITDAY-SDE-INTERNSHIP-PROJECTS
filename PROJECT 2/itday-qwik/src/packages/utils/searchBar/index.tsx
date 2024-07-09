export const SearchBar = (props: { search: string; button: string }) => {
    return (
      <>
        <div className="flex justify-center">
          <div className="pl-56 sm:pl-8 md:pl-72 lg:pl-96 mb-3 xl:w-96 relative">
            <div className="w-300 h-3 right-12 mb-14 sm:mb-12 input-group text-[0.9rem] lg:text-[1.8rem] flex flex-wrap items-stretch lg:mb-4 absolute bottom-12 sm:w-300 sm:h-8 sm:right-12 md:w-300 md:h-8 md:right-12 lg:w-651 lg:h-15 lg:right-12 xl:w-701 xl:h-18 xl:right-0 2xl:right-24">
              <input
                type="search"
                className="lg:mr-2 fonts-space-grotesk form-control relative flex-auto min-w-0 block px-2 lg:px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:outline-none"
                placeholder={props.search}
                aria-label="Search"
                aria-describedby="button-addon3"
              />
              <button
                className="w-20 lg:w-23 btn py-2 border-2 bg-[#1E2124] dark:bg-[#EB673E] border-[#fafafa] dark:border-[#EB673E] hover:border-[#EB673E] text-[#fafafa] hover:text-[#EB673E] leading-tight rounded hover:bg-[#fafafa] focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="button"
              >
                {props.button}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  