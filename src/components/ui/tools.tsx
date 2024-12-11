import React, { useState } from 'react';
import { Calculator, Home, LineChart } from 'lucide-react';
import HomeValueCalculator from '../home-value-calculator.tsx';
import MortgageCalculator from '../MortgageCalculator.js';
import MarketAnalysisTool from '../MarketAnalysis.js';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../../styles/all.css'


const Tools = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const tools = [
    {
      id: 'mortgage',
      title: 'Mortgage Calculator',
      description: 'Calculate your monthly mortgage payments and see detailed amortization schedules.',
      icon: <Calculator className="w-12 h-12 text-[#b68319]" />,
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
      content: (
        <MortgageCalculator />
      )
    },
    {
      id: 'valuation',
      title: 'Property Valuation',
      description: 'Get an instant estimate of your propertys current market value.',
      icon: <Home className="w-12 h-12 text-[#b68319]" />,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
      content: (
        <HomeValueCalculator />
      )
    },
    {
      id: 'market',
      title: 'Market Analysis',
      description: 'Track real estate trends and analyze market conditions in your area.',
      icon: <LineChart className="w-12 h-12 text-[#b68319]" />,
      image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80&w=800',
      content: (
        <MarketAnalysisTool />
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[white] py-16 ">
      {/* Tools Section Header */}
      <div className="container tools-sec pt-20 pb-28 mx-auto px-4 mt-20 mb-20 bg-[white] ">
      <h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
             Our Real Estate Tools
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="gradient-text"
            >
              
            </motion.span>
          </h1>
        <p className="text-center text-[#c9a760] max-w-2xl mx-auto">
          Discover our powerful suite of real estate tools designed to help you make informed decisions
          about your property journey.
        </p>
      </div>

      {/* Tools Cards */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  {tool.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <button
                  onClick={() => setActiveSection(tool.id)}
                  className="w-full bg-[#d69f32] text-gray-50 px-6 py-2 rounded hover:bg-[#c9a760] transition-colors"
                >
                  Try Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tool Content Sections */}
      {tools.map((tool) => (
        <div
          key={tool.id}
          className={`container mx-auto px-4 mb-16 transition-all duration-500 ${
            activeSection === tool.id ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          {tool.content}
        </div>
      ))}
    </div>
  );
};

export default Tools;