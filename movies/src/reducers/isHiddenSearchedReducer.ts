import { TAction } from '../actions/actionsTypes';

const initialState: boolean = true;

export const isHiddenSearchedReducer = (
    state: boolean = initialState,
    action: TAction
): boolean => {
    if (action.type === "SET_IS_HIDDEN_SEARCHED") {
        return action.isHiddenSearched;
    }

    return state;
}