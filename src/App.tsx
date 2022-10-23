import { movies } from './data';
import FilterBar from './components/filter-bar';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main className='container'>
        <FilterBar />
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
