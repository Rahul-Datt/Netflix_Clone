import React from "react";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="bg-main-bg-image h-screen w-full">
            <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
            <div className="h-full w-full text-white flex justify-center items-center text-center">
                <div className="z-50">
                    <h1 className="text-5xl font-bold capitalize mb-5">Enjoy big movies, hit series and more from ₹ 149</h1>
                    <h3 className="text-3xl font-medium mb-3">Join today, Cancel anytime</h3>
                    <h4 className="text-2xl mb-3">
                        Ready to watch? Enter your email to create or restart your membership.
                    </h4>
                    <div className="flex gap-3 items-center justify-center">
                        <input placeholder="Email address" type="email" className="p-3 rounded-md w-[35%] bg-black/40 border" />
                        <button className="bg-red-600 rounded-md py-3 px-5 w-[20%]">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="bg-black border-t-8 border-b-8 text-white py-10">
                <div className="w-[90%] mx-auto flex justify-evenly items-center">
                <div className="z-50">
                    <h2 className="text-3xl font-bold mb-5">Enjoy on your TV</h2>
                    <h4 className="text-2xl capitalize">Watch on smart TVs, PlayStation, Xbox, Chromecast,<br /> {" "} Apple TV, Blu-ray players and more.</h4>
                </div>
                <div className="bg-tv-frame bg-no-repeat bg-center z-50">
                    <video controls muted loop autoPlay>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"></source>
                    </video>
                </div>
                </div>
            </div>
            <div className="bg-black border-b-8 text-white py-10">
                <div className="w-[90%] mx-auto flex justify-evenly items-center">
                <div className="z-50">
                    <h2 className="text-3xl font-bold mb-5">Watch everywhere</h2>
                    <h4 className="text-2xl capitalize">Stream unlimited movies and TV shows on your<br /> {" "} phone, tablet, laptop, and TV.</h4>
                </div>
                <div className="bg-tv-frame bg-no-repeat bg-center z-50">
                    <video controls muted loop autoPlay>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"></source>
                    </video>
                </div>
                </div>
            </div>
            <div className="bg-black border-b-8 text-white py-10">
                <div className="w-[90%] mx-auto flex justify-evenly items-center">
                <div className="bg-tv-frame bg-no-repeat bg-center z-50">
                    <img src="https://occ-0-1947-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="" />
                </div>
                <div className="z-50">
                    <h2 className="text-3xl font-bold mb-5">Create profiles for kids</h2>
                    <h4 className="text-2xl capitalize">Send children on adventures with their favourite <br />{" "} characters in a space made just for them—free with <br /> {" "}your membership.</h4>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;