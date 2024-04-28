export const API_END_POINT = "https://netflixclone-backend-rkyy.onrender.com/api/v1/user";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTMwZmRmNTNjZjc5YjM2NDIzZjgzY2I0NTM3M2RlMyIsInN1YiI6IjY2MjFlOTU3MDIzMWYyMDE3YzEyYmVjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q8d-2niaTKkjtAsQYIIWq7NApYri2zfNe8ehWSAKQx8'
    }
};

export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie ="https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";

export const SEARCH_MOVIE_URL='https://api.themoviedb.org/3/search/movie?query=';

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";