import React from 'react';
import DashboardSVG from "./svgFiles/DashboardSVG";
import ProfileSVG from "./svgFiles/ProfileSVG";
import FacebookSVG from "./svgFiles/FacebookSVG";
import SignInSVG from "./svgFiles/SignInSVG";
import SignUpSVG from "./svgFiles/SignUpSVG";
import GoogleSVG from "./svgFiles/GoogleSVG";
import AppleSVG from "./svgFiles/AppleSVG";

type SvgManagementProps = {
    svgName: string;
    w: string;
    h: string;
    f: string;
};
const SvgManagement: React.FC<SvgManagementProps> = ({ svgName, w, h, f }) => {

    switch (svgName) {
        case 'dashboard':
            return <DashboardSVG w={w} h={h} f={f} />;
        case 'profile':
            return <ProfileSVG w={w} h={h} f={f} />;
        case 'signin':
            return <SignInSVG w={w} h={h} f={f} />;
        case 'signup':
            return <SignUpSVG w={w} h={h} f={f} />;
        case 'facebook':
            return <FacebookSVG w={w} h={h} f={f} />;
        case 'apple':
            return <AppleSVG w={w} h={h} f={f} />;
        case 'google':
            return <GoogleSVG w={w} h={h} f={f} />;
        default:
            return null;
    }

    return (
       <></>
    );
};

export default SvgManagement;