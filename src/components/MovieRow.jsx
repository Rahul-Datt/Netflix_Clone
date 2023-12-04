import Card from "./Card/Card";

const MovieRow = ({ title, movie }) => {
    return (
        <div className='bg-black'>
                <h2 className='text-white font-bold text-2xl px-1 py-4'>{title}</h2>
                <div className='overflow-x-scroll scroll-smooth movie-row-container w-full mx-auto whitespace-nowrap'>
                    {
                        movie?.map((movie, idx) => {
                            return (
                                <Card movie={movie} key={idx} />
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default MovieRow;