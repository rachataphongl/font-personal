import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import { useAuth } from '../contexts/AuthContext';
import Menu from '../pages/Menu';

function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {user ? (
          <Route path="/" element={<Menu />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Route>
    </Routes>
  );
}

export default Router;
