import { Routes, Route, useParams } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Order from '../pages/Order';
import { useAuth } from '../contexts/AuthContext';
import Menu from '../pages/Menu';
import EditMenu from '../pages/adminPages/EditMenu';
import PageNotfound from '../pages/PageNotfound';
import Cart from '../pages/Cart';
import Ordered from '../pages/Ordered';

function Router() {
  const { user } = useAuth();

  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Menu />} />
          <Route path="/shoppingcart" element={<Cart />} />
          <Route path={`/order/:userId`} element={<Order />} />
          {user.role === 'admin' ? (
            <>
              <Route path="/editmenu" element={<EditMenu />} />
              <Route path="/ordered" element={<Ordered />} />
            </>
          ) : (
            <>
              <Route path="*" element={<PageNotfound />} />
            </>
          )}
        </Route>
      ) : (
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotfound />} />
        </Route>
      )}
    </Routes>
  );
}

export default Router;
