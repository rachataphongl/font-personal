import kai from '../img/kai.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useMenu } from '../contexts/MenuContext';
function Navbar() {
  const { openLogin, openRegis, user, userLogout } = useAuth();
  const { close } = useMenu();

  const navigate = useNavigate();

  const logout = () => {
    userLogout();
    navigate('/');
  };

  return (
    <>
      {user ? (
        <>
          <div className="fixed w-full bg-black flex justify-between pr-5 min-w-[1124px] flex-wrap">
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
              <div className="flex flex-col">
                <button
                  onClick={openRegis}
                  className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
                >
                  <p className="text-xl">user name2</p>
                </button>
                <div className="flex justify-around">
                  <button className="material-symbols-outlined text-kai">
                    shopping_cart
                  </button>
                  <button className="material-symbols-outlined text-kai">
                    import_contacts
                  </button>
                </div>
              </div>
              <div>
                <button
                  className="text-white bg-kai h-[3rem] w-24 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
                  onClick={logout}
                >
                  <p className="text-xl">Log out</p>
                </button>
              </div>
            </div>
          </div>

          {user.role === 'admin' ? (
            <div className="fixed w-full bg-black flex justify-between pr-5 min-w-[1124px] flex-wrap">
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
                <div className="flex flex-col">
                  <button className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai">
                    <p className="text-xl">{user.username}</p>
                  </button>
                  <div className="flex justify-around">
                    <button
                      className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
                      onClick={close}
                    >
                      <p className="text-xl">add menu</p>
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    className="text-white bg-kai h-[3rem] w-24 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
                    onClick={logout}
                  >
                    <p className="text-xl">Log out</p>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="fixed w-full bg-black flex justify-between pr-5 min-w-[1124px] flex-wrap">
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
                <div className="flex flex-col">
                  <button
                    onClick={openRegis}
                    className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
                  >
                    <p className="text-xl">{user.username}</p>
                  </button>
                  <div className="flex justify-around">
                    <button className="material-symbols-outlined text-kai">
                      shopping_cart
                    </button>
                    <button className="material-symbols-outlined text-kai">
                      import_contacts
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    className="text-white bg-kai h-[3rem] w-24 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
                    onClick={logout}
                  >
                    <p className="text-xl">Log out</p>
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
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
