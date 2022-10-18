import MovieContext from "../context/MovieContext";
import { useContext } from "react";

//cargamos imágenes 
import favIconOn from '../assets/icons/favorite_on.svg';
import favIconOff from '../assets/icons/favorite_off.svg';

export const AddFavButton = ({ movie }) => {

  const { addToFavourites, isFav } = useContext(MovieContext);

  return (
    <>
      <button className='film-item__header-fav-btn' onClick={() => addToFavourites(movie)}>
        <img src={isFav(movie.id) ? favIconOff : favIconOn} className="fav-icon" alt="Añadir a favoritos" width="20" height="20" />
      </button>
    </>
  )
}
