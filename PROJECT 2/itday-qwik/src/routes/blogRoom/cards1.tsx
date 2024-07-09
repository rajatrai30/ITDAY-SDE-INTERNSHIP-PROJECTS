import { RightArrow } from "~/packages/utils/icons";

export const Cards1 = (props: { image: string; title1:string; title2:string; title3:string}) => {
    return (
      <>
        <div className="flex flex-row md:flex-col w-[100%] md:w-[20rem] lg:w-[24rem] h-[14rem] md:h-[24rem]">
          <div className="w-[100%] h-[100%]">
            <img
              src={props.image}
              alt=""
              className=" w-[100%] h-[100%]"
            />
          </div>
          <div className="flex flex-col bg-[#242B32] w-[100%] h-[100%] py-4 px-8">
            <h2 className="text-[0.75rem] text-[#767676] font-light pb-6">{props.title1}</h2>
            <h1 className="capitalize text-2xl tracking-[.2em] text-[#ffffff] font-normal pb-2">{props.title2}</h1>
            <div className="flex flex-row pt-8 items-center justify-between text-[#767676]">
                <h2 className="text-xs text-[#767676] font-light">{props.title3}</h2>
                <RightArrow></RightArrow>
            </div>
          </div>
         
        </div>

      
      </>
    );
  };