import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, BedDouble, Bath, Square } from 'lucide-react';
import { Property, ExpandedCard } from './HandpickedHomes';
import USStateMap from './USStateMap';

interface Agent {
  id: string;
  name: string;
  role: string;
  image: string;
  link: string;
}

interface StateContent {
  properties: Property[];
  agents: Agent[];
}

const mockStateContent: Record<string, StateContent> = {
  FL: {
    properties: [
      {
        id: '1',
        title: 'Luxury Beachfront Villa',
        location: 'Miami Beach, FL',
        price: '$2,450,000',
        beds: 4,
        baths: 3.5,
        sqft: 3200,
        images: ['/api/placeholder/400/300'],
        description: 'Stunning beachfront property with panoramic ocean views',
        features: ['Ocean View', 'Private Pool', 'Smart Home'],
        yearBuilt: 2022,
        propertyType: 'Villa',
        status: 'For Sale'
      },
      // Add more properties...
    ],
    agents: [
      {
        id: '1',
        name: 'Sarah Johnson',
        role: 'Luxury Property Specialist',
        image: '/api/placeholder/300/400',
        link: '/agents/sarah-johnson'
      },
      // Add more agents...
    ]
  }
};

const StateExplorer: React.FC = () => {
  const [activeState, setActiveState] = useState<string | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleStateHover = (state: string) => {
    if (state !== activeState) {
      setActiveState(state);
    }
  };

  const handleStateLeave = () => {
    setActiveState(null);
  };

  return (
    <div className="relative h-[800px] flex items-center justify-center bg-gray-50/50 backdrop-blur-sm rounded-xl p-8">
      <motion.div
        className="relative"
        animate={{
          x: activeState ? -300 : 0,
          width: activeState ? '600px' : '1000px',
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      >
        <USStateMap
          activeState={activeState}
          onStateHover={handleStateHover}
        />

        <AnimatePresence>
          {activeState && (
            <motion.div
              className="absolute top-0 left-[calc(100%+4rem)] w-[600px] h-full"
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {mockStateContent[activeState] && (
                <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-8">
                  <div className="grid grid-cols-1 gap-6">
                    {/* Properties Section */}
                    <div>
                      <h3 className="text-lg font-medium mb-4">Featured Properties</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {mockStateContent[activeState].properties.slice(0, 4).map(property => (
                          <motion.div
                            key={property.id}
                            className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
                            onClick={() => setSelectedProperty(property)}
                            whileHover={{ y: -4 }}
                          >
                            <img
                              src={property.images[0]}
                              alt={property.title}
                              className="w-full h-full object-cover"
                            />
                            <motion.div
                              initial={false}
                              animate={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                            >
                              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <motion.h3
                                  initial={{ y: 10, opacity: 0 }}
                                  whileHover={{ y: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                  className="font-bold text-lg mb-1 line-clamp-1"
                                >
                                  {property.title}
                                </motion.h3>
                                <motion.div
                                  initial={{ y: 10, opacity: 0 }}
                                  whileHover={{ y: 0, opacity: 1 }}
                                  transition={{ duration: 0.2, delay: 0.05 }}
                                  className="flex items-center text-sm mb-2"
                                >
                                  <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                                  <span className="line-clamp-1">{property.location}</span>
                                </motion.div>
                                <motion.div
                                  initial={{ y: 10, opacity: 0 }}
                                  whileHover={{ y: 0, opacity: 1 }}
                                  transition={{ duration: 0.2, delay: 0.1 }}
                                  className="flex justify-between items-center"
                                >
                                  <span className="text-xl font-bold">{property.price}</span>
                                  <div className="flex items-center space-x-3 text-sm">
                                    <div className="flex items-center">
                                      <BedDouble className="w-4 h-4 mr-1" />
                                      {property.beds}
                                    </div>
                                    <div className="flex items-center">
                                      <Bath className="w-4 h-4 mr-1" />
                                      {property.baths}
                                    </div>
                                    <div className="flex items-center">
                                      <Square className="w-4 h-4 mr-1" />
                                      {property.sqft}
                                    </div>
                                  </div>
                                </motion.div>
                              </div>
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Agents Section */}
                    <div>
                      <h3 className="text-lg font-medium mb-4">Local Experts</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {mockStateContent[activeState].agents.map(agent => (
                          <motion.div
                            key={agent.id}
                            className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
                            whileHover={{ y: -4 }}
                          >
                            <img
                              src={agent.image}
                              alt={agent.name}
                              className="w-full h-full object-cover"
                            />
                            <motion.div
                              initial={false}
                              animate={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                            >
                              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <motion.h3
                                  initial={{ y: 10, opacity: 0 }}
                                  whileHover={{ y: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                  className="font-bold text-lg mb-1"
                                >
                                  {agent.name}
                                </motion.h3>
                                <motion.div
                                  initial={{ y: 10, opacity: 0 }}
                                  whileHover={{ y: 0, opacity: 1 }}
                                  transition={{ duration: 0.2, delay: 0.05 }}
                                  className="flex items-center justify-between"
                                >
                                  <span className="text-sm text-white/90">{agent.role}</span>
                                  <ArrowRight className="w-4 h-4" />
                                </motion.div>
                              </div>
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Property Details Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <ExpandedCard
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default StateExplorer;