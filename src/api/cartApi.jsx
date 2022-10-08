import axios from '../config/axios';

export const createCart = (input) => axios.post('/shoppingcart', input);
export const getCartApi = () => axios.get('/getcart');
export const deleteCartApi = (cartId) => axios.delete(`/deletecart/${cartId}`);
