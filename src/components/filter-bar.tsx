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
          title='By Movie'
          description='Pick a movie'
          items={movies}
        />
        <FilterItem title='By City' description='Pick a city' items={cities} />
        <FilterItem
          title='By Theater'
          description='Pick a theater'
          items={movies}
        />
        <FilterItem title='By Date' description='Pick a date' items={movies} />
      </ul>
      <button>Apply</button>
    </div>
  );
}

export default FilterBar;
