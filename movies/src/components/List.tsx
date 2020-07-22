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
        setErrorSearch(false)
    }

    const search = () => {
        // https://api.themoviedb.org/p/original/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg?api_key=735a3154d1f2d1edc582718bfa70cce9
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&query=${inputMovie}`)
            .then(movies => {
                if (movies.data.results.length >= 1) {
                    console.log(movies.data.results);
                    // this.setState({movieData: movieData}); la primera es el state y la segunda es la const
                    setErrorSearch(false)
                    props.setMovies(movies.data.results);
                    // setInputMovie("");
                    // setMoviesHooks(movies.data.results);
                    // setIstherMovies(true);
                }
                else {
                    ///mostar no hay peliculas con esa busqueda
                    props.setMovies(movies.data.results);
                    setErrorSearch(true);
                }
            }).catch(error => {
                console.log(error);
            });
    };

    let url = "https://image.tmdb.org/t/p/w500";
    // `https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`
    // React.useEffect(() => { }, [isThereMovies]);

    return (
        <>
            <div className='col-12 margen-title-section zIndex-contaioner-tittle' id='PrincipalPage'>
                {/* <h1>Películas más populares</h1> */}
                <div className="row custom-flex center" hidden={props.isHiddenSearched}>
                    <div className="input-field col-6 ">
                        <h1 className="web-title"> Movies App</h1>
                    </div>
                    <div className="input-field col-6 custom-flex">
                        <div className="input-field col-lg-3 center">
                            {/* <i className="material-icons prefix">home</i> */}
                            <input
                                value={inputMovie}
                                className="validate"
                                id="email"
                                type="email"
                                onChange={updateInputMovie} />
                            {/* <label data-error="wrong" data-success="right">Search</label> */}
                        </div>
                        {/* <div className="row">  */}
                        <div className="input-field col-lg-2 serach-button-container">
                            <button className="btn waves-effect waves-light btn-sm search-button" onClick={search}>Buscar</button>
                        </div>
                        {/* </div> */}
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
                                        title={movie.title? movie.title : movie.original_title? movie.original_title : 'No tiene titulo'}
                                        image={movie.poster_path ? `${url}${movie.poster_path}` : process.env.PUBLIC_URL + '/images/poster-movie-not-found-400x400.jpg'}
                                        vote_average={movie.vote_average? movie.vote_average : 0}
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
                            title={movie.title? movie.title : movie.original_title? movie.original_title : 'No tiene titulo'}
                            image={`${url}${movie.poster_path}`}
                            vote_average={movie.vote_average}
                        />
                    ))}
                    {/* {!loading && premiere.map(movie => <MovieRow movie ={movie} key={movie.id}/>)} */}
                    {/* {loading && <div className='col-12 text-center'> <p>Cargando información...</p> </div> }
                      {!loading && !error && !premiere.length && <div className='col-12 text-center'> <h2>No hay información disponible.</h2></div> }
                      {!loading && error && <div className='col-12 text-center'> <h2>Ocurrió un error.</h2></div> } */}
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
                                title={movie.title? movie.title : movie.original_title? movie.original_title : 'No tiene titulo'}
                                image={`${url}${movie.poster_path}`}
                                vote_average={movie.vote_average}
                            />
                        ))}
                    {/* {props.movies && props.movies[0].id !== '' &&
                        props.movies.map((movie, index) => (
                            <MovieCard
                                to={`/movie-info/${movie.id}`}
                                key={index}
                                title={movie.original_title}
                                image={`${url}${movie.poster_path}`}
                                vote_average={movie.vote_average}
                            />
                        ))
                    } */}
                </div>
                <div className="margin-botom-between-section">

                </div>
                {/* meter un contenedor que de espacio entre seciones de peliculas----------------------------------------------------------------------------- */}
            </div>
            {/* <div className='col-12 anchor' id='trend'>
         <h1>Películas más populares</h1>
         <div className='row'>
             {!loading && trending.map(movie =><MovieRow movie ={movie} key={movie.id}/> )}
             {loading && <div className='col-12 text-center'> <p>Cargando información...</p> </div> }
             {!loading && !error && !trending.length &&  <div className='col-12 text-center'><h2>No hay información disponible.</h2> </div> }
             {!loading && error &&  <div className='col-12 text-center'> <h2>Ocurrió un error.</h2> </div>}
         </div>
     </div>
   <Favs />     
        </div>
        <Footer />    
        </div>  */}
        </>
    );
}

const mapStateToProps = (state: IGlobalState) => ({
    movies: state.movies,
    moviesDiscover: state.moviesDiscover,
    moviesPremiere: state.moviesPremiere,
    isHiddenSearched: state.isHiddenSearched,


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


