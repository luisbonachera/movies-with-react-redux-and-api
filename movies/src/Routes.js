import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import MoviesListContainer from './containers/MoviesListContainer';
import MovieInfoContainer from './containers/MovieInfoContainer';

const Routes = () => {
    return (

        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/movies' component={MoviesListContainer}/>
            <Route exact path='/movie-info/:movieIndex' component={MovieInfoContainer}/>
        </Switch>
    )
}

export default Routes;