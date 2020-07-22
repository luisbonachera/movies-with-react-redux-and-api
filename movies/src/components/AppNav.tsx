import React from 'react';
import { IMovie } from '../interfaces/interfaceIMovie';
import { IGlobalState } from '../reducers/reducers';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

interface IProps { };

interface IPropsGlobal {
    movies: IMovie[];
    setMovies: (movies: IMovie[]) => void;
    setIsHiddenSearch: (isHiddenSearch: boolean) => void
}

const AppNav: React.FC<IProps & IPropsGlobal> = props => {

    const [isHiddenSearch, setIsHiddenSearch] = React.useState<boolean>(true);

    const hiddenSearch = () => {
        props.setIsHiddenSearch(!isHiddenSearch);
        setIsHiddenSearch(!isHiddenSearch)
    }

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-expand-xl navbar-dark bg-dark fixed-top'>
                <div className='container'>
                    <a className='navbar-brand container-title-navbar' href='/'>
                        <img src={process.env.PUBLIC_URL + '/images/movie-icon.png'} width='80' alt='icono de pelicula' />
                        Movies App
                    </a>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarResponsive'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <a className='nav-link icon-container-navbar' href='/'><i className='fas fa-home'></i> Inicio</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link con-container-navbar' href='/#premiere'><i className='fas fa-ticket-alt'></i> Estrenos</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link con-container-navbar' href='/#trend'><i className='fas fa-medal'></i> Más populares</a>
                            </li>
                            <li className='nav-item'>
                                <button className="button-transparent" onClick={hiddenSearch}>
                                    <a className='nav-link con-container-navbar' href='/#'><i className='fas fa-search'></i> Buscar</a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

const mapStateToProps = (state: IGlobalState) => ({
    movies: state.movies,
    isHiddenSearched: state.isHiddenSearched,
});

const mapDispathToProps = {
    setMovies: actions.setMovies,
    setIsHiddenSearch: actions.setIsHiddenSearched
};

export default connect(
    mapStateToProps,
    mapDispathToProps
)(AppNav);