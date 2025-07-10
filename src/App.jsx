import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import AnimeDiscoverPage from './pages/AnimeDiscoverPage';
import AnimeDetailPage from './pages/AnimeDetailPage';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/anime' element={<AnimeDiscoverPage />} />
      <Route path='/anime/:id' element={<AnimeDetailPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};
export default App;
