import React from 'react';
import { motion } from 'framer-motion';
import { Home, DollarSign, FileText, Key } from 'lucide-react';

const InsightCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
    className="bg-white p-6 rounded-xl shadow-md"
  >
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
      className="w-12 h-12 bg-[#b68319] rounded-full flex items-center justify-center mb-4"
    >
      <Icon className="w-6 h-6 text-white" />
    </motion.div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const BuyerInsights = () => {
  const insights = [
    {
      icon: Home,
      title: "First-Time Buyers",
      description: "Everything you need to know about purchasing your first home in NOVA"
    },
    {
      icon: DollarSign,
      title: "Financial Planning",
      description: "Understanding mortgages, down payments, and hidden costs"
    },
    {
      icon: FileText,
      title: "Market Analysis",
      description: "Current trends and future projections for NOVA real estate"
    },
    {
      icon: Key,
      title: "Buying Process",
      description: "Step-by-step guide through the home buying journey"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Buyer Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert guidance and resources to help you make informed decisions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <InsightCard {...insight} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyerInsights;