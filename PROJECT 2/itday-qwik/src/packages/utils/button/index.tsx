export const Button = (props: { btnText:string }) => {
  return (
    <>
      <div className="text-[1rem] lg:text-[1.4rem] fonts-space-grotesk">
        <button className="sm:block group [16rem] sm:w-[20rem] h-[2.5rem] relative fonts-space-grotesk overflow-hidden  outline-none focus:outline-none fonts-prompt font-medium border bg-[white] dark:bg-[white] text-[#1E2124] border-[black] hover:text-[white]  px-10 py-1  undefined z-0">
          <div className="bg-[black] absolute block top-0 left-0 h-full -z-10 transition-all w-0 group-hover:w-full duration-300 "></div>
          <span className="transition-all z-10 capitalize">{props.btnText}</span>
        </button>
      </div>
    </>
  );
};
