import React from "react";
import { FilmItem } from "../components/FilmItem";


export const HomeScreen = ({ loading, favArray, toggleFav, movies, searchTerm }) => {

  return (

    <>

      <div className="header-title">
        <div className="header-title__container">
          <div className="header-title__container-left">
            <h1>Busqueda {searchTerm}</h1>
          </div>
          <div className="header-title__container-right"></div>
        </div>
      </div>

      <div className='list'>

        <div className="list__container">

          {loading ? <div className="spiner__container"><div className="spinner"></div></div>
            :
            (movies && movies.length > 0 ?
              movies.map((movie) => <FilmItem favArray={favArray} toggleFav={toggleFav} key={movie.id} {...movie} />)
              :
              <div className="spiner__container "><p>No existen películas con ese término de búsqueda <br /> inténtalo con otro... </p></div>)
          }


        </div>
      </div>

    </>
  )
}
