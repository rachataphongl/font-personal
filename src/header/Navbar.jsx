import kai from '../img/kai.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { openLogin, openRegis, user, userLogout } = useAuth();
  return (
    <>
      {user ? (
        <div className="bg-black flex justify-between pr-5 min-w-[1124px] flex-wrap">
          <Link to="/">
            <div className="flex items-center gap-14">
              <img
                src={kai}
                alt="kin-rao-di"
                accept="image/*"
                className="h-15"
              />
              <h1 className="text-white  font-['Aclonica'] text-5xl px-0">
                Kin-Rao-Di
              </h1>
            </div>
          </Link>

          <div className="flex items-center">
            <form className="pr-10">
              <input
                type="text"
                className="rounded-[10px] h-[2rem] w-80 px-2 placeholder-gray-400 font-['Aclonica']"
                placeholder="Search food..."
              />
            </form>
            <div>
              <button
                onClick={openRegis}
                className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
              >
                <p className="text-xl">user name</p>
              </button>
            </div>
            <div>
              <button
                className="text-white bg-kai h-[3rem] w-24 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
                onClick={userLogout}
              >
                <p className="text-xl">Log out</p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-black flex justify-between pr-5 min-w-[1124px] flex-wrap">
          <Link to="/">
            <div className="flex items-center gap-14">
              <img
                src={kai}
                alt="kin-rao-di"
                accept="image/*"
                className="h-15"
              />
              <h1 className="text-white  font-['Aclonica'] text-5xl px-0">
                Kin-Rao-Di
              </h1>
            </div>
          </Link>

          <div className="flex items-center">
            {/* <form className="pr-10">
              <input
                type="text"
                className="rounded-[10px] h-[2rem] w-80 px-2 placeholder-gray-400 font-['Aclonica']"
                placeholder="Search food..."
              />
            </form> */}
            <button
              onClick={openRegis}
              className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
            >
              <p className="text-xl">Register</p>
            </button>
            <div>
              <button
                onClick={openLogin}
                className="text-white bg-kai h-[3rem] w-24 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
              >
                <p className="text-xl">Login</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
