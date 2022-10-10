import axios from '../config/axios';

export const createCartApi = (input) => axios.post('/cart/shoppingcart', input);
export const getCartApi = () => axios.get('/cart/getcart');
export const deleteCartApi = (cartId) =>
  axios.delete(`/cart/deletecart/${cartId}`);

export const updateAmountApi = ({ cartId, amount }) =>
  axios.patch(`/cart/updateamount`, { cartId, amount });
