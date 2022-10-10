import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as postSerVice from '../api/postApi';

const MenuContext = createContext();
function MenuContextProvider({ children }) {
  const [menu, setMenu] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [closeEdit, setCloseEdit] = useState(false);
  const [editMenu, setEditMenu] = useState({});
  const [closeButtonEdit, setCloseButtonEdit] = useState(false);

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

  // const formData = new FormData

  const deleteMenu = async (menuId) => {
    await postSerVice.deleteMenu(menuId);
    getMenu();
  };

  const sendUpdateMenu = async (id, input) => {
    try {
      await postSerVice.updateMenu(id, input);
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
        setOpenEdit,
        closeButtonEdit,
        setCloseButtonEdit
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
