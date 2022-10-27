import { useState, useEffect } from 'react';
import { fetchMovieGenres, fetchMovies } from './services/movies';
import { formatMovies } from './utils/movies';
import FilterBar from './components/filter-bar';
import Navbar from './components/navbar';
import Container from './components/container';
import MoviesList from './components/movies-list';
import type Genre from './types/genre';
import { type FormattedMovie } from './types/movie';
import './App.css';

function App() {
  const [movies, setMovies] = useState<FormattedMovie[]>([]);

  const fetchAllMovies = async () => {
    const data = await fetchMovies();
    const genresData = await fetchMovieGenres();

    const genres: { genres?: Genre[] } | any = {};

    for (const genre of genresData.genres) {
      genres[genre.id] = genre.name;
    }

    const movies: FormattedMovie[] = formatMovies(data.results, genres);
    setMovies(movies);
  };

  useEffect(() => {
    fetchAllMovies();
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Container isMain={true}>
        <FilterBar />
        <MoviesList movies={movies} />
      </Container>
    </div>
  );
}

export default App;
