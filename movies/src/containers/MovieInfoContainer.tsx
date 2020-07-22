import React, { Component } from 'react';
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
    movieDetails : IMovieDetails;
    setMovies: (movies: IMovie[]) => void;
    setMovieDetails: (movieDetails: IMovieDetails[]) => void;
}

// class MovieInfoContainer extends Component{
const MovieInfoContainer: React.FC<IProps & IPropsGlobal & RouteComponentProps<{ id_movie: string }>> = props => {


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         movieDataDetails: '',
    //         movieTitle: '',
    //         movieId: '',
    //     }
    // };

    // componentDidMount() {
        React.useEffect(() => {
        //peticion con axios
        // const { match } = this.props;
        // const movieTitle = match.params.movieTitle;
        // const movieId = match.params.movieIndex;
        // https://api.themoviedb.org/3/movie/547016?api_key=735a3154d1f2d1edc582718bfa70cce9
        // https://api.themoviedb.org/3/movie/${match.params.movieIndex}?api_key=735a3154d1f2d1edc582718bfa70cce9
        const movieId: number = +props.match.params.id_movie;
        const apiKey = "?api_key=735a3154d1f2d1edc582718bfa70cce9"
        const movieDescriptionURL = `${process.env.REACT_APP_MOVIES_BASE_URL}/movie/${movieId}${apiKey}`;

        axios.get(movieDescriptionURL)

            .then(res => {
                console.log(res);
                const movieDataDetails = res.data;
                // this.setState({movieDataDetails: movieDataDetails}); la primera es el state y la segunda es la const
                props.setMovieDetails(movieDataDetails);

            }).catch(error => {
                console.log(error);
            });
        }, []);


    // render() {
        // const { movieDataDetails, movieTitle } = this.state;
        // console.log('movieDataDetails: ', movieDataDetails)
        // let url = "https://image.tmdb.org/t/p/original";
        // https://api.themoviedb.org/3/movie/547016?api_key=735a3154d1f2d1edc582718bfa70cce9
        // https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
        // let url = "https://api.themoviedb.org/3/movie";
        // let url = movieDataDetails ? `https://image.tmdb.org/t/p/original${movieDataDetails.backdrop_path}` : '';
        // let url = movieDataDetails ? `${process.env.REACT_APP_MOVIES_IMAGE_URL}${movieDataDetails.backdrop_path}` : '';
        // console.log(url)
        // console.log(movieDataDetails.homepage)
        // const movieUrlImage = movieDataDetails.poster_path;
        // let apiKey = "?api_key=735a3154d1f2d1edc582718bfa70cce9"
        // console.log('url: ',url + movieUrlImage)
        return (
            <>
                {/* <AppNav /> */}
                <MovieDescription
                    movieImageUrl={props.movieDetails ? `${process.env.REACT_APP_MOVIES_IMAGE_POSTER_URL}/w500${props.movieDetails.poster_path}` : ''}
                />
                {/* <h1> MovieInfo</h1>
                <p>ID: {match.params.movieIndex}</p> */}
            </>
        );
    }
// }

const mapStateToProps = (state: IGlobalState) => ({
    movies: state.movies,
    movieDetails: state.movieDetails,
    // idCity: state.idCity
});

const mapDispathToProps = {
    setMovies: actions.setMovies,
      setMovieDetails: actions.setMovieDetails
};

export default connect(
    mapStateToProps,
    mapDispathToProps
)(MovieInfoContainer);
