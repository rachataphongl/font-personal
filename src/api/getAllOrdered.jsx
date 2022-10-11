import axios from "../config/axios";

export const getAllOrderedApi = () => axios.get('/order/getallorders')