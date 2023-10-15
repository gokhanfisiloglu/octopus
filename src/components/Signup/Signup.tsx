import React, {useEffect, useState} from 'react';
import NavSignUp from "../../../src/components/Nav/NavSignUp";
import SvgManagement from "../../SvgManagement/SvgManagement";



interface SignUpProps {
    // Define the props for your component here
}

const initialForm = {name: '', email: '', password: ''}

const Signup: React.FC<SignUpProps> = (props) => {
    // Implement your component logic here

    const [form, setForm] = useState(initialForm);
    const [remember, setRemember] = useState(true)

    const [test, setTest] = useState(0);

    useEffect(() => {
        const updateTest = () => {
            const screenHeight = window.innerHeight;
            const marginRatio = 0.25248;
            const marginRatioWidth = 0.2650337076019282;
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
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const SignUp = () => {
      console.log(form);
    }

    const handleSignUp = () => {

        fetch('//dummyjson.com/test')
            .then(res => res.json())
            .then(console.log);
        console.log(form)
    };

    return (
        /*<div className={'w-full relative p-[24px]'}>
            <div className="justify-items-center grid">
                <nav className="flex items-center justify-between flex-wrap bg-transparent w-[925.5px] h-[35px] mt-[34.5px] absolute">
                    <div className="flex items-center flex-shrink-0 text-white">
                        <img src="/octopus-white.svg" alt="Octopus Icon" className={'icon-hover-color'} />
                    </div>
                    <div className={"text-[10px] font-bold visible lg:" + (isOpen ? 'block' : 'invisible')} >
                        <a href="/dashboard" className="block mt-4 lg:inline-flex lg:mt-0 text-teal-200 hover:text-white mr-4">
                            <img src="/dashboard.svg" alt="DashboardSVG Icon" className={'icon-hover-color mr-1'} /> DASHBOARD
                        </a>
                        <a href="/profile" className="block mt-4 lg:inline-flex lg:mt-0 text-teal-200 hover:text-white mr-4">
                            <img src="/profile.svg" alt="Profile Icon" className={'icon-hover-color mr-1'} />  PROFILE
                        </a>
                        <a href="/signup" className="block mt-4 lg:inline-flex lg:mt-0 text-teal-200 hover:text-white mr-4">
                            <img src="/signup.svg" alt="SignUp Icon" className={'icon-hover-color mr-1'} /> SIGNUP
                        </a>
                        <a href="/signin" className="block mt-4 lg:inline-flex lg:mt-0 text-teal-200 hover:text-white">
                            <img src="/signin.svg" alt="SignIn Icon" className={'icon-hover-color mr-1'} /> SIGNIN
                        </a>
                    </div>
                    <div className={"visible lg:" + (isOpen ? 'block' : 'invisible')}>
                        <a href="#" className="inline-block text-[10px] bg-white font-bold text-custom-black rounded-[34.5px] px-4 py-2 leading-none  border  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                            Free Download</a>
                    </div>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={() => {setIsOpen(!isOpen)}}>
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                </nav>
                <div className={"absolute mt-[124.5px] w-[333px] text-center"}>
                    <div className={"text-[32px] font-bold text-white"}>Welcome!</div>
                    <div className={"text-[14px] text-white"}>Use these awesome forms to login or create new account in your project for free.</div>
                </div>
                <div className={"w-[452.5px] top-[" + test +"px] mt-[66.5px] text-center absolute bg-white rounded-[15px] shadow-[0px_7px_23px_rgba(0,_0,_0,_0.05)]"} style={{ top: `${test}px` }}>
                    <div className={'pt-[45.5px] font-bold'}>Register with</div>
                    <div className={"inline-flex gap-[15px] mt-[22px]"}>
                        <button className={"border-gray-200 border p-[21.34px] rounded-[15px]"}><img src="/facebook.svg" alt="Facebook Icon" className={'icon-hover-color w-[31px] h-[31px]'} /></button>
                        <button className={"border-gray-200 border p-[21.34px] rounded-[15px]"}><img src="/apple.svg" alt="Apple Icon" className={'icon-hover-color w-[31px] h-[31px]'} /></button>
                        <button className={"border-gray-200 border p-[21.34px] rounded-[15px]"}><img src="/google.svg" alt="Google Icon" className={'icon-hover-color w-[31px] h-[31px]'} /></button>
                    </div>
                    <div className={"mt-[20.5px] text-gray-400 font-bold"}>or</div>
                    <form className="mt-[17px]">
                        <div className="flex flex-wrap ml-[51.5px] mr-[51px]">
                            <label className="block text-custom-black text-[14px] mb-[6px] ml-[3px]" htmlFor="name">
                                Name
                            </label>
                            <input className="max-w-[350px] appearance-none border border-[#E2E8F0] rounded-[15px] w-full py-2 px-3 text-gray-700 text-[14px] leading-[140%] font-helvetica p-custom-input  focus:outline-none focus:shadow-outline"
                                   value={form.name}
                                   onChange={(e) => {
                                       setForm({ ...form, name: e.target.value });
                                   }}
                                   id="name" type="text" placeholder="Your full name"/>
                        </div>
                        <div className="flex flex-wrap ml-[51.5px] mr-[51px] mt-[23.5px]">
                            <label className="block text-custom-black text-[14px] mb-[6px] ml-[3px]" htmlFor="email">
                                Email
                            </label>
                            <input className="max-w-[350px] appearance-none border border-[#E2E8F0] rounded-[15px] w-full py-2 px-3 text-gray-700 text-[14px] leading-[140%] font-helvetica p-custom-input  focus:outline-none focus:shadow-outline"
                                   value={form.email}
                                   onChange={(e) => {
                                       setForm({ ...form, email: e.target.value });
                                   }}
                                   id="email" type="email" placeholder="Your email address"/>
                        </div>
                        <div className="flex flex-wrap ml-[51.5px] mr-[51px]  mt-[24px]">
                            <label className="block text-custom-black text-[14px] mb-[6px] ml-[3px]" htmlFor="password">
                                Password
                            </label>
                            <input className="max-w-[350px] appearance-none border border-[#E2E8F0] rounded-[15px] w-full py-2 px-3 text-gray-700 text-[14px] leading-[140%] font-helvetica p-custom-input  focus:outline-none focus:shadow-outline"
                                   value={form.password}
                                   onChange={(e) => {
                                       setForm({ ...form, password: e.target.value });
                                   }}
                                   id="password" type="password" placeholder="Your password"/>
                        </div>
                        <div className="flex flex-wrap ml-[51.5px] mr-[51px]  mt-[24px]">

                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer"/>
                                <div className="w-[36px] h-[18.5px] bg-teal-teal-300 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-teal-teal-300 dark:peer-focus:ring-teal-teal-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[6px] after:bg-white after:border-teal-teal-300 after:border after:rounded-full after:h-[13.5px] after:w-[13.5px] after:transition-all dark:border-teal-teal-300 peer-checked:bg-teal-teal-300"></div>
                                <span className="ml-3 font-medium text-gray-900 dark:text-gray-300 text-[12px]">Remember me</span>
                            </label>

                        </div>
                        <div className="flex flex-wrap ml-[51.5px] mr-[51px] mt-[36px]">

                            <button type={"button"} className="w-full rounded-[12px] text-[12px] h-[45px] bg-teal-teal-300 text-white leading-[150%] font-bold cursor-pointer hover:bg-teal-500"
                            onClick={()=>{SignUp()}}>SIGN UP</button>

                        </div>

                        <div className="mt-[22px] mb-[45.5px]">
                            <div className="h-[19.5px] text-center text-[14px]">
                           <span>
                          <span>Don't have an account?</span>
                          <b className="text-teal-teal-300">{` `}</b>
                        </span>
                                <a href={'/signip'} className="no-underline">
                                    <b className="text-teal-teal-300">
                                        <span>Sign In</span>
                                    </b>
                                </a>
                            </div>
                        </div>

                    </form>

                </div>
                <img className={'w-custom'} src={'/image.png'}/>
            </div>
        </div>*/
        <div>
            <NavSignUp />

            <main className="mt-0 transition-all duration-200 ease-soft-in-out ps">
                <section className="min-h-screen mb-32">
                    <div className="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-mini" style={{backgroundImage: "url('/image.png')"}}>
                        <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-dark-gray opacity-60"></span>
                        <div className="container z-10">
                            <div className="flex flex-wrap justify-center -mx-3">
                                <div className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                                    <h1 className="mt-12 mb-2 text-blackampwhite-white text-32 font-bold leading-[130%]">Welcome!</h1>
                                    <p className="text-blackampwhite-white text-sm font-normal leading-[130%] max-w-[333px] mx-auto">Use these awesome forms to login or create new account in your project
                                        for
                                        free.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
                            <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                                <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                                    <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                                        <h5 className={'text-text-lg font-bold leading-[140%] text-gray-gray-700'}>Register with</h5>
                                    </div>
                                    <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
                                        <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
                                            <a className="inline-block w-full p-[22px] mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-size-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" href="#">
                                                <SvgManagement svgName={'facebook'} w={'31'} h={'31'} f={'#2D3748'}/>
                                            </a>
                                        </div>
                                        <div className="w-3/12 max-w-full px-1 flex-0">
                                            <a className="inline-block w-full p-[22px] mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-size-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" href="#">
                                                <SvgManagement svgName={'apple'} w={'31'} h={'31'} f={'#2D3748'}/>
                                            </a>
                                        </div>
                                        <div className="w-3/12 max-w-full px-1 mr-auto flex-0">
                                            <a className="inline-block w-full p-[25.5px] mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-size-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" href="#">
                                                <SvgManagement svgName={'google'} w={'24'} h={'24'} f={'#2D3748'}/>
                                            </a>
                                        </div>
                                        <div className="relative w-full max-w-full mt-[20.5px] text-center shrink-0">
                                            <p className="z-20 inline text-gray-gray-400 font-bold text-text-lg leading-[140%]">
                                                or</p>
                                        </div>
                                    </div>
                                    <div className="flex-auto p-6">
                                        <form>
                                            <label className="ml-1 font-normal text-sm text-gray-gray-700">Name</label>
                                            <div className="mb-6 mt-[5.5px] font-normal text-sm text-gray-gray-400">
                                                <input type="text" className="focus:shadow-soft-primary-outline text-size-sm
                                                    leading-5.6 ease-soft block w-full appearance-none border border-solid
                                                    border-gray-300 bg-white bg-clip-padding py-2 font-normal text-gray-700 transition-all
                                                    focus:border-fuchsia-300 focus:outline-none focus:transition-shadow px-[20px] h-[50px] rounded-mini"
                                                       placeholder="Your full name" aria-label="Email" aria-describedby="email-addon"
                                                       value={form.name}
                                                       onChange={(e) => {
                                                           setForm({ ...form, name: e.target.value });
                                                       }}
                                                />
                                            </div>
                                            <label className="ml-1 font-normal text-sm text-gray-gray-700">Email</label>
                                            <div className="mb-6 mt-[5.5px] font-normal text-sm text-gray-gray-400">
                                                <input type="text" className="focus:shadow-soft-primary-outline text-size-sm
                                                    leading-5.6 ease-soft block w-full appearance-none border border-solid
                                                    border-gray-300 bg-white bg-clip-padding py-2 font-normal text-gray-700 transition-all
                                                    focus:border-fuchsia-300 focus:outline-none focus:transition-shadow px-[20px] h-[50px] rounded-mini"
                                                       placeholder="Your email address" aria-label="Email" aria-describedby="email-addon"
                                                       value={form.email}
                                                       onChange={(e) => {
                                                           setForm({ ...form, email: e.target.value });
                                                       }}
                                                />
                                            </div>
                                            <label className="ml-1 font-normal text-sm text-gray-gray-700">Password</label>
                                            <div className="mb-4 mt-[5.5px] font-normal text-sm text-gray-gray-400">
                                                <input type="password" className="focus:shadow-soft-primary-outline text-size-sm
                                                    leading-5.6 ease-soft block w-full appearance-none border border-solid
                                                    border-gray-300 bg-white bg-clip-padding py-2 font-normal text-gray-700 transition-all
                                                    focus:border-fuchsia-300 focus:outline-none focus:transition-shadow px-[20px] h-[50px] rounded-mini"
                                                       placeholder="Your password" aria-label="Password" aria-describedby="password-addon"
                                                       value={form.password}
                                                       onChange={(e) => {
                                                           setForm({ ...form, password: e.target.value });
                                                       }}
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
                                                 bg-teal-teal-300 text-text-xxs font-bold leading-[150%]" onClick={handleSignUp}>Sign up</button>
                                            </div>
                                            <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2 mt-[22px]">
                                                <p className="mx-auto mb-6 leading-[140%] text-sm font-normal text-gray-gray-400">
                                                    Already have an account?
                                                    <a href="/signin" className="relative ml-1 z-10 font-bold text-sm leading-[140%] text-teal-teal-300">Sign in</a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div className={'flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3' + ' hidden'} role="alert" >
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                <p>Something happened that you should know about.</p>
            </div>
        </div>
    );
};

export default Signup;
