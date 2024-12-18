import React, { useState, useRef, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BedDouble, Bath, Square, ArrowRight, MapPin, DollarSign, Calendar, Home, X } from 'lucide-react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { cn } from '../utils/cn';

// Export the Property interface
export interface Property {
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
    description: 'Stunning modern villa with panoramic views. Features include a gourmet kitchen, home theater, and private pool.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea'
    ],
    features: ['Smart Home Technology', 'Wine Cellar', 'Heated Floors', 'Electric Car Charging'],
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
    features: ['Rooftop Terrace', 'Custom Closets', 'Gas Fireplace', 'Premium Appliances'],
    yearBuilt: 2019,
    propertyType: 'Townhouse',
    status: 'Pending'
  },
  {
    id: '3',
    title: 'Contemporary Condo',
    location: 'Tysons, VA',
    price: '$695,000',
    beds: 2,
    baths: 2,
    sqft: 1800,
    description: 'Luxurious condo with floor-to-ceiling windows offering spectacular city views.',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde',
      'https://images.unsplash.com/photo-1600566752734-2a0cd66c42cb',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea'
    ],
    features: ['Concierge Service', 'Fitness Center', 'Pool', 'Package Room'],
    yearBuilt: 2020,
    propertyType: 'Condo',
    status: 'For Sale'
  },
  {
    id: '4',
    title: 'Colonial Estate',
    location: 'McLean, VA',
    price: '$1,850,000',
    beds: 5,
    baths: 4.5,
    sqft: 4500,
    description: 'Stately colonial home on a private lot with professional landscaping.',
    images: [
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb',
      'https://images.unsplash.com/photo-1600566752519-1e2d45629546',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3'
    ],
    features: ['Library', 'Home Office', 'Wine Room', 'Three-Car Garage'],
    yearBuilt: 2018,
    propertyType: 'Single Family',
    status: 'For Sale'
  },
  {
    id: '5',
    title: 'Waterfront Residence',
    location: 'Old Town Alexandria, VA',
    price: '$2,100,000',
    beds: 4,
    baths: 3.5,
    sqft: 3800,
    description: 'Luxurious waterfront property with private dock and panoramic river views.',
    images: [
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea'
    ],
    features: ['Private Dock', 'Outdoor Kitchen', 'Theater Room', 'Guest Suite'],
    yearBuilt: 2017,
    propertyType: 'Single Family',
    status: 'For Sale'
  },
  {
    id: '6',
    title: 'Modern Loft',
    location: 'Mosaic District, VA',
    price: '$725,000',
    beds: 2,
    baths: 2,
    sqft: 1600,
    description: 'Industrial-chic loft with soaring ceilings and premium finishes.',
    images: [
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87',
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea'
    ],
    features: ['High Ceilings', 'Exposed Brick', 'Custom Lighting', 'Balcony'],
    yearBuilt: 2019,
    propertyType: 'Loft',
    status: 'For Sale'
  },
  {
    id: '7',
    title: 'Garden Townhome',
    location: 'Vienna, VA',
    price: '$895,000',
    beds: 3,
    baths: 3.5,
    sqft: 2200,
    description: 'End-unit townhome with private garden and modern amenities.',
    images: [
      'https://images.unsplash.com/photo-1600566752519-1e2d45629546',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'
    ],
    features: ['Private Garden', 'Smart Home', 'Gourmet Kitchen', 'Roof Deck'],
    yearBuilt: 2020,
    propertyType: 'Townhouse',
    status: 'For Sale'
  },
  {
    id: '8',
    title: 'Luxury Penthouse',
    location: 'Reston, VA',
    price: '$1,450,000',
    beds: 3,
    baths: 3,
    sqft: 2800,
    description: 'Corner penthouse unit with wraparound terrace and city views.',
    images: [
      'https://images.unsplash.com/photo-1600047509697-5191878c36e9',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea'
    ],
    features: ['Wraparound Terrace', 'Floor-to-Ceiling Windows', 'Chef\'s Kitchen', 'Wine Storage'],
    yearBuilt: 2021,
    propertyType: 'Penthouse',
    status: 'For Sale'
  }
];

export const PropertyCard = ({ property, onClick }: { property: Property; onClick: () => void }) => {
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
        className="relative h-48 overflow-hidden"
      >
        <motion.img
          layoutId={`image-${property.id}-${id}`}
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
        >
          <Heart className="w-5 h-5 text-[#b68319]" />
        </motion.button>
        <motion.div
          layoutId={`status-${property.id}-${id}`}
          className="absolute bottom-4 left-4 bg-[#b68319] text-white px-3 py-1 rounded-full text-sm font-medium"
        >
          {property.status}
        </motion.div>
      </motion.div>

      <motion.div
        layoutId={`content-${property.id}-${id}`}
        className="p-4"
      >
        <motion.h3
          layoutId={`title-${property.id}-${id}`}
          className="text-lg font-bold text-gray-900 mb-1"
        >
          {property.title}
        </motion.h3>
        
        <motion.div
          layoutId={`location-${property.id}-${id}`}
          className="flex items-center text-gray-600 text-sm mb-2"
        >
          <MapPin className="w-4 h-4 mr-1" />
          {property.location}
        </motion.div>

        <motion.div
          layoutId={`price-${property.id}-${id}`}
          className="text-xl font-bold text-[#b68319] mb-3"
        >
          {property.price}
        </motion.div>

        <motion.div
          layoutId={`stats-${property.id}-${id}`}
          className="grid grid-cols-3 gap-2 text-sm text-gray-600"
        >
          <div className="flex items-center">
            <BedDouble className="w-4 h-4 mr-1" />
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{property.sqft}</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const ExpandedCard = ({ property, onClose }: { property: Property; onClose: () => void }) => {
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
                    <BedDouble className="w-6 h-6 mb-2 text-[#b68319]" />
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
                  className="relative w-full bg-[#b68319] text-white py-4 rounded-lg font-bold overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-[#8e6614] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="relative flex items-center justify-center space-x-2">
                    <span>Schedule Viewing</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HandpickedHomes = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Handpicked Homes Just for You</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of premium properties in Northern Virginia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
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
      </div>
    </section>
  );
};

export default HandpickedHomes;