import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
const inter = Poppins({ weight: ['100'], subsets: ["latin"] });
import MiddleSectionCard from "../MiddleSectionCard/MiddleSectionCard";




export default function MiddleSection() {
    return (
        <>
            <div className="py-2">
                <div className="flex flex-row items-center justify-center Brand">
                    <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-2 xl:grid xl:grid-cols-3 xl:gap-12 relative">
                        <MiddleSectionCard
                            index="01"
                            title="Plan"
                            para1="Uplevel your stragety with the intel needed to drive optimal performance from email."
                            para2="Benchmark competition with comprehensive insights into what works and what doesn't."
                            para3="Create more revenue opportunities
                            with a deep understanding of
                            consumer behavior in the inbox."
                            dataAos="fade-left"
                        />
                        <MiddleSectionCard
                            index="02"
                            title="Execute"
                            para1="Streamline production and make better performing emails up to 80% faster."
                            para2="Deliver emails in a powerful and
                            reliable way, so you can get out of the
                            spam folder and into the inbox."
                            para3="Scale your programs with easier
                            collaboration, deeper segmentation,
                            and more personalization."
                            dataAos="fade-right"
                        />
                        <MiddleSectionCard
                            index="03"
                            title="Optimize"
                            para1=" Identify performance trends and
                            predict email issues before they
                            impact your business."
                            para2="Optimize results through advanced
                            analytics and access to data that no
                            one else has."
                            para3="Mitigate risk to your organization and
                            drive more ROI in the inbox with an
                            improved customer experience."
                            dataAos="fade-up"
                        />
                    </div>
                </div>
                <div className="py-12 max-w-[80vw] lg:max-w-[80vw] 2xl:max-w-[1102px] mx-auto">
                    <hr className="text-[#767676] dark:text-[#767676]" />
                </div>
            </div>
        </>
    );
}
