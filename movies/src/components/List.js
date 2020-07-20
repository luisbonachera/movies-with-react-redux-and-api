import React, { Fragment } from 'react';
import MovieCard from './MovieCard';
import { Grid } from '@material-ui/core';

// const List = (props) => {
function List({ moviedata }) {

    return (
        <Fragment>
            <h1> Lista de peliculas</h1>
            <Grid container justify="center">
                {moviedata.map((movie, index) => {
                    // let url = "https://image.tmdb.org/t/p/original";
                    let url = "https://image.tmdb.org/t/p/w300";

                    
                    console.log(url)
                    return <MovieCard to={`/movie-info/${movie.id}/${movie.original_title}`} key ={index} title={movie.original_title} image={`${url}${movie.poster_path}`}/>
                        // <li key={index}>
                        //     {movie.original_title}
                        //     {/* <a href={movie.url}>URL</a> */}
                        // </li>
                    
                })}
            </Grid>
        </Fragment>
    );
}

export default List;