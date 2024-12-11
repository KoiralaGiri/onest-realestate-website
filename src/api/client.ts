import axios from 'axios';
import { API_BASE_URL, API_KEY } from '../config/constants';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  },
  // Add default timeout
  timeout: 10000,
  // Add retry configuration
  validateStatus: (status) => status >= 200 && status < 300,
});

// Add response interceptor to handle errors consistently
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Convert axios error to plain error object
    const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
    throw new Error(errorMessage);
  }
);