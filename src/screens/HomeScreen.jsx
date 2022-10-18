
//importamos imagenes
import Filter from '../components/Filter';
import MoviesList from '../components/MoviesList';
import Header from '../components/Header';
import Panel from '../components/Panel';
import { useContext, useEffect } from 'react';
import MovieContext from '../context/MovieContext';


export const HomeScreen = () => {
  const {  setHeader,typeQuery } = useContext(MovieContext);

  useEffect(() => {
    if (typeQuery == 'popular') { setHeader("Tendencias"); }
    if (typeQuery == 'now_playing') { setHeader("Estrenos"); }
    if (typeQuery == 'top_rated') { setHeader("Más votadas"); }
    if (typeQuery == 'upcoming') { setHeader("Próximamente"); }
  }, [typeQuery])
  
  
  return (

    <>

      <div className={"header-title home-active"}>
        <div className="header-title__left">
          <div className="header-title__left__container"><Panel /></div>
        </div>
        <div className="header-title__center">
          <div className="header-title__center__container"><Filter /></div>
        </div>
        <div className="header-title__right"></div>
      </div>

      <div className='list'>

        <h1 className="section-title"><Header /></h1>
        
          <MoviesList />

      </div>

    </>
  )
}
