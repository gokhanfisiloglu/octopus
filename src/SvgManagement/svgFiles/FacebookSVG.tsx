import React, { FC } from 'react';

type FacebookSVGProps = {
    w: string;
    h: string;
    f: string;
};

const FacebookSVG: React.FC<FacebookSVGProps> = ({ w, h, f }) => {
    return (
        <svg width={w} height={h} viewBox={"0 0 "+ w +' '+ h} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5_837)">
                <path d="M28.9168 16C28.9168 8.87001 23.1302 3.08334 16.0002 3.08334C8.87016 3.08334 3.0835 8.87001 3.0835 16C3.0835 22.2517 7.52683 27.4571 13.4168 28.6583V19.875H10.8335V16H13.4168V12.7708C13.4168 10.2779 15.4447 8.25001 17.9377 8.25001H21.1668V12.125H18.5835C17.8731 12.125 17.2918 12.7063 17.2918 13.4167V16H21.1668V19.875H17.2918V28.8521C23.8147 28.2063 28.9168 22.7038 28.9168 16Z" fill={f}/>
            </g>
            <defs>
                <clipPath id="clip0_5_837">
                    <rect width="31" height="31" fill="white" transform="translate(0.500168 0.5)"/>
                </clipPath>
            </defs>
        </svg>
    )};


export default FacebookSVG;