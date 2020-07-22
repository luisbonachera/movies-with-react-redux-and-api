import { TAction } from '../actions/actionsTypes';
import { IMovie } from '../interfaces/interfaceIMovie';

const initialState: IMovie[] = [{
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
}]


export const moviesReducer = (
    // state: ICity[] = initialState, //esto es sin el archivo cities.json
    state: IMovie[] = initialState,
    action: TAction
): IMovie[] => {
    if (action.type === "SET_MOVIES") {
        return action.movies;
    }

    return state;
}