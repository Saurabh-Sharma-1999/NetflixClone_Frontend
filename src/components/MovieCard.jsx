import React from 'react'
import { TMDB_IMG_URL } from '../../utils/constant'
import { useDispatch } from 'react-redux';
import { getId, setOpen } from '../redux/MovieSlice';

export default function MovieCard({posterPath, movieId}) {
  const dispatch = useDispatch();
  if(posterPath === null) return null;

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  }
  return (
    <div className='w-48 pr-2 ' onClick={handleOpen}>
        <img src={`${TMDB_IMG_URL}/${posterPath}`} alt='Movie_poster'  className='w-auto h-auto'/>
    </div>
  )
}



