import axios from '../config/axios';

export const createMenu = (input) => axios.post('/posts/createmenu', input);
export const getMenu = () => axios.get('/posts/getmenu');

export const deleteMenu = () => axios.delete('/posts/deletenemu/:id');
