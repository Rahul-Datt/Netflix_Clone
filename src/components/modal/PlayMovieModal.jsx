import React from 'react';
import ReactModal from "react-modal";

const PlayMovieModal = ({ isOpen, toggleModal, movieDetails }) => {

    return (
        <div>
            <ReactModal className="mt-20 bg-black w-1/2 text-white rounded-md p-5 mx-auto" isOpen={isOpen} onRequestClose={toggleModal}>
                <div className='w-fit ml-auto'>
                    <button onClick={toggleModal}>Close</button>
                </div>
                <h1>{movieDetails?.title}</h1>
                <div className='mt-10'>
                <video controls muted loop autoPlay className='w-full rounded-md'>
                        <source src={movieDetails?.url} type="video/mp4"></source>
                    </video>
                </div>
            </ReactModal>
        </div>
    )
}
export default PlayMovieModal;