import useMovies from '../hooks/useMovies';
import FilterItem from './filter-item';
import './filter-bar.css';

const cities = [
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
];

function FilterBar() {
  const { movies } = useMovies();
  return (
    <div className='FilterBar'>
      <ul className='FilterBar__list'>
        <FilterItem
          title='Por pelicula'
          description='Que quieres ver?'
          items={movies}
        />
        <FilterItem
          title='Por ciudad'
          description='Donde estas?'
          items={cities}
        />
        <FilterItem
          title='Por cine'
          description='Elige tu Cineplanet'
          items={movies}
        />
        <FilterItem
          title='Por fecha'
          description='Elige un dia'
          items={movies}
        />
      </ul>
      <button>Apply</button>
    </div>
  );
}

export default FilterBar;
