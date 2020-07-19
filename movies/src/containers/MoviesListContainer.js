import React, {Component, Fragment} from 'react';
import axios from 'axios';
import List from '../components/List';
import {AppBar, Typography, Toolbar} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class MoviesListContainer extends Component {

    state ={
        movieData:[]
    }

    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&query=Jack+Reacher')
        .then(res =>{
            console.log(res);
            const movieData = res.data.results
            // this.setState({movieData: movieData}); la primera es el state y la segunda es la const
            this.setState({movieData});

        }).catch(error=> {
            console.log(error);
        });
    }
    render ()
    {
        const { classes } = this.props;
        const { movieData } = this.state
        return (
            <>
            <AppBar className={classes.NavColor}position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" component="p">
                        MovieApp
                    </Typography>
                </Toolbar>
            </AppBar>
            <List moviedata={movieData}/>
            </>
        );
    }
}

export default withStyles({
    NavColor:{
        backgroundColor: '#EF5350'
    }
}) (MoviesListContainer);