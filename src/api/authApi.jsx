import axios from '../config/axios';

export const register = (input) => axios.post('/auth/register', input);
export const login = ({ phoneNumberOrEmail, password }) =>
  axios.post('/auth/login', { phoneNumberOrEmail, password });
export const getMe = () => axios.get('/auth/me');
