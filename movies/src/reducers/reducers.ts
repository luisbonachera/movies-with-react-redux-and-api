import { combineReducers } from "redux";

import { IMovie } from "../interfaces/interfaceIMovie";
import { IMovieDetails } from "../interfaces/interfaceIMovieDetails";
import { moviesReducer } from "./moviesReducer";
import { movieDetailsReducer } from "./movieDetailsReducer";


export interface IGlobalState {
  
  movies: IMovie[];
  movieDetails : IMovieDetails;
//   idmovie: number;
}

export const reducers = combineReducers({
    movies: moviesReducer,
  movieDetails: movieDetailsReducer,
//   idCity: idCityReducer,
});