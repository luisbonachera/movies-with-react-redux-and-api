import { IMovie } from "../interfaces/interfaceIMovie";
import { IMovieDetails } from "../interfaces/interfaceIMovieDetails";


type TSetMoviesAction = {
    type: "SET_MOVIES";
    movies: IMovie[];
};

type TSetMovieDetailsAction = {
    type: "SET_MOVIEDETAILS";
    movieDetails: IMovieDetails;
};

export type TAction = TSetMoviesAction | TSetMovieDetailsAction;