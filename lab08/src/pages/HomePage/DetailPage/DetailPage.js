import React from 'react';

const DetailPage = () => {
  const movie = {
    posterUrl: 'https://image.tmdb.org/t/p/w500/abcd1234.jpg',
    title: 'Avengers: Endgame',
    genre: ['Hành động', 'Phiêu lưu', 'Khoa học viễn tưởng'],
    releaseDate: '26/04/2019',
    rating: 8.4,
    description:
      'Sau sự kiện thảm họa Infinity War, các siêu anh hùng hợp lực để đảo ngược thảm kịch và đánh bại Thanos.',
  };

  return (
    <div style={styles.container}>
      <img src={movie.posterUrl} alt={movie.title} style={styles.poster} />
      <div style={styles.info}>
        <h1 style={styles.title}>{movie.title}</h1>
        <p><strong>Thể loại:</strong> {movie.genre.join(', ')}</p>
        <p><strong>Ngày phát hành:</strong> {movie.releaseDate}</p>
        <p><strong>Đánh giá:</strong> {movie.rating} / 10</p>
        <h3>Mô tả</h3>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: 20,
    gap: 20,
    maxWidth: 900,
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  poster: {
    width: 300,
    borderRadius: 8,
  },
  info: {
    flex: 1,
  },
  title: {
    marginBottom: 10,
  },
};

export default DetailPage;
