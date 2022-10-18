
import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import { Link } from 'react-router-dom';
//importamos iconos
import logo from '../assets/ticket.svg';
import Search from './Search';

import favIconOff from '../assets/icons/favorite_off.svg';
import favIconOn from '../assets/icons/favorite_black.svg';


export const GlobalHeader = () => {

  const {
    favourites

  } = useContext(MovieContext);



  return (
    <header className="app-header">
      <div className='app-header__container'>
        <div className="app-header__container-left">
          <Link to="/" className="logo">
            <span className="logo-name">Titín</span>
            <img src={logo} alt="logo" width="200" height="200" />
            <span className="logo-name">Films</span>
          </Link>
        </div>
        <div className='app-header__container-right'>
          <div className="header-fav">
          <Link className='header-fav-btn' to="/favoritos">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"  className={favourites.length > 0 ? 'fav-icon' : 'fav-icon off'}><path d="M0 0h24v24H0V0z" fill="none" stroke="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              {favourites.length > 0 && <span className='header-fav-label'>{favourites.length}</span>}
            </Link>
          </div>
            <Search />
          

        </div>
      </div>


    </header>
  )
}
