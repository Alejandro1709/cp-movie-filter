import FilterBar from './components/filter-bar';
import Navbar from './components/navbar';
import Container from './components/container';
import MoviesList from './components/movies-list';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Container isMain={true}>
        <FilterBar />
        <MoviesList />
      </Container>
    </>
  );
}

export default App;
