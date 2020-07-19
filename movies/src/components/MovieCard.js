import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

function MovieCard({ title, classes, image}){
    return(
        <Card className={classes.item}>
            <CardMedia className={classes.media} image={image}/>
            <CardContent>
                <Typography component="p" variant="h6">
                    {/* Nombre de la pelicula */}
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default withStyles({
    item:{
        minWidth: "300px",
        margin: "1em",
        textAlign: "center",
        boxSizing: "border-box"
    },
    media:{
        minHeight: "150px"
    }
})(MovieCard);