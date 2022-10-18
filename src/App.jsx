import { MovieProvider } from './context/MovieContext';
import Layout from './screens/Layout';

function App() {

  return (
    <MovieProvider>
      <Layout />
    </MovieProvider>
  );
}

export default App;
