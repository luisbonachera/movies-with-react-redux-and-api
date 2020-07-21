import { IMovie } from "../interfaces/interfaceIMovie";
import { IMovieDetails } from "../interfaces/interfaceIMovieDetails";
import { IMovieDiscover } from "../interfaces/interfaceIMovieDiscover";


type TSetMoviesDiscoverAction = {
    type: "SET_MOVIES_DISCOVER";
    moviesDiscover: IMovie[];
};

type TSetMoviesAction = {
    type: "SET_MOVIES";
    movies: IMovie[];
};

type TSetMovieDetailsAction = {
    type: "SET_MOVIEDETAILS";
    movieDetails: IMovieDetails;
};

type TSetIsSearchedAction = {
    type: "SET_IS_SEARCHED";
    isSearched: boolean;
};


export type TAction = TSetMoviesDiscoverAction | TSetMoviesAction | TSetMovieDetailsAction | TSetIsSearchedAction;