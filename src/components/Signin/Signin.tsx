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
    };

    return <div>

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