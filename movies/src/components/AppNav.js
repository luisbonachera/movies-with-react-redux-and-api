import React from 'react';
import axios from 'axios';


import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';

const AppNav = (props) => {
    const [inputMovie, setInputMovie] = React.useState("");

    const [isThereMovies, setIstherMovies] = React.useState(false);
    const [moviesHooks, setMoviesHooks] = React.useState([]);

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

    const { classes } = props;
    return (
        <AppBar className={classes.NavColor} position="static">
            <Toolbar variant="dense">
                <Grid>
                    <Typography variant="h6" component="p">
                        MovieApp
                    </Typography>
                </Grid>
                <Grid>
                    <input
                        value={inputMovie}
                        className="validate"
                        id="NameCity"
                        type="email"
                        onChange={updateInputMovie} />
                    <label data-error="wrong" data-success="right">Name City</label>
                </Grid>
                <Grid>
                    <button className="btn waves-effect waves-light col s12" onClick={search}>Search</button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles({
    NavColor: {
        backgroundColor: '#EF5350'
    }
})(AppNav)