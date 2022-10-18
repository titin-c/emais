
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AddFavButton } from "./AddFavButton";
import noCover from '../assets/no-cover.png';

function Movie({ movie }) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      layout
      className="film-item"
    >
      <div className="film-item__header">
        <span>{movie.vote_average === 0 ? "" : movie.vote_average} </span>
        <AddFavButton movie={movie} />
      </div>
      <Link to={`/pelicula/${movie.id}`} >
      <div className="film-item__container" onClick={()=>{}}>
        <div className="film-item__container-image">
          {movie.poster_path ? (
            
            <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} className="img-item" />
            
          ) : (
            <img src={noCover} alt={movie.title} className="img-item" />
          )}
        </div>
      </div>
      <div className="film-item__footer" onClick={()=>{}}>
        <h3 className='film-item__footer-title'>{movie.title} </h3>
        {movie.overview && <div className='film-item__footer-resume'>{movie.overview}</div>}

      </div>
      </Link>



      {/* <AddFavButton movie={movie} />

      <Link to={`/movie/${movie.id}`} key={movie.id}>
        <div className="shadow"></div>
      </Link>
      {movie.poster_path !== null ? (
        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
      ) : (
        <img src={defaultImage} />
      )}
      <h2>{movie.title}</h2> */}
    </motion.div>
  );
}

export default Movie;
