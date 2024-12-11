import React from 'react';
import { motion } from 'framer-motion';
import { Home, Key, DollarSign, Map, BarChart, Users, Building, Shield } from 'lucide-react';
import { BentoItem } from './BentoItem';

const items = [
  {
    icon: Home,
    title: "Smart Search",
    description: "AI-powered home recommendations",
    size: 'large',
    bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    gradient: "from-purple-900/80 to-amber-900/80"
  },
  {
    icon: DollarSign,
    title: "Market Analysis",
    description: "Real-time property insights",
    size: 'default',
    gradient: "from-blue-900/90 to-cyan-900/90"
  },
  {
    icon: Map,
    title: "Area Guide",
    description: "Explore NOVA neighborhoods",
    size: 'tall',
    gradient: "from-emerald-900/90 to-green-900/90"
  },
  {
    icon: Users,
    title: "Expert Agents",
    description: "Professional guidance",
    size: 'small',
    gradient: "from-rose-900/90 to-red-900/90"
  },
  {
    icon: Key,
    title: "Virtual Tours",
    description: "Experience properties remotely",
    size: 'default',
    bgImage: "https://images.unsplash.com/photo-1558244661-d248897f7bc4",
    gradient: "from-fuchsia-900/80 to-purple-900/80"
  },
  {
    icon: BarChart,
    title: "Investment ROI",
    description: "Calculate your returns",
    size: 'default',
    gradient: "from-violet-900/90 to-indigo-900/90"
  },
  {
    icon: Shield,
    title: "Buyer Protection",
    description: "Your interests secured",
    size: 'small',
    gradient: "from-teal-900/90 to-cyan-900/90"
  },
  {
    icon: Building,
    title: "New Developments",
    description: "Latest NOVA projects",
    size: 'wide',
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    gradient: "from-amber-900/80 to-orange-900/80"
  }
] as const;

const BentoGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-display-2 mb-4">Our Services</h2>
          <p className="text-body-1 text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-4 auto-rows-[180px] gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BentoItem {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;