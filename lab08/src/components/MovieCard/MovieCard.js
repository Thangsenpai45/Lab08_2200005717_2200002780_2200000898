import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
  const { id, title, poster, year, genre, rating } = movie;
  
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`} className="movie-link">
        <div className="movie-poster">
          <img src={poster} alt={title} />
          <div className="movie-rating">⭐ {rating}</div>
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{title}</h3>
          <p className="movie-year">{year}</p>
          <p className="movie-genre">{genre}</p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
