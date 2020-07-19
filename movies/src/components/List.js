import React, { Fragment } from 'react';

// const List = (props) => {
function List({ moviedata }) {

    return (
        <Fragment>
            <h1> Lista de peliculas</h1>
            <ul>{moviedata.map((movie, index) => {
                return (
                    <li key={index}>
                        {movie.original_title}
                        {/* <a href={movie.url}>URL</a> */}
                    </li>)
            })}
            </ul>
        </Fragment>
    );
}

export default List;