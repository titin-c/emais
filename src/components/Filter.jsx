import { useContext, useEffect, useState } from "react";
import MovieContext from "../context/MovieContext";

import filter from "../assets/icons/filter.svg"


const Filter = () => {
  const { setActiveGenre, activeGenre, setFiltered, movies, header,genres } =
    useContext(MovieContext);


  const [moreGenres, setMoreGenres] = useState(false);

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies);
    } else {
      
      const filtered = movies.filter((movie) =>
        movie.genre_ids.includes(activeGenre)
      );
      setFiltered(filtered);
      
    }
    
  }, [activeGenre, header]);
  
  return (
    <>
    <div className={moreGenres ? 'filter-container' : 'filter-container closed' }>
    <img src={filter} width="20" height="20" className="filter-icon" />
      <button
        className={activeGenre === 0 ? "active" : null}
        onClick={() => setActiveGenre(0)}
      >
        Todos los GÉNEROS
      </button>
      
      { 
        genres.map((genre) => (
          <button
            key={genre.id}
            className={activeGenre === genre.id ? "active" : null}
            onClick={() => setActiveGenre(genre.id)}
          >
            {genre.name}
          </button>
        )) }
      <button className="more" onClick={() => setMoreGenres(!moreGenres)}>
    {moreGenres ? <small>Ver menos</small> : '...'}
  </button>
    </div>
    
  </>
  );
};

export default Filter;
