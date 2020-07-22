import { TAction } from '../actions/actionsTypes';
import { IMoviePremiere } from '../interfaces/interfaceIMoviePremiere';

const initialState: any = [{
    id: '',
    title: '',
    original_title: '',
    poster_path: '',
    vote_average: 0,
}]

export const moviesPremiereReducer = (
    state: IMoviePremiere[] = initialState,
    action: TAction
): IMoviePremiere[] => {
    if (action.type === "SET_MOVIES_PREMIERE") {
        return action.moviesPremiere;
    }

    return state;
}