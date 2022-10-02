import { Outlet } from 'react-router-dom';
import Navbar from '../header/Navbar';

function Layout() {
  return (
    <div className="h-full">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
