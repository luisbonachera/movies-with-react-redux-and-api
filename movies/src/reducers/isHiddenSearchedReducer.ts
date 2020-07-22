import { TAction } from '../actions/actionsTypes';

const initialState: boolean = true;
// const initialState : ICity[] = []; //esto es sin el archivo cities.json

export const isHiddenSearchedReducer = (
    // state: ICity[] = initialState, //esto es sin el archivo cities.json
    state: boolean = initialState,
    action: TAction
): boolean => {
    if (action.type === "SET_IS_HIDDEN_SEARCHED") {
        return action.isHiddenSearched;
    }

    return state;
}