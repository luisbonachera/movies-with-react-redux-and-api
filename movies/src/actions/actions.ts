import { ActionCreator } from "redux";
import { TAction } from "./actionsTypes";
import { IMovie } from "../interfaces/interfaceIMovie";
import { IMovieDetails } from "../interfaces/interfaceIMovieDetails";
import { IMovieDiscover } from "../interfaces/interfaceIMovieDiscover";


export const setMoviesDiscover: ActionCreator<TAction> = (moviesDiscover: IMovie[]) => ({
    type: "SET_MOVIES_DISCOVER",
    moviesDiscover: moviesDiscover
});

export const setMovies: ActionCreator<TAction> = (movies: IMovie[]) => ({
    type: "SET_MOVIES",
    movies: movies
});

export const setMovieDetails: ActionCreator<TAction> = (movieDetails: IMovieDetails) => ({
    type: "SET_MOVIEDETAILS",
    movieDetails: movieDetails
});

export const SetIsSearched: ActionCreator<TAction> = (isSearched: boolean) => ({
    type: "SET_IS_SEARCHED",
    isSearched: isSearched
});


