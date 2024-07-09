"use client"; // this is a client component
import React, { useState } from 'react';
import './MiddleSectionCard.css';

interface MiddleSectionCardProps {
    index: string;
    title: string;
    para1: string;
    para2: string;
    para3: string;
    dataAos: string;
}

const MiddleSectionCard: React.FC<MiddleSectionCardProps> = ({
    index,
    dataAos,
    title,
    para1,
    para2,
    para3,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="py-8 flex flex-col items-center justify-center relative" data-aos={dataAos}>
            <div className="py-4 flex flex-row items-center space-x-2">
                <p className='text-[1.8rem]'>{index}</p>
                <div className="w-12 bg-[#112437] h-[3px]" />
            </div>
            <div className={'relative middlesectioncard'} onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                {isHovered && (
                    <div className="AbsoluteMiddle absolute bottom-0 left-0 border rounded-full bg-[#2563EB] flex items-center justify-center" />
                )}
                <div className="MiddleAbsoluteContents">
                    <h3 className="text-[1rem] lg:text-[1.8rem]">
                        {title}
                    </h3> <br />

                    <div className="flex flex-row items-start space-x-2">
                        <svg
                            fill="#eee"
                            width="28"
                            height="28"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <circle cx="224" cy="256" r="200" fill="#ffeb3b" />
                            <path d="M172.6 312.6L115.4 255.4c-4.7-4.7-4.7-12.3 0-17l29.3-29.3c4.7-4.7 12.3-4.7 17 0l42.9 42.9 87.8-87.8c4.7-4.7 12.3-4.7 17 0l29.3 29.3c4.7 4.7 4.7 12.3 0 17l-116 116c-4.8 4.6-12.4 4.6-17.1-.1z" fill="none" stroke="#fff" stroke-width="32" />
                        </svg>

                        <p>{para1}</p>
                    </div>
                    <div className="py-4">
                        <hr className="text-[#767676] dark:text-[#767676]" />
                    </div>

                    <div className="flex flex-row items-start space-x-2">
                        <svg
                            fill="#eee"
                            width="28"
                            height="28"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <circle cx="224" cy="256" r="200" fill="#ffeb3b" />
                            <path d="M172.6 312.6L115.4 255.4c-4.7-4.7-4.7-12.3 0-17l29.3-29.3c4.7-4.7 12.3-4.7 17 0l42.9 42.9 87.8-87.8c4.7-4.7 12.3-4.7 17 0l29.3 29.3c4.7 4.7 4.7 12.3 0 17l-116 116c-4.8 4.6-12.4 4.6-17.1-.1z" fill="none" stroke="#fff" stroke-width="32" />
                        </svg>
                        <p>{para2}</p>
                    </div>

                    <div className="py-4">
                        <hr className="text-[#767676] dark:text-[#767676]" />
                    </div>

                    <div className="flex flex-row items-start space-x-2">
                        <svg
                            fill="#eee"
                            width="28"
                            height="28"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <circle cx="224" cy="256" r="200" fill="#ffeb3b" />
                            <path d="M172.6 312.6L115.4 255.4c-4.7-4.7-4.7-12.3 0-17l29.3-29.3c4.7-4.7 12.3-4.7 17 0l42.9 42.9 87.8-87.8c4.7-4.7 12.3-4.7 17 0l29.3 29.3c4.7 4.7 4.7 12.3 0 17l-116 116c-4.8 4.6-12.4 4.6-17.1-.1z" fill="none" stroke="#fff" stroke-width="32" />
                        </svg>
                        <p>{para3}</p>
                    </div>
                </div>
                {/* <a href={weblink} target="_blank" rel="noreferrer">
                    <Image src={image} alt={'event card'} width={1200} height={1200} />
                </a> */}
            </div>
        </div>
    );
};

export default MiddleSectionCard;
