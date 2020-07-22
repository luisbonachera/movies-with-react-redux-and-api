import { ActionCreator } from "redux";
import { TAction } from "./actionsTypes";
import { IMovie } from "../interfaces/interfaceIMovie";
import { IMovieDetails } from "../interfaces/interfaceIMovieDetails";
import { IMovieDiscover } from "../interfaces/interfaceIMovieDiscover";
import { IMoviePremiere } from "../interfaces/interfaceIMoviePremiere";


export const setMoviesDiscover: ActionCreator<TAction> = (moviesDiscover: IMovieDiscover[]) => ({
    type: "SET_MOVIES_DISCOVER",
    moviesDiscover: moviesDiscover
});

export const setMoviesPremiere: ActionCreator<TAction> = (moviesPremiere: IMoviePremiere[]) => ({
    type: "SET_MOVIES_PREMIERE",
    moviesPremiere: moviesPremiere
});

export const setMovies: ActionCreator<TAction> = (movies: IMovie[]) => ({
    type: "SET_MOVIES",
    movies: movies
});

export const setMovieDetails: ActionCreator<TAction> = (movieDetails: IMovieDetails) => ({
    type: "SET_MOVIE_DETAILS",
    movieDetails: movieDetails
});

export const setIsHiddenSearched: ActionCreator<TAction> = (isHiddenSearched: boolean) => ({
    type: "SET_IS_HIDDEN_SEARCHED",
    isHiddenSearched: isHiddenSearched
});


