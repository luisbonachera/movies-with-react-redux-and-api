import { TAction } from '../actions/actionsTypes';
import { IMovie } from '../interfaces/interfaceIMovie';
import { IMovieDiscover } from '../interfaces/interfaceIMovieDiscover';

// const initialState: any = [{
//     id: '',
//     title: '',
//     original_title: '',
//     poster_path: '',
//     vote_average: 0,
// }]

const initialState: IMovieDiscover[] = [{
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

export const moviesDiscoverReducer = (
    state: IMovieDiscover[] = initialState,
    action: TAction
): IMovieDiscover[] => {
    if (action.type === "SET_MOVIES_DISCOVER") {
        return action.moviesDiscover;
    }

    return state;
}