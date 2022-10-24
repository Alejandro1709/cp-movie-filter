import Movie from '../types/movie';

export const formatMovies = (movies: Movie[]): Movie[] => {
  return movies.map((movie) => formatMovie(movie));
};

const getMovieGenres = () => {
  fetch(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=64cef69b34bfdebbbba77a32ab7f2ee2&language=en-US'
  )
    .then((res) => res.json())
    .then((data) => console.log(data.genres));
  return ['s'];
};

getMovieGenres();

const formatMovie = (movie: Movie): Movie => {
  const { id, title, poster_path } = movie;
  return {
    id,
    title,
    poster_path: `https://image.tmdb.org/t/p/w500/${poster_path}`,
    genres: [''],
  };
};
