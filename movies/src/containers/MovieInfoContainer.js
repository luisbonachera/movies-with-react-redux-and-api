import React, { Component } from 'react';
import MovieDescription from '../components/MovieDescription';
import AppNav from '../components/AppNav';

import axios from 'axios';

class MovieInfoContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieDataDetails: '',
            movieTitle: '',
            movieId: '',
        }
    };

    componentDidMount() {
        //peticion con axios
        const { match } = this.props;
        const movieTitle = match.params.movieTitle;
        const movieId = match.params.movieIndex;
        // https://api.themoviedb.org/3/movie/547016?api_key=735a3154d1f2d1edc582718bfa70cce9
        // https://api.themoviedb.org/3/movie/${match.params.movieIndex}?api_key=735a3154d1f2d1edc582718bfa70cce9
        const apiKey = "?api_key=735a3154d1f2d1edc582718bfa70cce9"
        const movieDescriptionURL = `${process.env.REACT_APP_MOVIES_BASE_URL}/movie/${movieId}${apiKey}`;

        axios.get(movieDescriptionURL)

            .then(res => {
                console.log(res);
                const movieDataDetails = res.data;
                // this.setState({movieDataDetails: movieDataDetails}); la primera es el state y la segunda es la const
                this.setState({
                    movieDataDetails,
                    movieTitle,
                    movieId
                });

            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        const { movieDataDetails, movieTitle } = this.state;
        console.log('movieDataDetails: ', movieDataDetails)
        // let url = "https://image.tmdb.org/t/p/original";
        // https://api.themoviedb.org/3/movie/547016?api_key=735a3154d1f2d1edc582718bfa70cce9
        // https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
        // let url = "https://api.themoviedb.org/3/movie";
        // let url = movieDataDetails ? `https://image.tmdb.org/t/p/original${movieDataDetails.backdrop_path}` : '';
        let url = movieDataDetails ? `${process.env.REACT_APP_MOVIES_IMAGE_URL}${movieDataDetails.backdrop_path}` : '';
        console.log(url)
        console.log(movieDataDetails.homepage)
        // const movieUrlImage = movieDataDetails.poster_path;
        // let apiKey = "?api_key=735a3154d1f2d1edc582718bfa70cce9"
        // console.log('url: ',url + movieUrlImage)
        return (
            <>
                <AppNav />
                <MovieDescription
                    movieImage={url? url : ''}
                    title={movieTitle}
                    description={"hola"}
                    homePage={movieDataDetails.homepage}
                    overview={movieDataDetails.overview}
                />
                {/* <h1> MovieInfo</h1>
                <p>ID: {match.params.movieIndex}</p> */}
            </>
        );
    }
}

export default MovieInfoContainer;