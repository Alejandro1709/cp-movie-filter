import './dropdown-item.css';

interface DropdownItemProps {
  onItemClick: () => void;
  children: React.ReactNode;
}

function DropdownItem({ onItemClick, children }: DropdownItemProps) {
  return (
    <li className='Dropdown__list__item' onClick={onItemClick}>
      {children}
    </li>
  );
}

export default DropdownItem;
