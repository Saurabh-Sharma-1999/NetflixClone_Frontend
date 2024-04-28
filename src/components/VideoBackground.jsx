import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux';

export default function VideoBackground({ movieId, bool}) {
    const trailerMovie = useSelector((store) => store.movie.trailerMovie);
    useMovieById(movieId);

    return (
        <div className='w-[vw] overflow-hidden'>
            <iframe
                className={`${bool ? "w-[100%]": "w-screen aspect-video"}`}
                src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=eJqusZCh1DWw97P-&autoplay=1&mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen>

            </iframe>
        </div>
    );
}






