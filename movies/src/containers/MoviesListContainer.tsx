import React from 'react';
import axios from 'axios';
import List from '../components/List';
import AppNav from '../components/AppNav';
import { IMovie } from '../interfaces/interfaceIMovie';
import { IGlobalState } from '../reducers/reducers';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

interface IProps { };

interface IPropsGlobal {
    movies: IMovie[];
    moviesDiscover: IMovie[];
    setMoviesDiscover: (moviesDiscover: IMovie[]) => void;
}

const MoviesListContainer: React.FC<IProps & IPropsGlobal> = props => {

    React.useEffect(() => {
        // axios.get('https://api.themoviedb.org/3/search/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&query=Spiderman')
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&language=en-US')
            .then(res => {
                console.log(res);              
                const movieData: IMovie[] = res.data.results;
                // this.setState({movieData: movieData}); la primera es el state y la segunda es la const
                props.setMoviesDiscover(movieData);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    // const { movieData } = this.state
    return (
        <>
            {/* <AppNav /> */}
            <List />
        </>
    );

}

const mapStateToProps = (state: IGlobalState) => ({
    movies: state.movies,
    moviesDiscover: state.movies,
    // citiesDetails: state.citiesDetails,
    // idCity: state.idCity
});

const mapDispathToProps = {
    setMoviesDiscover: actions.setMoviesDiscover,
    //   setCitiesDetails: actions.setCitiesDetails
};

export default connect(
    mapStateToProps,
    mapDispathToProps
)(MoviesListContainer);

// export default MoviesListContainer;