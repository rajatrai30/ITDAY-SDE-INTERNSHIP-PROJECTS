import { RightArrow } from "~/packages/utils/icons";

export const Cards = (props: { image: string; title1:string; title2:string; para:string; title3:string}) => {
    return (
      <>
        <div className="flex flex-col lg:flex-row w-[100%] h-[28rem] lg:h-[24rem]">
          <div className="w-[100%] lg:w-[45%]">
            <img
              src={props.image}
              alt=""
              className=" w-[100%] h-[12rem] lg:h-[24rem]"
            />
          </div>
          <div className="flex flex-col bg-[#242B32] w-[100%] h-[16rem] lg:h-[24rem]  lg:w-[55%] py-4 px-8 sm:px-12 md:px-6 md:py-4">
            <h2 className=" text-sm md:text-base lg:text-xl text-[#767676] font-light pb-6">{props.title1}</h2>
            <h1 className="capitalize md:text-xl lg:text-3xl tracking-[.2em] text-[#ffffff] font-normal pb-2">{props.title2}</h1>
            <p className="capitalize text-xs sm:text-sm text-[#ffffff] font-normal">{props.para}</p>
            <div className="flex flex-row pt-6 sm:pt-12 md:pt-6 items-center justify-between text-[#767676]">
                <h2 className="text-xs sm:text-sm text-[#767676] font-light">{props.title3}</h2>
                <RightArrow></RightArrow>
            </div>
          </div>
         
        </div>

      
      </>
    );
  };