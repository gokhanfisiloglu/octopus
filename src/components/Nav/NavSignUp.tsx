import React, {useEffect, useState} from 'react';
import SvgManagement from "../../SvgManagement/SvgManagement";

interface NavSignUp {}

const NavSignUp: React.FC<NavSignUp> = (props) => {

    const [toggle, setToggle] = useState(false)

    return <div className="container relative top-0 z-30">
        <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 flex-0 flex justify-center">
                <nav className="absolute top-0 z-30 flex flex-wrap items-center justify-between bg-transparent px-4 py-2 mt-6 mb-4 lg:flex-nowrap lg:justify-start lg:w-[988px] w-full">
                    <div className="container flex items-center justify-between py-0 flex-wrap-inherit">
                        <a className="py-2.375 text-size-sm mr-4 ml-4 whitespace-nowrap font-bold lg:ml-0 text-slate-700" href="#">
                            <img src={'/octopus-white.svg'}/>
                        </a>
                        <button navbar-trigger="" className="px-3 py-1 ml-2 leading-none transition-all bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer text-size-lg ease-soft-in-out lg:hidden" type="button" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"
                            onClick={()=> setToggle(!toggle)}>
                            <SvgManagement svgName={'dashboard'}  w={"11"} h={'12'} f={'#2D3748'}/>
                        </button>
                        <div navbar-menu="" className={'custom-nav lg:block items-center flex-grow overflow-hidden transition-all duration-500 ease-soft lg-max:max-h-0 basis-full lg:flex lg:basis-auto ' + (toggle ? 'block absolute mt-[200px] bg-gray-700 rounded-mini' : 'hidden')}>
                            <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
                                <li>
                                    <a className="uppercase flex items-center px-4 py-2 mr-2 font-bold transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-text-xxs  lg:px-2
                                            text-blackampwhite-white leading-[150%]" aria-current="page" href="/dashboard">
                                        <SvgManagement svgName={'dashboard'}  w={"11"} h={'12'} f={'white'}/>
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a className="uppercase flex items-center  px-4 py-2 mr-2 font-bold transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-text-xxs lg:px-2
                                            text-blackampwhite-white leading-[150%]" href="#">
                                        <SvgManagement svgName={'profile'}  w={"11"} h={'12'} f={'white'}/>
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="uppercase flex items-center  px-4 py-2 mr-2 font-bold transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-text-xxs lg:px-2
                                            text-blackampwhite-white leading-[150%]" href="/signup">
                                        <SvgManagement svgName={'signup'}  w={"11"} h={'12'} f={'white'}/>
                                        Sign Up
                                    </a>
                                </li>
                                <li>
                                    <a className="uppercase flex items-center  px-4 py-2 mr-2 font-bold transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-text-xxs lg:px-2
                                            text-blackampwhite-white leading-[150%]" href="/signin">
                                        <SvgManagement svgName={'signin'}  w={"11"} h={'12'} f={'white'}/>
                                        Sign In
                                    </a>
                                </li>
                            </ul>
                            <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
                                <li>
                                    <a href="#" target="_blank" className="leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-text-xxs font-bold leading-[150%]  rounded-[34.5px] mb-0 mr-1 inline-block cursor-pointer border-0 px-8 py-2 text-center align-middle transition-all
                                            text-gray-gray-700 bg-blackampwhite-white">
                                        Free Download</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>


};

export default NavSignUp;