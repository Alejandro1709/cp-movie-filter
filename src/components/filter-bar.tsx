import useMovies from '../hooks/useMovies';
import FilterItem from './filter-item';
import { cities } from '../data';
import './filter-bar.css';

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
