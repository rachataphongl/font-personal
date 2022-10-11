import { createContext, useContext, useEffect, useState } from 'react';
import { deleteCartApi, getCartApi } from '../api/cartApi';

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  let totalPrice = cart
    ?.map((item) => item.amount * item.Menu.price)
    .reduce((acc, cur) => acc + cur, 0);
  

  const getCart = async () => {
    const res = await getCartApi();
    // console.log(res.data);
    setCart(res.data.items);
  };
 

  useEffect(() => {
    try {
      getCart();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const deleteCart = async (cartId, idx) => {
    // console.log(cart[idx].amount);
    if (cart[idx].amount === 1) {
      //   console.log(cartId);
      await deleteCartApi(cartId);
      getCart();
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, deleteCart, getCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
