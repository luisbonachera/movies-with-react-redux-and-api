import { combineReducers } from "redux";

import { IMovie } from "../interfaces/interfaceIMovie";
import { IMovieDetails } from "../interfaces/interfaceIMovieDetails";
import { moviesReducer } from "./moviesReducer";
import { movieDetailsReducer } from "./movieDetailsReducer";
import { isSearchedReducer } from "./isSearchedReducer";
import { moviesDiscoverReducer } from "./moviesDiscoverReducer";


export interface IGlobalState {

    movies: IMovie[];
    moviesDiscover: IMovie[];
    movieDetails: IMovieDetails;
    isSearched: boolean;
    
    //   idmovie: number;
}

export const reducers = combineReducers({
    moviesDiscover: moviesDiscoverReducer,
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
    isSearched: isSearchedReducer,

    //   idCity: idCityReducer,
});