

import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import {  IMAGE_API_M, IMAGE_API_S, IMAGE_API_O } from '../services/movieServices';
import MovieContext from "../context/MovieContext";

//cargamos las imagenes
import volver from '../assets/icons/return.svg';
import favIcon from '../assets/icons/favorite_black.svg';
import descargaIcon from '../assets/icons/descarga.svg';
import noCover from '../assets/no-cover.png'
import { AddFavButton } from '../components/AddFavButton';

export const FilmScreen = ({ toggleFav }) => {


  const params = useParams();
  
  const { fetchMovieDetails, movieDetails, setMovieDetails } =  useContext(MovieContext);
  useEffect(() => {
    setMovieDetails(fetchMovieDetails(params.id));
  }, []);

  return (
    <>
      {!movieDetails ? <div className="spiner__container"><div className="spinner"></div></div> :
        <div className="film">
          <div className='film__bg'>
            {movieDetails.poster_path ? (
              // Tengo encuenta las películas que no tienen poster y coloco una imagen
              <img src={IMAGE_API_S + movieDetails.poster_path} alt={movieDetails.title} className="img-bg" width="360" height="540" />
            ) : (
              <img src={noCover} alt={movieDetails.title} className="img-bg" width="360" height="540" />
            )}          
            </div>
          <div className="film__container">
            <div className="film__container-left">
            <div className="film__container-left_header mobile">
                <span className='averaje'>{parseInt(movieDetails.vote_average)}<small className="averaje-small"> / {movieDetails.vote_count} votos</small></span>
                <div className="film__container-right_header-icons">
                  <Link to="/" >
                    <img src={volver} alt="" width="50px" />
                  </Link>
                  <AddFavButton movie={movieDetails} id={movieDetails.id}/>
                </div>
              </div>
              <div className="film-image">
                {movieDetails.poster_path ? (
                  // Tengo encuenta las películas que no tienen poster y coloco una imagen
                  <img src={IMAGE_API_M + movieDetails.poster_path} alt={movieDetails.title} className="img-item" width="360" height="540" />
                ) : (
                  <img src={noCover} alt={movieDetails.title} className="img-item" width="360" height="540" />
                )}
              </div>
            </div>
            <div className="film__container-right">
              <div className="film__container-right_header screen">
                <span className='averaje'>{parseInt(movieDetails.vote_average)}<small className="averaje-small"> / {movieDetails.vote_count} votos</small></span>
                <div className="film__container-right_header-icons">
                  <Link to="/" >
                    <img src={volver} alt="" width="50px" />
                  </Link>
                  <AddFavButton movie={movieDetails} id={movieDetails.id}/>
                </div>
              </div>

              <h1 className='title'>{movieDetails.title}</h1>
              <p className="original_title"><em>{movieDetails.original_title}</em></p>
              <p className='release'>{movieDetails.overview}</p>
              {movieDetails.release_date &&
                <p className='estreno'><em>Fecha de estreno: {movieDetails.release_date} </em></p>
              }
              <div>
                {movieDetails.poster_path &&
                  <a
                    href={IMAGE_API_O + movieDetails.poster_path}
                    className="btn-descarga"
                    target="_blanc"
                    download={`Descargar poster de ${movieDetails.title}`}>
                    <img src={descargaIcon} alt={`Descargar poster de ${movieDetails.title}`} className="dwl-icon" width="30" height="30" />
                    <span>Descargar póster</span>
                  </a>
                }
              </div>
            </div>
          </div>
          <div className='film-footer'>
          {movieDetails.genres && 
          <div>
            <h4>Film genres</h4>
            <ul>
               {movieDetails.genres.map((genre) => (
                <li key={genre.id + genre.name}><span>{genre.name}</span></li>
              ))} 
            </ul>
          </div>}
          {movieDetails.production_companies &&
          <div>
            <h4>Production companies</h4>
            <ul>
              {movieDetails.production_companies.map((company) => (
                <li key={company.id + company.name}><span>{company.name}</span></li>
              ))} 
            </ul>
          </div>}
          {movieDetails.production_countries &&
          <div>
            <h4>Production countries</h4>
            <ul>
               {movieDetails.production_countries.map((prod) => (
                <li key={prod.id + prod.name}><span>{prod.name}</span></li>
              ))} 
            </ul>
          </div>}
          </div>
        </div>
      }
    </>
  )
}
