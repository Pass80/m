import React, { useRef, useState } from 'react';
import './SearchModal.css';
import movies from '../../movies-database/movies';
import MovieCard from '../movie-card/MovieCard';

const SearchModal = (props) => {
    const [data, setData] = useState();
    const searchText = useRef();

    const searchHandler = (e) => {
        e.preventDefault();

        setData(
            movies.filter((movie) =>
                movie.title
                    .toLowerCase()
                    .includes(searchText.current.value.toLowerCase())
            )
        );
    };

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.closeModal}>
                    &times;
                </span>
                <form onSubmit={searchHandler} className="search-form">
                    <div>
                        <input
                            ref={searchText}
                            type="text"
                            className="text-search"
                            placeholder="Movie title"
                        />
                        <button>Search</button>
                    </div>
                </form>
                <div className="results-container">
                    {data?.map((movie, i) => (
                        <MovieCard
                            key={i}
                            title={movie.title}
                            year={movie.year}
                            director={movie.director}
                            duration={movie.duration}
                            genre={movie.genre}
                            rate={movie.rate}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
