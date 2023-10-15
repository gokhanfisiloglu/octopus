import React from 'react';
import Content from "./../Dashboard/Content";

/*interface SidebarProps {
}*/

type SidebarProps = {
    className: any
};

const Sidebar: React.FC<SidebarProps> = (props) => {

    return (
        <aside className={"custom-sidebar max-w-[15.625rem] ease-nav-brand z-990 fixed inset-y-0 lg:my-4 block w-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 ml-4 -translate-x-full xl:translate-x-0 xl:bg-transparent ps " + props.className}>
            <div className="h-19.5">
                <i className="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden" sidenav-close="" aria-hidden="true"></i>
                <a className="block px-8 py-6 m-0 text-size-sm whitespace-nowrap text-slate-700" href="#" target="_blank">
                    <img src="/octopus-green.svg" className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8" alt="main_logo"/>
                </a>
            </div>
            <hr className="h-px mt-0 bg-transparent via-black/40 bg-gradient-to-r from-transparent to-transparent "/>
            <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full ps ps--active-y">
                <ul className="flex flex-col pl-0 mb-0 text-text-xs">
                    <li className="mt-0.5 w-full">
                        <a className="py-2.7 ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700" href="/dashboard">
                            <div className=" bg-teal-teal-300 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                    <title>shop</title>
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(0.000000, 148.000000)">
                                                    <path className="fill-blackampwhite-white " d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z">
                                                    </path>
                                                    <path className="fill-lackampwhite-white" d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Dashboard</span>
                        </a>
                    </li>
                    <li className="mt-0.5 w-full">
                        <a className="py-2.7 text-size-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="/table">
                            <div className=" shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                    <g clip-path="url(#clip0_2_94)">
                                        <path d="M3.04663 15.0316H2.10913C1.92265 15.0316 1.74381 14.9575 1.61195 14.8257C1.48008 14.6938 1.40601 14.515 1.40601 14.3285V10.1097C1.40601 9.92326 1.48008 9.74442 1.61195 9.61256C1.74381 9.4807 1.92265 9.40662 2.10913 9.40662H3.04663C3.23311 9.40662 3.41195 9.4807 3.54381 9.61256C3.67568 9.74442 3.74975 9.92326 3.74975 10.1097V14.3285C3.74975 14.515 3.67568 14.6938 3.54381 14.8257C3.41195 14.9575 3.23311 15.0316 3.04663 15.0316Z" fill="#4FD1C5"/>
                                        <path d="M9.60913 15.0308H8.67163C8.48515 15.0308 8.30631 14.9567 8.17445 14.8249C8.04259 14.693 7.96851 14.5142 7.96851 14.3277V7.29645C7.96851 7.10997 8.04259 6.93112 8.17445 6.79926C8.30631 6.6674 8.48515 6.59332 8.67163 6.59332H9.60913C9.79561 6.59332 9.97445 6.6674 10.1063 6.79926C10.2382 6.93112 10.3123 7.10997 10.3123 7.29645V14.3277C10.3123 14.5142 10.2382 14.693 10.1063 14.8249C9.97445 14.9567 9.79561 15.0308 9.60913 15.0308Z" fill="#4FD1C5"/>
                                        <path d="M12.8904 15.0311H11.9529C11.7664 15.0311 11.5876 14.957 11.4557 14.8252C11.3238 14.6933 11.2498 14.5145 11.2498 14.328V4.0155C11.2498 3.82902 11.3238 3.65018 11.4557 3.51832C11.5876 3.38646 11.7664 3.31238 11.9529 3.31238H12.8904C13.0769 3.31238 13.2557 3.38646 13.3876 3.51832C13.5194 3.65018 13.5935 3.82902 13.5935 4.0155V14.328C13.5935 14.5145 13.5194 14.6933 13.3876 14.8252C13.2557 14.957 13.0769 15.0311 12.8904 15.0311Z" fill="#4FD1C5"/>
                                        <path d="M6.32788 15.031H5.39038C5.2039 15.031 5.02506 14.9569 4.8932 14.8251C4.76133 14.6932 4.68726 14.5144 4.68726 14.3279V1.67163C4.68726 1.48515 4.76133 1.30631 4.8932 1.17445C5.02506 1.04258 5.2039 0.968506 5.39038 0.968506H6.32788C6.51436 0.968506 6.6932 1.04258 6.82506 1.17445C6.95693 1.30631 7.031 1.48515 7.031 1.67163V14.3279C7.031 14.5144 6.95693 14.6932 6.82506 14.8251C6.6932 14.9569 6.51436 15.031 6.32788 15.031Z" fill="#4FD1C5"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_94">
                                            <rect width="15" height="15" fill="white" transform="translate(-0.000244141 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Tables</span>
                        </a>
                    </li>
                    <li className="mt-0.5 w-full">
                        <a className="py-2.7 text-size-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="#">
                            <div className=" shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <title>credit-card</title>
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(453.000000, 454.000000)">
                                                    <path className="fill-teal-teal-300" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z">
                                                    </path>
                                                    <path className="fill-teal-teal-300" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Billing</span>
                        </a>
                    </li>
                    <li className="mt-0.5 w-full">
                        <a className="py-2.7 text-size-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="#">
                            <div className=" shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                <svg width="12px" height="12px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <title>settings</title>
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(304.000000, 151.000000)">
                                                    <polygon className="fill-teal-teal-300" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667">
                                                    </polygon>
                                                    <path className="fill-teal-teal-300" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z">
                                                    </path>
                                                    <path className="fill-teal-teal-300" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">RTL</span>
                        </a>
                    </li>
                    <li className="w-full mt-4">
                        <h6 className="pl-6 ml-2 font-bold leading-tight uppercase text-gray-gray-700">
                            Account pages</h6>
                    </li>
                    <li className="mt-0.5 w-full">
                        <a className="py-2.7 text-size-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="#">
                            <div className=" shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                    <path d="M9.74485 2.39181C9.17473 1.77628 8.37844 1.43732 7.49954 1.43732C6.61595 1.43732 5.81702 1.77423 5.24954 2.38595C4.67591 3.00441 4.39642 3.84493 4.46204 4.75255C4.59212 6.54317 5.95472 7.99981 7.49954 7.99981C9.04436 7.99981 10.4046 6.54347 10.5367 4.75314C10.6032 3.85372 10.322 3.01495 9.74485 2.39181Z" fill="#4FD1C5"/>
                                    <path d="M12.6559 14.5616H2.34343C2.20845 14.5634 2.07477 14.535 1.95213 14.4786C1.82949 14.4222 1.72096 14.3392 1.63444 14.2356C1.44402 14.0079 1.36726 13.6971 1.42409 13.3827C1.67136 12.0111 2.44304 10.8588 3.65593 10.0499C4.73347 9.33186 6.09841 8.93665 7.49968 8.93665C8.90095 8.93665 10.2659 9.33215 11.3434 10.0499C12.5563 10.8585 13.328 12.0108 13.5753 13.3824C13.6321 13.6968 13.5553 14.0076 13.3649 14.2353C13.2784 14.339 13.1699 14.422 13.0473 14.4785C12.9246 14.535 12.7909 14.5634 12.6559 14.5616Z" fill="#4FD1C5"/>
                                </svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Profile</span>
                        </a>
                    </li>
                    <li className="mt-0.5 w-full">
                        <a className="py-2.7 text-size-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="/signin">
                            <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                    <path d="M12.5388 7.06262H8.43726C8.06429 7.06262 7.70661 6.91446 7.44289 6.65074C7.17916 6.38702 7.03101 6.02933 7.03101 5.65637V1.55481C7.03101 1.52373 7.01866 1.49392 6.99668 1.47195C6.97471 1.44997 6.9449 1.43762 6.91382 1.43762H4.21851C3.72122 1.43762 3.24431 1.63517 2.89268 1.9868C2.54105 2.33843 2.34351 2.81534 2.34351 3.31262V12.6876C2.34351 13.1849 2.54105 13.6618 2.89268 14.0134C3.24431 14.3651 3.72122 14.5626 4.21851 14.5626H10.781C11.2783 14.5626 11.7552 14.3651 12.1068 14.0134C12.4585 13.6618 12.656 13.1849 12.656 12.6876V7.17981C12.656 7.14873 12.6437 7.11892 12.6217 7.09694C12.5997 7.07497 12.5699 7.06262 12.5388 7.06262Z" fill="#4FD1C5"/>
                                    <path d="M12.2816 6.026L8.06841 1.81282C8.06021 1.80467 8.0498 1.79913 8.03846 1.79689C8.02713 1.79465 8.01539 1.79581 8.00471 1.80022C7.99403 1.80464 7.9849 1.81211 7.97846 1.8217C7.97202 1.83129 7.96855 1.84257 7.96851 1.85412V5.65715C7.96851 5.78147 8.01789 5.9007 8.1058 5.98861C8.19371 6.07652 8.31294 6.1259 8.43726 6.1259H12.2403C12.2518 6.12585 12.2631 6.12239 12.2727 6.11595C12.2823 6.10951 12.2898 6.10037 12.2942 6.0897C12.2986 6.07902 12.2998 6.06728 12.2975 6.05594C12.2953 6.04461 12.2897 6.03419 12.2816 6.026Z" fill="#4FD1C5"/>
                                </svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Sign In</span>
                        </a>
                    </li>
                    <li className="mt-0.5 w-full">
                        <a className="py-2.7 text-size-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="/signup">
                            <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                <svg width="12px" height="20px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                    <title>spaceship</title>
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(4.000000, 301.000000)">
                                                    <path className="fill-teal-teal-300" d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z">
                                                    </path>
                                                    <path className="fill-teal-teal-300 " d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z">
                                                    </path>
                                                    <path className="fill-teal-teal-300 " d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z">
                                                    </path>
                                                    <path className="fill-teal-teal-300 " d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Sign Up</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mx-4">
                <p className="hidden after:bg-gradient-dark-gray after:bg-gradient-cyan after:bg-gradient-orange after:bg-gradient-lime after:bg-gradient-red after:bg-gradient-slate">
                </p>
                <div className="after:opacity-65 after:bg-gradient-slate relative flex min-w-0 flex-col items-center break-words rounded-2xl border-0 border-solid border-blue-900 bg-white bg-clip-border shadow-none after:absolute after:top-0 after:bottom-0 after:left-0 after:z-10 after:block after:h-full after:w-full after:rounded-2xl after:content-['']" sidenav-card="">
                    <div className="mb-7.5 absolute h-full w-full rounded-2xl bg-cover bg-center" style={{backgroundImage: "url('/card-img.png')"}}></div>
                    <div className="relative z-20 flex-auto w-full p-4 text-left text-white">
                        <div className="flex items-center justify-center w-8 h-8 mb-4 text-center bg-white bg-center rounded-lg icon shadow-soft-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 3C7.03125 3 3 7.03125 3 12C3 16.9687 7.03125 21 12 21C16.9687 21 21 16.9687 21 12C21 7.03125 16.9687 3 12 3ZM11.7187 17.25C11.5333 17.25 11.3521 17.195 11.1979 17.092C11.0437 16.989 10.9236 16.8426 10.8526 16.6713C10.7817 16.5 10.7631 16.3115 10.7993 16.1296C10.8354 15.9477 10.9247 15.7807 11.0558 15.6496C11.1869 15.5185 11.354 15.4292 11.5359 15.393C11.7177 15.3568 11.9062 15.3754 12.0775 15.4464C12.2488 15.5173 12.3952 15.6375 12.4983 15.7916C12.6013 15.9458 12.6562 16.1271 12.6562 16.3125C12.6562 16.5611 12.5575 16.7996 12.3817 16.9754C12.2058 17.1512 11.9674 17.25 11.7187 17.25ZM13.2862 12.4687C12.5264 12.9787 12.4219 13.4461 12.4219 13.875C12.4219 14.049 12.3527 14.216 12.2297 14.339C12.1066 14.4621 11.9397 14.5312 11.7656 14.5312C11.5916 14.5312 11.4247 14.4621 11.3016 14.339C11.1785 14.216 11.1094 14.049 11.1094 13.875C11.1094 12.848 11.5819 12.0314 12.5541 11.3784C13.4578 10.7719 13.9687 10.3875 13.9687 9.54234C13.9687 8.96766 13.6406 8.53125 12.9614 8.20828C12.8016 8.13234 12.4458 8.05828 12.008 8.06344C11.4586 8.07047 11.032 8.20172 10.7034 8.46609C10.0837 8.96484 10.0312 9.50765 10.0312 9.51562C10.0271 9.6018 10.006 9.68632 9.96919 9.76435C9.93237 9.84238 9.88054 9.9124 9.81666 9.9704C9.75279 10.0284 9.67811 10.0732 9.5969 10.1024C9.51569 10.1315 9.42954 10.1444 9.34336 10.1402C9.25718 10.1361 9.17266 10.115 9.09463 10.0782C9.0166 10.0414 8.94659 9.98952 8.88859 9.92565C8.83059 9.86177 8.78574 9.7871 8.75659 9.70589C8.72745 9.62468 8.71459 9.53852 8.71875 9.45234C8.72391 9.33844 8.80312 8.31234 9.87984 7.44609C10.4381 6.99703 11.1483 6.76359 11.9892 6.75328C12.5845 6.74625 13.1437 6.84703 13.523 7.02609C14.6578 7.56281 15.2812 8.45766 15.2812 9.54234C15.2812 11.1281 14.2214 11.8402 13.2862 12.4687Z" fill="#4FD1C5"/>
                            </svg>
                        </div>
                        <div className="transition-all duration-200 ease-nav-brand ">
                            <h6 className="mb-0 text-blackampwhite-white text-sm font-bold leading-[140%]">Need help?</h6>
                            <p className="mt-0 mb-4 text-blackampwhite-white font-normal text-text-xs leading-[150%]">
                                Please check our docs</p>
                            <a href="#" target="_blank" className="inline-block w-full px-8 py-2 mb-0 font-bold text-center text-black uppercase transition-all ease-in bg-white border-0 border-white rounded-lg shadow-soft-md bg-150 leading-pro text-size-xs hover:shadow-soft-2xl hover:scale-[105%] text-text-xxs">Documentation</a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;