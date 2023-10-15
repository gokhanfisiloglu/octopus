import React, {useEffect, useState} from 'react';

interface ContentProps {

}

const Content: React.FC<ContentProps> = (props) => {

    return <main className="overflow-x-auto ease-soft-in-out xl:ml-[17.125rem] relative h-full max-h-screen rounded-xl transition-all duration-200 ps ps--active-y">

        <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start" navbar-main="" navbar-scroll="true">
            <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                <nav>

                    <ol className="flex flex-wrap pt-1 bg-transparent rounded-lg text-text-xs font-normal leading-[150%]">
                        <li className="text">
                            <a className=" text-gray-gray-400" href="javascript:;">Pages</a>
                        </li>
                        <li className="text-size-sm pl-2 capitalize text-gray-gray-700 before:float-left before:pr-2 before:text-gray-gray-700 before:content-['/']" aria-current="page">tables</li>
                    </ol>
                    <h6 className="mb-0 font-bold capitalize">tables</h6>
                </nav>
                <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6md:mr-0 lg:flex lg:basis-auto">
                    <div className="flex items-center md:ml-auto md:pr-4">

                        <div className="ml-2 relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                            <span className="text-size-sm ease-soft leading-5.6 absolute z-50 -ml-px border-r-0 rounded-tr-none rounded-br-none flex h-full items-center whitespace-nowrap rounded-lg border border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14.1292 13.0958L11.3726 10.3393C12.0363 9.4558 12.3945 8.38041 12.3933 7.27542C12.3933 4.45297 10.097 2.15668 7.27457 2.15668C4.45211 2.15668 2.15582 4.45297 2.15582 7.27542C2.15582 10.0979 4.45211 12.3942 7.27457 12.3942C8.37955 12.3954 9.45495 12.0371 10.3384 11.3735L13.095 14.13C13.2345 14.2547 13.4165 14.3213 13.6036 14.3161C13.7907 14.3109 13.9687 14.2342 14.101 14.1019C14.2333 13.9695 14.31 13.7915 14.3152 13.6044C14.3205 13.4174 14.2539 13.2354 14.1292 13.0958ZM3.61832 7.27542C3.61832 6.55229 3.83276 5.84539 4.23451 5.24412C4.63626 4.64286 5.20729 4.17422 5.87538 3.89749C6.54348 3.62076 7.27863 3.54835 7.98787 3.68943C8.69711 3.83051 9.34859 4.17873 9.85993 4.69007C10.3713 5.2014 10.7195 5.85288 10.8606 6.56213C11.0016 7.27137 10.9292 8.00652 10.6525 8.67461C10.3758 9.3427 9.90714 9.91373 9.30587 10.3155C8.70461 10.7172 7.99771 10.9317 7.27457 10.9317C6.30523 10.9305 5.37592 10.5449 4.6905 9.8595C4.00507 9.17407 3.61949 8.24477 3.61832 7.27542Z" fill="#2D3748"/>
                                </svg>
                            </span>
                            <input type="text" className="pl-[2.1875rem;] -ml-px pr-3 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-[1.4rem;] rounded-mini relative block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Type here..."/>
                        </div>
                    </div>
                    <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full ">

                        <li className="flex items-center">
                            <a href="/signin" className="block px-0 py-2 font-semibold transition-all ease-nav-brand text-size-sm text-slate-500">
                                <div className={"flex items-center"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none" className={"mr-1"}>
                                        <path d="M8.2959 1.51341C7.83981 1.02099 7.20278 0.749817 6.49966 0.749817C5.79278 0.749817 5.15364 1.01935 4.69966 1.50872C4.24075 2.00349 4.01716 2.67591 4.06966 3.402C4.17372 4.8345 5.2638 5.99981 6.49966 5.99981C7.73551 5.99981 8.82372 4.83474 8.92942 3.40247C8.98262 2.68294 8.75762 2.01193 8.2959 1.51341Z" fill="#718096"/>
                                        <path d="M10.6248 11.2493H2.37477C2.26678 11.2507 2.15984 11.228 2.06173 11.1829C1.96361 11.1377 1.87679 11.0713 1.80758 10.9884C1.65524 10.8063 1.59383 10.5576 1.6393 10.3061C1.83711 9.2088 2.45445 8.287 3.42477 7.63989C4.2868 7.06544 5.37875 6.74927 6.49976 6.74927C7.62078 6.74927 8.71273 7.06567 9.57476 7.63989C10.5451 8.28677 11.1624 9.20856 11.3602 10.3059C11.4057 10.5574 11.3443 10.8061 11.1919 10.9882C11.1228 11.0711 11.0359 11.1376 10.9378 11.1828C10.8397 11.2279 10.7328 11.2506 10.6248 11.2493Z" fill="#718096"/>
                                    </svg>
                                    <span className="hidden sm:inline text-text-xs font-bold leading-[150%] accent-gray-gray-500">Sign In</span>
                                </div>
                            </a>
                        </li>
                        <li className="flex items-center pl-4 xl:hidden">
                            <a href="javascript:;" className="block p-0 transition-all ease-nav-brand text-size-sm text-slate-500" >
                                <div className="w-4.5 overflow-hidden">
                                    <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                    <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                    <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                </div>
                            </a>
                        </li>
                        <li className="flex items-center px-4">
                            <a href="javascript:;" className="p-0 transition-all text-size-sm ease-nav-brand text-slate-500">
                                <i fixed-plugin-button-nav="" className="cursor-pointer fa fa-cog" aria-hidden="true"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M6.49973 4.62512C6.12889 4.62512 5.76637 4.73509 5.45803 4.94112C5.14969 5.14714 4.90937 5.43998 4.76745 5.78259C4.62554 6.1252 4.58841 6.5022 4.66075 6.86591C4.7331 7.22963 4.91168 7.56372 5.1739 7.82595C5.43612 8.08817 5.77022 8.26675 6.13393 8.33909C6.49765 8.41144 6.87465 8.37431 7.21726 8.23239C7.55987 8.09048 7.8527 7.85016 8.05873 7.54181C8.26476 7.23347 8.37472 6.87096 8.37472 6.50012C8.37324 6.0033 8.17522 5.52724 7.82391 5.17593C7.4726 4.82463 6.99655 4.6266 6.49973 4.62512ZM10.5478 6.50012C10.5469 6.67532 10.534 6.85025 10.5094 7.02371L11.6506 7.91715C11.7003 7.95819 11.7338 8.01557 11.7451 8.07903C11.7564 8.14248 11.7447 8.20789 11.7122 8.26356L10.6327 10.1273C10.5999 10.1825 10.5487 10.2243 10.488 10.2454C10.4274 10.2666 10.3613 10.2657 10.3013 10.2429L8.95949 9.70379C8.68009 9.91894 8.37433 10.0975 8.04965 10.2351L7.84902 11.6596C7.83779 11.7235 7.80475 11.7814 7.75555 11.8235C7.70635 11.8657 7.64403 11.8894 7.57926 11.8907H5.4202C5.3566 11.8895 5.2953 11.8667 5.2463 11.8262C5.19731 11.7856 5.16351 11.7296 5.15043 11.6674L4.9498 10.2429C4.62423 10.1068 4.31825 9.92799 4.03996 9.71106L2.69817 10.2501C2.63819 10.2729 2.57208 10.2739 2.51146 10.2528C2.45085 10.2317 2.39961 10.1899 2.36676 10.1348L1.28723 8.27129C1.25473 8.21563 1.24309 8.15022 1.25438 8.08676C1.26568 8.0233 1.29917 7.96593 1.34887 7.92489L2.49004 7.03145C2.4657 6.85536 2.45286 6.67788 2.4516 6.50012C2.45258 6.32492 2.46542 6.14999 2.49004 5.97653L1.34887 5.08309C1.29917 5.04205 1.26568 4.98467 1.25438 4.92121C1.24309 4.85776 1.25473 4.79235 1.28723 4.73668L2.36676 2.87293C2.39958 2.81776 2.4508 2.77593 2.51141 2.75479C2.57203 2.73366 2.63816 2.73458 2.69817 2.75739L4.03996 3.29645C4.31936 3.0813 4.62512 2.90274 4.9498 2.76512L5.15043 1.34059C5.16166 1.27678 5.1947 1.21885 5.2439 1.1767C5.2931 1.13455 5.35542 1.1108 5.4202 1.1095H7.57926C7.64285 1.11073 7.70415 1.1335 7.75315 1.17406C7.80214 1.21463 7.83594 1.27061 7.84902 1.33286L8.04965 2.75739C8.37563 2.89332 8.68201 3.07216 8.96066 3.28918L10.3013 2.75012C10.3613 2.72729 10.4274 2.72634 10.488 2.74743C10.5486 2.76852 10.5998 2.8103 10.6327 2.86543L11.7122 4.72918C11.7447 4.78485 11.7564 4.85026 11.7451 4.91372C11.7338 4.97717 11.7003 5.03455 11.6506 5.07559L10.5094 5.96903C10.5337 6.14504 10.5466 6.32244 10.5478 6.50012Z" fill="#718096"/>
                                </svg>
                            </a>
                        </li>

                        <li className="relative flex items-center pr-2">
                            <p className="hidden transform-dropdown-show"></p>
                            <a href="javascript:;" className="block p-0 transition-all text-size-sm ease-nav-brand text-slate-500"  aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M10.8142 8.4992C10.7753 8.45233 10.7371 8.40545 10.6996 8.36022C10.184 7.73655 9.87201 7.36014 9.87201 5.5946C9.87201 4.68054 9.65334 3.93054 9.22232 3.36804C8.90451 2.95249 8.4749 2.63726 7.90865 2.40429C7.90136 2.40023 7.89486 2.39492 7.88943 2.38858C7.68576 1.70655 7.12842 1.24976 6.49982 1.24976C5.87123 1.24976 5.31412 1.70655 5.11045 2.38788C5.10501 2.39398 5.0986 2.39913 5.09146 2.40311C3.77006 2.9471 3.12787 3.99077 3.12787 5.59389C3.12787 7.36014 2.81639 7.73655 2.30029 8.35952C2.26279 8.40475 2.22459 8.45069 2.18568 8.4985C2.08519 8.6197 2.02151 8.76716 2.0022 8.92342C1.98288 9.07967 2.00874 9.2382 2.0767 9.38022C2.22131 9.68491 2.52951 9.87405 2.88131 9.87405H10.1209C10.4711 9.87405 10.7772 9.68514 10.9222 9.38186C10.9905 9.2398 11.0166 9.08115 10.9974 8.92471C10.9783 8.76827 10.9147 8.6206 10.8142 8.4992Z" fill="#718096"/>
                                    <path d="M6.49974 11.75C6.83842 11.7497 7.17072 11.6578 7.46137 11.4839C7.75203 11.3101 7.99022 11.0608 8.15068 10.7626C8.15824 10.7483 8.16197 10.7323 8.16152 10.7161C8.16106 10.7 8.15644 10.6842 8.14809 10.6703C8.13974 10.6565 8.12795 10.645 8.11386 10.6371C8.09978 10.6292 8.08388 10.625 8.06771 10.625H4.93224C4.91605 10.6249 4.90013 10.6291 4.88601 10.637C4.8719 10.6449 4.86007 10.6564 4.85169 10.6702C4.84332 10.6841 4.83867 10.6999 4.8382 10.7161C4.83774 10.7322 4.84147 10.7483 4.84904 10.7626C5.00948 11.0608 5.24763 11.31 5.53825 11.4839C5.82886 11.6577 6.1611 11.7497 6.49974 11.75Z" fill="#718096"/>
                                </svg>
                            </a>
                            <ul dropdown-menu="" className="text-size-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7.5 before:text-5.5 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer">

                                <li className="relative mb-2">
                                    <a className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors" href="javascript:;">
                                        <div className="flex py-1">
                                            <div className="my-auto">
                                                <img src="../assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-white text-size-sm h-9 w-9 max-w-none rounded-xl"/>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h6 className="mb-1 font-normal leading-normal text-size-sm"><span className="font-semibold">New
                                                    message</span> from Laur</h6>
                                                <p className="mb-0  leading-tight text-size-xs text-slate-400">
                                                    <i className="mr-1 fa fa-clock" aria-hidden="true"></i>
                                                    13 minutes ago
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="relative mb-2">
                                    <a className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700" href="javascript:;">
                                        <div className="flex py-1">
                                            <div className="my-auto">
                                                <img src="../assets/img/small-logos/logo-spotify.svg" className="inline-flex items-center justify-center mr-4 text-white text-size-sm bg-gradient-dark-gray h-9 w-9 max-w-none rounded-xl"/>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h6 className="mb-1 font-normal leading-normal text-size-sm"><span className="font-semibold">New
                                                    album</span> by Travis Scott</h6>
                                                <p className="mb-0  leading-tight text-size-xs text-slate-400">
                                                    <i className="mr-1 fa fa-clock" aria-hidden="true"></i>
                                                    1 day
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="relative">
                                    <a className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700" href="javascript:;">
                                        <div className="flex py-1">
                                            <div className="inline-flex items-center justify-center my-auto mr-4 text-white transition-all duration-200 ease-nav-brand text-size-sm bg-gradient-slate h-9 w-9 rounded-xl">
                                                <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                                    <title>credit-card</title>
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                            <g transform="translate(1716.000000, 291.000000)">
                                                                <g transform="translate(453.000000, 454.000000)">
                                                                    <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                                                    <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z">
                                                                    </path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h6 className="mb-1 font-normal leading-normal text-size-sm">Payment successfully completed</h6>
                                                <p className="mb-0  leading-tight text-size-xs text-slate-400">
                                                    <i className="mr-1 fa fa-clock" aria-hidden="true"></i>
                                                    2 days
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="w-full px-6 py-6 mx-auto">
            <div>
                <div className="flex flex-wrap mb-6 -mx-3">

                    <div className="overflow-x-hidden w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:flex-none lg:flex-none">
                        <div className="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                                <div className="flex flex-wrap mt-0 -mx-3">
                                    <div className="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
                                        <h6 className={'font-bold leading-[140%] text-text-lg text-gray-gray-700 mb-0'}>Authors Table</h6>
                                    </div>
                                    <div className="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none">
                                        <div className="relative pr-6 lg:float-right">
                                            <a dropdown-trigger="" className="cursor-pointer" aria-expanded="false">
                                                <i className="fa fa-ellipsis-v text-slate-400" aria-hidden="true"></i>
                                            </a>
                                            <p className="hidden transform-dropdown-show"></p>
                                            <ul dropdown-menu="" className="z-100 text-size-sm transform-dropdown shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 -ml-34 before:text-5.5 pointer-events-none absolute top-0 m-0 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:top-0 before:right-7 before:left-auto before:z-40 before:text-white before:transition-all before:content-['\f0d8']">
                                                <li className="relative">
                                                    <a className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300" href="javascript:;">Action</a>
                                                </li>
                                                <li className="relative">
                                                    <a className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300" href="javascript:;">Another action</a>
                                                </li>
                                                <li className="relative">
                                                    <a className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300" href="javascript:;">Something else here</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 px-[22.5] pt-0 pb-0 overflow-auto mt-[23.5px]">
                                <table className="w-full min-w-[640px] table-auto">
                                    <thead>
                                        <tr>
                                            <th className="border-b border-blue-gray-50 pr-3 text-left">
                                                <p className="block antialiased uppercase text-gray-gray-400 font-bold text-text-xxs leading-[150%]">author</p>
                                            </th>
                                            <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                                <p className="block antialiased uppercase text-gray-gray-400 font-bold text-text-xxs leading-[150%]">function</p>
                                            </th>
                                            <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                                <p className="block antialiased uppercase text-gray-gray-400 font-bold text-text-xxs leading-[150%]">status</p>
                                            </th>
                                            <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                                <p className="block antialiased uppercase text-gray-gray-400 font-bold text-text-xxs leading-[150%]">employed</p>
                                            </th>
                                            <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                                <p className=""></p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="py-3 pr-5 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-4">
                                                <img src="/pic-1.png" alt="Esthera Jackson" className="inline-block relative object-cover object-center rounded-[12px] w-[40px] h-[40px]"/>
                                                <div>
                                                    <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">Esthera Jackson</p>
                                                    <p className="block antialiased font-normal text-sm text-gray-gray-500 leading-[140%]">esthera@simmmple.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">Manager</p>
                                            <p className="block antialiased font-normal text-sm text-gray-gray-500 leading-[140%]">Organization</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <div className="relative inline-block align-baseline center whitespace-nowrap rounded-lg select-none bg-green-green-400 text-white py-0.5 px-2 font-normal text-sm leading-[140%] w-[65px] text-center" data-projection-id="141" >
                                                <div className="  mt-px">Online</div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">14/06/21</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <a href="#" className="block antialiased font-bold text-text-xs text-gray-gray-500 leading-[150%]">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-5 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-4">
                                                <img src="/pic-2.png" alt="Alexa Liras" className="inline-block relative object-cover object-center rounded-[12px] w-[40px] h-[40px]"/>
                                                <div>
                                                    <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">Alexa Liras</p>
                                                    <p className="block antialiased font-normal text-sm text-gray-gray-500 leading-[140%]">alexa@simmmple.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">Programmer</p>
                                            <p className="block antialiased font-normal text-sm text-gray-gray-500 leading-[140%]">Developer</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <div className="relative inline-block align-baseline center whitespace-nowrap rounded-lg select-none bg-gray-gray-300 text-white py-0.5 px-2 font-normal text-sm leading-[140%] w-[65px] text-center" data-projection-id="141" >
                                                <div className="  mt-px">Offline</div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">14/06/21</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <a href="#" className="block antialiased font-bold text-text-xs text-gray-gray-500 leading-[150%]">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-5 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-4">
                                                <img src="/pic-3.png" alt="Laurent Michael" className="inline-block relative object-cover object-center rounded-[12px] w-[40px] h-[40px]"/>
                                                <div>
                                                    <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">Laurent Michael</p>
                                                    <p className="block antialiased font-normal text-sm text-gray-gray-500 leading-[140%]">laurent@simmmple.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">Executive</p>
                                            <p className="block antialiased font-normal text-sm text-gray-gray-500 leading-[140%]">Projects</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <div className="relative inline-block align-baseline center whitespace-nowrap rounded-lg select-none bg-green-green-400 text-white py-0.5 px-2 font-normal text-sm leading-[140%] w-[65px] text-center" data-projection-id="141" >
                                                <div className="  mt-px">Online</div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">14/06/21</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <a href="#" className="block antialiased font-bold text-text-xs text-gray-gray-500 leading-[150%]">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-5 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-4">
                                                <img src="/pic-4.png" alt="Freduardo Hill" className="inline-block relative object-cover object-center rounded-[12px] w-[40px] h-[40px]"/>
                                                <div>
                                                    <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">Freduardo Hill</p>
                                                    <p className="block antialiased font-normal text-sm text-gray-gray-500 leading-[140%]">freduardo@simmmple.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">Manager</p>
                                            <p className="block antialiased font-normal text-sm text-gray-gray-500 leading-[140%]">Organization</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <div className="relative inline-block align-baseline center whitespace-nowrap rounded-lg select-none bg-green-green-400 text-white py-0.5 px-2 font-normal text-sm leading-[140%] w-[65px] text-center" data-projection-id="141" >
                                                <div className="  mt-px">Online</div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">14/06/21</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <a href="#" className="block antialiased font-bold text-text-xs text-gray-gray-500 leading-[150%]">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-5 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-4">
                                                <img src="/pic-5.png" alt="Daniel Thomas" className="inline-block relative object-cover object-center rounded-[12px] w-[40px] h-[40px]"/>
                                                <div>
                                                    <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">Daniel Thomas</p>
                                                    <p className="block antialiased font-normal text-sm text-gray-gray-500 leading-[140%]">daniel@simmmple.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">Programmer</p>
                                            <p className="block antialiased font-normal text-sm text-gray-gray-500 leading-[140%]">Developer</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <div className="relative inline-block align-baseline center whitespace-nowrap rounded-lg select-none bg-gray-gray-300 text-white py-0.5 px-2 font-normal text-sm leading-[140%] w-[65px] text-center" data-projection-id="141" >
                                                <div className="  mt-px">Offline</div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">14/06/21</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <a href="#" className="block antialiased font-bold text-text-xs text-gray-gray-500 leading-[150%]">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-5 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-4">
                                                <img src="/pic-6.png" alt="Mark Wilson" className="inline-block relative object-cover object-center rounded-[12px] w-[40px] h-[40px]"/>
                                                <div>
                                                    <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">Mark Wilson</p>
                                                    <p className="block antialiased font-normal text-sm text-gray-gray-500 leading-[140%]">mark@simmmple.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">Designer</p>
                                            <p className="block antialiased font-normal text-sm text-gray-gray-500 leading-[140%]">UI/UX Design</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <div className="relative inline-block align-baseline center whitespace-nowrap rounded-lg select-none bg-gray-gray-300 text-white py-0.5 px-2 font-normal text-sm leading-[140%] w-[65px] text-center" data-projection-id="141" >
                                                <div className="  mt-px">Offline</div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased font-bold text-sm text-gray-gray-700 leading-[140%]">14/06/21</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <a href="#" className="block antialiased font-bold text-text-xs text-gray-gray-500 leading-[150%]">Edit</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-wrap my-6 -mx-3">

                    <div className="overflow-x-hidden w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:flex-none lg:flex-none">
                        <div className="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                                <div className="flex flex-wrap mt-0 -mx-3">
                                    <div className="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
                                        <h6 className={'font-bold leading-[140%] text-text-lg text-gray-gray-700'}>Projects</h6>
                                        <p className="mb-0 leading-[140%] text-sm font-normal inline-flex text-gray-gray-400">
                                            <img src={"/checkmark.svg"} className={'fill-green-300'}/>
                                            <span className="mx-1 font-bold ">30 done</span>
                                            this month
                                        </p>
                                    </div>
                                    <div className="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none">
                                        <div className="relative pr-6 lg:float-right">
                                            <a dropdown-trigger="" className="cursor-pointer" aria-expanded="false">
                                                <i className="fa fa-ellipsis-v text-slate-400" aria-hidden="true"></i>
                                            </a>
                                            <p className="hidden transform-dropdown-show"></p>
                                            <ul dropdown-menu="" className="z-100 text-size-sm transform-dropdown shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 -ml-34 before:text-5.5 pointer-events-none absolute top-0 m-0 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:top-0 before:right-7 before:left-auto before:z-40 before:text-white before:transition-all before:content-['\f0d8']">
                                                <li className="relative">
                                                    <a className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300" href="javascript:;">Action</a>
                                                </li>
                                                <li className="relative">
                                                    <a className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300" href="javascript:;">Another action</a>
                                                </li>
                                                <li className="relative">
                                                    <a className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300" href="javascript:;">Something else here</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 px-[22.5] pt-0 pb-0 overflow-auto">
                                <table className="w-full min-w-[640px] table-auto">
                                    <thead>
                                    <tr className={''}>
                                        <th className="border-b border-blue-gray-50 pr-3 text-left">
                                            <p className="block antialiased uppercase text-gray-gray-400 font-bold text-text-xxs leading-[150%]">companies</p>
                                        </th>
                                        <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                            <p className="block antialiased uppercase text-gray-gray-400 font-bold text-text-xxs leading-[150%]">members</p>
                                        </th>
                                        <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                            <p className="block antialiased uppercase text-gray-gray-400 font-bold text-text-xxs leading-[150%]">budget</p>
                                        </th>
                                        <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                            <p className="block antialiased  uppercase text-gray-gray-400 font-bold text-text-xxs leading-[150%]">completion</p>
                                        </th>
                                        <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                            <p className="block antialiased"></p>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="py-3 pr-5 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-4">
                                                <img src="/adobeXDIcon.svg" alt="Material XD Version" className="inline-block relative object-cover object-center w-9 h-9 rounded-md"/>
                                                <p className="block antialiased text-sm text-gray-gray-700 font-bold leading-[140%]">Chakra Soft UI Version</p>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <img src="/team-1.jpg" alt="Romina Hadid" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"/>
                                            <img src="/team-2.jpg" alt="Ryan Tompson" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer -ml-2.5"/>
                                            <img src="/team-3.jpg" alt="Jessica Doe" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer -ml-2.5"/>
                                            <img src="/team-4.jpg" alt="Alexander Smith" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer -ml-2.5"/>
                                            <img src="/team-5.jpg" alt="Alexander Smith" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer -ml-2.5"/>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased text-xs font-bold text-gray-gray-700 leading-[140%]">$14,000</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50 ">
                                            <div className="w-10/12 ">
                                                <p className="antialiased font-sans mb-1 block text-xs font-bold text-teal-teal-300 leading-[140%]">60%</p>
                                                <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1 bg-gray-200">
                                                    <div className="flex justify-center items-center h-full bg-teal-teal-300 text-white" style={{width: "60%"}}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <a href="#" className="block antialiased fill-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-inherit">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                                                </svg>
                                            </a>
                                        </td>                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-5 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-4">
                                                <img src="/addProgressTrackIcon.svg" alt="Material XD Version" className="inline-block relative object-cover object-center w-9 h-9 rounded-md"/>
                                                <p className="block antialiased text-sm text-gray-gray-700 font-bold leading-[140%]">Add Progress Track</p>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <img src="/team-1.jpg" alt="Romina Hadid" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"/>
                                            <img src="/team-2.jpg" alt="Ryan Tompson" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer -ml-2.5"/>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased text-xs font-bold text-gray-gray-700 leading-[140%]">$3,000</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <div className="w-10/12">
                                                <p className="antialiased font-sans mb-1 block text-xs font-bold text-teal-teal-300 leading-[140%]">10%</p>
                                                <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1 bg-gray-200">
                                                    <div className="flex justify-center items-center h-full bg-teal-teal-300 text-white" style={{width: "10%"}}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <a href="#" className="block antialiased fill-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-inherit">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                                                </svg>
                                            </a>
                                        </td>                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-5 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-4">
                                                <img src="/slack-new-logo.svg" alt="Material XD Version" className="inline-block relative object-cover object-center w-9 h-9 rounded-md"/>
                                                <p className="block antialiased text-sm text-gray-gray-700 font-bold leading-[140%]">Fix Platform Errors</p>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <img src="/team-1.jpg" alt="Romina Hadid" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"/>
                                            <img src="/team-2.jpg" alt="Ryan Tompson" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer -ml-2.5"/>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased text-xs font-bold text-gray-gray-700 leading-[140%]">Not set</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <div className="w-10/12">
                                                <p className="antialiased font-sans mb-1 block text-xs font-bold text-teal-teal-300 leading-[140%]">100%</p>
                                                <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1 bg-gray-200">
                                                    <div className="flex justify-center items-center h-full bg-teal-teal-300 text-white" style={{width: "100%"}}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <a href="#" className="block antialiased fill-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-inherit">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                                                </svg>
                                            </a>
                                        </td>                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-5 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-4">
                                                <img src="/spotify.svg" alt="Material XD Version" className="inline-block relative object-cover object-center w-9 h-9 rounded-md"/>
                                                <p className="block antialiased text-sm text-gray-gray-700 font-bold leading-[140%]">Launch our Mobile App</p>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <img src="/team-1.jpg" alt="Romina Hadid" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"/>
                                            <img src="/team-2.jpg" alt="Ryan Tompson" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer -ml-2.5"/>
                                            <img src="/team-3.jpg" alt="Jessica Doe" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer -ml-2.5"/>
                                            <img src="/team-4.jpg" alt="Alexander Smith" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer -ml-2.5"/>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased text-xs font-bold text-gray-gray-700 leading-[140%]">$32,000</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <div className="w-10/12">
                                                <p className="antialiased font-sans mb-1 block text-xs font-bold text-teal-teal-300 leading-[140%]">100%</p>
                                                <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1 bg-gray-200">
                                                    <div className="flex justify-center items-center h-full bg-teal-teal-300 text-white" style={{width: "100%"}}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <a href="#" className="block antialiased fill-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-inherit">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                                                </svg>
                                            </a>
                                        </td>                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-5 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-4">
                                                <img src="/jira.svg" alt="Material XD Version" className="inline-block relative object-cover object-center w-9 h-9 rounded-md"/>
                                                <p className="block antialiased text-sm text-gray-gray-700 font-bold leading-[140%]">Add the New Pricing Page</p>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <img src="/team-1.jpg" alt="Romina Hadid" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"/>
                                            <img src="/team-2.jpg" alt="Ryan Tompson" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer -ml-2.5"/>
                                            <img src="/team-3.jpg" alt="Jessica Doe" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer -ml-2.5"/>
                                            <img src="/team-4.jpg" alt="Alexander Smith" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer -ml-2.5"/>
                                            <img src="/team-5.jpg" alt="Alexander Smith" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer -ml-2.5"/>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <p className="block antialiased text-xs font-bold text-gray-gray-700 leading-[140%]">$400</p>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <div className="w-10/12">
                                                <p className="antialiased font-sans mb-1 block text-xs font-bold text-teal-teal-300 leading-[140%]">25%</p>
                                                <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1 bg-gray-200">
                                                    <div className="flex justify-center items-center h-full bg-teal-teal-300 text-white" style={{width: "25%"}}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                            <a href="#" className="block antialiased fill-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-inherit">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-5">
                                            <div className="flex items-center gap-4">
                                                <img src="/invision.svg" alt="Material XD Version" className="inline-block relative object-cover object-center w-9 h-9 rounded-md"/>
                                                <p className="block antialiased text-sm text-gray-gray-700 font-bold leading-[140%]">Redesign New Online Shop</p>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5">
                                            <img src="/team-1.jpg" alt="Romina Hadid" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"/>
                                            <img src="/team-2.jpg" alt="Ryan Tompson" className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer -ml-2.5"/>
                                        </td>
                                        <td className="py-3 px-5">
                                            <p className="block antialiased text-xs font-bold text-gray-gray-700 leading-[140%]">$7,600</p>
                                        </td>
                                        <td className="py-3 px-5">
                                            <div className="w-10/12">
                                                <p className="antialiased font-sans mb-1 block text-xs font-bold text-teal-teal-300 leading-[140%]">40%</p>
                                                <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1 bg-gray-200">
                                                    <div className="flex justify-center items-center h-full bg-teal-teal-300 text-white" style={{width: "40%"}}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-5">
                                            <a href="#" className="block antialiased fill-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-inherit">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>;
};

export default Content;

