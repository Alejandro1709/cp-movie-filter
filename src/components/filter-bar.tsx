import FilterItem from './filter-item';
import './filter-bar.css';

function FilterBar() {
  return (
    <div className='FilterBar'>
      <ul className='FilterBar__list'>
        <FilterItem title='Por pelicula' description='Que quieres ver?' />
        <FilterItem title='Por ciudad' description='Donde estas?' />
        <FilterItem title='Por cine' description='Elige tu Cineplanet' />
        <FilterItem title='Por fecha' description='Elige un dia' />
      </ul>
      <button>Apply</button>
    </div>
  );
}

export default FilterBar;
