import { IMovie } from "../interfaces/interfaceIMovie";
import React from "react";

import { IGlobalState } from "../reducers/reducers";
import axios from 'axios';

import { connect } from "react-redux";
import * as actions from '../actions/actions';
import List from "../components/List";


interface IProps { };

interface IPropsGlobal {
    movies: IMovie[];
    setMovies: (movies: IMovie[]) => void;
}

// const List = (props) => {
const Search: React.FC<IProps & IPropsGlobal> = props => {
    const [inputMovie, setInputMovie] = React.useState("");

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

    return (
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
                {props.movies && (<List/>)}
            </div>
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
)(Search);

