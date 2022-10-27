import FilterBar from './components/filter-bar';
import Navbar from './components/navbar';
import Container from './components/container';
import MoviesList from './components/movies-list';
import useMovies from './hooks/useMovies';
import './App.css';

function App() {
  const { movies, setMovies } = useMovies();

  return (
    <>
      <Navbar />
      <Container isMain={true}>
        <FilterBar />
        <MoviesList movies={movies} />
      </Container>
    </>
  );
}

export default App;
