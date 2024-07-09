export const ProfileInfo = (props: {
  profileImg: string;
  profileName: string;
  profileDate: string;
  banner: string;
}) => {
  return (
    <>
      <div className="p-6 pt-12 space-y-8 fonts-space-grotesk bg-[white] dark:bg-[#1E2124] text-[#1E2124] dark:text-[#fafafa]">
        <div className="px-16 flex flex-col items-center">
          <div className="flex flex-row items-center gap-x-6">
            <div className="">
              <img
                src={props.profileImg}
                alt=""
                className="rounded-full border border-[#1E2124]"
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="capitalize text-[1rem] lg:text-[1.3rem] font-sans">
                {props.profileName}
              </p>
              <p className="capitalize text-[1rem] lg:text-[1.3rem] font-sans">
                {props.profileDate}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:pt-20">
          <img
            src={props.banner}
            alt=""
            className="h-74/3 md:(h-74/3 * 2) lg:h-74 w-full"
          />
        </div>
      </div>
    </>
  );
};
