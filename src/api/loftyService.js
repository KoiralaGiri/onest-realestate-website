// src/api/loftyService.js
import loftyApi from './loftyApi';

export const getListings = async (params = {}) => {
  try {
    const response = await loftyApi.get('/listing', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching listings:', error);
    throw error;
  }
};

// Add more functions as needed for different endpoints
