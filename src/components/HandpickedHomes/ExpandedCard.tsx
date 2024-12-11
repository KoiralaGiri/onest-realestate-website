import React, { useState, useRef, useId } from 'react';
import { motion } from 'framer-motion';
import { X, MapPin, Bed, Bath, Square, Heart, DollarSign, Calendar, Home } from 'lucide-react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { cn } from '../../utils/cn';
import AnimatedButton from '../ui/AnimatedButton';
import type { Property } from './types';

interface ExpandedCardProps {
  property: Property;
  onClose: () => void;
}

const ExpandedCard: React.FC<ExpandedCardProps> = ({ property, onClose }) => {
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

                <AnimatedButton
                  onClick={() => {/* Schedule viewing logic */}}
                  variant="secondary"
                >
                  Schedule Viewing
                </AnimatedButton>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExpandedCard;