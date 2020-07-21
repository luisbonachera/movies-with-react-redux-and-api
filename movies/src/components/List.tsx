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
        setErrorSearch(false)
    }

    const search = () => {

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&query=${inputMovie}`)
            .then(movies => {
                if (movies.data.results.length >= 1) {
                    console.log(movies.data.results);
                    // this.setState({movieData: movieData}); la primera es el state y la segunda es la const
                    setErrorSearch(false)
                    props.setMovies(movies.data.results);
                    setInputMovie("");
                    // setMoviesHooks(movies.data.results);
                    // setIstherMovies(true);
                }
                else {
                    ///mostar no hay peliculas con esa busqueda
                    setErrorSearch(true)
                }
            }).catch(error => {
                console.log(error);
            });
    };

    let url = "https://image.tmdb.org/t/p/w500";
    // `https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`
    // React.useEffect(() => { }, [isThereMovies]);

    return (
        // <Fragment>
        //     <Grid
        //         container
        //         spacing={5}
        //         direction="row"
        //         justify="center"
        //         alignItems="center">
        //         <Grid item xs={12} sm={6}>
        //             <h3>Lista de Peliculas</h3>
        //         </Grid>
        //         <Grid item xs={12} sm={6}>
        //             <div className={classes.search}>
        //                 <div className={classes.searchIcon}>
        //                     <SearchIcon />
        //                 </div>
        //                 <InputBase
        //                     placeholder="Search…"
        //                     classes={{
        //                         root: classes.inputRoot,
        //                         input: classes.inputInput,
        //                     }}
        //                     inputProps={{ 'aria-label': 'search' }}
        //                 />
        //             </div>
        //         </Grid>

        //     </Grid>
        //     <div className="container">
        //         <div className="row">
        //             <h1> Lista de peliculas</h1>
        //         </div>
        //         <div className="row">
        //             <div className="input-field col-6 s6">
        //                 <i className="material-icons prefix">home</i>
        //                 <input
        //                     value={inputMovie}
        //                     className="validate"
        //                     id="email"
        //                     type="email"
        //                     onChange={updateInputMovie} />
        //                 <label data-error="wrong" data-success="right">Search</label>
        //             </div>
        //             <div className="row">
        //                 <div className="input-field col s6">
        //                     <button className="btn waves-effect waves-light col6 s12" onClick={search}>Search</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     {/* <Grid container justify="center"> */}
        //     <div className='col-12 anchor' id='trend'>
        //         <h1>Películas más populares</h1>
        //         <div className='row'>
        //             {ErrorSearch && (
        //                 <div>
        //                     <h3>No hay resultados con la busqueda de {inputMovie}</h3>
        //                 </div>

        //             )}
        //             {!ErrorSearch && props.movies.length <= 1 &&
        //                 props.moviesDiscover.map((movie, index) => (
        //                     <MovieCard
        //                         to={`/movie-info/${movie.id}`}
        //                         key={index}
        //                         title={movie.original_title}
        //                         image={`${url}${movie.poster_path}`}
        //                     />
        //                 ))}
        //             {!ErrorSearch && props.movies &&
        //                 props.movies.map((movie, index) => (
        //                     <MovieCard
        //                         to={`/movie-info/${movie.id}`}
        //                         key={index}
        //                         title={movie.original_title}
        //                         image={`${url}${movie.poster_path}`}
        //                     />
        //                 ))
        //             }
        //         </div>
        //     </div>
        //     {/* </Grid> */}
        // </Fragment >
        // <div className='Home'>
        //     <div className='container-flex'>
        //         <nav className='navbar navbar-expand-lg navbar-expand-xl navbar-dark bg-dark fixed-top'>
        //             <div className='container'>
        //                 <a className='navbar-brand' href='/#top'>React Movies</a>
        //                 <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
        //                     <span className='navbar-toggler-icon'></span>
        //                 </button>
        //                 <div className='collapse navbar-collapse' id='navbarResponsive'>
        //                     <ul className='navbar-nav ml-auto'>
        //                         <li className='nav-item active'>
        //                             <a className='nav-link' href='/#top'><i className='fas fa-home'></i> Inicio</a>
        //                         </li>
        //                         <li className='nav-item'>
        //                             <a className='nav-link' href='/#premiere'><i className='fas fa-ticket-alt'></i> Estrenos</a>
        //                         </li>
        //                         <li className='nav-item'>
        //                             <a className='nav-link' href='/#trend'><i className='fas fa-medal'></i> Más populares</a>
        //                         </li>
        //                         <li className='nav-item'>
        //                             <a className='nav-link' href='/#favs'><i className='fas fa-star'></i> Favoritas</a>
        //                         </li>
        //                         <li>
        /* {/* <Dropdown key={genres.id}>
<Dropdown.Toggle variant='danger' id='dropdown-basic'> Géneros </Dropdown.Toggle>
<Dropdown.Menu> {genres.map(genre=> (
 <Dropdown.Item eventKey={genre.id}  key={genre.id}  onSelect={genre => this.changeGenre(genre)}> {genre.name} </Dropdown.Item> ))}
</Dropdown.Menu>
</Dropdown> *//*}
                                        {/* </li>
                                    </ul>
                                </div>
                            </div>
                        </nav> */
        <div className='col-12 anchor' id='trend'>
            {/* <h1>Películas más populares</h1> */}
            <div className="row custom-flex center">
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
                    <div className="input-field col-lg-2">
                        <button className="btn waves-effect waves-light btn-sm search-button" onClick={search}>Search</button>
                    </div>
                    {/* </div> */}
                </div>
            </div>
            <div className='row'>
                {ErrorSearch && (
                    <div>
                        <h3>No hay resultados con la busqueda de {inputMovie}</h3>
                    </div>

                )}
            </div>
            <h1>Películas más populares</h1>
            <div className='row'>
                {props.movies.length <= 1 &&
                    props.moviesDiscover.map((movie, index) => (
                        <MovieCard
                            to={`/movie-info/${movie.id}`}
                            key={index}
                            title={movie.original_title}
                            image={`${url}${movie.poster_path}`}
                            vote_average={movie.vote_average}
                        />
                    ))}
                {props.movies && props.movies[0].id !== '' &&
                    props.movies.map((movie, index) => (
                        <MovieCard
                            to={`/movie-info/${movie.id}`}
                            key={index}
                            title={movie.original_title}
                            image={`${url}${movie.poster_path}`}
                            vote_average={movie.vote_average}
                        />
                    ))
                }
            </div>
        </div>
        /* {/* <div className='col-12 anchor' id='trend'>
         <h1>Películas más populares</h1>
         <div className='row'>
             {!loading && trending.map(movie =><MovieRow movie ={movie} key={movie.id}/> )}
             {loading && <div className='col-12 text-center'> <p>Cargando información...</p> </div> }
             {!loading && !error && !trending.length &&  <div className='col-12 text-center'><h2>No hay información disponible.</h2> </div> }
             {!loading && error &&  <div className='col-12 text-center'> <h2>Ocurrió un error.</h2> </div>}
         </div>
     </div>
   <Favs />     */
        // </div>
        /* <Footer />    */
        // </div>
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


