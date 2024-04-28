import axios from 'axios';
import React, { useState } from 'react'
import { SEARCH_MOVIE_URL, options } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovieDetails } from '../redux/SearchSlice';
import { setLoading } from '../redux/UserSlice';
import MovieList from './MovieList';

export default function SearchMovie() {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  const { movieName, searchedMovie } = useSelector((store) => store.searchMovie);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options);
      console.log(res.data.results);
      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchMovie, movies }));

    } catch (error) {
      console.log(error);

    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  }
  return (
    <>
     <div className='flex justify-center pt-[10%] w-full md:w-[100%] lg:w-[100%]' style={{ overflowX: 'hidden' }}>
  <form className='w-full md:w-[80%] lg:w-[50%] sm: mt-10' onSubmit={submitHandler}>
    <div className='flex flex-col md:flex-row justify-between w-full shadow-md border-2 p-2 border-gray-200 rounded-lg'>
      <input
        value={searchMovie}
        onChange={(e) => { setSearchMovie(e.target.value) }}
        type='text'
        placeholder='Search Movies...'
        className='w-full md:w-4/5 w-full outline-none rounded-md text-lg mb-2 md:mb-0 md:mr-2 mt-4 md:mt-0'
      />
      <button className='bg-red-800 text-white rounded-md px-4 py-2'>{isLoading ? "loading..." : "Search"}</button>
    </div>
  </form>
</div>

      {
        searchedMovie  ? (<MovieList title={movieName} movies={searchedMovie} searchMovie={true}/>) : (<h1 className='text-center mt-4'>Movie not Found!</h1>)
      }
      
    </>

  )
}
