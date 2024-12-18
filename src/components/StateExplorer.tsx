import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Property, PropertyCard, ExpandedCard } from './HandpickedHomes';
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
      {
        id: '2',
        title: 'Downtown Penthouse',
        location: 'Brickell, Miami, FL',
        price: '$1,850,000',
        beds: 3,
        baths: 2.5,
        sqft: 2800,
        images: ['/api/placeholder/400/300'],
        description: 'Luxurious penthouse with stunning city views',
        features: ['City View', 'Private Terrace', 'Concierge'],
        yearBuilt: 2021,
        propertyType: 'Penthouse',
        status: 'For Sale'
      },
      {
        id: '3',
        title: 'Waterfront Estate',
        location: 'Palm Beach, FL',
        price: '$3,950,000',
        beds: 5,
        baths: 4.5,
        sqft: 4500,
        images: ['/api/placeholder/400/300'],
        description: 'Magnificent waterfront estate with private dock',
        features: ['Water View', 'Private Dock', 'Pool'],
        yearBuilt: 2020,
        propertyType: 'Estate',
        status: 'For Sale'
      },
      {
        id: '4',
        title: 'Golf Course Villa',
        location: 'Naples, FL',
        price: '$1,650,000',
        beds: 3,
        baths: 3,
        sqft: 2600,
        images: ['/api/placeholder/400/300'],
        description: 'Beautiful villa overlooking championship golf course',
        features: ['Golf View', 'Pool', 'Club Access'],
        yearBuilt: 2019,
        propertyType: 'Villa',
        status: 'For Sale'
      }
    ],
    agents: [
      {
        id: '1',
        name: 'Sarah Johnson',
        role: 'Luxury Property Specialist',
        image: '/api/placeholder/300/400',
        link: '/agents/sarah-johnson'
      },
      {
        id: '2',
        name: 'Michael Chen',
        role: 'Waterfront Expert',
        image: '/api/placeholder/300/400',
        link: '/agents/michael-chen'
      },
      {
        id: '3',
        name: 'Emma Rodriguez',
        role: 'Senior Agent',
        image: '/api/placeholder/300/400',
        link: '/agents/emma-rodriguez'
      }
    ]
  }
};

const AgentCard: React.FC<{ agent: Agent }> = ({ agent }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative rounded-xl overflow-hidden"
      >
        <div className="h-64">
          <img 
            src={agent.image} 
            alt={agent.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex flex-col justify-end p-6"
        >
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-white font-bold text-xl mb-2"
          >
            {agent.name}
          </motion.h3>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-sm mb-4"
          >
            {agent.role}
          </motion.p>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center text-white"
          >
            <span className="mr-2">View Profile</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

interface StatePopupProps {
  content: StateContent;
  position: { x: number; y: number };
  onPropertyClick: (property: Property) => void;
}

const StatePopup: React.FC<StatePopupProps> = ({ content, position, onPropertyClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      className="fixed z-50 bg-white rounded-2xl shadow-2xl p-8 w-[80vw] max-w-7xl"
      style={{
        left: '50%',
        top: position.y,
        transform: 'translateX(-50%)',
        transformOrigin: 'center center'
      }}
    >
      <div className="grid grid-cols-12 gap-8">
        {/* Left Properties */}
        <div className="col-span-3 space-y-6">
          {content.properties.slice(0, 2).map(property => (
            <div key={property.id} onClick={() => onPropertyClick(property)}>
              <PropertyCard property={property} onClick={() => onPropertyClick(property)} />
            </div>
          ))}
        </div>

        {/* Center Agents */}
        <div className="col-span-6">
          <div className="grid grid-cols-3 gap-6">
            {content.agents.map(agent => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>

        {/* Right Properties */}
        <div className="col-span-3 space-y-6">
          {content.properties.slice(2, 4).map(property => (
            <div key={property.id} onClick={() => onPropertyClick(property)}>
              <PropertyCard property={property} onClick={() => onPropertyClick(property)} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const StateExplorer: React.FC = () => {
  const [activeState, setActiveState] = useState<string | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleStateHover = (state: string, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: rect.left,
      y: Math.min(window.innerHeight - 600, rect.bottom + window.scrollY + 20)
    });
    setActiveState(state);
  };

  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      {/* Map Container */}
      <div className="w-[800px] h-[500px] bg-gray-50 rounded-xl p-8">
        <USStateMap
          activeState={activeState}
          onStateHover={handleStateHover}
        />
      </div>

      {/* State Popup */}
      <AnimatePresence>
        {activeState && mockStateContent[activeState] && (
          <StatePopup
            content={mockStateContent[activeState]}
            position={mousePosition}
            onPropertyClick={setSelectedProperty}
          />
        )}
      </AnimatePresence>

      {/* Expanded Property Card */}
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