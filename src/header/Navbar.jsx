import kai from '../img/kai.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useMenu } from '../contexts/MenuContext';
import { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';

function Navbar() {
  const { openLogin, openRegis, user, userLogout } = useAuth();
  const { openEditModal, setCloseButtonEdit, closeButtonEdit, getMenu } =
    useMenu();
  const { getCart } = useCart();
  const [menuList, setMenuList] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      getCart();
      getMenu();
    } catch (err) {
      console.log(err);
    }
  }, [menuList]);

  const toggle = () => {
    setMenuList((prev) => !prev);
  };

  const openAddMenu = () => {
    setCloseButtonEdit(true);
  };
  const closeAddMenu = () => {
    setCloseButtonEdit(false);
    navigate('/');
  };

  const logout = () => {
    userLogout();
    navigate('/');
  };

  return (
    <>
      {user ? (
        <>
          <div className="fixed w-full bg-black flex justify-between pr-5 min-w-[1124px] flex-wrap">
            <button className="flex items-center gap-14" onClick={closeAddMenu}>
              <img
                src={kai}
                alt="kin-rao-di"
                accept="image/*"
                className="h-15"
              />
              <h1 className="text-white  font-['Aclonica'] text-5xl px-0">
                Kin-Rao-Di
              </h1>
            </button>
            <div className="flex items-center">
              <div className="flex flex-col">
                <button
                  onClick={openRegis}
                  className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
                >
                  <p className="text-xl">dont use</p>
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

          {user.role === 'admin' ? ( //*********************************** */
            <div className="fixed w-full bg-black flex justify-between pr-5 min-w-[1124px] flex-wrap">
              <Link to="/">
                <div
                  className="flex items-center gap-14"
                  onClick={closeAddMenu}
                >
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
                <div className="flex flex-col items-center">
                  <button className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai">
                    <p className="text-xl">{user.username}</p>
                  </button>
                  <div className="flex justify-around">
                    {closeButtonEdit ? (
                      <button
                        className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
                        onClick={openEditModal}
                      >
                        <p className="text-xl">add menu</p>
                      </button>
                    ) : (
                      <Link to="/editmenu">
                        <button
                          className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
                          onClick={openAddMenu}
                        >
                          <p className="text-xl">Edit</p>
                        </button>
                      </Link>
                    )}
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
                <div
                  className="flex items-center gap-14"
                  onClick={closeAddMenu}
                >
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
                <div className="flex flex-col">
                  <button
                    onClick={openRegis}
                    className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
                  >
                    <p className="text-xl">{user.username}</p>
                  </button>
                  <div className="flex justify-around">
                    {/*******************************/}
                    <Link to="/">
                      <button
                        className={`material-symbols-outlined  text-${
                          menuList ? 'kai' : 'white'
                        }`}
                        onClick={() => toggle()}
                      >
                        import_contacts
                      </button>
                    </Link>
                    <Link to="shoppingcart">
                      <button
                        className={`material-symbols-outlined  text-${
                          menuList ? 'white' : 'kai'
                        }`}
                        onClick={() => toggle()}
                      >
                        shopping_cart
                      </button>
                    </Link>
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
            <div className="flex items-center gap-14" onClick={closeAddMenu}>
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
