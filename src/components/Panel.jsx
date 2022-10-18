

import { useContext } from "react";
import MovieContext from "../context/MovieContext";

import trending from '../assets/icons/trending.svg'
import estrenos from '../assets/icons/estrenos.svg'
import proximamente from '../assets/icons/proximamente.svg'
import masVotadas from '../assets/icons/mas-votadas.svg'

const Panel = () => {
  const {
    setTypeQuery,
    header,
    fetchMoviesByQueryType,
    page
  } = useContext(MovieContext);

  return (
    <div className="menu">
      <div className="menu__container">
        <button
          onClick={() => setTypeQuery('popular')}
          className={header === "Tendencias" ? "active" : null}
        >
          <img src={trending} width="20" height="20" />
          <span>Tendencias</span>
        </button>

        <button
          onClick={() => setTypeQuery('now_playing')}
          className={header === "Estrenos" ? "active" : null}
        >
          <img src={estrenos} width="20" height="20" />
          <span>Estrenos</span>
        </button>

        <button
          onClick={() => setTypeQuery('top_rated')}
          className={header === "Más votadas" ? "active" : null}
        >
          <img src={masVotadas} width="20" height="20" />
          <span>Más votados</span>
        </button>

        <button
          onClick={() => setTypeQuery('upcoming')}
          className={header === "Próximamente" ? "active" : null}
        >
          <img src={proximamente} width="20" height="20" />
          <span>Próximos estrenos</span>
        </button>
      </div>

    </div>
  );
};

export default Panel;
