import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';


import '../../../src/components/Signin/signin.scss';
import SvgManagement from "../../SvgManagement/SvgManagement";
import NavSignIn from "../Nav/NavSignIn";


interface SignInProps {

}

const SignIn: React.FC<SignInProps> = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(true)
    const navigate = useNavigate();


    const handleLogin = () => {

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: 'kminchelle',
                password: '0lelplR',
                // expiresInMins: 60, // optional
            })
        })
            .then(async (res) => {
                if (res.status === 400) {
                    // Handle error
                } else if (res.status === 200) {
                    sessionStorage.setItem('userData', JSON.stringify(await res.json()));
                    navigate('/dashboard');
                }
            })
            .then((result) => console.log(result));


        /*if (email === 'kullanici' && password === 'sifre') {
            setUser({ email });
        }*/
    };

    /*const [test, setTest] = useState(0);

    useEffect(() => {
        const updateTest = () => {
            const screenHeight = window.innerHeight;
            const marginRatio = 0.267933;
            const customMargin = screenHeight * marginRatio;
            setTest(customMargin);
        };

        // Initial update
        updateTest();

        // Update when the window is resized
        window.addEventListener('resize', updateTest);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateTest);
        };
    }, []);*/


    return <div>

        {/*<div className={"flex flex-col items-center flex-1 h-full px-4 sm:px-0 overflow-hidden"}>
            <div className={"mx-auto absolute p-10 max-w-xl items-center"}> asd</div>
            <div className={"flex rounded-lg shadow-lg w-full sm:w-full sm:h-full lg:w-full lg:h-full bg-white sm:mx-0"}>
                <div className={"sm:w-1/2 lg:w-1/2 xl:w-1/2  h-screen"}>
                    sol
                </div>
                <div className={"relative sm:w-1/2 lg:w-1/2  xl:w-1/2 h-screen"}>

                    <div className="w-5/6 h-5/6 left-0 top-0 relative float-right bg-teal-300 rounded-bl-3xl overflow-hidden">
                        <img
                            className=" w-screen h-screen  absolute inset-0  absolute origin-top-left object-contain"
                            style={{ 
                                left: '0px',
                                top: '-40px', }}
                            src={myImage} alt="Sign In Background"
                        />
                    </div>


                </div>
            </div>

        </div>*/}
        {/*<div className="flex flex-col items-center flex-1 h-screen px-4 sm:px-0 relative w-screen bg-cover bg-no-repeat bg-[top] text-center text-sm text-gray-gray-400 font-helvetica">
            <div className="flex rounded-lg shadow-lg w-full sm:w-full sm:h-screen lg:w-full lg:h-screen bg-white sm:mx-0 absolute top-[0px] left-[0px] bg-blackampwhite-white w-full h-full">

                <div className={"sm:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center items-center text-left mt-[" + test +"px]"} style={{ marginTop: `${test}px` }}>
                    <div className=" ml-[466px]">
                        <div>
                            <b className="text-[32px] leading-[130%] inline-block text-teal-300 text-teal-teal-300 w-[226px] h-[42px]">
                                Welcome Back
                            </b>
                        </div>
                        <div>
                            <b className="relative leading-[140%] inline-block w-[274.5px] h-[19.5px] mt-[9px] left-[4.5px]">
                                Enter your email and password to sign in
                            </b>
                        </div>
                        <div className="mt-[36px]">
                            <div className="w-[350px]">
                                <label htmlFor="example-input" className="relative block leading-[140%] left-[4.5px] text-gray-gray-700 inline-block w-[35.5px] text-sm mb-2">Email</label>
                                <input type="text" id="example-input" name="example-input" placeholder="Your email address"
                                       className="appearance-none shrink-0 placeholder-gray-400 border rounded-[15px] w-[324.67px] h-[47.67px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline radius border-gray-200"/>
                            </div>
                        </div>
                        <div className="mt-[24px]">
                            <div className="w-[350px]">
                                <label htmlFor="example-input" className="relative block leading-[140%] left-[4.5px] text-gray-gray-700 inline-block w-[35.5px] text-sm mb-2">Password</label>
                                <input type="password" id="example-input" name="example-input" placeholder="Your password"
                                       className="appearance-none shrink-0 placeholder-gray-400 border rounded-[15px] w-[324.67px] h-[47.67px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline radius border-gray-gray-200"/>
                            </div>
                        </div>

                        <div className="mt-[24px]">

                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer"/>
                                    <div
                                        className="w-[36px] h-[18.5px] bg-teal-teal-300 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-teal-teal-300 dark:peer-focus:ring-teal-teal-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[6px] after:bg-white after:border-teal-teal-300 after:border after:rounded-full after:h-[13.5px] after:w-[13.5px] after:transition-all dark:border-teal-teal-300 peer-checked:bg-teal-teal-300"></div>
                                    <span className="ml-3 font-medium text-gray-900 dark:text-gray-300 text-[12px]">Remember me</span>
                            </label>

                        </div>

                        <div className="mt-[36px]">

                            <button type={"button"} className="w-full rounded-[12px] text-[10px] h-[45px] bg-teal-teal-300 text-white leading-[150%] font-bold cursor-pointer hover:bg-teal-500">SIGN IN</button>

                        </div>

                        <div className="mt-[22px]">
                            <div className="h-[19.5px] text-center">
                           <span>
                          <span>Don't have an account?</span>
                          <b className="text-teal-teal-300">{` `}</b>
                        </span>
                                <a href={'/signup'} className="no-underline">
                                    <b className="text-teal-teal-300">
                                        <span>Sign up</span>
                                    </b>
                                </a>
                            </div>
                        </div>


                    </div>
                <div className="absolute top-[282px] left-[466px] w-[353px] h-[445px]">
                    <div className="absolute top-[425.5px] left-[77px] leading-[140%] inline-block w-[202.5px] h-[19.5px]">
                        <span>
                          <span>Don't have an account?</span>
                          <b className="text-teal-teal-300">{` `}</b>
                        </span>
                        <b className="text-teal-teal-300">
                            <span>Sign up</span>
                        </b>
                    </div>
                    <div className="absolute h-[10.11%] w-[99.15%] top-[80.56%] right-[0%] bottom-[9.33%] left-[0.85%] rounded-xl bg-teal-teal-300 flex flex-row items-center justify-center py-0 px-2 box-border text-2xs text-black font-font-awesome-5-free">
                        <div className="overflow-hidden flex flex-col items-center justify-center">
                            <div className="h-6 flex flex-row items-center justify-start">
                                <div className="overflow-hidden flex flex-row items-start justify-start gap-[4px]">
                                    <div className="overflow-hidden hidden flex-col items-center justify-start py-0 px-[0.5px]">
                                        <div className="relative leading-[12px]"></div>
                                    </div>
                                    <b className="relative text-3xs leading-[150%] flex font-helvetica text-blackampwhite-white items-center justify-center w-[37.5px] h-[15px] shrink-0">
                                        SIGN IN
                                    </b>
                                    <div className="overflow-hidden hidden flex-col items-center justify-start py-0 px-[0.5px]">
                                        <div className="relative leading-[12px]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden flex flex-row items-start justify-start py-0 px-[12.000000953674316px]">
                                <div className="relative bg-silver w-0 h-0" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[304px] left-[3px] w-[125.5px] h-[18.5px] flex flex-row items-center justify-start gap-[9px] text-left text-[12px] text-gray-gray-700">
                        <div className="rounded-[97.74px] bg-teal-teal-300 w-9 h-[18.5px] overflow-hidden shrink-0 flex flex-col items-end justify-center py-[1.4373492002487183px] pr-[2.5px] pl-[1.4373492002487183px] box-border">
                            <div className="relative rounded-[50%] bg-blackampwhite-white w-[13.5px] h-[13.5px]" />
                        </div>
                        <div className="relative leading-[150%] inline-block w-[79.5px] h-[18px] shrink-0">{`Remember me `}</div>
                    </div>
                    <div className="absolute top-[205px] left-[3px] w-[350px] h-[75px] text-left">
                        <div className="absolute h-[66.67%] w-full top-[33.33%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-blackampwhite-white box-border overflow-hidden flex flex-row items-center justify-start py-0 px-5 border-[1px] border-solid border-gray-gray-200">
                            <div className="w-[311px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
                                <div className="relative leading-[140%] inline-block w-[92.5px] h-[19.5px] shrink-0">
                                    Your password
                                </div>
                                <img
                                    className="relative w-[35px] h-[3.5px] hidden"
                                    alt=""
                                    src="/password-text.svg"
                                />
                                <div className="overflow-hidden flex flex-row items-center justify-center py-0 px-[74px]">
                                    <div className="relative w-0 h-0" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[0px] left-[4.5px] leading-[140%] text-gray-gray-700 inline-block w-[61.5px] h-[19.5px]">
                            Password
                        </div>
                    </div>
                    <div className="absolute top-[106px] left-[3px] w-[350px] h-[75px] text-left">
                        <div className="absolute h-[66.67%] w-full top-[33.33%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-blackampwhite-white box-border overflow-hidden flex flex-row items-center justify-start py-0 px-5 border-[1px] border-solid border-gray-gray-200">
                            <div className="w-[311px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
                                <div className="relative leading-[140%] inline-block w-[119.5px] h-[19.5px] shrink-0">
                                    Your email address
                                </div>

                                <img
                                    className="relative w-[35px] h-[3.5px] hidden"
                                    alt=""
                                    src="/password-text1.svg"
                                />
                                <div className="overflow-hidden flex flex-row items-center justify-center py-0 px-[74px]">
                                    <div className="relative w-0 h-0" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[0px] left-[4.5px] leading-[140%] text-gray-gray-700 inline-block w-[35.5px] h-[19.5px]">
                            Email
                        </div>
                    </div>
                    <div className="absolute top-[0px] left-[0px] w-[279px] h-[70px]">
                        <b className="absolute top-[50.5px] left-[4.5px] leading-[140%] inline-block w-[274.5px] h-[19.5px]">
                            Enter your email and password to sign in
                        </b>
                        <b className="absolute top-[0px] left-[0px] text-[32px] leading-[130%] inline-block text-teal-teal-300 w-[226px] h-[42px]">
                            Welcome Back
                        </b>
                    </div>
                </div>
                <div className="absolute top-[22.5px] left-[464.5px] rounded-mini [background:linear-gradient(112.83deg,_rgba(255,_255,_255,_0.82),_rgba(255,_255,_255,_0.8))] shadow-[0px_7.000000476837158px_23px_rgba(0,_0,_0,_0.05)] [backdrop-filter:blur(21px)] box-border w-[990.5px] h-[73px] flex flex-row items-center justify-end pt-[17.499984741210938px] px-[23.99993896484375px] pb-[17.500015258789062px] gap-[130px] text-3xs text-gray-gray-700 border-[1.5px] border-solid border-blackampwhite-white">
                    <div className="relative w-[350px] h-[22.5px]">
                        <div className="absolute h-full w-[17.29%] top-[0%] right-[0%] bottom-[0%] left-[82.71%] rounded-xl flex flex-row items-center justify-center py-0 px-2 box-border">
                            <div className="overflow-hidden flex flex-col items-center justify-center">
                                <div className="h-6 flex flex-row items-center justify-start">
                                    <div className="overflow-hidden flex flex-row items-center justify-center gap-[4px]">
                                        <img
                                            className="relative w-[11px] h-[11px] overflow-hidden shrink-0"
                                            alt=""
                                            src="/icon.svg"
                                        />
                                        <b className="relative leading-[150%] flex items-center justify-center w-[37.5px] h-[15px] shrink-0">
                                            SIGN IN
                                        </b>
                                    </div>
                                </div>
                                <div className="overflow-hidden flex flex-row items-start justify-start py-0 px-[12.000000953674316px]">
                                    <div className="relative bg-silver w-0 h-0" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute h-full w-[17.29%] top-[0%] right-[25.57%] bottom-[0%] left-[57.14%] rounded-xl flex flex-row items-center justify-center py-0 px-2 box-border">
                            <div className="overflow-hidden flex flex-col items-center justify-center">
                                <div className="h-6 flex flex-row items-center justify-start">
                                    <div className="overflow-hidden flex flex-row items-center justify-center gap-[4px]">
                                        <img
                                            className="relative w-[11px] h-[11px] overflow-hidden shrink-0"
                                            alt=""
                                            src="/icon1.svg"
                                        />
                                        <b className="relative leading-[150%] flex items-center justify-center w-[41.5px] h-[15px] shrink-0">
                                            SIGN UP
                                        </b>
                                    </div>
                                </div>
                                <div className="overflow-hidden flex flex-row items-start justify-start py-0 px-[12.000000953674316px]">
                                    <div className="relative bg-silver w-0 h-0" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute h-full w-[17.29%] top-[0%] right-[51.14%] bottom-[0%] left-[31.57%] rounded-xl flex flex-row items-center justify-center py-0 px-2 box-border">
                            <div className="overflow-hidden flex flex-col items-center justify-center">
                                <div className="h-6 flex flex-row items-center justify-start">
                                    <div className="overflow-hidden flex flex-row items-center justify-center gap-[4px]">
                                        <img
                                            className="relative w-[11px] h-[11px] overflow-hidden shrink-0"
                                            alt=""
                                            src="/icon2.svg"
                                        />
                                        <b className="relative leading-[150%] flex items-center justify-center w-[43.5px] h-[15px] shrink-0">
                                            PROFILE
                                        </b>
                                    </div>
                                </div>
                                <div className="overflow-hidden flex flex-row items-start justify-start py-0 px-[12.000000953674316px]">
                                    <div className="relative bg-silver w-0 h-0" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute h-full w-[23.29%] top-[0%] right-[76.71%] bottom-[0%] left-[0%] rounded-xl flex flex-row items-center justify-center py-0 px-2 box-border">
                            <div className="overflow-hidden flex flex-col items-center justify-center">
                                <div className="h-6 flex flex-row items-center justify-start">
                                    <div className="overflow-hidden flex flex-row items-center justify-center gap-[4px]">
                                        <img
                                            className="relative w-[11px] h-[11px] overflow-hidden shrink-0"
                                            alt=""
                                            src="/icon3.svg"
                                        />
                                        <b className="relative leading-[150%] flex items-center justify-center w-[65.5px] h-[15px] shrink-0">
                                            DASHBOARD
                                        </b>
                                    </div>
                                </div>
                                <div className="overflow-hidden flex flex-row items-start justify-start py-0 px-[12.000000953674316px]">
                                    <div className="relative bg-silver w-0 h-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[34.5px] [background:linear-gradient(81.62deg,_#313860,_#151928)] w-[150px] h-[35px] flex flex-row items-center justify-center py-0 px-2 box-border text-2xs text-black font-font-awesome-5-free">
                        <div className="overflow-hidden flex flex-col items-center justify-center">
                            <div className="h-6 flex flex-row items-center justify-start">
                                <div className="overflow-hidden flex flex-row items-start justify-start gap-[4px]">
                                    <div className="overflow-hidden hidden flex-col items-center justify-start py-0 px-[0.5px]">
                                        <div className="relative leading-[12px]"></div>
                                    </div>
                                    <b className="relative text-3xs leading-[150%] flex font-helvetica text-blackampwhite-white items-center justify-center w-[89.5px] h-[15px] shrink-0">
                                        Free Download
                                    </b>
                                    <div className="overflow-hidden hidden flex-col items-center justify-start py-0 px-[0.5px]">
                                        <div className="relative leading-[12px]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden flex flex-row items-start justify-start py-0 px-[12.000000953674316px]">
                                <div className="relative bg-silver w-0 h-0" />
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className={"relative sm:w-1/2 lg:w-1/2  xl:w-1/2 h-screen"}>
                    <div className={"ml-[200px] mb-32 border-r-4  h-screen flex relative items-center"}>
                        <img
                            className="absolute top-[0px]  w-full h-full"
                            alt=""
                            src="/image@2x.png"
                        />
                        <div className="absolute w-full justify-center left- w-[187px] h-9 flex flex-row items-center justify-start gap-[8px]">
                            <img className="relative w-[76px] h-[71px]" alt="" src="/vector.svg" />
                            <img
                                className="relative w-[278px] h-[50.96px]"
                                alt=""
                                src="/group.svg"
                            />
                        </div>
                    </div>


                </div>

            </div>
            <div className="absolute top-[43px] left-[535px] flex flex-row items-center justify-start gap-[8px]">
                <img
                    className="relative w-[34.73px] h-[32.48px]"
                    alt=""
                    src="/vector1.svg"
                />
                <img
                    className="relative w-[126.76px] h-[23.24px]"
                    alt=""
                    src="/group1.svg"
                />
            </div>
        </div>*/}

        <NavSignIn/>

        <main className="mt-0 transition-all duration-200 ease-soft-in-out ps">
            <section>
                <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover h-screen">
                    <div className="container z-10">
                        <div className="flex flex-wrap mt-0 -mx-3 h-[85vh]">
                            <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                                <div className="relative flex flex-col min-w-0 mt-24 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                    <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                                        <h3 className="relative z-10 bg-gradient-cyan bg-clip-text text-32 font-bold leading-[130%] text-teal-teal-300">Welcome back</h3>
                                        <p className="mb-0 mt-2 text-sm font-bold leading-[140%] text-gray-gray-400">Enter your email and password to sign in</p>
                                    </div>
                                    <div className="flex-auto p-6">
                                        <form role="form">
                                            <label className="ml-1 font-normal text-sm text-gray-gray-700">Username</label>
                                            <div className="mb-6 mt-[5.5px] font-normal text-sm text-gray-gray-400">
                                                <input type="text" className="focus:shadow-soft-primary-outline text-size-sm
                                                    leading-5.6 ease-soft block w-full appearance-none border border-solid
                                                    border-gray-300 bg-white bg-clip-padding py-2 font-normal text-gray-700 transition-all
                                                    focus:border-fuchsia-300 focus:outline-none focus:transition-shadow px-[20px] max-w-[350px] h-[50px] rounded-mini"
                                                    placeholder="Username" aria-label="Email" aria-describedby="email-addon"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </div>
                                            <label className="ml-1 font-normal text-sm text-gray-gray-700">Password</label>
                                            <div className="mb-4 mt-[5.5px] font-normal text-sm text-gray-gray-400">
                                                <input type="password" className="focus:shadow-soft-primary-outline text-size-sm
                                                    leading-5.6 ease-soft block w-full appearance-none border border-solid
                                                    border-gray-300 bg-white bg-clip-padding py-2 font-normal text-gray-700 transition-all
                                                    focus:border-fuchsia-300 focus:outline-none focus:transition-shadow px-[20px] max-w-[350px] h-[50px] rounded-mini"
                                                    placeholder="Password" aria-label="Password" aria-describedby="password-addon"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            <div className="mt-[24px]">

                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" value="" className="sr-only peer" checked={remember} onChange={() => setRemember(!remember)}/>
                                                    <div
                                                        className="w-[36px] h-[18.5px] bg-gray-gray-300 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-teal-teal-300 dark:peer-focus:ring-teal-teal-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[4.5px] after:bg-white after:border-teal-teal-300 after:border after:rounded-full after:h-[13.5px] after:w-[13.5px] after:transition-all dark:border-teal-teal-300 peer-checked:bg-teal-teal-300"></div>
                                                    <span className="ml-3 font-normal text-gray-gray-700 text-text-xs leading-[150%]">Remember me</span>

                                                </label>

                                            </div>
                                            <div className="text-center mt-[36px]">
                                                <button type="button" className="inline-block w-full px-6 py-3 mb-0
                                                 text-center text-white uppercase align-middle transition-all
                                                 border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25
                                                 bg-150 leading-pro text-size-xs ease-soft-in tracking-tight-soft
                                                 bg-gradient-cyan hover:scale-[105%] hover:shadow-soft-xs active:opacity-85
                                                 bg-teal-teal-300 text-text-xxs font-bold leading-[150%]" onClick={handleLogin}>Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                                        <p className="mx-auto mb-6 leading-[140%] text-sm font-normal text-gray-gray-400">
                                            Don't have an account?
                                            <a href="/signup" className="relative ml-1 z-10 font-bold text-sm leading-[140%] text-teal-teal-300">Sign up</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                                <div className="absolute top-0 hidden w-[62.5%] h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-[25px] md:block max-h-[85vh]">
                                    <div className="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10 w-[900px]" style={{backgroundImage: "url('/image@2x.png')", backgroundPosition: "bottom"}}>
                                        <img src="/octopus-white.svg" className="relative top-0 h-full lg:block max-w-[269px] w-octopus-icon" alt="octopus-white"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>

};

export default SignIn;