import { createContext, useContext, useEffect, useState } from 'react';
import * as postSerVice from '../api/postApi';

const MenuContext = createContext();

function MenuContextProvider({ children }) {
  const [menu, setMenu] = useState([]);
  const [closeEdit, setCloseEdit] = useState(false);

  useEffect(() => {
    try {
      getMenu();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const close = () => {
    setCloseEdit((prev) => !prev);
  };

  const getMenu = async () => {
    const res = await postSerVice.getMenu();
    setMenu(res.data.menuItems);
  };
  // console.log(menu);

  // const formData = new FormData

  return (
    <MenuContext.Provider value={{ menu, closeEdit, close }}>
      {children}
    </MenuContext.Provider>
  );
}

export const useMenu = () => {
  return useContext(MenuContext);
};

export default MenuContextProvider;
