import React, { Fragment } from 'react';
import MovieCard from './MovieCard';
import { Grid } from '@material-ui/core';

// const List = (props) => {
function List({ moviedata }) {

    return (
        <Fragment>
            <h1> Lista de peliculas</h1>
            <Grid container spacing={24} justify="center">
                {moviedata.map((movie, index) => {
                    let url = "https://image.tmdb.org/t/p/original";
                    console.log(url)
                    let movieIndex = "";
                    return (

                        <MovieCard key ={index} title={movie.original_title} image={`${url}${movie.poster_path}`}/>
                        // <li key={index}>
                        //     {movie.original_title}
                        //     {/* <a href={movie.url}>URL</a> */}
                        // </li>
                    )
                })}
            </Grid>
        </Fragment>
    );
}

export default List;