import React from 'react';
import { FaCalendar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import Footer from '../components/Footer';

const MovieDetails = () => {

    const movieInfo = {
        adult: false,
        backdrop_path: "https://image.tmdb.org/t/p/original/1syW9SNna38rSl9fnXwc9fP7POW.jpg",
        genre_ids: [28, 878, 12],
        id: 565770,
        original_language: "en",
        original_title: "Blue Beetle",
        overview:
            "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
        popularity: 2211.475,
        poster_path: "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
        release_date: "2023-08-16",
        title: "Blue Beetle",
        video: false,
        vote_average: 7.1,
        vote_count: 1200,
    }

    return (
        <React.Fragment>
            <div className="w-full h-screen text-white" style={{ backgroundImage: `url(${movieInfo?.backdrop_path})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="flex flex-col text-left items-start justify-center w-full h-full p-4">
                    <h1 className="font-bold text-4xl mb-5">{movieInfo?.original_title}</h1>
                    <p className="w-1/2 mb-5 font-medium text-base">{movieInfo?.overview}</p>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-2">
                            <FaCalendar />
                            <h5>{movieInfo?.release_date}</h5>
                        </div>
                        <div className="flex items-center gap-2">
                            <CiStar />
                            <h5>{movieInfo?.vote_average}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black text-white py-5 px-4 border-b-4'>
                <h1 className='text-4xl font-bold'>Videos</h1>
                <div className='border mt-5 rounded-md'>
                    <video controls muted loop autoPlay className='w-full rounded-md'>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"></source>
                    </video>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
export default MovieDetails;