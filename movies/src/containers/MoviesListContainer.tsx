import React from 'react';
import axios from 'axios';
import List from '../components/List';
import AppNav from '../components/AppNav';
import { IMovie } from '../interfaces/interfaceIMovie';
import { IGlobalState } from '../reducers/reducers';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { IMovieDiscover } from '../interfaces/interfaceIMovieDiscover';
import { IMoviePremiere } from '../interfaces/interfaceIMoviePremiere';

interface IProps { };

interface IPropsGlobal {
    // movies: IMovie[];
    // moviesDiscover: IMovie[];
    setMoviesDiscover: (moviesDiscover: IMovieDiscover[]) => void;
    setMoviesPremiere: (moviesPremiere: IMoviePremiere[]) => void
    // setMovies: (movies: IMovie[]) => void

}

const MoviesListContainer: React.FC<IProps & IPropsGlobal> = props => {

    React.useEffect(() => {
        // axios.get('https://api.themoviedb.org/3/search/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&query=Spiderman')
        // axios.get('https://api.themoviedb.org/3/discover/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&language=en-US')
        // https://api.themoviedb.org/3/discover/movie?api_key=756e1622851086c3d011b8461693b962&language=es-ES&sort_by=popularity.desc
        // axios.get('https://api.themoviedb.org/3/discover/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&language=es-ES&sort_by=popularity.desc')
        // axios.get('https://api.themoviedb.org/3/movie/popular?api_key=735a3154d1f2d1edc582718bfa70cce9&language=en-US&page=1')
        axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=735a3154d1f2d1edc582718bfa70cce9&language=es-ES&')
            .then(res => {
                console.log(res);
                const movieData: IMovieDiscover[] = res.data.results;
                // this.setState({movieData: movieData}); la primera es el state y la segunda es la const
                props.setMoviesDiscover(movieData);
            }).catch(error => {
                console.log(error);
            });

            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&language=es-US&primary_release_year=2020')

                    .then(res => {
                        console.log(res);
                        const movieData: IMoviePremiere[] = res.data.results;
                        // this.setState({movieData: movieData}); la primera es el state y la segunda es la const
                        props.setMoviesPremiere(movieData); //estrenadas
                    }).catch(error => {
                        console.log(error);
                    });

    }, []);
    // React.useEffect(() => {
    //     axios.get('https://api.themoviedb.org/3/discover/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&language=es-ES&primary_release_year=2021')

    //         .then(res => {
    //             console.log(res);
    //             const movieData: IMoviePremiere[] = res.data.results;
    //             // this.setState({movieData: movieData}); la primera es el state y la segunda es la const
    //             props.setMoviesPremiere(movieData); //estrenadas
    //         }).catch(error => {
    //             console.log(error);
    //         });
    // }, []);
    // const { movieData } = this.state
    return (
        <>
            {/* <AppNav /> */}
            <List />
        </>
    );

}

const mapStateToProps = (state: IGlobalState) => ({
    // movies: state.movies,
    // moviesDiscover: state.movies,
    // citiesDetails: state.citiesDetails,
    // idCity: state.idCity
});

const mapDispathToProps = {
    setMoviesDiscover: actions.setMoviesDiscover,
    setMoviesPremiere: actions.setMoviesPremiere,
    // setMovies: actions.setMovies,
    //   setCitiesDetails: actions.setCitiesDetails
};

export default connect(
    mapStateToProps,
    mapDispathToProps
)(MoviesListContainer);

// export default MoviesListContainer;