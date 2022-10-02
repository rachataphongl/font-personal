import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRegis, setIsOpenRegis] = useState(false);

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

  return (
    <AuthContext.Provider
      value={{
        isOpen,
        isOpenRegis,
        closeLogin,
        openLogin,
        closeRegis,
        openRegis
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};

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
