import { TAction } from '../actions/actionsTypes';
import { IMovieDetails } from '../interfaces/interfaceIMovieDetails';

const initialState: IMovieDetails = {
    id: '',
    title: '',
    original_title: '',
    poster_path: '',
    vote_count: 0,
    vote_average: 0,
    original_languaje: '',
    runtime: 0,
    adult: false,
    video: false,
    genre: [{ id: 0, name: '' }],
    data_release: '',
    popularity: 0,
    homepage: '',
    overview: '',
    tagline: '',


}

export const movieDetailsReducer = (
    state: IMovieDetails = initialState,
    action: TAction
): IMovieDetails => {
    if (action.type === "SET_MOVIE_DETAILS") {
        return action.movieDetails;
    }

    return state;
}