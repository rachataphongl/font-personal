import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as postSerVice from '../api/postApi';

const MenuContext = createContext();
function MenuContextProvider({ children }) {
  const [menu, setMenu] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);

  const [editMenu, setEditMenu] = useState({});
  const [closeButtonEdit, setCloseButtonEdit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    try {
      getMenu();
    } catch (err) {
      console.log(err);
    }
    getMenu();
  }, [isLogin]);

  const handleEdit = (bodyMenu) => {
    setEditMenu(bodyMenu);
    setOpenEdit(true);
  };

  const getMenu = async () => {
    try {
      const res = await postSerVice.getMenu();
      return setMenu(res.data.menuItems); /*********** */
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMenu = async (menuId) => {
    await postSerVice.deleteMenu(menuId);
    getMenu();
  };

  const sendUpdateMenu = async (id, input) => {
    try {
      await postSerVice.updateMenu(id, input);
      getMenu();
    } catch (err) {
      toast.error('nonononononooooooooooo');
    }
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        deleteMenu,
        getMenu,
        handleEdit,
        editMenu,
        openEdit,
        sendUpdateMenu,
        setOpenEdit,
        closeButtonEdit,
        setCloseButtonEdit,
        setIsLogin
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export const useMenu = () => {
  return useContext(MenuContext);
};

export default MenuContextProvider;
