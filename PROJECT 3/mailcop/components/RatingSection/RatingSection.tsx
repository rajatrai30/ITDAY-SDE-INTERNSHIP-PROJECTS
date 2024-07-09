import Image from 'next/image';
import './RatingSection.css'
// import banner2 from '../../src/app/assests/banner2.png'
import banner3 from '../../src/app/assests/banner3.png'

export default function RatingSection() {
    return (
        <>
            <div className="py-4 max-w-[80vw] lg:max-w-[80vw] 2xl:max-w-[1145px] mx-auto">
                <div className="flex flex-col items-start justify-center Brand">
                    <h3 className="performanceSectionHead text-[1rem] lg:text-[1rem] text-left align-left text-[#112437]">
                        5.0 Stars✨
                    </h3> <br />
                    <div className="flex flex-col items-start gap-12 sm:flex sm:flex-row sm:gap-28">
                        <div className="">
                            <h3 className="text-[1.5rem] lg:text-[3rem] text-[#112437]">
                                Trusted by the
                                <br />
                                world&apos;s largest and
                                <br />
                                fastest growing
                                <br />
                                companies
                            </h3>
                        </div>
                        <div className="">
                            <h3 className="RatingSectionHead text-[1.5rem] lg:text-[1.5rem] text-[#112437] italic">
                                &quot;It is currently used by our team for our daily
                                <br />
                                contact with customers. It helps monitor our
                                <br />
                                accounts, usage, updates, and campaigns
                                <br />
                                across the entire CSM team, which is a big help
                                <br />
                                for everyone.&quot;
                            </h3>
                            <div className="py-6 flex flex-row items-center justify-between">
                                <div className="flex flex-row items-center Reseller">
                                    <img src="https://picsum.photos/300/300" alt="reseller" className="-mr-16" />
                                </div>
                                <div className="flex-1 pl-2">
                                    <p><span className="font-bold">Vicky, </span>10am Art</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-stretch justify-center">
                <Image src={banner3} alt="" className="RatingbannerImg" />
            </div>
        </>
    );
}
