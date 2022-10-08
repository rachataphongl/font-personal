import { createContext, useContext, useEffect, useState } from 'react';
import * as authService from '../api/authApi';
import { addAccessToken, removeToken } from '../utils/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRegis, setIsOpenRegis] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      getMe();
    } catch (err) {}
  }, []);

  const getMe = async () => {
    const res = await authService.getMe();
    setUser(res.data.user);
  };
  // console.log(user);

  const closeLogin = () => {
    setIsOpen(false);
  };

  const openLogin = () => {
    setIsOpen(true);
  };

  const closeRegis = () => {
    setIsOpenRegis(false);
  };

  const openRegis = () => {
    setIsOpenRegis(true);
  };

  const userLogout = () => {
    setUser(null);
    removeToken();
  };

  const register = async (input) => {
    const res = await authService.register(input);
    getMe();
    addAccessToken(res.data.token);
  };
  const login = async (input) => {
    const res = await authService.login(input);
    getMe();
    addAccessToken(res.data.token);
  };

  return (
    <AuthContext.Provider
      value={{
        isOpen,
        isOpenRegis,
        closeLogin,
        openLogin,
        closeRegis,
        openRegis,
        login,
        register,
        userLogout,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;

// import { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// function AuthContextProvider({ children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleModal = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <AuthContext.Provider value={{ isOpen, toggleModal }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthContextProvider;

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
