import React from 'react';
import axios from 'axios';
import List from '../components/List';
import { IGlobalState } from '../reducers/reducers';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { IMovieDiscover } from '../interfaces/interfaceIMovieDiscover';
import { IMoviePremiere } from '../interfaces/interfaceIMoviePremiere';

interface IProps { };

interface IPropsGlobal {
    setMoviesDiscover: (moviesDiscover: IMovieDiscover[]) => void;
    setMoviesPremiere: (moviesPremiere: IMoviePremiere[]) => void
}

const MoviesListContainer: React.FC<IProps & IPropsGlobal> = props => {

    React.useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=735a3154d1f2d1edc582718bfa70cce9&language=es-ES&')
            .then(res => {
                const movieData: IMovieDiscover[] = res.data.results;
                props.setMoviesDiscover(movieData);
            }).catch(_error => {
            });

        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&language=es-US&primary_release_year=2020')
            .then(res => {
                const movieData: IMoviePremiere[] = res.data.results;
                props.setMoviesPremiere(movieData);
            }).catch(_error => {
            });
        // eslint-disable-next-line
    }, []);

    return (<List />);

}

const mapStateToProps = (state: IGlobalState) => ({
});

const mapDispathToProps = {
    setMoviesDiscover: actions.setMoviesDiscover,
    setMoviesPremiere: actions.setMoviesPremiere,
};

export default connect(
    mapStateToProps,
    mapDispathToProps
)(MoviesListContainer);