import { TAction } from '../actions/actionsTypes';
import { IMovieDetails } from '../interfaces/interfaceIMovieDetails';

const initialState: boolean = false;
// const initialState : ICity[] = []; //esto es sin el archivo cities.json

export const isSearchedReducer = (
    // state: ICity[] = initialState, //esto es sin el archivo cities.json
    state: boolean = initialState,
    action: TAction
): boolean => {
    if (action.type === "SET_IS_SEARCHED") {
        return action.isSearched;
    }

    return state;
}