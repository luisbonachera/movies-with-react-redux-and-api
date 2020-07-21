import React, { Fragment } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';
import { Grid } from '@material-ui/core';
import { IMovie } from '../interfaces/interfaceIMovie';
import { IGlobalState } from '../reducers/reducers';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';


interface IProps { };

interface IPropsGlobal {
    movies: IMovie[];
    setMovies: (movies: IMovie[]) => void;
}

// const List = (props) => {
const List: React.FC<IProps & IPropsGlobal> = props => {
    const [inputMovie, setInputMovie] = React.useState("");

    // const [isThereMovies, setIstherMovies] = React.useState<boolean>(false);
    // const [moviesHooks, setMoviesHooks] = React.useState<IMovie[]>([]);
    // // let moviesHooks = [];

    const updateInputMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputMovie(event.currentTarget.value);
    }

    const search = () => {
        
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&query=${inputMovie}`)
            .then(movies => {
                console.log(movies.data.results);
                // this.setState({movieData: movieData}); la primera es el state y la segunda es la const
                props.setMovies(movies.data.results)
                // setMoviesHooks(movies.data.results);
                // setIstherMovies(true);
            }).catch(error => {
                console.log(error);
            });
    };

    let url = "https://image.tmdb.org/t/p/w300";
    // React.useEffect(() => { }, [isThereMovies]);

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <h1> Lista de peliculas</h1>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">home</i>
                        <input
                            value={inputMovie}
                            className="validate"
                            id="email"
                            type="email"
                            onChange={updateInputMovie} />
                        {/* <label data-error="wrong" data-success="right">Search</label> */}
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button className="btn waves-effect waves-light col s12" onClick={search}>Search</button>
                        </div>
                    </div>
                </div>
            </div>


            <Grid container justify="center">
                {props.movies.map((movie, index) => (
                    <MovieCard
                        to={`/movie-info/${movie.id}/${movie.original_title}`}
                        key={index}
                        title={movie.original_title}
                        image={`${url}${movie.poster_path}`}
                    />
                ))}
            </Grid>
        </Fragment>
    );
}

const mapStateToProps = (state: IGlobalState) => ({
    movies: state.movies,
    // citiesDetails: state.citiesDetails,
    // idCity: state.idCity
});

const mapDispathToProps = {
    setMovies: actions.setMovies,
    //   setCitiesDetails: actions.setCitiesDetails
};

export default connect(
    mapStateToProps,
    mapDispathToProps
)(List);


