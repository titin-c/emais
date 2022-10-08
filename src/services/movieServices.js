const BASE_URL = 'https://api.themoviedb.org/3/';

// Me he creado una API key propia, para que siga funcionando, si algun día eliminas la que me facilitaste.
const API_KEY = process.env.REACT_APP_THEMOVIEDB_API_KEY;


const LANG = 'es-ES'
const endpoint = {
    discover: 'discover/movie',
    filmById: 'movie',
    allFilms: 'search/movie'
}

// ruta de las imagenes segun tamaño
export const IMAGE_API_S = `https://image.tmdb.org/t/p/w342`;
export const IMAGE_API_M = `https://image.tmdb.org/t/p/w500`;
export const IMAGE_API_O = `https://image.tmdb.org/t/p/original`;


// ruta de películas destacadas
export const FEATURED_API = `${BASE_URL}${endpoint.discover}?sort_by=popularity.desc&api_key=${API_KEY}&language=${LANG}`;

// ruta de query search
export const SEARCH_API = `${BASE_URL}${endpoint.allFilms}?&api_key=${API_KEY}&query=`;

// ruta de las pelícuas detalladas por id
export const getOneFilmById = async (movie_id) => {
    const FILM_BY_ID_URL = `${BASE_URL}${endpoint.filmById}/${movie_id}?api_key=${API_KEY}&language=${LANG}`
    const res = await fetch(FILM_BY_ID_URL)
    return await res.json()
}
