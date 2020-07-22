import { TAction } from '../actions/actionsTypes';
import { IMovie } from '../interfaces/interfaceIMovie';
import { IMovieDiscover } from '../interfaces/interfaceIMovieDiscover';

const initialState: any = [{
    id: '',
    title: '',
    original_title: '',
    poster_path: '',
    vote_average: 0,
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