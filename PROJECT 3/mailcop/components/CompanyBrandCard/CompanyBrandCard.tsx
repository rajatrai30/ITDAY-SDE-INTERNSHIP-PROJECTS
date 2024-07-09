import React from 'react';
import './CompanyBrandCard.css';
import Image from 'next/image';

interface CompanyBrandCardProps {
    image: any;
    dataAos: string;
    weblink: string;
}

const CompanyBrandCard: React.FC<CompanyBrandCardProps> = ({
    image,
    dataAos,
    weblink,
}) => {
    return (
        <div className="flex flex-col items-center justify-center" data-aos={dataAos}>
            <div className={'companycard'}>
                <a href={weblink} target="_blank" rel="noreferrer">
                    <Image src={image} alt={'event card'} width={1200} height={1200} />
                </a>
            </div>
        </div>
    );
};

export default CompanyBrandCard;
