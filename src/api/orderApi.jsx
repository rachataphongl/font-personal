import axios from '../config/axios';

export const getAllOrderedApi = () => axios.get('/order/getallorders');

export const createOrder = (input) => axios.post('/order/createorder', input);

export const confirmOrderApi = (orderId) =>
  axios.patch('/order/approved/order', orderId);

export const getOrderByUserIdApi = (id) => axios.get(`/order/${id}`);

// user
export const getOrderByIdApi = (id) => axios.get(`/order/user/${id}`);
export const getOrderedByUserIdApi = () => axios.get(`/order/orderedById`);
