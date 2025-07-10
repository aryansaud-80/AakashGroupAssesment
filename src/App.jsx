import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import ApiDemoPage from './pages/ApiDemoPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/api-page' element={<ApiDemoPage />} />
    </Routes>
  );
};
export default App;
