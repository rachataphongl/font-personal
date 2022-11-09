import { createContext, useContext, useEffect, useState } from 'react';
import { deleteCartApi, getCartApi } from '../api/cartApi';
import * as orderService from '../api/orderApi';

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isOpenModalModalPayment, setIsOpenModalPayment] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const getOrderDetail = async () => {
    try {
      const res = await orderService.getOrderByUserIdApi();
      const orderStatus = res?.data.orderByUser.payMentStatus;
      if (orderStatus === 'pending') {
        setIsPending(true);
      } else {
        setIsPending(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  let totalPrice = cart
    ?.map((item) => item.amount * item.Menu.price)
    .reduce((acc, cur) => acc + cur, 0);

  const getCart = async () => {
    try {
      const res = await getCartApi();
      setCart(res?.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      getCart();
      getOrderDetail();
    } catch (err) {
      console.log(err);
    }
  }, [isPending]);

  const deleteCart = async (cartId, idx) => {
    // console.log(cart[idx].amount);
    if (cart[idx].amount === 1) {
      //   console.log(cartId);
      await deleteCartApi(cartId);
      getCart();
    }
  };

  const handleProcess = () => {
    setIsPending((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        deleteCart,
        getCart,
        totalPrice,
        isOpenModalModalPayment,
        setIsOpenModalPayment,
        isPending,
        handleProcess,
        getOrderDetail,
        setIsPending
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
