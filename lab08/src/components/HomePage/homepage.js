// src/pages/HomePage.js
import React from 'react';

const movies = [
  {
    id: 1,
    title: "Inception",
    image: "https://bloganchoi.com/wp-content/uploads/2022/07/ke-hanh-phap-zero.jpg",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea."
  },
  {
    id: 2,
    title: "The Dark Knight",
    image: "https://cdn.tgdd.vn/Files/2021/06/02/1356902/danh-sach-nhung-vu-an-hay-nhat-cua-phim-tham-tu-lung-danh-conan-202106022129279404.jpg",
    description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into chaos."
  },
  {
    id: 3,
    title: "Interstellar",
    image: "https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a3980f529733211a1858c4ad19ba6ff839e9daa55f3911f964573608bbf6ba6f1990f/cn1-6777.jpg",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
];

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Danh sách phim</h2>
      <div style={styles.movieList}>
        {movies.map(movie => (
          <div key={movie.id} style={styles.movieCard}>
            <img src={movie.image} alt={movie.title} style={styles.movieImage} />
            <h3 style={styles.movieTitle}>{movie.title}</h3>
            <p style={styles.movieDescription}>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  movieList: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  movieCard: {
    width: '250px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  movieImage: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
  },
  movieTitle: {
    margin: '15px 0 10px 0',
  },
  movieDescription: {
    padding: '0 10px 20px 10px',
    fontSize: '14px',
    color: '#555',
  },
};

export default HomePage;
