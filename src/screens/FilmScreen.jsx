

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getOneFilmById, IMAGE_API_M, IMAGE_API_S } from "../services/movieServices";

//cargamos las imagenes
import volver from '../assets/icons/return.svg';
import favIcon from '../assets/icons/favorite_black.svg';
import noCover from '../assets/no-cover.png'

export const FilmScreen = ({ toggleFav }) => {

  const [filmDetails, setFilmDetails] = useState(null)
  const params = useParams();
  // con useParams obtenemos los detalles  de la pélicula por su id
  const getFilmDetailsFromService = async () => {
    const result = await getOneFilmById(params.id)
    setFilmDetails(result)
  }

  useEffect(() => {
    getFilmDetailsFromService()
  }, [])

  return (
    <>
      {!filmDetails ? <div className="spiner__container"><div className="spinner"></div></div> :
        <div className="film">
          <div className='film__bg'>
            {filmDetails.poster_path ? (
              // Tengo encuenta las películas que no tienen poster y coloco una imagen
              <img src={IMAGE_API_S + filmDetails.poster_path} alt={filmDetails.title} className="img-bg" width="360" height="540" />
            ) : (
              <img src={noCover} alt={filmDetails.title} className="img-bg" width="360" height="540" />
            )}          </div>
          <div className="film__container">
            <div className="film__container-left">
              <div className="film-image">
                {filmDetails.poster_path ? (
                  // Tengo encuenta las películas que no tienen poster y coloco una imagen
                  <img src={IMAGE_API_M + filmDetails.poster_path} alt={filmDetails.title} className="img-item" width="360" height="540" />
                ) : (
                  <img src={noCover} alt={filmDetails.title} className="img-item" width="360" height="540" />
                )}
              </div>
            </div>
            <div className="film__container-right">
              <div className="film__container-right_header">
                <span className='averaje'>{parseInt(filmDetails.vote_average)}<small className="averaje-small"> / {filmDetails.vote_count} votos</small></span>
                <button className='film-fav-btn' onClick={() => toggleFav(filmDetails.id)}>
                  <img src={favIcon} className="fav-icon" alt="Añadir a favoritos" width="40" height="40" />
                </button>
              </div>

              <h1 className='title'>{filmDetails.title}</h1>
              <p className="original_title"><em>{filmDetails.original_title}</em></p>
              <p className='release'>{filmDetails.overview}</p>
              <p className='resume'>{filmDetails.release_date} </p>
              <p className='resume'>
                <Link to="/" ><img src={volver} alt="" width="50px" /></Link> </p>
            </div>
          </div>
        </div>
      }
    </>
  )
}
