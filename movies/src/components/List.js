import React, { Fragment } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';
import { Grid } from '@material-ui/core';

// const List = (props) => {
const List = ({ moviedata }) => {
    const [inputMovie, setInputMovie] = React.useState("");

    const [isThereMovies, setIstherMovies] = React.useState(false);
    const [moviesHooks, setMoviesHooks] = React.useState([]);
    // let moviesHooks = [];

    const updateInputMovie = (event) => {
        setInputMovie(event.currentTarget.value);
    }

    const search = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&query=${inputMovie}`)
            .then(movies => {
                console.log(movies.data.results);
                // this.setState({movieData: movieData}); la primera es el state y la segunda es la const
                setMoviesHooks(movies.data.results);
                setIstherMovies({ isThereMovies: true });
            }).catch(error => {
                console.log(error);
            });
    };

    let url = "https://image.tmdb.org/t/p/w300";
    React.useEffect(() => { }, [isThereMovies]);

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
                {!isThereMovies &&
                    moviedata.map((movie, index) => {
                        // let url = "https://image.tmdb.org/t/p/original";
                        let url = "https://image.tmdb.org/t/p/w300";


                        console.log(url)
                        return (
                            <MovieCard
                                to={`/movie-info/${movie.id}/${movie.original_title}`}
                                key={index}
                                title={movie.original_title}
                                image={`${url}${movie.poster_path}`}
                            />)
                    })
                }
                {isThereMovies &&
                    moviesHooks.map((movie, index) => (
                        <MovieCard to={`/movie-info/${movie.id}/${movie.original_title}`} key={index} title={movie.original_title} image={`${url}${movie.poster_path}`} />
                    )
                        // {
                        //     console.log(movie)
                        //     // let url = "https://image.tmdb.org/t/p/original";
                        //     let url = "https://image.tmdb.org/t/p/w300";


                        //     console.log(url)
                        //     return <MovieCard to={`/movie-info/${movie.id}/${movie.original_title}`} key={index} title={movie.original_title} image={`${url}${movie.poster_path}`} />
                        //     // <li key={index}>
                        //     //     {movie.original_title}
                        //     //     {/* <a href={movie.url}>URL</a> */}
                        //     // </li>

                        // }
                    )}
            </Grid>
        </Fragment>
    );
}

export default List;