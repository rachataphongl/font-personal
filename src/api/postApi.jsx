import axios from '../config/axios';

export const createMenu = (input) => axios.post('/posts/createmenu', input);
export const getMenu = () => axios.get('/posts/getmenu');

export const deleteMenu = (menuId) =>
  axios.delete(`/posts/deletemenu/${menuId}`);

export const updateMenu = (id, input) =>
  axios.patch(`/posts/editmenu/${id}`, input);
