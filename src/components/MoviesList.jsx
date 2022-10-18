import React, { useContext, useEffect, useState } from "react";
import Movie from "./Movie";
import MovieContext from "../context/MovieContext";
import { Link, useNavigate } from "react-router-dom";

import noFoundImg from '../assets/bg.svg'


const MoviesList = () => {
  
  const navigate = useNavigate();
  const { filtered, fetchMoviesByQueryType, moviesData, typeQuery, isLoading, page, setPage } =
    useContext(MovieContext);
    useEffect(() => {
        fetchMoviesByQueryType(typeQuery, page);
      
    }, [page]);
    useEffect(() => {
      setPage(1);
      fetchMoviesByQueryType(typeQuery, page);
    
  }, [typeQuery]);

    
const uppage = ()=>{
  setPage (page + 1);

}
const downpage = ()=>{
  setPage (page - 1);
  
  
}


  return (
    <> 
    <div className="list__container">
    {isLoading ? <div className="spiner__container"><div className="spinner"></div></div> : (
      filtered.length > 0 ? 
      filtered.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })
      : <div className="no-list__container">
      <div className="no-list__container-bg"><img src={noFoundImg} alt="Sigue buscando"  width="100%" height="auto"/></div>
      <div className="spiner__container ">
        <p>No hemos encontrado ninguna película, <br /> inténtalo con otro término de búsqueda... <Link onClick={() => navigate(-1)}   >Regresar</Link> </p>
      </div>
    </div>
    )}
      </div> 
      {filtered.length > 0 && (
      <div className='pagination'>
            <button 
            disabled={ isLoading || page === 1}
            onClick={ downpage}
            >Prev</button>
            Página  <span>{page}</span> <small>de {moviesData.total_pages}</small>
            <button 
            disabled={ isLoading || page === moviesData.total_pages || page === undefined }
            onClick={ uppage}
            >Next</button>
      </div>  
       )}
    </>
  );
};

export default MoviesList;
