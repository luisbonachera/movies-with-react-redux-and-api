import React from 'react';
import './App.css';
// Router
import { BrowserRouter, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';

import Home from './components/Home';
import MoviesListContainer from './containers/MoviesListContainer';
import MovieInfoContainer from './containers/MovieInfoContainer';
import AppNav from './components/AppNav';
import Search from './containers/Search';

// import Routes from './Routes';
// import { connect } from 'react-redux';

interface IProps { };

// interface IPropsGlobal {
//   movies: IMovie[];
//   movieDetails: IMovieDetails;
//   setMovies: (movies: IMovie[]) => void;
//   setMovieDetails: (movieDetails: IMovieDetails[]) => void;
// };

const App: React.FC<IProps> = props => {
  return (
    <BrowserRouter>
      {/* <div className="App"></div> */}
      <AppNav />

      <Switch>
        {/* <Route path='/' component={AppNav} /> */}
        <Route exact path='/' component={Home} />
        <Route exact path='/movies' component={MoviesListContainer} />
        <Route exact path='/movie-info/:id_movie' component={MovieInfoContainer} />
        <Route exact path='/search' component={Search} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

// const mapStateToProps = (state: IGlobalState) => ({
//   token: state.token,
//   // cities: state.cities,
//   // citiesDetails: state.citiesDetails,
//   idCity: state.idCity
// });

export default App;
// export default connect(
//   mapStateToProps
// )(App);

