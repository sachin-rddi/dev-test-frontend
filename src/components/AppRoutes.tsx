import { Route, Routes } from 'react-router-dom';
import ROUTES from '../constants/Routes';
import Home from '../views/Home/Home';

const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path={ROUTES.HOME.fullPath} element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;