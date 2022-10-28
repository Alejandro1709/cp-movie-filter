import { useState } from 'react';
import Dropdown from './dropdown';
import './filter-bar.css';

function FilterBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className='FilterBar'>
      <ul className='FilterBar__list'>
        <li className='FilterBar__list__item'>
          <h3>Por pelicula</h3>
          <span>Que quieres ver</span>
        </li>
        {isDropdownOpen ? <Dropdown /> : null}
        <li className='FilterBar__list__item'>
          <h3>Por ciudad</h3>
          <span>Donde estas?</span>
        </li>
        <li className='FilterBar__list__item'>
          <h3>Por cine</h3>
          <span>Elige tu Cineplanet</span>
        </li>
        <li className='FilterBar__list__item'>
          <h3>Por fecha</h3>
          <span>Elige un dia</span>
        </li>
      </ul>
      <button>Apply</button>
    </div>
  );
}

export default FilterBar;
