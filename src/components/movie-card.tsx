import { FormattedMovie } from '../types/movie';
import './movie-card.css';

interface MovieCardProps {
  movie: FormattedMovie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className='Movie' key={movie.id}>
      <div className='Movie__Poster'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
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
