// AI Generated Code by Deloitte + Cursor (BEGIN)
import axios from 'axios';
import type { HomePageData } from '../types/homePage';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor for adding auth tokens
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      if (status === 401) {
        // Handle unauthorized - clear token and redirect to login
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }
      return Promise.reject(new Error(data?.error?.message || 'An error occurred'));
    } else if (error.request) {
      // Request made but no response received
      return Promise.reject(new Error('Network error. Please check your connection.'));
    } else {
      // Something else happened
      return Promise.reject(error);
    }
  }
);

export const getHomePageData = async (): Promise<HomePageData> => {
  try {
    const response = await apiClient.get<HomePageData>('/home-page');
    return response.data;
  } catch (error) {
    console.error('Error fetching home page data:', error);
    throw error;
  }
};

export const subscribeNewsletter = async (email: string): Promise<void> => {
  try {
    await apiClient.post('/newsletter/subscribe', { email });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};

export default apiClient;
// AI Generated Code by Deloitte + Cursor (END)