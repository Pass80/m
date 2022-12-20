import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
    return (
        <div className="card">
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <div className="genre">
                {props.genre.map((type, i) => (
                    <p key={i}>{type}</p>
                ))}
            </div>
        </div>
    );
};

export default MovieCard;
