
import { Link } from "react-router-dom";
//importamos iconos
import logo from '../assets/ticket.svg';
import favIcon from '../assets/icons/favorite.svg';





export const GlobalHeader = ({count, searchTerm, handleOnChange, handleOnSubmit, handleClick}) => {

    // const value = useContext(DataContext);
    
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
            <div

              className="header-search active"
            >
              
              <form className="searchform" onSubmit={handleOnSubmit}>
                <input
                  type="search"
                  className="search"
                  placeholder="Buscar Película..."
                  value={searchTerm}
                  onChange={handleOnChange}
                  onClick={handleClick}
                />
                <input type="submit" value="Buscar"  className="enviar" />
              </form>
            </div>

            <div className="header-fav">

              <Link className='header-fav-btn' to="/favoritos">
                <img src={favIcon} className="fav-icon" alt="Favoritos" width="100%" height="100%" />
                <span className='header-fav-label'>{count}</span>


              </Link>

            </div>
          </div>

        </div>


      </header>
    )
}
