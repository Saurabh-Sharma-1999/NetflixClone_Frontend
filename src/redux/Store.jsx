import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import movieReducer from './MovieSlice';
import SearchSlice from "./SearchSlice";


const store = configureStore({
    reducer: {
        app: userSlice,
        movie: movieReducer,
        searchMovie: SearchSlice
    },
    
})

export default store;