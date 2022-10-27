import React, { createContext } from 'react';
import useMovies from '../hooks/useMovies';

export const MovieContext = createContext({});

interface MovieProviderProps {
  children: React.ReactNode;
}

function MovieProvider({ children }: MovieProviderProps) {
  const { movies, setMovies } = useMovies();

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export { MovieProvider };
