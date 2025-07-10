import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://formspree.io/f/mrbknelb',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
