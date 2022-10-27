import { FormattedMovie } from '../types/movie';
import MovieCard from './movie-card';
import './movies-list.css';

type MoviesListProps = {
  movies: FormattedMovie[];
};

function MoviesList({ movies }: MoviesListProps) {
  return (
    <section className='MovieList'>
      {movies
        ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        : null}
    </section>
  );
}

export default MoviesList;
