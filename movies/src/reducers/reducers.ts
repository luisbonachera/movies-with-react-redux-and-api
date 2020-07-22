import { combineReducers } from "redux";

import { IMovie } from "../interfaces/interfaceIMovie";
import { IMovieDetails } from "../interfaces/interfaceIMovieDetails";
import { moviesReducer } from "./moviesReducer";
import { movieDetailsReducer } from "./movieDetailsReducer";
import { moviesDiscoverReducer } from "./moviesDiscoverReducer";
import { IMovieDiscover } from "../interfaces/interfaceIMovieDiscover";
import { IMoviePremiere } from "../interfaces/interfaceIMoviePremiere";
import { moviesPremiereReducer } from "./moviesPremiereReducer";
import { isHiddenSearchedReducer } from "./isHiddenSearchedReducer";


export interface IGlobalState {

    movies: IMovie[];
    moviesDiscover: IMovieDiscover[];
    moviesPremiere: IMoviePremiere[];
    movieDetails: IMovieDetails;
    isHiddenSearched: boolean;
}

export const reducers = combineReducers({
    moviesDiscover: moviesDiscoverReducer,
    movies: moviesReducer,
    moviesPremiere: moviesPremiereReducer,
    movieDetails: movieDetailsReducer,
    isHiddenSearched: isHiddenSearchedReducer,
});