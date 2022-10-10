import { FilmItem } from '../components/FilmItem';
//importamos imagenes
import noFoundImg from '../assets/bg.svg'

export const HomeScreen = ({ loading, favArray, toggleFav, movies, searchTerm }) => {

  return (

    <>

      <div className={searchTerm ? "header-title home-active" : "header-title home"}>
        <div className="header-title__container">
          <div className="header-title__container-left">

            <h1>Busqueda: {searchTerm}</h1>
          </div>
          <div className="header-title__container-right"></div>
        </div>
      </div>

      <div className='list'>

        <div className="list__container">
          {loading ? <div className="spiner__container"><div className="spinner"></div></div>
            :
            (movies && movies.length > 0 ?
              movies.map((movie) => <FilmItem favArray={favArray} toggleFav={toggleFav} key={movie.id}  {...movie} />)
              :
              <div className="no-list__container">
                <div className="no-list__container-bg"><img src={noFoundImg} alt="Sigue buscando"  width="100%" height="auto"/></div>
                <div className="spiner__container ">
                  <p>No hemos encontrado ninguna película, <br /> inténtalo con otro término de búsqueda... </p>
                </div>
              </div>)
          }


        </div>
      </div>

    </>
  )
}
