import { apiClient } from './client';

export interface ListingParams {
  page?: number;
  limit?: number;
  [key: string]: any;
}

export interface Listing {
  listingId: string;
  buildingName: string;
  buildingAddress: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  status?: string;
}

export const getListings = async (params: ListingParams = {}): Promise<Listing[]> => {
  try {
    const response = await apiClient.get<{ data: Listing[] }>('/listing', { 
      params,
      // Add timeout and retry config
      timeout: 10000,
      validateStatus: (status) => status >= 200 && status < 300,
    });
    
    // Ensure we're returning a plain array of listings
    return Array.isArray(response.data) ? response.data : [];
    
  } catch (error) {
    // Convert error to a plain object
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch listings';
    throw new Error(errorMessage);
  }
};