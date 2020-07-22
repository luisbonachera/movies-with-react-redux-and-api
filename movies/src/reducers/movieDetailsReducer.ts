import { TAction } from '../actions/actionsTypes';
import { IMovieDetails } from '../interfaces/interfaceIMovieDetails';

const initialState: IMovieDetails = {
    id: '',
    title: '',
    original_title: '',
    poster_path: '',
    homepage: '',
    overview: '',
    backdrop_path: '',
    vote_average: 0,
}
// const initialState : ICity[] = []; //esto es sin el archivo cities.json

export const movieDetailsReducer = (
    // state: ICity[] = initialState, //esto es sin el archivo cities.json
    state: IMovieDetails = initialState,
    action: TAction
): IMovieDetails => {
    if (action.type === "SET_MOVIE_DETAILS") {
        return action.movieDetails;
    }

    return state;
}