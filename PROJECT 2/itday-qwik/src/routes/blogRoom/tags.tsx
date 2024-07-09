export const Tags = (props: { name: string }) => {
  return (
    <>
      <button className="group w-[6rem] h-[1.75rem] relative fonts-space-grotesk overflow-hidden  outline-none focus:outline-none fonts-prompt text-sm border border-[black] dark:border-[#FAFAFA] text-[black] dark:text-[#FAFAFA] hover:text-[#ffffff] dark:hover:text-[black] p-1 z-0">
        <div className="bg-[black] dark:bg-[#FAFAFA] absolute block top-0 left-0 h-full -z-10 transition-all w-0 group-hover:w-full duration-300 "></div>
        <span className="transition-all z-10">{props.name}</span>
      </button>
    </>
  );
};
