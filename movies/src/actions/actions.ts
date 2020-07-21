import { ActionCreator } from "redux";
import { TAction } from "./actionsTypes";
import { IMovie } from "../interfaces/interfaceIMovie";
import { IMovieDetails } from "../interfaces/interfaceIMovieDetails";


export const setMovies: ActionCreator<TAction> = (movies: IMovie[]) => ({
    type: "SET_MOVIES",
    movies: movies
});

export const setCityDetails: ActionCreator<TAction> = (movieDetails: IMovieDetails) => ({
    type: "SET_MOVIEDETAILS",
    movieDetails: movieDetails
});