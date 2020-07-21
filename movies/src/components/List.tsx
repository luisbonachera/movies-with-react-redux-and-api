import React, { Fragment } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';
import { Grid } from '@material-ui/core';
import { IMovie } from '../interfaces/interfaceIMovie';
import { IGlobalState } from '../reducers/reducers';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


interface IProps { };

interface IPropsGlobal {
    movies: IMovie[];
    moviesDiscover: IMovie[];
    setMovies: (movies: IMovie[]) => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    })
);

// const List = (props) => {
const List: React.FC<IProps & IPropsGlobal> = props => {
    const [inputMovie, setInputMovie] = React.useState("");
    const [ErrorSearch, setErrorSearch] = React.useState<boolean>(false)
    const classes = useStyles();

    // const [isThereMovies, setIstherMovies] = React.useState<boolean>(false);
    // const [moviesHooks, setMoviesHooks] = React.useState<IMovie[]>([]);
    // // let moviesHooks = [];

    const updateInputMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputMovie(event.currentTarget.value);
    }

    const search = () => {

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&query=${inputMovie}`)
            .then(movies => {
                if (movies && movies.data && movies.data.results.lengh > 1) {
                    console.log(movies.data.results);
                    // this.setState({movieData: movieData}); la primera es el state y la segunda es la const
                    setErrorSearch(false)
                    props.setMovies(movies.data.results)
                    // setMoviesHooks(movies.data.results);
                    // setIstherMovies(true);
                }
                else{
                    ///mostar no hay peliculas con esa busqueda
                    setErrorSearch(true)
                }
            }).catch(error => {
                console.log(error);
            });
    };

    let url = "https://image.tmdb.org/t/p/w300";
    // React.useEffect(() => { }, [isThereMovies]);

    return (
        <Fragment>
            <Grid
                container
                spacing={5}
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item xs={12} sm={6}>
                    <h3>Lista de Peliculas</h3>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Grid>

            </Grid>
            <div className="container">
                <div className="row">
                    <h1> Lista de peliculas</h1>
                </div>
                <div className="row">
                    <div className="input-field col-6 s6">
                        <i className="material-icons prefix">home</i>
                        <input
                            value={inputMovie}
                            className="validate"
                            id="email"
                            type="email"
                            onChange={updateInputMovie} />
                        <label data-error="wrong" data-success="right">Search</label>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <button className="btn waves-effect waves-light col6 s12" onClick={search}>Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <Grid container justify="center">
                {ErrorSearch && (
                    <div>
                        <h3>No hay resultados con esa busqueda</h3>
                    </div>
                        
                )  
                }
                {props.movies.length <= 1 &&
                    props.moviesDiscover.map((movie, index) => (
                        <MovieCard
                            to={`/movie-info/${movie.id}`}
                            key={index}
                            title={movie.original_title}
                            image={`${url}${movie.poster_path}`}
                        />
                    ))}
                {props.movies &&
                    props.movies.map((movie, index) => (
                        <MovieCard
                            to={`/movie-info/${movie.id}`}
                            key={index}
                            title={movie.original_title}
                            image={`${url}${movie.poster_path}`}
                        />
                    ))
                }
            </Grid>
        </Fragment >
    );
}

const mapStateToProps = (state: IGlobalState) => ({
    movies: state.movies,
    moviesDiscover: state.moviesDiscover,

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


