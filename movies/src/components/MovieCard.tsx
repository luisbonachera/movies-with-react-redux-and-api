import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography, Badge } from '@material-ui/core';
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
        // <Card className={classes.item}>
        //     <CardMedia className={classes.media} image={image} />
        //     <CardContent>
        //         {/* to="https://api.themoviedb.org/3/movie/{movie_id}?api_key=557 */}
        //         <Link to={to}><Typography component="p" variant="h6" color='textPrimary'>{title}</Typography></Link>
        //     </CardContent>
        // </Card>
        <div className="col-xs-6 col-sm-4 col-lg-3 col-xl-2 float-left text-center movierow" >
            <Link to={props.to}>
                <div className="item">
                    <span className="notify-badge">{props.vote_average}</span>
                    {/* <Badge className="notifications">{props.vote_average}</Badge> */}
                    {/* <img src="/images/pelota-tenis.png" alt="" width="35px" height="35px"> */}
                        {/* <span className="badge badge-primary"></span> */}
                    {/* </img> */}
                </div>
                <img className="img-thumbnail thumb" alt="poster" src={props.image} key={props.key} />
                <h5 className="title-movie"> {props.title}</h5>
            </Link>
        </div>
    );
}

// export default withStyles({
//     item: {
//         minWidth: "350px",
//         textAlign: "center",
//         // boxSizing: "border-box",
//         margin: "2em",
//         paddin: '1em'
//     },
//     media: {
//         minHeight: "350px",
//         // minHeight: "400px",
//         // height: "80%",
//         // width: "100%"
//     }
// })(MovieCard);

export default MovieCard;