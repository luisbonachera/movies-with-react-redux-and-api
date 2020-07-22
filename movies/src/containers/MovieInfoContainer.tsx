import React from 'react';
import MovieDescription from '../components/MovieDescription';
import axios from 'axios';
import { IMovie } from '../interfaces/interfaceIMovie';
import { RouteComponentProps } from 'react-router-dom';
import { IMovieDetails } from '../interfaces/interfaceIMovieDetails';
import { IGlobalState } from '../reducers/reducers';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';


interface IProps { };

interface IPropsGlobal {
    movies: IMovie[];
    movieDetails: IMovieDetails;
    setMovies: (movies: IMovie[]) => void;
    setMovieDetails: (movieDetails: IMovieDetails[]) => void;
}

const MovieInfoContainer: React.FC<IProps & IPropsGlobal & RouteComponentProps<{ id_movie: string }>> = props => {

    React.useEffect(() => {
        const movieId: number = +props.match.params.id_movie;
        const apiKey = "?api_key=735a3154d1f2d1edc582718bfa70cce9"
        const movieDescriptionURL = `${process.env.REACT_APP_MOVIES_BASE_URL}/movie/${movieId}${apiKey}`;

        axios.get(movieDescriptionURL)

            .then(res => {
                const movieDataDetails = res.data;
                props.setMovieDetails(movieDataDetails);

            }).catch(_error => {
            });
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <MovieDescription
                movieImageUrl={props.movieDetails ?
                    `${process.env.REACT_APP_MOVIES_IMAGE_POSTER_URL}/w500${props.movieDetails.poster_path}`
                    : ''}
            />
        </>
    );
}

const mapStateToProps = (state: IGlobalState) => ({
    movies: state.movies,
    movieDetails: state.movieDetails,
});

const mapDispathToProps = {
    setMovies: actions.setMovies,
    setMovieDetails: actions.setMovieDetails
};

export default connect(
    mapStateToProps,
    mapDispathToProps
)(MovieInfoContainer);
