import { useState } from 'react';
import Dropdown from './dropdown';

function FilterItem() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <li className='FilterBar__list__item'>
      <div className='FilterBar__list__item__wrapper'>
        <h3>Por pelicula</h3>
        <span>Que quieres ver</span>
      </div>
      <Dropdown />
    </li>
  );
}

export default FilterItem;
