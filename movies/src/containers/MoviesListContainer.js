import React, {Component } from 'react';
import axios from 'axios';
import List from '../components/List';
import AppNav from '../components/AppNav';

class MoviesListContainer extends Component {

    state ={
        movieData:[]
    }

    componentDidMount(){
        
        // axios.get('https://api.themoviedb.org/3/search/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&query=Spiderman')
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&language=en-US')

        .then(res =>{
            console.log(res);
            const movieData = res.data.results;
            // this.setState({movieData: movieData}); la primera es el state y la segunda es la const
            this.setState({movieData});

        }).catch(error=> {
            console.log(error);
        });
    }
    render ()
    {
        const { movieData } = this.state
        return (
            <>
            <AppNav />
            <List moviedata={movieData}/>
            </>
        );
    }
}

export default MoviesListContainer;