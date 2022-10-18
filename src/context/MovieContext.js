import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [isLoading,setIsLoading] = useState(false);
  const [moviesData, setMoviesData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [header, setHeader] = useState("Trending");
  const [typeQuery, setTypeQuery] = useState('popular')
  const [genres, setGenres] = useState([])
  const [movieDetails, setMovieDetails] = useState([]);
  // localstorage state
  const [favourites, setFavourites] = useLocalStorage("fav", []);

  const API_KEY = '871626d4b8cbce6358920dd023385d9e'
  const BASE_URL = 'https://api.themoviedb.org/3';
  const LANGUAJE = 'es-ES'


  const fetchMoviesByQueryType = async (typeQuery, page) => {
    setIsLoading(true);
    const data = await fetch(
      //  `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${LANGUAJE}&page=1`
      `${BASE_URL}/movie/${typeQuery ? typeQuery : 'popular'}?api_key=${API_KEY}&page=${page}&language=${LANGUAJE}`
    );
    const moviesData = await data.json();
    setIsLoading(false);
    setMoviesData(moviesData);
    setMovies(moviesData.results);
    setFiltered(moviesData.results);
    setTypeQuery(typeQuery);
    setActiveGenre(0);
    
    
  };

  const fetchSearch = async (searchQuery, page) => {
    setIsLoading(true);
    setPage(1);
    const moviesData = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${LANGUAJE}&query=${searchQuery}&page=${page}&include_adult=false`
    );
    const movies = await moviesData.json();
    setIsLoading(false);
    setMoviesData(moviesData);
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader(`Results for "${searchQuery}"`);
    setActiveGenre(0);
  };



  const getGenres = async () => {
    setIsLoading(true);
    const data = await fetch(`
    ${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${LANGUAJE}`
    );
    const generos = await data.json();
    setIsLoading(false);
    setGenres(generos.genres);
  };
  useEffect(() => {
    getGenres();

  }, []);

 

  const fetchMovieDetails = async (id) => {
    setIsLoading(true);
    const data = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${LANGUAJE}`
    );
    const movieDetails = await data.json();
    setIsLoading(false);
    setMovieDetails(movieDetails);
  };

 


  /* const fetchGenre = async () => {
    const data = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${LANGUAJE}`
    );
    const genresData = await data.json();
    setGenres(genresData.genres);
  }; */

  /*   const fetchNowPlaying = async () => {
      const data = await fetch(
        `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAJE}&page=1`
      );
      const movies = await data.json();
      setMovies(movies.results);
      setFiltered(movies.results);
      setHeader("Now playing");
      setActiveGenre(0);
    };
  
    const fetchTopRated = async () => {
      const data = await fetch(
        `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=${LANGUAJE}&page=1`
      );
      const movies = await data.json();
      setMovies(movies.results);
      setFiltered(movies.results);
      setHeader("Top rated");
      setActiveGenre(0);
    };
  
    const fetchUncoming = async () => {
      const data = await fetch(
        `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=${LANGUAJE}&page=1`
      );
      const movies = await data.json();
      setMovies(movies.results);
      setFiltered(movies.results);
      setHeader("Uncoming");
      setActiveGenre(0);
    }; */

  const addToFavourites = (movie) => {
    let isOnArray = false;
    favourites.map((fav) => {
      if (fav.id === movie.id) {
        isOnArray = true;
      }
    });

    if (isOnArray) {
      setFavourites(favourites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavourites((prevState) => [...prevState, movie]);
    }
  };

  const getFavourites = () => {
    setMovies(favourites);
    setFiltered(favourites);
    setHeader("favorita");
    setActiveGenre(0);
  };

  const isFav = (id) => {
    let fav = favourites.filter((fav) => fav.id === id);
    return fav.length === 0 ? true : false;
  };

  return (
    <MovieContext.Provider
      value={{
        header,
        typeQuery,
        setTypeQuery,
        setHeader,
        addToFavourites,
        filtered,
        setFiltered,
        fetchMoviesByQueryType,
        movies,
        setMovies,
        activeGenre,
        setActiveGenre,
        fetchSearch,
        getFavourites,
        isFav,
        genres,
        fetchMovieDetails,
        setMovieDetails,
        movieDetails,
        favourites,
        moviesData,
        page,
        setPage,
        isLoading
        
        /* fetchNowPlaying,
        fetchTopRated,
        fetchUncoming, */
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
