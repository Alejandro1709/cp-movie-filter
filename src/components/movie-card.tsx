import { useState } from 'react';
import { FormattedMovie } from '../types/movie';
import Placeholderimage from '../assets/contentLoading.png';
import './movie-card.css';

interface MovieCardProps {
  movie: FormattedMovie;
}

function MovieCard({ movie }: MovieCardProps) {
  const [poster, setPoster] = useState(Placeholderimage);

  function handleChange() {
    setPoster(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`);
  }

  return (
    <article className='Movie' key={movie.id}>
      <div className='Movie__Poster'>
        <img
          src={poster}
          alt={movie.title}
          loading='lazy'
          onLoad={handleChange}
          draggable={false}
        />
      </div>
      <div className='Movie__Details'>
        <h2>{movie.title}</h2>
        <p>{movie.genres.join(', ')}</p>
      </div>
    </article>
  );
}

export default MovieCard;
