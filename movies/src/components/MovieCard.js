import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function MovieCard({ title, classes, image, to }) {
    return (
        <Card className={classes.item}>
            <CardMedia className={classes.media} image={image} />
            <CardContent>
                {/* to="https://api.themoviedb.org/3/movie/{movie_id}?api_key=557 */}
                <Link to={to}><Typography component="p" variant="h6" color='textPrimary'>{title}</Typography></Link>
            </CardContent>
        </Card>
    );
}

export default withStyles({
    item: {
        minWidth: "300px",
        textAlign: "center",
        // boxSizing: "border-box",
        margin: "2em"
    },
    media: {
        minHeight: "250px"
    }
})(MovieCard);