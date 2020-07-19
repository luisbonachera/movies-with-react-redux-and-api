import React, { Component } from 'react';

class MovieInfoContainer extends Component {

    render() {
        const { match } = this.props;
        return (
            <>
                <h1> MovieInfo</h1>
                <p>ID: {match.params.movieIndex}</p>
            </>
        );
    }
}

export default MovieInfoContainer;