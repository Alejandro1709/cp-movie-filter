const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '64cef69b34bfdebbbba77a32ab7f2ee2';

const fetchMovies = () => {
  return fetch(
    `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
  ).then((res) => res.json());
};

export { fetchMovies };
