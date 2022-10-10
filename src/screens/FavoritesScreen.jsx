import { FilmItem } from "../components/FilmItem";
//importamos imagenes
import noFoundImg from '../assets/bg.svg'


export const FavoritesScreen = ({ loading, toggleFav, favArray }) => {
  return (
    <>
      <div className="header-title">
        <div className="header-title__container">
          <div className="header-title__container-left"><h1>{favArray.length} Favorito{(favArray.length > 1) && ("s") || (favArray.length === 0) && ("s")}</h1></div>
          <div className="header-title__container-right"></div>
        </div>
      </div>
      <div className='list'>
        <div className="list__container favoritos">
          {loading ? <div className="spiner__container"><div className="spinner"></div></div>
            :
            (favArray.length === 0 ?
              <div className="no-list__container">
                <div className="no-list__container-bg"><img src={noFoundImg} alt="Sigue buscando" width="100%" height="auto" /></div>
                <div className="spiner__container ">
                  <p>Aun no has añadido ninguna película a FAVORITOS...<br /> Puedes pulsar sobre los CORAZONES para añadirlas. </p>
                </div>
              </div>
              : favArray.map(fav => (
                <FilmItem toggleFav={toggleFav} key={fav.id} {...fav} />
              )))
          }
        </div>
      </div>
    </>
  )
}
