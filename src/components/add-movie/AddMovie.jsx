import React from 'react';
import './AddMovie.css';
import { useState } from 'react';
import movies from '../../movies-database/movies';

const AddMovie = (props) => {
    const [form, setForm] = useState({
        title: '',
        year: '',
        director: '',
        duration: '',
        rate: '',
        genre: [],
    });

    const AddMovieHandler = (e) => {
        e.preventDefault();
        movies.push(form);
        props.closeMovieModal();
    };
    return (
        <div className="add-modal">
            <div className="add-modal-content">
                <span className="close" onClick={props.closeMovieModal}>
                    &times;
                </span>
                <form className="add-movie" onSubmit={AddMovieHandler}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={form.title}
                        onChange={(e) =>
                            setForm({ ...form, title: e.target.value })
                        }
                    />

                    <input
                        type="number"
                        placeholder="Release year"
                        value={form.year}
                        onChange={(e) =>
                            setForm({ ...form, year: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="Director"
                        value={form.director}
                        onChange={(e) =>
                            setForm({ ...form, director: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="Duration"
                        value={form.duration}
                        onChange={(e) =>
                            setForm({ ...form, duration: e.target.value })
                        }
                    />
                    <input
                        type="number"
                        min="0"
                        max="10"
                        step="0.1"
                        placeholder="Rate"
                        value={form.rate}
                        onChange={(e) =>
                            setForm({ ...form, rate: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="Genre"
                        value={form.genre[0]}
                        onChange={(e) =>
                            setForm({ ...form, genre: [e.target.value] })
                        }
                    />
                    <button>Add Movie</button>
                </form>
            </div>
        </div>
    );
};

export default AddMovie;
