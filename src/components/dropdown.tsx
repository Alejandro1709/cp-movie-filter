import useMovies from '../hooks/useMovies';
import DropdownList from './dropdown-list';
import './dropdown.css';

function Dropdown() {
  const { movies } = useMovies();

  return (
    <div className='Dropdown'>
      <DropdownList items={movies} />
    </div>
  );
}

export default Dropdown;
