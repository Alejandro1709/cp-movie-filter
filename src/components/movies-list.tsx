import { useContext } from 'react';
import { MovieContext } from '../context/movie-context';
import { FormattedMovie } from '../types/movie';
import MovieCard from './movie-card';
import './movies-list.css';

interface MoviesContextType {
  movies: FormattedMovie[];
  setMovies: () => void;
}

function MoviesList() {
  const { movies } = useContext(MovieContext) as MoviesContextType;

  return (
    <section className='MovieList'>
      {movies
        ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        : null}
    </section>
  );
}

export default MoviesList;
