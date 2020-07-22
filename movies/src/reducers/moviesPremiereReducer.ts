import { TAction } from '../actions/actionsTypes';
import { IMoviePremiere } from '../interfaces/interfaceIMoviePremiere';

const initialState: IMoviePremiere[] = [{
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

export const moviesPremiereReducer = (
    state: IMoviePremiere[] = initialState,
    action: TAction
): IMoviePremiere[] => {
    if (action.type === "SET_MOVIES_PREMIERE") {
        return action.moviesPremiere;
    }

    return state;
}