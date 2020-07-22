import React from 'react';
import { IMovieDetails } from '../interfaces/interfaceIMovieDetails';
import * as actions from '../actions/actions';
import { IGlobalState } from '../reducers/reducers';
import { connect } from 'react-redux';


interface IProps { }

interface IPropsGlobal {
    movieDetails: IMovieDetails;
    movieImageUrl: string;

}

const MovieDescription: React.FC<IProps & IPropsGlobal> = props => {

    return (
        <>
            <div className="container-fluid container-movies-details">
                <div className="col-xs-12 col-sm-3 col-md-4 col-lg-6 col-xl-6 float-left p-2 my-2 text-center">
                    <img className="poster" alt="poster" src={props.movieImageUrl} />
                </div>
                <div className="col-xs-12 col-sm-3 col-md-4 col-lg-6 col-xl-4 float-left p-8 my-4 text-left">
                    <h1 className="title-movie-details-h1"> {props.movieDetails.title ? props.movieDetails.title : props.movieDetails.original_title ? props.movieDetails.original_title : 'No tiene titulo'}</h1>
                    <div className="item">
                        <i className="fas fa-3x fa-star icon-star"></i>
                    </div>
                    <div className="item">
                        <span className="notify-badge notify-badge-details-1">{props.movieDetails.vote_average ? props.movieDetails.vote_average : 0}</span>
                    </div>
                    <div>
                        <span className="notify-badge notify-badge-details-2">{props.movieDetails.vote_count ? `${props.movieDetails.vote_count} votos` : 0}</span>
                    </div>
                    <h5 className="margin-boton-h5 runtime-movie">Duracion <b>{props.movieDetails.runtime ? `${props.movieDetails.runtime} minutos.` : 'No especificado'}</b></h5>
                    <h5 className="margin-boton-h5">{props.movieDetails.overview ? `(${props.movieDetails.overview})` : ''}</h5>
                    <h5 className="margin-boton-h5"> {props.movieDetails.adult ? ` Para menores de ${props.movieDetails.adult}.` : 'Para todos los publicos.'}</h5>
                    <h5 className="margin-boton-h5"><b>Release: </b>{props.movieDetails.data_release ? `(${props.movieDetails.data_release})` : 'No especificado'}</h5>
                    <h5 className="margin-boton-h5"><b>Popularidad: </b>{!props.movieDetails.popularity ? 'No especificado' : `Vista por ${props.movieDetails.popularity} personas.`}</h5>
                    <a className="enlace-Movie-homepage" href={props.movieDetails.homepage ? `${props.movieDetails.homepage}` : ''}>
                        {props.movieDetails.homepage ? props.movieDetails.homepage : 'No especificado'}
                    </a>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state: IGlobalState) => ({
    movies: state.movies,
    movieDetails: state.movieDetails,
});

const mapDispathToProps = {
    setMovies: actions.setMovies,
    setMovieDetails: actions.setMovieDetails
};

export default connect(
    mapStateToProps,
    mapDispathToProps
)(MovieDescription);