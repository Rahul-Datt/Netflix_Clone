import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import React, { useState } from "react";   

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const user = {
            email, password
        };
        navigate('/dashboard');
    };

    return (
        <React.Fragment>
        <div className="w-full h-screen bg-main-bg-image">
            <div className="bg-black/60 w-full h-screen fixed top-0"></div>
            <div className="w-full h-full flex justify-center items-center">
            <div className="w-1/2 z-50 h-[400px] text-white bg-black/70 p-5 rounded-md text-center">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-col py-5">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="p-3 my-2 bg-gray-700 rounded-md  outline-none" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className="p-3 my-2 bg-gray-700 rounded-md outline-none" />
                    <button className="bg-red-600 py-3 my-2 rounded-md font-bold w-full ">Sign In</button>
                    <div className="flex items-center justify-between my-3">
                        <p>
                            <input type="checkbox" className="mr-2" />
                            Remember Me
                        </p>
                        <p>Need Help?</p>
                    </div>
                    <div className="flex items-center gap-2 font-medium text-base">
                        <p className="text-slate-300">New to Netflix?</p>
                        <Link to={'/signup'}>
                            Sign Up
                        </Link>
                    </div>
                </form>
            </div>
            </div>
        </div>
        <Footer />
        </React.Fragment>
    )
}
export default Login;