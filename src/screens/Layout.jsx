import { Routes, Route } from 'react-router-dom';
//componentes
import { GlobalHeader } from '../components/GlobalHeader';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { FilmScreen } from '../screens/FilmScreen';
import { HomeScreen } from '../screens/HomeScreen';



function Layout() {
    


    return (
        <>
            <GlobalHeader  />

            <Routes>
                <Route path="/" element={<HomeScreen /> } />
                <Route path="pelicula/:id" element={<FilmScreen />} />
                <Route path="favoritos/"  element={<FavoritesScreen  />}  />

                <Route path="*" element={<HomeScreen />} />
            </Routes>
        </>
    );
}

export default Layout;
