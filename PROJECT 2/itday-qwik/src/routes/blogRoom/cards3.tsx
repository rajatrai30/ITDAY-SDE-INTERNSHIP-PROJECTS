
export const Cards3 = (props: {
  image: string;
  title1: string;
  title2: string;
  title3: string;
}) => {
  return (
    <>
      <div className="flex flex-col gap-10 dark:bg-[#1E2124] dark:text-[#FAFAFA]">
        <div className="flex flex-col sm:flex-row sm:w-[29.5rem] sm:h-[12.5rem] md:w-[21rem] lg:w-[30rem]  ">
          <div className="h-[12rem] sm:w-[12.5rem] sm:h-[12.5rem] md:w-[8rem] lg:w-[13rem] lg:h-[13rem]">
            <img src={props.image} alt="" className=" w-[100%] h-[100%]" />
          </div>
          <div className="flex flex-col sm:w-[17rem] sm:h-[12.5rem] md:w-[13rem] lg:w-[17rem] sm:pl-8">
            <h2 className="capitalize text-base text-[#767676] font-light pb-4 pt-4 sm:pt-0">
              {props.title1}
            </h2>
            <h1 className="capitalize text-xl text-[black] dark:text-[#FAFAFA]  font-normal pb-2">
              {props.title2}
            </h1>
            <div className="flex flex-row pt-4 items-center justify-between text-[#767676]">
              <h2 className="text-sm text-[#767676] font-light">
                {props.title3}
              </h2>
            </div>
          </div>
        </div>
        <div
          className="py-4 border-t-[1.5px] border-[#242B32] w-full space-y-4"
          style={{ opacity: "1", transform: "translateY(0%) translateZ(0px)" }}
        ></div>
      </div>
    </>
  );
};
