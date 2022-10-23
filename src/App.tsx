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
          <article className='MovieList__Movie'>
            <div className='MovieList__Movie__Poster'>
              <img
                src='https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001367?referenceScheme=HeadOffice&allowPlaceHolder=true'
                alt='Movie Poster'
              />
            </div>
            <div className='MovieList__Movie__Details'>
              <h2>Black Adam</h2>
              <p>Acción, 2h 10min, +14.</p>
            </div>
          </article>
          <article className='MovieList__Movie'>
            <div className='MovieList__Movie__Poster'>
              <img
                src='https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001367?referenceScheme=HeadOffice&allowPlaceHolder=true'
                alt='Movie Poster'
              />
            </div>
            <div className='MovieList__Movie__Details'>
              <h2>Black Adam</h2>
              <p>Acción, 2h 10min, +14.</p>
            </div>
          </article>
          <article className='MovieList__Movie'>
            <div className='MovieList__Movie__Poster'>
              <img
                src='https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001367?referenceScheme=HeadOffice&allowPlaceHolder=true'
                alt='Movie Poster'
              />
            </div>
            <div className='MovieList__Movie__Details'>
              <h2>Black Adam</h2>
              <p>Acción, 2h 10min, +14.</p>
            </div>
          </article>
          <article className='MovieList__Movie'>
            <div className='MovieList__Movie__Poster'>
              <img
                src='https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001367?referenceScheme=HeadOffice&allowPlaceHolder=true'
                alt='Movie Poster'
              />
            </div>
            <div className='MovieList__Movie__Details'>
              <h2>Black Adam</h2>
              <p>Acción, 2h 10min, +14.</p>
            </div>
          </article>
          <article className='MovieList__Movie'>
            <div className='MovieList__Movie__Poster'>
              <img
                src='https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001367?referenceScheme=HeadOffice&allowPlaceHolder=true'
                alt='Movie Poster'
              />
            </div>
            <div className='MovieList__Movie__Details'>
              <h2>Black Adam</h2>
              <p>Acción, 2h 10min, +14.</p>
            </div>
          </article>
          <article className='MovieList__Movie'>
            <div className='MovieList__Movie__Poster'>
              <img
                src='https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001367?referenceScheme=HeadOffice&allowPlaceHolder=true'
                alt='Movie Poster'
              />
            </div>
            <div className='MovieList__Movie__Details'>
              <h2>Black Adam</h2>
              <p>Acción, 2h 10min, +14.</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
