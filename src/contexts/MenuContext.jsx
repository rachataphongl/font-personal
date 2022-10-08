import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as postSerVice from '../api/postApi';

const MenuContext = createContext();
function MenuContextProvider({ children }) {
  const [menu, setMenu] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [closeEdit, setCloseEdit] = useState(false);
  const [editMenu, setEditMenu] = useState({});

  useEffect(() => {
    try {
      getMenu();
    } catch (err) {
      console.log(err);
    }
  }, []);
  const handleEdit = (bodyMenu) => {
    setEditMenu(bodyMenu);
    setOpenEdit(true);
  };

  const openEditModal = () => {
    setCloseEdit(true);
  };

  const closeEditModal = () => {
    setCloseEdit(false);
  };

  const getMenu = async () => {
    const res = await postSerVice.getMenu();
    setMenu(res.data.menuItems);
  };
  // console.log(menu);

  // const formData = new FormData

  const deleteMenu = async (menuId) => {
    const res = await postSerVice.deleteMenu(menuId);
    getMenu();
  };

  const sendUpdateMenu = async (id, input) => {
    try {
      const res = await postSerVice.updateMenu(id, input);
      getMenu();
    } catch (err) {
      toast.err('nonononononooooooooooo');
    }
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        closeEdit,
        deleteMenu,
        getMenu,
        openEditModal,
        closeEditModal,
        handleEdit,
        editMenu,
        openEdit,
        sendUpdateMenu,
        setOpenEdit
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
