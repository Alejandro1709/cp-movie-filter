import { useState } from 'react';
import Dropdown from './dropdown';
interface FilterItemProps {
  title: string;
  description: string;
}

function FilterItem({
  title = 'Title',
  description = 'Description',
}: FilterItemProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <li
      className='FilterBar__list__item'
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <div className='FilterBar__list__item__wrapper'>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
      {isDropdownOpen ? <Dropdown /> : null}
    </li>
  );
}

export default FilterItem;
