import type Movie from '../types/movie';
import './movies-list.css';

type MoviesListProps = {
  movies: Movie[];
};

function MoviesList({ movies }: MoviesListProps) {
  return (
    <section className='MovieList'>
      {movies
        ? movies.map((movie) => (
            <article className='MovieList__Movie' key={movie.id}>
              <div className='MovieList__Movie__Poster'>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  draggable={false}
                />
              </div>
              <div className='MovieList__Movie__Details'>
                <h2>{movie.title}</h2>
                {/* <p>
              {movie.genres.join(',')}, {movie.duration},{' '}
              {movie.restriction}.
            </p> */}
              </div>
            </article>
          ))
        : null}
    </section>
  );
}

export default MoviesList;
