import React from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';
import { IMovie } from '../interfaces/interfaceIMovie';
import { IGlobalState } from '../reducers/reducers';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import { IMovieDiscover } from '../interfaces/interfaceIMovieDiscover';
import { IMoviePremiere } from '../interfaces/interfaceIMoviePremiere';


interface IProps { };

interface IPropsGlobal {
    movies: IMovie[];
    moviesDiscover: IMovieDiscover[];
    moviesPremiere: IMoviePremiere[];
    isHiddenSearched: boolean;
    setMovies: (movies: IMovie[]) => void;
}

const List: React.FC<IProps & IPropsGlobal> = props => {
    const [inputMovie, setInputMovie] = React.useState("");
    const [ErrorSearch, setErrorSearch] = React.useState<boolean>(false)

    const updateInputMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputMovie(event.currentTarget.value);
        setErrorSearch(false)
    }

    const search = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&query=${inputMovie}`)
            .then(movies => {
                if (movies.data.results.length >= 1) {
                    setErrorSearch(false)
                    props.setMovies(movies.data.results);
                }
                else {
                    props.setMovies(movies.data.results);
                    setErrorSearch(true);
                }
            }).catch(error => {
            });
    };

    let url = "https://image.tmdb.org/t/p/w500";

    return (
        <>
            <div className='col-12 margen-title-section zIndex-contaioner-tittle' id='PrincipalPage'>
                <div className="row custom-flex center" hidden={props.isHiddenSearched}>
                    <div className="input-field col-6 ">
                        <h1 className="web-title"> Movies App</h1>
                    </div>
                    <div className="input-field col-6 custom-flex">
                        <div className="input-field col-lg-3 center">
                            <input
                                value={inputMovie}
                                className="validate"
                                id="email"
                                type="email"
                                onChange={updateInputMovie} />
                        </div>
                        <div className="input-field col-lg-2 serach-button-container">
                            <button className="btn waves-effect waves-light btn-sm search-button" onClick={search}>Buscar</button>
                        </div>
                    </div>
                </div>
                {props.movies && props.movies.length >= 1 && props.movies[0].id !== "" && (
                    <div className='col-12 margen-title-section' id='moviesSearch'>
                        <h1 >Peliculas relaciondas con {inputMovie}</h1>
                        <div className='row'>
                            <div className='col-12 text-left'>
                            </div>
                            {props.movies && props.movies[0].id !== '' &&
                                props.movies.map((movie, index) => (
                                    <MovieCard
                                        to={`/movie-info/${movie.id}`}
                                        key={index}
                                        title={movie.title ? movie.title : movie.original_title ? movie.original_title : 'No tiene titulo'}
                                        image={movie.poster_path ? `${url}${movie.poster_path}` : process.env.PUBLIC_URL + '/images/poster-movie-not-found-400x400.jpg'}
                                        vote_average={movie.vote_average ? movie.vote_average : 0}
                                    />
                                ))
                            }
                        </div>
                        <div className="margin-botom-between-section">
                        </div>
                    </div>
                )}
                {ErrorSearch && (
                    <>
                        <div className='col-12 center'>
                            <h4>No hay resultados con la busqueda de {inputMovie}</h4>
                        </div>
                        <div className="margin-botom-between-section">
                        </div>
                    </>
                )}
            </div>
            <div className='col-12 anchor ' id='premiere'>
                <h1 >Estrenos de 2020</h1>
                <div className='row'>
                    <div className='col-12 text-left'>
                    </div>
                    {props.moviesPremiere.map((movie, index) => (
                        <MovieCard
                            to={`/movie-info/${movie.id}`}
                            key={index}
                            title={movie.title ? movie.title : movie.original_title ? movie.original_title : 'No tiene titulo'}
                            image={`${url}${movie.poster_path}`}
                            vote_average={movie.vote_average}
                        />
                    ))}
                </div>
                <div className="margin-botom-between-section">
                </div>
            </div>
            <div className='col-12 anchor margen-title-section' id='trend'>
                <h1>Películas más populares</h1>
                <div className='row'>
                    {props.moviesDiscover &&
                        props.moviesDiscover.map((movie, index) => (
                            <MovieCard
                                to={`/movie-info/${movie.id}`}
                                key={index}
                                title={movie.title ? movie.title : movie.original_title ? movie.original_title : 'No tiene titulo'}
                                image={`${url}${movie.poster_path}`}
                                vote_average={movie.vote_average}
                            />
                        ))}
                </div>
                <div className="margin-botom-between-section">

                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state: IGlobalState) => ({
    movies: state.movies,
    moviesDiscover: state.moviesDiscover,
    moviesPremiere: state.moviesPremiere,
    isHiddenSearched: state.isHiddenSearched,
});

const mapDispathToProps = {
    setMovies: actions.setMovies,
};

export default connect(
    mapStateToProps,
    mapDispathToProps
)(List);


