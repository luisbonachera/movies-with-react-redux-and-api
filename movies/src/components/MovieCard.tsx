import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

interface IProps {
    to: string;
    key: number;
    title: string;
    image: string;
    vote_average: number;
};

const MovieCard: React.FC<IProps> = props => {
    return (
        <div className="col-xs-6 col-sm-4 col-lg-3 col-xl-3 float-left text-center movierow" >
            <Link to={props.to}>
                <div className="item">
                    <span className="notify-badge">{props.vote_average}</span>
                </div>
                <img className="img-thumbnail thumb" alt="poster" src={props.image} key={props.key} />
                <h4 className="title-movie"> {props.title}</h4>
            </Link>
        </div>
    );
}

export default MovieCard;