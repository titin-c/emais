import React, { useContext, useEffect, useState } from "react";
import Movie from "./Movie";
import MovieContext from "../context/MovieContext";


const MoviesList = () => {
  

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


console.log(moviesData.total_pages)

  return (
    <> 
    <div className="list__container">
    {isLoading ? 'Cargando' : (
      filtered.length > 0 ? 
      filtered.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })
      : <p className="info">No hay películas</p>
    )}
      </div> 
      {!isLoading && (
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
