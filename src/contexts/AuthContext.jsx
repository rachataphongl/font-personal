import { createContext, useContext, useState } from 'react';
// import { toast } from 'react-toastify';
import * as authService from '../api/authApi';
import { addAccessToken } from '../utils/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRegis, setIsOpenRegis] = useState(false);
  const [user, setUser] = useState(null);

  const closeLogin = () => {
    setIsOpen(false);
    // console.log('first');
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
  };

  const register = async (input) => {
    const res = await authService.register(input);
    setUser(true);
    addAccessToken(res.data.token);
  };

  const login = async (input) => {
    const res = await authService.login(input);
    setUser(true);
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
        user,
        register,
        login,
        userLogout
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
