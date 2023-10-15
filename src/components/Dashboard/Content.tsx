import React, {useEffect, useState} from 'react';

interface ContentProps {

}

const Content: React.FC<ContentProps> = (props) => {

    const deleteData = () => {
        sessionStorage.removeItem('userData');
        return null;
    };

    return <main className="overflow-x-auto ease-soft-in-out xl:ml-[17.125rem] relative h-full max-h-screen rounded-xl transition-all duration-200 ps ps--active-y">

        <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start" navbar-main="" navbar-scroll="true">
            <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                <nav>

                    <ol className="flex flex-wrap pt-1 bg-transparent rounded-lg">
                        <li className=" leading-normal text-size-sm">
                            <a className="opacity-50 text-slate-700" href="javascript:;">Pages</a>
                        </li>
                        <li className="text-size-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']" aria-current="page">dashboard</li>
                    </ol>
                    <h6 className="mb-0 font-bold capitalize">dashboard</h6>
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
                                    <span className="hidden sm:inline text-gray-gray-500 text-sm leading-[150%] font-bold" onClick={() => {deleteData()}}>Log out</span>
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

                <div className="flex flex-wrap -mx-3">

                    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p className="mb-0 text-gray-gray-400 font-bold leading-[150%] text-[12px]">Today's Money</p>
                                            <h5 className="mb-0 font-bold text-lg font-helvetica text-gray-gray-700 leading-[140%]">
                                                $53,000
                                                <span className="text-sm leading-[1.4] font-bold text-green-green-400">+55%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center rounded-lg bg-teal-teal-300 p-[12px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                                                <path d="M4.94644 4.81816H19.0089C19.1732 4.81809 19.3373 4.82851 19.5002 4.84937C19.445 4.46167 19.3118 4.08917 19.1088 3.75433C18.9057 3.41949 18.6369 3.12925 18.3186 2.9011C18.0003 2.67294 17.6391 2.51161 17.2568 2.42683C16.8745 2.34204 16.4789 2.33556 16.094 2.40776L4.52895 4.38223H4.51577C3.78983 4.52105 3.14427 4.93178 2.71094 5.53052C3.36379 5.06616 4.14529 4.81713 4.94644 4.81816Z" fill="white"/>
                                                <path d="M19.009 5.87488H4.94653C4.20086 5.87569 3.48596 6.17227 2.95869 6.69954C2.43142 7.22681 2.13485 7.94171 2.13403 8.68738V17.1249C2.13485 17.8705 2.43142 18.5854 2.95869 19.1127C3.48596 19.64 4.20086 19.9366 4.94653 19.9374H19.009C19.7547 19.9366 20.4696 19.64 20.9969 19.1127C21.5241 18.5854 21.8207 17.8705 21.8215 17.1249V8.68738C21.8207 7.94171 21.5241 7.22681 20.9969 6.69954C20.4696 6.17227 19.7547 5.87569 19.009 5.87488ZM16.9216 14.3124C16.6435 14.3124 16.3716 14.2299 16.1404 14.0754C15.9091 13.9209 15.7289 13.7012 15.6224 13.4443C15.516 13.1873 15.4881 12.9046 15.5424 12.6318C15.5967 12.359 15.7306 12.1084 15.9273 11.9118C16.1239 11.7151 16.3745 11.5812 16.6473 11.5269C16.9201 11.4726 17.2028 11.5005 17.4598 11.6069C17.7167 11.7134 17.9364 11.8936 18.0909 12.1249C18.2454 12.3561 18.3279 12.628 18.3279 12.9061C18.3279 13.2791 18.1797 13.6368 17.916 13.9005C17.6523 14.1642 17.2946 14.3124 16.9216 14.3124Z" fill="white"/>
                                                <path d="M2.15601 11.6514V7.27881C2.15601 6.32651 2.68335 4.72998 4.51367 4.38413C6.06714 4.09277 7.60522 4.09277 7.60522 4.09277C7.60522 4.09277 8.61597 4.7959 7.781 4.7959C6.94604 4.7959 6.96802 5.87256 7.781 5.87256C8.59399 5.87256 7.781 6.90527 7.781 6.90527L4.50708 10.6187L2.15601 11.6514Z" fill="white"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p className="mb-0 text-gray-gray-400 font-bold leading-[150%] text-[12px]">Today's Users
                                            </p>
                                            <h5 className="mb-0 font-bold text-lg font-helvetica text-gray-gray-700 leading-[140%]">
                                                2,300
                                                <span className="text-sm leading-[1.4] font-bold text-green-green-400">+3%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center rounded-lg bg-teal-teal-300 p-[12px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                                                <path d="M12 2.35858C6.952 2.35858 2.85938 6.45121 2.85938 11.4992C2.85938 16.5472 6.952 20.6398 12 20.6398C17.048 20.6398 21.1406 16.5472 21.1406 11.4992C21.1406 6.45121 17.048 2.35858 12 2.35858Z" fill="white" stroke="#4FD1C5" stroke-width="0.75" stroke-miterlimit="10"/>
                                                <path d="M11.9999 2.35858C9.448 2.35858 7.04858 6.45121 7.04858 11.4992C7.04858 16.5472 9.448 20.6398 11.9999 20.6398C14.5518 20.6398 16.9512 16.5472 16.9512 11.4992C16.9512 6.45121 14.5518 2.35858 11.9999 2.35858Z" fill="white" stroke="#4FD1C5" stroke-width="0.75" stroke-miterlimit="10"/>
                                                <path d="M5.90601 5.40552C7.58647 6.59863 9.702 7.31011 11.9999 7.31011C14.2978 7.31011 16.4133 6.59863 18.0938 5.40552" fill="white"/>
                                                <path d="M5.90601 5.40552C7.58647 6.59863 9.702 7.31011 11.9999 7.31011C14.2978 7.31011 16.4133 6.59863 18.0938 5.40552" stroke="#4FD1C5" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M18.0938 17.5944C16.4133 16.4013 14.2978 15.6898 11.9999 15.6898C9.702 15.6898 7.58647 16.4013 5.90601 17.5944" stroke="#4FD1C5" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M11.9998 2.35858V20.6398" stroke="#4FD1C5" stroke-width="0.75" stroke-miterlimit="10"/>
                                                <path d="M21.1406 11.499H2.85938" stroke="#4FD1C5" stroke-width="0.75" stroke-miterlimit="10"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p className="mb-0 text-gray-gray-400 font-bold leading-[150%] text-[12px]">New Clients</p>
                                            <h5 className="mb-0 font-bold text-lg font-helvetica text-gray-gray-700 leading-[140%]">
                                                +3,462
                                                <span className="text-sm leading-[1.4] font-bold text-red-red-500">-14%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center rounded-lg bg-teal-teal-300 p-[12px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                                                <path d="M13.406 10.1057H19.5583C19.6019 10.1057 19.6436 10.123 19.6744 10.1538C19.7051 10.1845 19.7224 10.2263 19.7224 10.2698V18.5315C19.7224 19.2743 19.4273 19.9867 18.9021 20.5119C18.3768 21.0372 17.6644 21.3323 16.9216 21.3323H7.07788C6.33507 21.3323 5.62268 21.0372 5.09743 20.5119C4.57218 19.9867 4.2771 19.2743 4.2771 18.5315V4.46899C4.2771 3.72618 4.57218 3.01379 5.09743 2.48854C5.62268 1.96329 6.33507 1.66821 7.07788 1.66821H11.1208C11.1644 1.66821 11.2061 1.6855 11.2369 1.71627C11.2676 1.74703 11.2849 1.78876 11.2849 1.83228V7.98462C11.2849 8.54717 11.5084 9.08668 11.9062 9.48446C12.3039 9.88224 12.8435 10.1057 13.406 10.1057ZM8.48413 17.137H15.5154C15.705 17.137 15.8868 17.0616 16.0209 16.9276C16.1549 16.7935 16.2302 16.6117 16.2302 16.4221C16.2302 16.2325 16.1549 16.0507 16.0209 15.9166C15.8868 15.7826 15.705 15.7073 15.5154 15.7073H8.48413C8.29454 15.7073 8.11272 15.7826 7.97866 15.9166C7.8446 16.0507 7.76929 16.2325 7.76929 16.4221C7.76929 16.6117 7.8446 16.7935 7.97866 16.9276C8.11272 17.0616 8.29454 17.137 8.48413 17.137ZM8.48413 13.6213H15.5154C15.705 13.6213 15.8868 13.546 16.0209 13.412C16.1549 13.2779 16.2302 13.0961 16.2302 12.9065C16.2302 12.7169 16.1549 12.5351 16.0209 12.401C15.8868 12.267 15.705 12.1916 15.5154 12.1916H8.48413C8.29454 12.1916 8.11272 12.267 7.97866 12.401C7.8446 12.5351 7.76929 12.7169 7.76929 12.9065C7.76929 13.0961 7.8446 13.2779 7.97866 13.412C8.11272 13.546 8.29454 13.6213 8.48413 13.6213Z" fill="white" stroke="#4FD1C5" stroke-width="0.0234375"/>
                                                <path d="M12.8444 2.22753L19.1641 8.54726L12.8444 2.22753ZM12.8444 2.22753C12.8443 2.22753 12.8443 2.22753 12.8443 2.22752M12.8444 2.22753L12.8443 2.22752M12.8443 2.22752C12.8337 2.21694 12.8202 2.20974 12.8054 2.20683C12.7907 2.20392 12.7754 2.20542 12.7615 2.21116C12.7477 2.2169 12.7358 2.22662 12.7274 2.23908C12.719 2.25155 12.7145 2.2662 12.7145 2.28121V7.98573C12.7145 8.1691 12.7873 8.34496 12.917 8.47463C13.0466 8.60429 13.2225 8.67713 13.4059 8.67713H19.1104C19.1254 8.67707 19.1401 8.67257 19.1525 8.6642C19.165 8.65582 19.1747 8.64395 19.1804 8.63007C19.1862 8.61619 19.1877 8.60092 19.1848 8.58619C19.1819 8.57147 19.1747 8.55793 19.1641 8.54729L12.8443 2.22752Z" fill="white" stroke="#4FD1C5" stroke-width="0.0234375"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p className="mb-0 text-gray-gray-400 font-bold leading-[150%] text-[12px]">Sales</p>
                                            <h5 className="mb-0 font-bold text-lg font-helvetica text-gray-gray-700 leading-[140%]">
                                                $173,000
                                                <span className="text-sm leading-[1.4] font-bold text-teal-teal-300">+8%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center rounded-lg bg-teal-teal-300 p-[12px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                                                <path d="M8.48401 19.9374C9.26066 19.9374 9.89026 19.3078 9.89026 18.5311C9.89026 17.7545 9.26066 17.1249 8.48401 17.1249C7.70736 17.1249 7.07776 17.7545 7.07776 18.5311C7.07776 19.3078 7.70736 19.9374 8.48401 19.9374Z" fill="white"/>
                                                <path d="M18.3278 19.9374C19.1045 19.9374 19.7341 19.3078 19.7341 18.5311C19.7341 17.7545 19.1045 17.1249 18.3278 17.1249C17.5512 17.1249 16.9216 17.7545 16.9216 18.5311C16.9216 19.3078 17.5512 19.9374 18.3278 19.9374Z" fill="white"/>
                                                <path d="M20.8239 5.55796C20.7251 5.43713 20.6006 5.33981 20.4596 5.27308C20.3185 5.20634 20.1643 5.17185 20.0083 5.17212H6.6335L6.36412 3.6437C6.33539 3.4809 6.25022 3.33342 6.12356 3.22717C5.9969 3.12093 5.83686 3.06271 5.67154 3.06274H2.85904C2.67256 3.06274 2.49372 3.13682 2.36185 3.26868C2.22999 3.40055 2.15591 3.57939 2.15591 3.76587C2.15591 3.95235 2.22999 4.13119 2.36185 4.26305C2.49372 4.39491 2.67256 4.46899 2.85904 4.46899H5.08179L7.08833 15.8412C7.11706 16.004 7.20223 16.1514 7.32889 16.2577C7.45555 16.3639 7.61559 16.4221 7.78091 16.4221H19.0309C19.2174 16.4221 19.3962 16.348 19.5281 16.2162C19.66 16.0843 19.734 15.9055 19.734 15.719C19.734 15.5325 19.66 15.3537 19.5281 15.2218C19.3962 15.0899 19.2174 15.0159 19.0309 15.0159H8.37066L8.12281 13.6096H18.7426C18.9865 13.6093 19.2227 13.5248 19.4114 13.3703C19.6001 13.2158 19.7296 13.0009 19.778 12.7619L21.0436 6.43379C21.0741 6.28064 21.0702 6.12263 21.0322 5.97117C20.9942 5.81971 20.9231 5.67857 20.8239 5.55796Z" fill="white"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap mt-6 -mx-3">
                    <div className="w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
                        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border h-full">
                            <div className="flex-auto p-4 h-full">
                                <div className="flex flex-wrap -mx-3 h-full">
                                    <div className="max-w-full px-3 lg:w-1/2 lg:flex-none">
                                        <div className="flex flex-col h-full">

                                            <p className="mb-12 text-gray-gray-400 normal leading-[140%] max-w-[329.5px]">From colors, cards, typography to complex elements, you will find
                                                the full documentation.</p>

                                        </div>
                                    </div>
                                    <div className="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">
                                        <div className="h-full rounded-xl" style={{backgroundImage: "url('/card-img.png')"}}>
                                            <img src="/octopus-white.svg" className="relative top-0 h-full lg:block p-[60px]" alt="octopus-white"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
                        <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4">
                            <div className="relative h-full overflow-hidden bg-cover rounded-xl" style={{backgroundImage: "url('/image-readmore.jpg')"}}>
                                <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-dark-gray opacity-80"></span>
                                <div className="relative z-10 flex flex-col flex-auto h-full p-4">
                                    <h5 className="pt-2 mb-6 font-bold text-blackampwhite-white text-lg leading-[140%] text-text-lg">Work with the rockets</h5>
                                    <p className="text-blackampwhite-white max-w-[384.5px] text-sm leading-[140%]">Wealth creation is an evolutionarily recent positive-sum game. It is
                                        all about who take the opportunity first.</p>
                                    <a className="mt-[44.292px] mb-0 font-semibold leading-normal text-white group text-sm" href="javascript:;">
                                        Read More
                                        <i className="fas fa-arrow-right ease-bounce text-size-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"
                                           aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap mt-6 -mx-3">
                    <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-5/12 lg:flex-none">
                        <div className="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="mb-[24px] bg-gradient-dark-gray rounded-xl">
                                    <div>
                                        <img src={'/graph1.svg'} />
                                    </div>
                                </div>
                                <h6 className="mb-0 ml-2 text-text-lg leading-[140%] font-bold text-gray-gray-700">Active Users</h6>
                                <p className="ml-2 leading-[140%] text-sm text-gray-gray-400">(<span className="font-bold text-green-400">+23%</span>) than last week
                                </p>
                                <div className="w-full px-6 mx-auto max-w-screen-2xl rounded-xl mt-[36.5px]">
                                    <div className="flex flex-wrap mt-0 -mx-3">
                                        <div className="flex-none w-1/4 max-w-full pt-4 pl-0 pr-3 mt-0">
                                            <div className="flex mb-2">
                                                <div className="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-teal-teal-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                        <path d="M2.5813 2.78788H10.3938C10.4851 2.78784 10.5762 2.79363 10.6667 2.80522C10.6361 2.58983 10.5621 2.38289 10.4493 2.19686C10.3364 2.01084 10.1871 1.8496 10.0103 1.72284C9.83345 1.59609 9.63279 1.50646 9.42039 1.45936C9.20799 1.41226 8.98824 1.40866 8.77441 1.44877L2.34936 2.5457H2.34204C1.93874 2.62282 1.58009 2.851 1.33936 3.18363C1.70205 2.92566 2.13622 2.78731 2.5813 2.78788Z" fill="white"/>
                                                        <path d="M10.3938 3.37491H2.5813C2.16704 3.37536 1.76987 3.54013 1.47694 3.83305C1.18402 4.12598 1.01925 4.52315 1.0188 4.93741V9.62491C1.01925 10.0392 1.18402 10.4363 1.47694 10.7293C1.76987 11.0222 2.16704 11.187 2.5813 11.1874H10.3938C10.8081 11.187 11.2052 11.0222 11.4982 10.7293C11.7911 10.4363 11.9558 10.0392 11.9563 9.62491V4.93741C11.9558 4.52315 11.7911 4.12598 11.4982 3.83305C11.2052 3.54013 10.8081 3.37536 10.3938 3.37491ZM9.23413 8.06241C9.07961 8.06241 8.92857 8.01659 8.80009 7.93074C8.67161 7.8449 8.57148 7.72288 8.51235 7.58013C8.45322 7.43737 8.43775 7.28029 8.46789 7.12874C8.49804 6.9772 8.57244 6.83799 8.6817 6.72873C8.79096 6.61947 8.93017 6.54506 9.08171 6.51492C9.23326 6.48477 9.39035 6.50025 9.5331 6.55938C9.67586 6.61851 9.79787 6.71864 9.88371 6.84712C9.96956 6.97559 10.0154 7.12664 10.0154 7.28116C10.0154 7.48836 9.93307 7.68707 9.78656 7.83358C9.64004 7.9801 9.44133 8.06241 9.23413 8.06241Z" fill="white"/>
                                                        <path d="M1.03101 6.58411V4.15491C1.03101 3.62585 1.32397 2.73889 2.34082 2.54675C3.20386 2.38489 4.05835 2.38489 4.05835 2.38489C4.05835 2.38489 4.61987 2.77551 4.15601 2.77551C3.69214 2.77551 3.70434 3.37366 4.15601 3.37366C4.60767 3.37366 4.15601 3.94739 4.15601 3.94739L2.33716 6.01038L1.03101 6.58411Z" fill="white"/>
                                                    </svg>
                                                </div>
                                                <p className="leading-[150%] text-text-xs font-bold text-gray-gray-400">Users</p>
                                            </div>
                                            <h4 className="font-bold text-text-lg text-gray-gray-700">32,984</h4>
                                            <div className="text-size-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                                                <div className="duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-teal-teal-300 text-center text-white transition-all" role={"progressbar"} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-none w-1/4 max-w-full pt-4 pl-0 pr-3 mt-0">
                                            <div className="flex mb-2">
                                                <div className="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-teal-teal-300">
                                                    <svg width="10px" height="10px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                        <title>spaceship</title>
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                                <g transform="translate(1716.000000, 291.000000)">
                                                                    <g transform="translate(4.000000, 301.000000)">
                                                                        <path className="color-background" d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z">
                                                                        </path>
                                                                        <path className="color-background" d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z">
                                                                        </path>
                                                                        <path className="color-background" d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z" opacity="0.598539807"></path>
                                                                        <path className="color-background" d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z" opacity="0.598539807"></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <p className="leading-[150%] text-text-xs font-bold text-gray-gray-400">Clicks</p>
                                            </div>
                                            <h4 className="font-bold text-text-lg text-gray-gray-700">2,42m</h4>
                                            <div className="text-size-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                                                <div className="duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-4/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-teal-teal-300 text-center text-white transition-all" role={"progressbar"} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-none w-1/4 max-w-full pt-4 pl-0 pr-3 mt-0">
                                            <div className="flex mb-2">
                                                <div className="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-teal-teal-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                        <path d="M4.54663 11.1875C4.9781 11.1875 5.32788 10.8377 5.32788 10.4062C5.32788 9.97473 4.9781 9.62495 4.54663 9.62495C4.11516 9.62495 3.76538 9.97473 3.76538 10.4062C3.76538 10.8377 4.11516 11.1875 4.54663 11.1875Z" fill="white"/>
                                                        <path d="M10.0154 11.1875C10.4469 11.1875 10.7966 10.8377 10.7966 10.4062C10.7966 9.97473 10.4469 9.62495 10.0154 9.62495C9.58391 9.62495 9.23413 9.97473 9.23413 10.4062C9.23413 10.8377 9.58391 11.1875 10.0154 11.1875Z" fill="white"/>
                                                        <path d="M11.4021 3.19887C11.3472 3.13174 11.2781 3.07768 11.1997 3.0406C11.1213 3.00352 11.0357 2.98436 10.949 2.98451H3.51855L3.3689 2.13539C3.35294 2.04494 3.30562 1.96301 3.23525 1.90399C3.16489 1.84496 3.07597 1.81262 2.98413 1.81264H1.42163C1.31803 1.81264 1.21867 1.85379 1.14542 1.92705C1.07216 2.00031 1.03101 2.09966 1.03101 2.20326C1.03101 2.30686 1.07216 2.40622 1.14542 2.47948C1.21867 2.55273 1.31803 2.59389 1.42163 2.59389H2.65649L3.77124 8.91176C3.7872 9.0022 3.83452 9.08414 3.90488 9.14316C3.97525 9.20219 4.06416 9.23453 4.156 9.23451H10.406C10.5096 9.23451 10.609 9.19336 10.6822 9.1201C10.7555 9.04684 10.7966 8.94749 10.7966 8.84389C10.7966 8.74028 10.7555 8.64093 10.6822 8.56767C10.609 8.49441 10.5096 8.45326 10.406 8.45326H4.48364L4.34595 7.67201H10.2458C10.3813 7.67184 10.5126 7.62487 10.6174 7.53905C10.7222 7.45323 10.7941 7.33383 10.821 7.20106L11.5242 3.68544C11.5411 3.60036 11.5389 3.51257 11.5178 3.42843C11.4967 3.34428 11.4572 3.26588 11.4021 3.19887Z" fill="white"/>
                                                    </svg>
                                                </div>
                                                <p className="leading-[150%] text-text-xs font-bold text-gray-gray-400">Sales</p>
                                            </div>
                                            <h4 className="font-bold text-text-lg text-gray-gray-700">2,400$</h4>
                                            <div className="text-size-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                                                <div className="duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-2/6 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-teal-teal-300 text-center text-white transition-all" role={"progressbar"} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-none w-1/4 max-w-full pt-4 pl-0 pr-3 mt-0">
                                            <div className="flex mb-2">
                                                <div className="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-teal-teal-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                        <path d="M11.7136 3.19285C11.6855 3.13814 11.6448 3.09085 11.595 3.05483C11.5451 3.01881 11.4874 2.99507 11.4266 2.98555C11.3659 2.97604 11.3037 2.98101 11.2452 3.00006C11.1867 3.01911 11.1336 3.05171 11.0901 3.09519L9.59006 4.59617C9.51643 4.66873 9.4172 4.70941 9.31382 4.70941C9.21044 4.70941 9.11121 4.66873 9.03757 4.59617L8.38914 3.94675C8.35285 3.91048 8.32407 3.86741 8.30444 3.82002C8.2848 3.77262 8.27469 3.72181 8.27469 3.67051C8.27469 3.6192 8.2848 3.5684 8.30444 3.521C8.32407 3.4736 8.35285 3.43054 8.38914 3.39426L9.88279 1.90037C9.92756 1.8556 9.96079 1.80061 9.97959 1.74015C9.9984 1.67969 10.0022 1.61556 9.99074 1.55329C9.97926 1.49102 9.95281 1.43248 9.91367 1.3827C9.87454 1.33293 9.82389 1.29341 9.76609 1.26756C8.63792 0.763162 7.22971 1.02635 6.34177 1.90769C5.58738 2.65672 5.36253 3.82713 5.72532 5.11887C5.74488 5.18776 5.74499 5.26071 5.72565 5.32966C5.7063 5.3986 5.66824 5.46085 5.6157 5.5095L1.55125 9.22166C1.39291 9.36382 1.26519 9.53675 1.17589 9.72991C1.08658 9.92306 1.03756 10.1324 1.03182 10.3451C1.02608 10.5578 1.06373 10.7695 1.14248 10.9672C1.22123 11.1648 1.33943 11.3444 1.48987 11.4949C1.6403 11.6454 1.81982 11.7637 2.01748 11.8425C2.21513 11.9214 2.42677 11.9591 2.6395 11.9535C2.85222 11.9478 3.06156 11.8989 3.25475 11.8097C3.44794 11.7205 3.62093 11.5928 3.76316 11.4345L7.51511 7.36106C7.56306 7.30919 7.62426 7.27139 7.6921 7.25173C7.75995 7.23207 7.83187 7.2313 7.90012 7.24949C8.26788 7.35025 8.64723 7.40254 9.02854 7.40501C9.84397 7.40501 10.5595 7.14109 11.0757 6.63254C12.0315 5.69089 12.1772 4.09373 11.7136 3.19285ZM2.67893 11.1672C2.51814 11.1848 2.35587 11.152 2.2145 11.0734C2.07314 10.9948 1.95966 10.8742 1.88972 10.7284C1.81978 10.5825 1.79684 10.4186 1.82405 10.2591C1.85126 10.0997 1.92729 9.95264 2.04164 9.83825C2.15599 9.72385 2.30303 9.64777 2.46246 9.62051C2.62189 9.59324 2.78585 9.61613 2.93172 9.68602C3.07759 9.7559 3.19817 9.86934 3.27682 10.0107C3.35548 10.152 3.38832 10.3143 3.37083 10.4751C3.35158 10.652 3.2725 10.817 3.14669 10.9429C3.02087 11.0688 2.85585 11.1479 2.67893 11.1672Z" fill="white"/>
                                                    </svg>
                                                </div>
                                                <p className="leading-[150%] text-text-xs font-bold text-gray-gray-400">Items</p>
                                            </div>
                                            <h4 className="font-bold text-text-lg text-gray-gray-700">320</h4>
                                            <div className="text-size-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                                                <div className="duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-2/3 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-teal-teal-300 text-center text-white transition-all" role={"progressbar"} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
                        <div className="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white pl-[21px] pt-[28px] pb-0">
                                <h6 className={'font-bold leading-[140%] text-text-lg text-gray-gray-700'}>Sales overview</h6>
                                <p className="leading-[140%] text-sm font-normal text-gray-gray-400">
                                    <i className="fa fa-arrow-up text-green-green-400" aria-hidden="true"></i>
                                    <span className="font-bold text-green-green-400">(+5%) more</span> in 2022
                                </p>
                            </div>
                            <div className="flex-auto pr-[19px] pb-[29px] pl-[21.5px] mt-[41px]">
                                <div>
                                    <div>
                                        <img src={'/graph2.svg'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap my-6 -mx-3">

                    <div className="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 lg:flex-none">
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
                                    </tr>
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
                                    </tr>
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
                                    </tr>
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
                                    </tr>
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
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none">
                        <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                                <h6 className={'text-text-lg font-bold text-gray-gray-700 leading-[140%]'}>Orders overview</h6>
                                <p className="text-sm text-gray-gray-400 font-normal leading-[140%]">
                                    <span className="font-bold text-green-green-400">+30%</span> this month
                                </p>
                            </div>
                            <div className="flex-auto p-4">
                                <div className="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[''] before:lg:-ml-px">
                                    <div className="relative mb-4 mt-0 after:clear-both after:table after:content-[''] webkit-box">
                                        <span className="w-6.5 h-6.5 text-size-base relative pb-[6.5px] bg-blackampwhite-white left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full text-center font-semibold fill-teal-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M13.7523 10.6656C13.7004 10.6031 13.6495 10.5406 13.5995 10.4803C12.912 9.64874 12.4961 9.14686 12.4961 6.7928C12.4961 5.57405 12.2045 4.57405 11.6298 3.82405C11.2061 3.26999 10.6333 2.84968 9.87826 2.53905C9.86855 2.53365 9.85987 2.52656 9.85264 2.51812C9.58108 1.60874 8.83795 0.99968 7.99983 0.99968C7.1617 0.99968 6.41889 1.60874 6.14733 2.51718C6.14008 2.52531 6.13152 2.53218 6.12201 2.53749C4.36014 3.2628 3.50389 4.65437 3.50389 6.79187C3.50389 9.14686 3.08858 9.64874 2.40045 10.4794C2.35045 10.5397 2.29952 10.6009 2.24764 10.6647C2.11364 10.8263 2.02874 11.0229 2.00299 11.2312C1.97724 11.4396 2.01171 11.6509 2.10233 11.8403C2.29514 12.2466 2.70608 12.4987 3.17514 12.4987H12.828C13.2948 12.4987 13.7029 12.2469 13.8964 11.8425C13.9874 11.6531 14.0222 11.4415 13.9967 11.233C13.9711 11.0244 13.8863 10.8275 13.7523 10.6656Z" fill="#4FD1C5"/>
                                                <path d="M7.99974 15C8.45131 14.9996 8.89437 14.877 9.28191 14.6452C9.66946 14.4134 9.98705 14.0811 10.201 13.6834C10.2111 13.6643 10.216 13.643 10.2154 13.6215C10.2148 13.5999 10.2087 13.5789 10.1975 13.5604C10.1864 13.5419 10.1707 13.5267 10.1519 13.5161C10.1331 13.5055 10.1119 13.4999 10.0904 13.5H5.90974C5.88815 13.4999 5.86692 13.5054 5.8481 13.516C5.82927 13.5265 5.81351 13.5418 5.80234 13.5603C5.79117 13.5787 5.78497 13.5998 5.78435 13.6214C5.78373 13.6429 5.78871 13.6643 5.7988 13.6834C6.01272 14.081 6.33026 14.4134 6.71774 14.6451C7.10523 14.8769 7.54822 14.9995 7.99974 15Z" fill="#4FD1C5"/>
                                            </svg>
                                        </span>
                                        <div className="ml-11.252 pt-1.4 lg:max-w-120 relative w-auto ml-[21px]">
                                            <h6 className="mb-0 font-bold leading-[140%] text-sm text-gray-gray-700">$2400, Design changes</h6>
                                            <p className="mt-1 mb-0 text-sm font-bold leading-[150%] text-gray-gray-400">22 DEC 7:20 PM</p>
                                        </div>
                                    </div>
                                    <div className="relative mb-4 after:clear-both after:table after:content-[''] webkit-box">
                                        <span className="w-6.5 h-6.5 text-size-base relative py-[6.5px] bg-blackampwhite-white -top-[5.5px] left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full text-center font-semibold fill-red-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M1.99969 1.49937L3.09344 14.1L7.99251 15.4994L12.9059 14.0978L13.9997 1.49937H1.99969ZM11.0834 11.965L8.00188 12.8431L4.92501 11.9606L4.71407 9.53062H6.22219L6.32938 10.7669L8.00407 11.2406L8.00813 11.2494L9.67907 10.7853L9.85532 8.78062H6.34344L6.21844 7.21812H9.98876L10.1247 5.62437H4.37469L4.24969 4.09312H11.7678L11.0834 11.965Z" fill="#E53E3E"/>
                                            </svg>
                                        </span>
                                        <div className="ml-11.252 pt-1.4 lg:max-w-120 relative w-auto ml-[21px]">
                                            <h6 className="mb-0 font-bold leading-[140%] text-sm text-gray-gray-700">New order #4219423</h6>
                                            <p className="mt-1 mb-0 text-sm font-bold leading-[150%] text-gray-gray-400">21 DEC 11:21 PM</p>
                                        </div>
                                    </div>
                                    <div className="relative mb-4 after:clear-both after:table after:content-[''] webkit-box">
                                        <span className="w-6.5 h-6.5 text-size-base relative py-[6.5px] bg-blackampwhite-white -top-[5.5px] left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full text-center font-semibold fill-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M5.49963 14.4999C6.05192 14.4999 6.49963 14.0522 6.49963 13.4999C6.49963 12.9477 6.05192 12.4999 5.49963 12.4999C4.94735 12.4999 4.49963 12.9477 4.49963 13.4999C4.49963 14.0522 4.94735 14.4999 5.49963 14.4999Z" fill="#4299E1"/>
                                                <path d="M12.4997 14.4999C13.052 14.4999 13.4997 14.0522 13.4997 13.4999C13.4997 12.9477 13.052 12.4999 12.4997 12.4999C11.9474 12.4999 11.4997 12.9477 11.4997 13.4999C11.4997 14.0522 11.9474 14.4999 12.4997 14.4999Z" fill="#4299E1"/>
                                                <path d="M14.2747 4.27454C14.2044 4.18862 14.116 4.11942 14.0156 4.07196C13.9153 4.0245 13.8057 3.99998 13.6947 4.00017H4.18376L3.99219 2.91329C3.97177 2.79752 3.9112 2.69265 3.82113 2.6171C3.73106 2.54154 3.61725 2.50014 3.49969 2.50017H1.49969C1.36709 2.50017 1.23991 2.55285 1.14614 2.64661C1.05237 2.74038 0.999695 2.86756 0.999695 3.00017C0.999695 3.13278 1.05237 3.25995 1.14614 3.35372C1.23991 3.44749 1.36709 3.50017 1.49969 3.50017H3.08032L4.50719 11.587C4.52762 11.7028 4.58819 11.8077 4.67826 11.8832C4.76832 11.9588 4.88213 12.0002 4.99969 12.0002H12.9997C13.1323 12.0002 13.2595 11.9475 13.3532 11.8537C13.447 11.76 13.4997 11.6328 13.4997 11.5002C13.4997 11.3676 13.447 11.2404 13.3532 11.1466C13.2595 11.0528 13.1323 11.0002 12.9997 11.0002H5.41907L5.24282 10.0002H12.7947C12.9681 9.99995 13.1361 9.93982 13.2703 9.82997C13.4044 9.72013 13.4965 9.5673 13.5309 9.39735L14.4309 4.89735C14.4526 4.78845 14.4499 4.67609 14.4228 4.56838C14.3958 4.46068 14.3452 4.36031 14.2747 4.27454Z" fill="#4299E1"/>
                                            </svg>
                                        </span>
                                        <div className="ml-11.252 pt-1.4 lg:max-w-120 relative w-auto ml-[21px]">
                                            <h6 className="mb-0 font-bold leading-[140%] text-sm text-gray-gray-700">Server Payments for April</h6>
                                            <p className="mt-1 mb-0 text-sm font-bold leading-[150%] text-gray-gray-400">21 DEC 9:28 PM</p>
                                        </div>
                                    </div>
                                    <div className="relative mb-4 after:clear-both after:table after:content-[''] webkit-box">
                                        <span className="w-6.5 h-6.5 text-size-base relative py-[6.5px] bg-blackampwhite-white -top-[5.5px] left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full text-center font-semibold fill-orange-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M0.999695 12.2495C0.999695 12.7137 1.18407 13.1588 1.51226 13.487C1.84045 13.8152 2.28557 13.9995 2.74969 13.9995H13.2497C13.7138 13.9995 14.1589 13.8152 14.4871 13.487C14.8153 13.1588 14.9997 12.7137 14.9997 12.2495V7.43704H0.999695V12.2495ZM3.06219 9.87454C3.06219 9.6259 3.16097 9.38745 3.33678 9.21163C3.5126 9.03581 3.75105 8.93704 3.99969 8.93704H5.49969C5.74833 8.93704 5.98679 9.03581 6.16261 9.21163C6.33842 9.38745 6.43719 9.6259 6.43719 9.87454V10.4995C6.43719 10.7482 6.33842 10.9866 6.16261 11.1625C5.98679 11.3383 5.74833 11.437 5.49969 11.437H3.99969C3.75105 11.437 3.5126 11.3383 3.33678 11.1625C3.16097 10.9866 3.06219 10.7482 3.06219 10.4995V9.87454Z" fill="#F6AD55"/>
                                                <path d="M13.2497 2.99915H2.74969C2.28557 2.99915 1.84045 3.18352 1.51226 3.51171C1.18407 3.8399 0.999695 4.28502 0.999695 4.74915V5.56164H14.9997V4.74915C14.9997 4.28502 14.8153 3.8399 14.4871 3.51171C14.1589 3.18352 13.7138 2.99915 13.2497 2.99915Z" fill="#F6AD55"/>
                                            </svg>
                                        </span>
                                        <div className="ml-11.252 pt-1.4 lg:max-w-120 relative w-auto ml-[21px]">
                                            <h6 className="mb-0 font-bold leading-[140%] text-sm text-gray-gray-700">New card added for order #3210145</h6>
                                            <p className="mt-1 mb-0 text-sm font-bold leading-[150%] text-gray-gray-400">20 DEC 3:52 PM</p>
                                        </div>
                                    </div>
                                    <div className="relative mb-4 after:clear-both after:table after:content-[''] webkit-box">
                                        <span className="w-6.5 h-6.5 text-size-base relative py-[6.5px] bg-blackampwhite-white -top-[5.5px] left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full text-center font-semibold fill-purple-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                              <g clip-path="url(#clip0_793_2896)">
                                                <path d="M8.00994 4.44411L4.25494 6.88943L8.00994 9.33443L4.25494 11.7804L0.499939 9.31411L4.25494 6.86911L0.499939 4.44411L4.25494 1.99911L8.00994 4.44411ZM4.23494 12.5541L7.98994 10.1088L11.7449 12.5541L7.98994 14.9991L4.23494 12.5541ZM8.00994 9.31411L11.7649 6.86911L8.00994 4.44411L11.7449 1.99911L15.4999 4.44411L11.7449 6.88943L15.4999 9.33443L11.7449 11.7804L8.00994 9.31411Z" fill="#9F7AEA"/>
                                              </g>
                                              <defs>
                                                <clipPath id="clip0_793_2896">
                                                  <rect width="16" height="16" fill="white" transform="translate(-0.000244141 0.5)"/>
                                                </clipPath>
                                              </defs>
                                            </svg>
                                        </span>
                                        <div className="ml-11.252 pt-1.4 lg:max-w-120 relative w-auto ml-[21px]">
                                            <h6 className="mb-0 font-bold leading-[140%] text-sm text-gray-gray-700">Unlock packages for Development</h6>
                                            <p className="mt-1 mb-0 text-sm font-bold leading-[150%] text-gray-gray-400">19 DEC 11:35 PM</p>
                                        </div>
                                    </div>
                                    <div className="relative mb-0 after:clear-both after:table after:content-[''] webkit-box">
                                        <span className="w-6.5 h-6.5 text-size-base relative py-[6.5px] bg-blackampwhite-white -top-[5.5px] left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full text-center font-semibold">
                                            <img src={'/adobeXDIcon.svg'}/>
                                        </span>
                                        <div className="ml-11.252 pt-1.4 lg:max-w-120 relative w-auto ml-[16px]">
                                            <h6 className="mb-0 font-bold leading-[140%] text-sm text-gray-gray-700">New order #9851258</h6>
                                            <p className="mt-1 mb-0 text-sm font-bold leading-[150%] text-gray-gray-400">18 DEC 4:41 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>;
};

export default Content;

