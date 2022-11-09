import { createContext, useContext, useState, useEffect } from 'react';
import * as orderService from '../api/orderApi';

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [ordered, setOrdered] = useState([]);
  const [approve, setApprove] = useState();

  const getAllOrdered = async () => {
    try {
      const res = await orderService.getAllOrderedApi();
      setOrdered(res.data.orders);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(ordered);

  const approveOrder = async (orderId) => {
    await orderService.confirmOrderApi(orderId);
  };
  return (
    <OrderContext.Provider
      value={{ ordered, setOrdered, getAllOrdered, approveOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => {
  return useContext(OrderContext);
};

export default OrderContextProvider;
