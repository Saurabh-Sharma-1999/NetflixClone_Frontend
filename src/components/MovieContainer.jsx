import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

export default function MovieContainer() {
  const movie = useSelector((store) => store.movie);
 
  return (
    <div className='bg-black'>
      <div className='sm:-mt-8 lg:-mt-52 relative'>
        {/* Adjust the margin based on screen size */}
        <MovieList title={"Popular Movies"} movies={movie.popularMovies}/>
        <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movie.topRatedMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies}/>
      </div>
    </div>
  );
}
