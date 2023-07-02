import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://api.example.com', // Replace with your API URL
});

export default axiosInstance;
