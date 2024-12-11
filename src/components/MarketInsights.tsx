import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Home, Clock, BarChart2, MapPin } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '12%',
    label: 'Property Value Increase',
    description: 'Year over year growth in featured areas'
  },
  {
    icon: Users,
    value: '2,500+',
    label: 'Happy Families',
    description: 'Successfully placed in their dream homes'
  },
  {
    icon: Home,
    value: '98%',
    label: 'Listing Success Rate',
    description: 'Of our listings sold within 90 days'
  },
  {
    icon: Clock,
    value: '21 Days',
    label: 'Average Days on Market',
    description: 'For properties in featured communities'
  }
];

const trends = [
  { label: 'Median Home Price', value: '$425,000', change: '+8.5%' },
  { label: 'Days on Market', value: '21', change: '-15%' },
  { label: 'Inventory', value: '1,250', change: '+12%' }
];

export const MarketInsights = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Market Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest market trends and statistics from our
              featured communities.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-brand-primary/5 rounded-2xl 
                transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-6 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 mx-auto mb-4 bg-brand-primary/10 rounded-full 
                    flex items-center justify-center"
                >
                  <stat.icon size={24} className="text-brand-primary" />
                </motion.div>
                <h3 className="text-3xl font-bold text-brand-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-900 font-semibold mb-2">{stat.label}</p>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-brand-primary/10 rounded-full">
              <BarChart2 size={24} className="text-brand-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Market Trends</h3>
              <p className="text-gray-600">Latest updates from the local market</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trends.map((trend, index) => (
              <motion.div
                key={trend.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-sm"
              >
                <p className="text-gray-600 text-sm mb-2">{trend.label}</p>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold text-gray-900">{trend.value}</span>
                  <span className={`text-sm font-medium ${
                    trend.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {trend.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 
            text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            <MapPin size={20} />
            View Local Market Reports
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};