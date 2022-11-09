import kai from '../img/kai.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useMenu } from '../contexts/MenuContext';
import { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import ModalCreateMenu from '../Component/ModalCreateMenu';

function Navbar() {
  const { openLogin, openRegis, user, userLogout } = useAuth();
  const { setCloseButtonEdit, closeButtonEdit, getMenu, setIsLogin } =
    useMenu();
  const { getCart } = useCart();
  const [menuList, setMenuList] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [isMenu, setIsMenu] = useState(true);
  const [closeEdit, setCloseEdit] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    try {
      getCart();
      getMenu();
    } catch (err) {
      console.log(err);
    }
  }, [location.pathname]);

  const gotoAddMenu = () => {
    setMenuList(true);
  };
  const gotoHome = () => {
    setMenuList(false);
  };

  const closeAddMenu = () => {
    setCloseButtonEdit(false);
    navigate('/');
  };

  const logout = () => {
    userLogout();
    navigate('/');
    setIsLogin(false);
  };

  const handleMenu = () => {
    setIsMenu(false);
    setIsCart(true);
    setMenuList(false);
  };

  const gotoEditPath = () => {
    setMenuList(false);
    setIsMenu(false);
    setIsCart(true);
    setCloseEdit(true);
  };

  const closeEditModal = () => {
    setCloseEdit(false);
  };

  return (
    <>
      {user ? (
        <>
          <div className="fixed w-full bg-black flex justify-between pr-5 min-w-[1124px] flex-wrap">
            <button className="flex items-center gap-14" onClick={gotoAddMenu}>
              <img
                src={kai}
                alt="kin-rao-di"
                accept="image/*"
                className="h-15 object-cover"
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

          {user.role === 'admin' ? (
            <div className="fixed w-full bg-black flex justify-between pr-5 min-w-[1124px] flex-wrap">
              <Link to="/">
                <div className="flex items-center gap-14" onClick={gotoHome}>
                  <img
                    src={kai}
                    alt="kin-rao-di"
                    accept="image/*"
                    className="h-15 object-cover"
                  />
                  <h1 className="text-white  font-['Aclonica'] text-5xl px-0">
                    Kin-Rao-Di
                  </h1>
                </div>
              </Link>

              <div className="flex items-center">
                <div>
                  <div className="flex justify-between m-4 gap-5">
                    {/*******************************/}
                    <Link to="/">
                      <button
                        className={`material-symbols-outlined  text-${
                          isMenu ? 'kai' : 'kai'
                        }`}
                        onClick={handleMenu}
                      >
                        import_contacts
                      </button>
                    </Link>
                    <Link to="/shoppingcart">
                      <button
                        className={`material-symbols-outlined  text-${
                          isCart ? 'white' : 'white'
                        }`}
                        onClick={handleMenu}
                      >
                        shopping_cart
                      </button>
                    </Link>
                  </div>
                </div>
                <div>
                  <Link to="/ordered">
                    <button
                      className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
                      onClick={gotoEditPath}
                    >
                      <p className="text-xl">Ordered</p>
                    </button>
                  </Link>
                </div>
                <div>
                  <div className="flex justify-around">
                    {menuList ? (
                      <button
                        className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
                        onClick={gotoEditPath}
                      >
                        <p className="text-xl">add menu</p>
                      </button>
                    ) : (
                      <Link to="/editmenu">
                        <button
                          className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
                          onClick={gotoAddMenu}
                        >
                          <p className="text-xl">Edit</p>
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <button className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai">
                    <p className="text-xl">{user.username}</p>
                  </button>
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
              {closeEdit && <ModalCreateMenu />}
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
                    className="h-15 object-cover"
                  />
                  <h1 className="text-white  font-['Aclonica'] text-5xl px-0">
                    Kin-Rao-Di
                  </h1>
                </div>
              </Link>

              <div className="flex items-center">
                <div className="flex justify-between m-4 gap-5">
                  {/*******************************/}
                  <Link to="/">
                    <button
                      className={`material-symbols-outlined  text-${
                        isMenu ? 'kai' : 'kai'
                      }`}
                      onClick={handleMenu}
                    >
                      import_contacts
                    </button>
                  </Link>
                  <Link to="/shoppingcart">
                    <button
                      className={`material-symbols-outlined  text-${
                        isCart ? 'white' : 'white'
                      }`}
                      onClick={handleMenu}
                    >
                      shopping_cart
                    </button>
                  </Link>
                </div>
                <div className="flex ">
                  <button
                    onClick={openRegis}
                    className="text-white bg-kai h-[3rem] w-32 rounded-[15px] m-4 font-['Aclonica'] hover:bg-dark-kai"
                  >
                    <p className="text-xl">{user.username}</p>
                  </button>
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
                className="h-15 object-cover"
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
          {/* {closeEdit && <ModalCreateMenu />}
      {openEdit && <ModalEditMenu id={selectId} />} */}
        </div>
      )}
    </>
  );
}

export default Navbar;
