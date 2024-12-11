import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropertyCard from './PropertyCard';
import ExpandedCard from './ExpandedCard';
import { properties } from './propertyData';

const HandpickedHomes = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <section id="handpicked-homes" className="py-20 bg-gray-50">
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