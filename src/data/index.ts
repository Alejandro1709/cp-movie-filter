import City from '../types/city';
import Movie from '../types/movie';

export const movies: Movie[] = [
  {
    id: 1,
    title: 'Black Adam',
    poster_path:
      'https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001367?referenceScheme=HeadOffice&allowPlaceHolder=true',
    genre_ids: [1],
    duration: '2h 10min',
    restriction: '+14',
  },
  {
    id: 2,
    title: 'HALLOWEEN: La Noche Final',
    poster_path:
      'https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001429?referenceScheme=HeadOffice&allowPlaceHolder=true',
    genre_ids: [1],
    duration: '1h 50min',
    restriction: '+14',
  },
  {
    id: 3,
    title: 'La Huérfana: El Origen',
    poster_path:
      'https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001433?referenceScheme=HeadOffice&allowPlaceHolder=true',
    genre_ids: [1],
    duration: '1h 40min',
    restriction: '+14',
  },
  {
    id: 4,
    title: 'Argentina, 1985',
    poster_path:
      'https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001504?referenceScheme=HeadOffice&allowPlaceHolder=true',
    genre_ids: [1],
    duration: '2h 40min',
    restriction: '+14',
  },
];

export const cities: City[] = [
  {
    id: 1,
    title: 'Lima',
  },
  {
    id: 2,
    title: 'Arequipa',
  },
  {
    id: 3,
    title: 'Trujillo',
  },
  {
    id: 4,
    title: 'Cusco',
  },
  {
    id: 5,
    title: 'Piura',
  },
  {
    id: 6,
    title: 'Tacna',
  },
  {
    id: 7,
    title: 'Iquitos',
  },
  {
    id: 8,
    title: 'Chiclayo',
  },
];
