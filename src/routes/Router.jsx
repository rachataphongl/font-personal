import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Order from '../pages/Order';
import { useAuth } from '../contexts/AuthContext';
import Menu from '../pages/Menu';
import EditMenu from '../pages/adminPages/EditMenu';
import PageNotfound from '../pages/PageNotfound';
import Cart from '../pages/Cart';

function Router() {
  const { user } = useAuth();
  // console.log(user);

  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Menu />} />
          <Route path="shoppingcart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          {user.role === 'admin' ? (
            <>
              <Route path="/editmenu" element={<EditMenu />} />
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
