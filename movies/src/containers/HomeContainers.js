import React, { Component } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

//esto es con clases pero solo el inicio sin router ni nada
// class HomeContainer extends Component {
    
//     componentDidMount() {
//         const api_key = '735a3154d1f2d1edc582718bfa70cce9';
//         // axios.get('https://api.themoviedb.org/3/movie/550?api_key=735a3154d1f2d1edc582718bfa70cce9')
//         axios.get('https://api.themoviedb.org/3/search/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&query=Jack+Reacher')
//             .then(result => {
//                 console.log(result)
//                 // axios.get('https://api.themoviedb.org/3/search/movie?api_key=735a3154d1f2d1edc582718bfa70cce9&query=Jack+Reacher')
//                 //     .then(result => {
//                 //         console.log(result)
//                 //     })
//                 //     .catch(console.log)
//             })
//             .catch(console.log);
//     }
//     render() {
//         return (
//             <h1> Movie App</h1>
//         );
//     }
// }


const HomeContainer = () => { //cambiarlo por Home ?
    return (
                    <h1> Movie App</h1>
                );
}

export default HomeContainer;