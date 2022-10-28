import DropdownList from './dropdown-list';
import './dropdown.css';

interface DropdownProps {
  items: any[];
}

function Dropdown({ items }: DropdownProps) {
  return (
    <div className='Dropdown'>
      <DropdownList items={items} />
    </div>
  );
}

export default Dropdown;
