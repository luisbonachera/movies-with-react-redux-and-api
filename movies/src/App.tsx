import React from 'react';
import './App.css';
// Router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import MoviesListContainer from './containers/MoviesListContainer';
import MovieInfoContainer from './containers/MovieInfoContainer';
import AppNav from './components/AppNav';
import Search from './containers/Search';

interface IProps { };

const App: React.FC<IProps> = props => {
  return (
    <BrowserRouter>
      <div className="main">
        <div className='Home'>
          <div className='container-flex'>
            <AppNav />
            <Switch>
              <Route exact path='/' component={MoviesListContainer} />
              <Route exact path='/movie-info/:id_movie' component={MovieInfoContainer} />
              <Route exact path='/search' component={Search} />

              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
