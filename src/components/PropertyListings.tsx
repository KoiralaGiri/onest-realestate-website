import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, MapPin, Bed, Bath, Square, Heart, DollarSign, Calendar, Home, ArrowRight } from 'lucide-react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { cn } from '../utils/cn';

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  images: string[];
  features: string[];
  yearBuilt: number;
  propertyType: string;
  status: 'For Sale' | 'Pending' | 'Sold';
}

const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    location: 'Alexandria, VA',
    price: '$1,250,000',
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    description: 'Stunning modern villa with panoramic views of the Potomac River. Features include a gourmet kitchen, home theater, and private pool.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea'
    ],
    features: [
      'Smart Home Technology',
      'Wine Cellar',
      'Heated Floors',
      'Electric Car Charging'
    ],
    yearBuilt: 2021,
    propertyType: 'Single Family',
    status: 'For Sale'
  },
  {
    id: '2',
    title: 'Elegant Townhouse',
    location: 'Arlington, VA',
    price: '$875,000',
    beds: 3,
    baths: 2.5,
    sqft: 2400,
    description: 'Beautifully renovated townhouse in the heart of Arlington. Walking distance to metro and shopping.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea'
    ],
    features: [
      'Rooftop Terrace',
      'Custom Closets',
      'Gas Fireplace',
      'Premium Appliances'
    ],
    yearBuilt: 2019,
    propertyType: 'Townhouse',
    status: 'Pending'
  }
];

const PropertyCard = ({ property, onClick }: { property: Property; onClick: () => void }) => {
  const id = useId();
  
  return (
    <motion.div
      layoutId={`card-${property.id}-${id}`}
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden cursor-pointer group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        layoutId={`image-container-${property.id}-${id}`}
        className="relative h-64 overflow-hidden"
      >
        <motion.img
          layoutId={`image-${property.id}-${id}`}
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
        >
          <Heart className="w-5 h-5 text-[#b68319]" />
        </motion.div>
        <motion.div
          layoutId={`status-${property.id}-${id}`}
          className="absolute bottom-4 left-4 bg-[#b68319] text-white px-3 py-1 rounded-full text-sm font-medium"
        >
          {property.status}
        </motion.div>
      </motion.div>

      <motion.div
        layoutId={`content-${property.id}-${id}`}
        className="p-6"
      >
        <motion.h3
          layoutId={`title-${property.id}-${id}`}
          className="text-xl font-bold text-gray-900"
        >
          {property.title}
        </motion.h3>
        
        <motion.div
          layoutId={`location-${property.id}-${id}`}
          className="flex items-center text-gray-600 mt-2"
        >
          <MapPin className="w-4 h-4 mr-1" />
          {property.location}
        </motion.div>

        <motion.div
          layoutId={`price-${property.id}-${id}`}
          className="text-2xl font-bold text-[#b68319] mt-4 flex items-center"
        >
          <DollarSign className="w-6 h-6 mr-1" />
          {property.price}
        </motion.div>

        <motion.div
          layoutId={`stats-${property.id}-${id}`}
          className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t"
        >
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-gray-600">{property.beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-gray-600">{property.baths} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-gray-600">{property.sqft} sqft</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ExpandedCard = ({ property, onClose }: { property: Property; onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  
  useOutsideClick(ref, onClose);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        layoutId={`card-${property.id}-${id}`}
        ref={ref}
        className="w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="relative">
          <motion.button
            className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6" />
          </motion.button>

          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <motion.div
                layoutId={`image-container-${property.id}-${id}`}
                className="relative rounded-xl overflow-hidden"
              >
                <motion.img
                  layoutId={currentImageIndex === 0 ? `image-${property.id}-${id}` : undefined}
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-[400px] object-cover"
                />
                <motion.div
                  layoutId={`status-${property.id}-${id}`}
                  className="absolute bottom-4 left-4 bg-[#b68319] text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {property.status}
                </motion.div>
              </motion.div>

              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {property.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors",
                      currentImageIndex === index ? "border-[#b68319]" : "border-transparent"
                    )}
                  >
                    <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.div
              layoutId={`content-${property.id}-${id}`}
              className="p-8 bg-gray-50"
            >
              <div className="space-y-6">
                <div>
                  <motion.h2
                    layoutId={`title-${property.id}-${id}`}
                    className="text-3xl font-bold text-gray-900"
                  >
                    {property.title}
                  </motion.h2>
                  <motion.div
                    layoutId={`location-${property.id}-${id}`}
                    className="flex items-center text-gray-600 mt-2"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    {property.location}
                  </motion.div>
                </div>

                <motion.div
                  layoutId={`price-${property.id}-${id}`}
                  className="text-4xl font-bold text-[#b68319] flex items-center"
                >
                  <DollarSign className="w-8 h-8 mr-2" />
                  {property.price}
                </motion.div>

                <motion.div
                  layoutId={`stats-${property.id}-${id}`}
                  className="grid grid-cols-3 gap-4"
                >
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                    <Bed className="w-6 h-6 mb-2 text-[#b68319]" />
                    <span className="font-bold text-gray-900">{property.beds}</span>
                    <span className="text-sm text-gray-600">Bedrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                    <Bath className="w-6 h-6 mb-2 text-[#b68319]" />
                    <span className="font-bold text-gray-900">{property.baths}</span>
                    <span className="text-sm text-gray-600">Bathrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                    <Square className="w-6 h-6 mb-2 text-[#b68319]" />
                    <span className="font-bold text-gray-900">{property.sqft}</span>
                    <span className="text-sm text-gray-600">Square Feet</span>
                  </div>
                </motion.div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{property.description}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Features</h3>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {property.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-[#b68319] rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center text-[#b68319] mb-2">
                        <Home className="w-5 h-5 mr-2" />
                        <h3 className="font-bold text-gray-900">Property Type</h3>
                      </div>
                      <p className="text-gray-600">{property.propertyType}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center text-[#b68319] mb-2">
                        <Calendar className="w-5 h-5 mr-2" />
                        <h3 className="font-bold text-gray-900">Year Built</h3>
                      </div>
                      <p className="text-gray-600">{property.yearBuilt}</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#b68319] text-white py-4 rounded-lg font-bold hover:bg-[#8e6614] transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Schedule Viewing</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PropertyListings = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  useEffect(() => {
    if (selectedProperty) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProperty]);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <AnimatePresence mode="wait">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onClick={() => setSelectedProperty(property)}
          />
        ))}
        {selectedProperty && (
          <ExpandedCard
            key="expanded-card"
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PropertyListings;