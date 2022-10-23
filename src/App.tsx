import { movies } from './data';
import './App.css';

function App() {
  return (
    <div className='App'>
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
      <main id='root' className='container'>
        <div className='FilterBar'>
          <ul className='FilterBar__list'>
            <li className='FilterBar__list__item'>
              <h3>Por pelicula</h3>
              <span>Que quieres ver</span>
            </li>
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
        <section className='MovieList'>
          {movies.map((movie) => (
            <article className='MovieList__Movie' key={movie.id}>
              <div className='MovieList__Movie__Poster'>
                <img src={movie.poster} alt={movie.title} draggable={false} />
              </div>
              <div className='MovieList__Movie__Details'>
                <h2>{movie.title}</h2>
                <p>
                  {movie.genres.join(',')}, {movie.duration},{' '}
                  {movie.restriction}.
                </p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
