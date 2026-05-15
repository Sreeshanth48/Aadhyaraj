import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aadhyaraj.onrender.com',
});

export default api;