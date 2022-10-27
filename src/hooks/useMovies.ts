import { useEffect, useState } from 'react';
import { fetchMovieGenres, fetchMovies } from '../services/movies';
import type Genre from '../types/genre';
import { type FormattedMovie } from '../types/movie';
import { formatMovies } from '../utils/movies';

export default function useMovies() {
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

  return { movies, setMovies };
}
