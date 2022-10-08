import React, { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { IMAGE_API_S } from '../services/movieServices';

import favIcon from '../assets/icons/favorite_black.svg';
import noCover from '../assets/no-cover.png'


export const FilmItem = ({toggleFav, title, poster_path, overview, vote_average, id }) => {



  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate(`/pelicula/${id}`, { replace: true }), [navigate]);

  return (
    <div className="film-item">

      <div className="film-item__header">
        <span>{vote_average == 0 ? "" : vote_average} </span>
        <button className='film-item__header-fav-btn' onClick={()=>{toggleFav(id)}}>
          <img src={favIcon} className="fav-icon" alt="Añadir a favoritos" width="20" height="20" />
        </button>
      </div>
      <div className="film-item__container" onClick={handleOnClick}>
        <div className="film-item__container-image">
          {poster_path ? (
            <img src={IMAGE_API_S + poster_path} alt={title} className="img-item" />
          ) : (
            <img src={noCover} alt={title} className="img-item" />
          )}
        </div>
      </div>
      <div className="film-item__footer" onClick={handleOnClick}>
        <h3 className='film-item__footer-title'>{title} </h3>
<div className='film-item__footer-resume'>{overview}</div>
      </div>

    </div>

  )
}
