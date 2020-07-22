import { IMovie } from "../interfaces/interfaceIMovie";
import { IMovieDetails } from "../interfaces/interfaceIMovieDetails";
import { IMovieDiscover } from "../interfaces/interfaceIMovieDiscover";
import { IMoviePremiere } from "../interfaces/interfaceIMoviePremiere";


type TSetMoviesDiscoverAction = {
    type: "SET_MOVIES_DISCOVER";
    moviesDiscover: IMovieDiscover[];
};

type TSetMoviesPremiereAction = {
    type: "SET_MOVIES_PREMIERE";
    moviesPremiere: IMoviePremiere[];
};

type TSetMoviesAction = {
    type: "SET_MOVIES";
    movies: IMovie[];
};

type TSetMovieDetailsAction = {
    type: "SET_MOVIE_DETAILS";
    movieDetails: IMovieDetails;
};

type TSetIsHiddenSearchAction = {
    type: "SET_IS_HIDDEN_SEARCHED";
    isHiddenSearched: boolean;
};

export type TAction = TSetMoviesDiscoverAction | TSetMoviesPremiereAction | TSetMoviesAction | TSetMovieDetailsAction | TSetIsHiddenSearchAction;