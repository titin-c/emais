const BASE_URL = 'https://api.themoviedb.org/3/';
// Roi const API_KEY = '8f781d70654b5a6f2fa69770d1d115a3';
const API_KEY = '871626d4b8cbce6358920dd023385d9e';

const LANG = 'es-ES'
const endpoint = {
    discover: 'discover/movie',
    filmById: 'movie',
    allFilms: 'search/movie'
}

// ruta de las imagenes segun tamaño
export const IMAGE_API_S = `https://image.tmdb.org/t/p/w342`;
export const IMAGE_API_M = `https://image.tmdb.org/t/p/w500`;

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
