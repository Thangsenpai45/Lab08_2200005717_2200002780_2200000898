import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { moviesData } from '../../data/moviesData';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="container">
        <h2>Danh Sách Phim Nổi Bật</h2>
        <div className="movies-grid">
          {moviesData.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
