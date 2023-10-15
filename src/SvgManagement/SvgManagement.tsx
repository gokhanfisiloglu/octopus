import React from 'react';
import DashboardSVG from "../SvgManagement/SvgFiles/DashboardSVG";
import ProfileSVG from "../SvgManagement/SvgFiles/ProfileSVG";
import FacebookSVG from "./SvgFiles/FacebookSVG";
import SignInSVG from "./SvgFiles/SignInSVG";
import SignUpSVG from "./SvgFiles/SignUpSVG";
import GoogleSVG from "./SvgFiles/GoogleSVG";
import AppleSVG from "./SvgFiles/AppleSVG";

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