import React from 'react';
import axios from 'axios';

// import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { IMovie } from '../interfaces/interfaceIMovie';
import { IGlobalState } from '../reducers/reducers';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { RouteComponentProps, Redirect, withRouter, Link } from 'react-router-dom';
import MoviesListContainer from '../containers/MoviesListContainer';
import logo from '../images/search-icon.png';




interface IProps { };

interface IPropsGlobal {
    movies: IMovie[];
    setMovies: (movies: IMovie[]) => void;
    isSearched: boolean;
    SetIsSearched: (isSearched: boolean) => void
}

// const List = (props) => {
const AppNav: React.FC<IProps & IPropsGlobal> = props => {
    const [inputMovie, setInputMovie] = React.useState<string>("");
    // const [isSearched, setIsSearches] = React.useState<boolean>(false);

    const updateInputMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputMovie(event.currentTarget.value);
    }

    const search = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&query=${inputMovie}`)
            .then(movies => {
                props.setMovies(movies.data.results);
                props.SetIsSearched(true)
                // props.history.push("/movies");
            }).catch(error => {
                console.log(error);
            });
    };

    return (
        // <AppBar className={classes.NavColor} position="static">
        <>
            {/* <AppBar position="static">

                <Toolbar variant="dense">
                    <Grid>
                        <Link to="/" className="btn waves-effect waves-light col s12">
                            <Typography variant="h6" component="p">
                                MovieApp
                            </Typography>
                        </Link>
                    </Grid> */}
            {/* <Grid>
                    <input
                        value={inputMovie}
                        className="validate"
                        id="NameCity"
                        type="email"
                        onChange={updateInputMovie} />
                    <label data-error="wrong" data-success="right">Name City</label>
                </Grid> */}
            {/* <Grid>
                        <Link to="/movies" className="btn waves-effect waves-light col s12">
                            <img src={logo} width='20' />
                        </Link> */}
            {/* <button className="btn waves-effect waves-light col s12" onClick={search}>Search</button> */}
            {/* </Grid>
                </Toolbar>
            </AppBar>

            {props.isSearched && (<MoviesListContainer />)} */}
            {/* <div className='Home'>
                <div className='container-flex'> */}
                    <nav className='navbar navbar-expand-lg navbar-expand-xl navbar-dark bg-dark fixed-top'>
                        <div className='container'>
                            <a className='navbar-brand' href='/#top'>React Movies</a>
                            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                                <span className='navbar-toggler-icon'></span>
                            </button>
                            <div className='collapse navbar-collapse' id='navbarResponsive'>
                                <ul className='navbar-nav ml-auto'>
                                    <li className='nav-item active'>
                                        <a className='nav-link' href='/#top'><i className='fas fa-home'></i> Inicio</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/#premiere'><i className='fas fa-ticket-alt'></i> Estrenos</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/#trend'><i className='fas fa-medal'></i> Más populares</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/#favs'><i className='fas fa-star'></i> Favoritas</a>
                                    </li>
                                    <li>
                                        {/* <Dropdown key={genres.id}>
                        <Dropdown.Toggle variant='danger' id='dropdown-basic'> Géneros </Dropdown.Toggle>
                          <Dropdown.Menu> {genres.map(genre=> (
                            <Dropdown.Item eventKey={genre.id}  key={genre.id}  onSelect={genre => this.changeGenre(genre)}> {genre.name} </Dropdown.Item> ))}
                          </Dropdown.Menu>
                        </Dropdown> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
        </>
    );
}


const mapStateToProps = (state: IGlobalState) => ({
                    movies: state.movies,
    isSearched: state.isSearched,

    // citiesDetails: state.citiesDetails,
    // idCity: state.idCity
});

const mapDispathToProps = {
                    setMovies: actions.setMovies,
    SetIsSearched: actions.SetIsSearched
    //   setCitiesDetails: actions.setCitiesDetails
};

// export default withRouter(connect<{}, {}, IProps & RouteComponentProps>(mapStateToProps,mapDispathToProps)(AppNav));

export default connect(
    mapStateToProps,
    mapDispathToProps
)(AppNav);


// export default withStyles({
//     NavColor: {
//         backgroundColor: '#EF5350'
//     }
// })(AppNav)