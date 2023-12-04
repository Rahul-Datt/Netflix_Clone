import popularMovies from '../data/popularMovies';
import upComingMovies from '../data/upComingMovies';
import topRatedMovies from '../data/topRatedMovies';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import MovieRow from '../components/MovieRow';
import PlayMovieModal from '../components/modal/PlayMovieModal';

const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [movieDetails, setMovieDetails] = useState(null);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setMovieDetails({
            title: 'Netflix Movie',
            url: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v'
        });
    }

    return (
        <React.Fragment>
        <div className='border-b-4 bg-black'>
            <div className="w-full h-[700px] text-white">
                <div className="w-full h-full">
                    <div className="absolute w-full h-[700px] bg-gradient-to-r from-black ">

                    </div>

                    <img src={"https://image.tmdb.org/t/p/original/fwXeTKmJvlv7kbH8QDmbykGfMeK.jpg"} alt="Movie Background Image" className="w-full h-full object-cover" />
                    <div className="absolute w-full p-4 top-[50%]">
                        <h1 className="text-5xl font-bold">Paw Patrol</h1>
                        <div className="my-5 flex items-center gap-5">
                            <button onClick={toggleModal} className="border bg-gray-300 text-black border-gray-300 py-2 px-5 font-medium">Play</button>
                            <button className="border py-2 px-5 border-gray-300">Watch Later</button>
                        </div>
                        <p className="text-gray-400 text-sm">Released : {new Date().toLocaleDateString()}</p>
                        <p className="w-3/5 font-medium text-gray-200 capitalize mt-3">
                            A magical meteor crash-lands in Adventure City, gives the PAW Patrol pups superpowers, and transforms them into The Mighty Pups. When the Patrol's archrival Humdinger breaks out of jail and teams up with mad scientist Victoria Vance to steal the powers for themselves, the Mighty Pups must save Adventure City and stop the supervillains before it's too late.
                        </p>
                    </div>
                </div>
            </div>
            <div className='p-4'>
            <MovieRow title={"Popular"} movie={popularMovies} />
            <MovieRow title={"Upcoming"} movie={upComingMovies} />
            <MovieRow title={"Top Rated"} movie={topRatedMovies} />
            </div>
            {/* <div className='bg-black'>
                <h2 className='text-white font-bold text-2xl p-4'>Upcoming</h2>
                <div className='overflow-x-scroll scroll-smooth movie-row-container w-full mx-auto whitespace-nowrap'>
                    {
                        upComingMovies.map((movie, idx) => {
                            return (
                                <div className='w-[18rem] h-100 inline-block cursor-pointer relative mx-1' key={idx}>
                                    <img src={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path} alt="" className="w-[100%] h-[100%]w-full" />
                                    <div className='absolute bottom-0 text-white p-1 bg-slate-400 w-full'>
                                        <p className='text-center text-sm font-bold' >
                                            {movie?.original_title}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='bg-black'>
                <h2 className='text-white font-bold text-2xl p-4'>Top Rated</h2>
                <div className='overflow-x-scroll scroll-smooth movie-row-container w-full mx-auto whitespace-nowrap'>
                    {
                        topRatedMovies.map((movie, idx) => {
                            return (
                                <div className='w-[18rem] h-100 inline-block cursor-pointer relative mx-1' key={idx}>
                                    <img src={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path} alt="" className="w-[100%] h-[100%]w-full" />
                                    <div className='absolute bottom-0 text-white p-1 bg-slate-400 w-full'>
                                        <p className='text-center text-sm font-bold' >
                                            {movie?.original_title}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div> */}
        </div>
        <PlayMovieModal isOpen={isOpen} toggleModal={toggleModal} movieDetails={movieDetails} />
        <Footer />
        </React.Fragment>
    )
}
export default Dashboard;