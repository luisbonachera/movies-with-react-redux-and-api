import { TAction } from '../actions/actionsTypes';
import { IMovie } from '../interfaces/interfaceIMovie';

const initialState: any = [{
    id: '',
    title: '',
    original_title: '',
    poster_path: '',
}]
// const initialState : ICity[] = []; //esto es sin el archivo cities.json

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