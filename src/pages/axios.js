import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000/api', // Adjust the baseURL to match your Flask API endpoint
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
