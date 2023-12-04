import { Link } from "react-router-dom";

const Card = ({ movie }) => {
    return (
        <Link to={`/movie/${movie?.id}`}>
        <div className='w-[18rem] h-100 inline-block cursor-pointer relative mx-1'>
            <img src={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path} alt="" className="w-[100%] h-[100%]w-full" />
            <div className='absolute bottom-0 text-white p-1 bg-slate-400 w-full'>
                <p className='text-center text-sm font-bold' >
                    {movie?.original_title}
                </p>
            </div>
        </div>
        </Link>
    )
}
export default Card;