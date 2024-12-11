import React, { useEffect, useState } from 'react';
import { getListings } from '../api/listings';
import type { Listing } from '../api/listings';
import { motion } from 'framer-motion';
import { Home, Bed, Bath, Square } from 'lucide-react';

const ListingCard = ({ listing }: { listing: Listing }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        {listing.buildingName || 'Luxury Property'}
      </h2>
      <div className="flex items-center text-gray-600 mb-4">
        <Home className="w-4 h-4 mr-2" />
        <p>{listing.buildingAddress}</p>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        {listing.bedrooms && (
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1 text-[#b68319]" />
            <span>{listing.bedrooms} beds</span>
          </div>
        )}
        {listing.bathrooms && (
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1 text-[#b68319]" />
            <span>{listing.bathrooms} baths</span>
          </div>
        )}
        {listing.squareFeet && (
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1 text-[#b68319]" />
            <span>{listing.squareFeet} sqft</span>
          </div>
        )}
      </div>

      {listing.price && (
        <div className="text-xl font-bold text-[#b68319]">
          ${listing.price.toLocaleString()}
        </div>
      )}
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-4 w-full bg-[#b68319] text-white py-2 px-4 rounded-full 
          hover:bg-[#8e6614] transition-colors duration-300 flex items-center justify-center gap-2"
      >
        View Details
      </motion.button>
    </div>
  </motion.div>
);

const Listings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchListings = async () => {
      try {
        const data = await getListings();
        if (mounted) {
          setListings(data);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'An error occurred');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchListings();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#b68319]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.reload()}
            className="bg-[#b68319] text-white py-2 px-6 rounded-full 
              hover:bg-[#8e6614] transition-colors duration-300"
          >
            Try Again
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Featured Listings</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <ListingCard key={listing.listingId} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default Listings;