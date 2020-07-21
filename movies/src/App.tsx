import React from 'react';
import './App.css';
// Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import MoviesListContainer from './containers/MoviesListContainer';
import MovieInfoContainer from './containers/MovieInfoContainer';

// import Routes from './Routes';
// import { connect } from 'react-redux';

interface IProps { };

const App: React.FC<IProps> = props => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movies' component={MoviesListContainer} />
          <Route exact path='/movie-info/:movieIndex/:movieTitle' component={MovieInfoContainer} />
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

