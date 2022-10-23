import './navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
      <nav role='navigation' className='Navbar__wrapper'>
        <h1>Logo</h1>
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>Theathers</li>
          <li>Account</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
