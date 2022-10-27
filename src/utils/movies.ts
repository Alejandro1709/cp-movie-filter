import { type FormattedMovie } from '../types/movie';
import type Movie from '../types/movie';
import type Genre from '../types/genre';

export const formatMovies = (
  movies: Movie[],
  genres: any
): FormattedMovie[] => {
  return movies.map((movie) => formatMovie(movie, genres));
};

const extractGenresFromMovie = (movieGenres: number[], allGenres: any) => {
  let output: string[] = [];

  for (let movieGenre of movieGenres) {
    output.push(allGenres[movieGenre]);
  }
  return output;
};

const formatMovie = (movie: Movie, genres: any): FormattedMovie => {
  const { id, title, poster_path, genre_ids } = movie;

  return {
    id,
    title,
    poster_path: `https://image.tmdb.org/t/p/w500/${poster_path}`,
    genres: extractGenresFromMovie(genre_ids, genres),
  };
};
