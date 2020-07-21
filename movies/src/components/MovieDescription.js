import React from 'react';
import MovieCard from './MovieCard';
// import { Link } from 'react-router-dom';


import { Paper, Grid, Typography, withStyles } from '@material-ui/core';

const MovieDescription = ({ movieImage, title, description, homepage, overview, classes }) => {

    // const [cities, setCities] = React.useState();

    // componentDidUpdate(prevProps, prevState) = {
    //     if (prevState.homepage !== this.state.homepage) {
    //       console.log('homepage state has changed.')
    //     }
    //     if(prevState.overview !== this.state.overview) {
    //         console.log('overview state has changed.')
    //       }
    //   }

    return (
        // <Grid container className={classes.centerContainer}>
        //     <Grid item md={6}>
        //         <MovieCard image={movieImage} title={title} />
        //     </Grid>
        //     <Grid item md={6}>
        //         <div className={classes.descriptionContainer}>
        //             <Paper className={classes.descriptionBox}>
        //                 <Typography variant='body1' component='p' className={classes.descriptionText}>
        //                     {description}
        //                 </Typography>
        //             </Paper>
        //         </div>

        //         <div className={classes.descriptionContainer}>
        //             <Paper className={classes.descriptionBox}>
        //                 <Typography variant='body1' component='p' className={classes.descriptionText}>
        //                     <a href={`${homepage}`} color='textPrimary'>
        //                         pagina oficial de la pelicula: {homepage}
        //                     </a>
        //                 </Typography>

        //             </Paper>
        //         </div>

        //         <div className={classes.descriptionContainer}>
        //             <Typography variant='body1' component='p' className={classes.descriptionText}>
        //                 Breve descripcion: {overview}
        //             </Typography>
        //         </div>

        //     </Grid>
        // </Grid>
        <div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 float-left p-2 my-2 text-center">
                <img className="poster" alt="poster" src={movieImage} />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-9 col-xl-9 float-left p-8 my-4 text-left">
                <h2> {title}</h2>
                <p>{description}</p>
                <p>Nota: {homepage}</p>
                <p>Resumen: {overview}</p>
                {/* <button onClick={() => this.saveFavs(movie)}>Agregar a favoritos</button> */}
            </div>
        </div>
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