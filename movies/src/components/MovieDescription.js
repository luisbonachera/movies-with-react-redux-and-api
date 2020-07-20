import React from 'react';
import MovieCard from './MovieCard';

import { Paper, Grid, Typography, withStyles } from '@material-ui/core';

function MovieDescription({ movieImage, title, description, classes }) {
    return (
        <Grid container className={classes.centerContainer}>
            <Grid item md={6}>
                <MovieCard image={movieImage} title={title} />
            </Grid>
            <Grid item md={6}>
                <div className={classes.descriptionContainer}>
                    <Paper className={classes.descriptionBox}>
                        <Typography variant='body1' component='p' className={classes.descriptionText}>
                            {description}
                        </Typography>
                    </Paper>
                </div>

            </Grid>
        </Grid>
    );
}

export default withStyles({
    centerContainer: {
        margin: '0 auto',
        width: '60% !important'
    },
    descriptionContainer: {
        margin: '2em',
    },
    descriptionBox: {
        padding: '2em',
        height: 'auto',
    },
    descriptionText: {
        fontSize: '1em',
        textAlign: 'justify',
        fontFamily: 'Verdana'
    }
})(MovieDescription);