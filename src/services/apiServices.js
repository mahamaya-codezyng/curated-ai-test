import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_LOCALHOST_BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  }
});

export default api;
