import { FormattedMovie } from '../types/movie';
import DropdownItem from './dropdown-item';
import './dropdown-list.css';

interface DropdownListProps {
  items: FormattedMovie[];
}

function DropdownList({ items }: DropdownListProps) {
  function handleClick() {
    console.log('click');
  }

  return (
    <ul className='Dropdown__list'>
      {items.map((item) => (
        <DropdownItem key={item.id} onItemClick={handleClick}>
          {item.title}
        </DropdownItem>
      ))}
    </ul>
  );
}

export default DropdownList;
