import axios from 'axios';

const API = axios.create({
  baseURL: 'https://triophoenix.onrender.com/api/admin/',
  withCredentials: true
});

export default API;