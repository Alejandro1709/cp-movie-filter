import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DropdownProvider } from './context/dropdown-context';
import { MovieProvider } from './context/movie-context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MovieProvider>
      <DropdownProvider>
        <App />
      </DropdownProvider>
    </MovieProvider>
  </React.StrictMode>
);
