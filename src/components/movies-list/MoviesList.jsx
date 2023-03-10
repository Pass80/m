import React, { useState } from 'react';
import './MoviesList.css';
import movies from '../../movies-database/movies';
import MovieCard from '../movie-card/MovieCard';
import SearchModal from '../search-modal/SearchModal';
import AddMovie from '../add-movie/AddMovie';

const MoviesList = () => {
    const [sort, setSort] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showMovieModal, setShowMovieModal] = useState(false);

    const sortYearAscending = (array) => {
        setSort('year asc');
        array.sort((a, b) => a.year - b.year);
    };

    const sortYearDescending = (array) => {
        setSort('year desc');
        array.sort((a, b) => b.year - a.year);
    };

    const sortAtoZ = (array) => {
        setSort('title asc');
        array.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
    };

    const sortZtoA = (array) => {
        setSort('title desc');
        array.sort((a, b) => {
            if (a.title < b.title) {
                return 1;
            }
            if (a.title > b.title) {
                return -1;
            }
            return 0;
        });
    };

    const sortRate = (array) => {
        setSort('best rate');
        array.sort((a, b) => b.rate - a.rate);
    };

    const toggleSearchModal = () => {
        setShowModal(!showModal);
    };
    const toggleMovieModal = () => {
        setShowMovieModal(!showMovieModal);
    };
    return (
        <section>
            {showMovieModal && <AddMovie closeMovieModal={toggleMovieModal} />}
            {showModal && <SearchModal closeModal={toggleSearchModal} />}
            <article className="sorting">
                <button onClick={() => sortYearAscending(movies)}>
                    Sort by Date Ascending
                </button>
                <button onClick={() => sortYearDescending(movies)}>
                    Sort by Date Descending
                </button>
                <button onClick={() => sortRate(movies)}>Best Rate</button>
                <button onClick={() => sortAtoZ(movies)}>A-Z</button>
                <button onClick={() => sortZtoA(movies)}>Z-A</button>
                <button onClick={() => toggleSearchModal()}>Search</button>
                <button onClick={() => toggleMovieModal()}>Add a movie</button>
            </article>
            <article className="movies-container">
                {movies.map((movie, i) => {
                    return (
                        <MovieCard
                            key={i}
                            title={movie.title}
                            year={movie.year}
                            director={movie.director}
                            duration={movie.duration}
                            genre={movie.genre}
                            rate={movie.rate}
                        />
                    );
                })}
            </article>
        </section>
    );
};

export default MoviesList;
