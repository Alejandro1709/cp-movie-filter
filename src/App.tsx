import React, { Suspense } from 'react';
import FilterBar from './components/filter-bar';
import Navbar from './components/navbar';
import Container from './components/container';
import './App.css';

const LazyMovielist = React.lazy(() => import('./components/movies-list'));

function App() {
  return (
    <>
      <Navbar />
      <Container isMain={true}>
        <FilterBar />
        <Suspense fallback={<div>Loading...</div>}>
          <LazyMovielist />
        </Suspense>
      </Container>
    </>
  );
}

export default App;
