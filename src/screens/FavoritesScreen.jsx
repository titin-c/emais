
import { useContext } from 'react';
import MovieContext from "../context/MovieContext";
import MoviesList from '../components/MoviesList';
import Header from '../components/Header';


export const FavoritesScreen = ({ }) => {
  const {
    getFavourites,
    favourites

  } = useContext(MovieContext);

  getFavourites()
  return (
    <>
    <div className={ "header-title home-active" }>
        <div className="header-title__container">
          <div className="header-title__container-left">
          <h1 className="section-title">{favourites.length} <Header />{(favourites.length > 1 || favourites.length === 0) && ("s")}</h1>
          </div>
        </div>
      </div>
      <div className="list favoritos">
            < MoviesList />
      </div>
    </>
  )
}
