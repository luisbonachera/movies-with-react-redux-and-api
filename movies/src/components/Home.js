import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={process.env.PUBLIC_URL + '/images/movie-icon.png'} width='400' alt='icono de pelicula' />
                <h1> Movie App</h1>
                <button> Ver Peliculas </button>
            </header>
        </div>
    );
}

export default Home;