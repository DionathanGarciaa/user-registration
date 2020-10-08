import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desafionodegx2.herokuapp.com',
});

export default api;