import { FEATURED_API, SEARCH_API } from "../services/movieServices";

import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

//componentes
import { GlobalHeader } from "../components/GlobalHeader";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { FilmScreen } from "../screens/FilmScreen";
import { HomeScreen } from "../screens/HomeScreen";



function Layout() {
    // estado para saber si esta cargado
    const [loading, setLoading] = useState(false);

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [favArray, setFavArray] = useState([])

    const navigate = useNavigate();
    //función para añadir y quitar de favritos
    const toggleFav = (id) => {
        //miramos si NO está en el array de favoritos
        const checkId = favArray.every(item => {
            return item.id !== id;
        })
        // si devuelve true lo cogemos de movies
        if (checkId) {
            const auxMovies = movies.filter(movie => {
                return movie.id === id
            })
            //y si no existe lo añadimos al array de favoritos
            setFavArray([...favArray, ...auxMovies])

        } else {
            // y si SÍ existe en el array de favoritos, lo borro
            const auxFav = favArray.filter(fav => {
                return fav.id !== id
            })

            setFavArray([...auxFav])
        }

    }

    //para guardar local storage primero comprobamos
    useEffect(() => {
        const auxFavArray = JSON.parse(localStorage.getItem("favArray"));

        if (auxFavArray && auxFavArray.length > 0) {
            setFavArray(auxFavArray)
        }
    }, [])

    //lo guardamos en el local storaje
    useEffect(() => {

        if (favArray && favArray.length > 0) {
            localStorage.setItem("favArray", JSON.stringify(favArray));
        }
    }, [favArray])

    //obtemeos los datos del api
    const getMovies = (API) => {
        setLoading(true);
        fetch(API)
            .then((res) => res.json())
            .then((data) => setMovies(data.results));
        setLoading(false);
    };
    //al buscar evitamos refrescar el navegador
    const handleOnSubmit = (event) => {
        event.preventDefault();
        
        //si tenemos un término de búsqueda lo añadimos al query de la ruta
        if (searchTerm) {
            getMovies(`${SEARCH_API}${searchTerm}&language=es-ES`);
            navigate("/");
        }
    };
    // borramos el termino de búsqueda al hacer cklick en el input, para no tener que borrarlo manualmente
    const handleClick = (event) =>{
        if (searchTerm) {
            setSearchTerm("");
        }
    }
    //cada vez que el input cambie, se modifica su valor
    const handleOnChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);


    return (
        <>
            <GlobalHeader count={favArray.length} searchTerm={searchTerm} handleClick={handleClick} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />

            <Routes>
                <Route path="/" element={<HomeScreen loading={loading} favArray={favArray} movies={movies} searchTerm={searchTerm} toggleFav={toggleFav} />} />
                <Route path="pelicula/:id" element={<FilmScreen toggleFav={toggleFav} />} />
                <Route path="favoritos" loading={loading} element={<FavoritesScreen toggleFav={toggleFav} favArray={favArray} searchTerm={searchTerm} movies={movies} />} />

                <Route path="*" element={<HomeScreen />} />
            </Routes>
        </>
    );
}

export default Layout;
