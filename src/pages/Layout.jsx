import { Outlet } from 'react-router-dom';
import Navbar from '../header/Navbar';

function Layout() {
  return (
    <div className="w-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
