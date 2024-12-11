import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building2, Users, Sparkles, ArrowRight, Home, Briefcase, Info, Compass } from 'lucide-react';

const countyPaths = {
  Loudoun: 'm 54.825553,2.3425664 0.387,-0.045 2.393,0.839 -0.396,0.626 -0.041,0.108 -0.004,0.059 -0.024,0.162 -0.012,0.117 0.003,0.01 0.069,0.22 0.057,0.076 0.006,0 0.063,0.045 0.639,0.429 0.019,0.008 0.355,0.023 0.483,-0.023 0.469,-0.053 -1.496,3.096 -1.407,-0.992 -3.177,-0.324 1.018,-1.767 0.596,-2.614',
  Fairfax: 'm 59.291553,4.9435664 2.347,1.176 -0.892,0.537 0.023,0.017 -0.343,0.279 0.343,0.447 0.604,-0.293 0.487,0.352 -0.234,0.545 0.563,0.113 0.617,-0.281 -0.243,1.1239995 -0.257,0.995 -0.884,0.1350001 -3.627,-2.0499996 1.496,-3.096',
  Arlington: 'm 61.638553,6.1195664 0.375,0.306 0.451,0.198 0.265,0.515 -0.765,0.116 -0.104,0.204 -0.487,-0.352 -0.532,-0.383 -0.072,-0.05 -0.023,-0.017 0.892,-0.537',
  'Prince William': 'm 56.388553,7.0475664 1.407,0.992 3.627,2.0499996 -0.483,1.885 -2.37,-0.234 -0.383,-0.469 -2.113,-2.6999996 -0.032,-0.139 0.347,-1.385',
  Stafford: 'm 58.182553,14.313566 -0.27,-0.505 0.657,-2.068 2.37,0.234 0.569,1.956 -0.139,1.379 -0.434,0.067 -0.855,-0.333 -0.036,-0.392 -0.172,-0.172 -0.189,-0.04 -0.253,-0.044 -0.126,0.084 -0.172,0.127 0.064,0.283 -1.014,-0.576',
  Fauquier: 'm 53.211553,6.7235664 3.177,0.324 -0.347,1.385 0.032,0.139 2.113,2.6999996 0.383,0.469 -0.657,2.068 -0.917,0.067 -0.134,-0.017 -0.157,-0.055 -0.091,-0.09 -0.851,-1.103 -0.614,-0.965 -0.896,-0.91 -0.195,0.049 -0.427,-0.122 -0.135,-0.095 -0.059,-0.058 -0.203,-0.361 -0.819,-0.8150001 -0.479,-0.356 0.951,-1.7349994 0.325,-0.519',
  Alexandria: 'm 62.729553,7.1385664 0.072,0.64 0.005,0.057 -0.617,0.281 -0.563,-0.113 0.234,-0.545 0.104,-0.204 0.765,-0.116',
  'Falls Church': 'm 61.373553,7.1065664 -0.604,0.293 -0.343,-0.447 0.343,-0.279 0.072,0.05 0.532,0.383',
  'King George': 'm 61.508553,13.930566 3.02,0.307 -0.334,1.613 -0.504,0.257 -2.321,-0.798 0.139,-1.379',
  Manassas: 'm 58.335553,8.8695659 0.221,0.093 0.09,0.077 0.081,0.069 0.009,0.391 -0.491,0.496 -0.266,-0.117 -0.076,-0.216 0.021,-0.139 0.199,-0.447 0.203,-0.212 0.009,0.005'
};

const novaCounties = [
  {
    name: 'Loudoun',
    description: 'Tech hub with thriving wine country and data centers',
    image: '/api/placeholder/800/400',
    stats: {
      population: '420,000',
      medianIncome: '$142,299',
      growth: '+12.3%',
      medianHome: '$725,000'
    },
    highlights: ['Tech Corridor', 'Wine Country', 'Data Center Hub', 'Top Schools']
  },
  {
    name: 'Fairfax',
    description: 'Major business hub and cultural center of NOVA',
    image: '/api/placeholder/800/400',
    stats: {
      population: '1.2M',
      medianIncome: '$128,374',
      growth: '+8.2%',
      medianHome: '$685,000'
    },
    highlights: ['Business District', 'Shopping Centers', 'Cultural Hub', 'Tech Jobs']
  },
  {
    name: 'Arlington',
    description: 'Urban center with key government agencies and tech companies',
    image: '/api/placeholder/800/400',
    stats: {
      population: '238,000',
      medianIncome: '$120,950',
      growth: '+10.1%',
      medianHome: '$750,000'
    },
    highlights: ['Pentagon', 'Amazon HQ2', 'Metro Access', 'Urban Living']
  },
  {
    name: 'Prince William',
    description: 'Growing community with rich history and modern amenities',
    image: '/api/placeholder/800/400',
    stats: {
      population: '482,000',
      medianIncome: '$107,132',
      growth: '+14.8%',
      medianHome: '$520,000'
    },
    highlights: ['Historic Sites', 'Parks', 'Family-Friendly', 'Growing Tech']
  },
  {
    name: 'Stafford',
    description: 'Mix of historic sites and modern development',
    image: '/api/placeholder/800/400',
    stats: {
      population: '156,000',
      medianIncome: '$111,108',
      growth: '+15.2%',
      medianHome: '$475,000'
    },
    highlights: ['Military Base', 'Historic Downtown', 'Commuter Hub', 'Parks']
  },
  {
    name: 'Fauquier',
    description: 'Scenic countryside and equestrian communities',
    image: '/api/placeholder/800/400',
    stats: {
      population: '72,000',
      medianIncome: '$98,560',
      growth: '+7.1%',
      medianHome: '$535,000'
    },
    highlights: ['Wine Country', 'Horse Farms', 'Historic Sites', 'Rural Living']
  },
  {
    name: 'Alexandria',
    description: 'Historic waterfront city with vibrant culture',
    image: '/api/placeholder/800/400',
    stats: {
      population: '160,000',
      medianIncome: '$103,284',
      growth: '+6.5%',
      medianHome: '$625,000'
    },
    highlights: ['Old Town', 'Waterfront', 'Shopping', 'Metro Access']
  },
  {
    name: 'Falls Church',
    description: 'Small but vibrant city with excellent schools',
    image: '/api/placeholder/800/400',
    stats: {
      population: '15,000',
      medianIncome: '$127,610',
      growth: '+5.2%',
      medianHome: '$820,000'
    },
    highlights: ['Top Schools', 'Arts Scene', 'Farmers Market', 'Community Events']
  },
  {
    name: 'King George',
    description: 'Rural county with strong military presence',
    image: '/api/placeholder/800/400',
    stats: {
      population: '26,836',
      medianIncome: '$89,500',
      growth: '+4.8%',
      medianHome: '$379,000'
    },
    highlights: ['Naval Base', 'Rural Living', 'Waterfront', 'Historic Sites']
  },
  {
    name: 'Manassas',
    description: 'Independent city with rich Civil War history',
    image: '/api/placeholder/800/400',
    stats: {
      population: '41,457',
      medianIncome: '$81,240',
      growth: '+7.6%',
      medianHome: '$425,000'
    },
    highlights: ['Civil War Sites', 'Historic Downtown', 'Regional Airport', 'Cultural Events']
  }
];

const EmptyStateCard = ({ onExplore }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="sticky top-8 bg-black/40 backdrop-blur-xl rounded-2xl 
      border border-white/10 overflow-hidden shadow-2xl p-8"
  >
    <div className="flex items-center justify-center mb-8">
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="p-4 bg-amber-400/20 rounded-full"
      >
        <Compass size={48} className="text-amber-400" />
      </motion.div>
    </div>
    
    <h3 className="text-2xl font-bold text-white text-center mb-4">
      Explore Northern Virginia
    </h3>
    
    <p className="text-gray-300 text-center mb-6">
      Click on a county or use the buttons below to discover the unique features
      and opportunities each area has to offer.
    </p>
    
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="bg-white/5 rounded-lg p-4 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold text-amber-400 mb-2"
        >
          10+
        </motion.div>
        <div className="text-sm text-gray-400">Unique Counties</div>
      </div>
      <div className="bg-white/5 rounded-lg p-4 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold text-amber-400 mb-2"
        >
          3M+
        </motion.div>
        <div className="text-sm text-gray-400">Residents</div>
      </div>
    </div>

    <div className="space-y-4">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onExplore}
        className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-600
          text-amber-950 rounded-lg font-medium flex items-center justify-center gap-2
          hover:shadow-lg hover:shadow-amber-500/20 transition-shadow"
      >
        Start Exploring
        <ArrowRight size={18} />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 px-4 bg-white/5 text-white rounded-lg font-medium
          flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
      >
        View Demographics
        <Users size={18} />
      </motion.button>

      <div className="text-center mt-6">
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-amber-400/60 flex items-center justify-center gap-2"
        >
          <ArrowRight className="rotate-90" size={16} />
          Scroll to explore more
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export const NeighborhoodMap = () => {
  const [activeCounty, setActiveCounty] = useState(null);
  const [hoveredCounty, setHoveredCounty] = useState(null);

  const selectedCounty = novaCounties.find(c => 
    c.name === (activeCounty || hoveredCounty)
  );

  return (
    <section className="bg-[#141517] py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Northern Virginia
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore the diverse communities and opportunities in NOVA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Map and Buttons */}
          <div className="lg:col-span-7 space-y-8">
            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 
                backdrop-blur-sm p-8 border border-white/10 shadow-2xl"
            >
              <svg
                viewBox="48 0 15 16"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.1))' }}
              >
                {Object.entries(countyPaths).map(([name, path]) => (
                  <motion.path
                    key={name}
                    d={path}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    animate={{
                      fill: activeCounty === name || hoveredCounty === name
                        ? 'url(#countyGradient)'
                        : 'rgb(255 255 255 / 0.1)',
                      stroke: activeCounty === name || hoveredCounty === name
                        ? 'rgb(252 211 77)'
                        : 'rgb(255 255 255 / 0.2)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredCounty(name)}
                    onMouseLeave={() => setHoveredCounty(null)}
                    onClick={() => setActiveCounty(name === activeCounty ? null : name)}
                  />
                ))}
                <defs>
                  <linearGradient id="countyGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgb(251 191 36 / 0.8)" />
                    <stop offset="100%" stopColor="rgb(245 158 11 / 0.8)" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* County Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {novaCounties.map((county, index) => (
                <motion.button
                  key={county.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredCounty(county.name)}
                  onMouseLeave={() => setHoveredCounty(null)}
                  onClick={() => setActiveCounty(county.name === activeCounty ? null : county.name)}
                  className={`group relative overflow-hidden flex items-center gap-3 px-6 py-4 
                    rounded-xl border transition-all duration-500
                    ${activeCounty === county.name 
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 border-amber-300 shadow-lg shadow-amber-500/20' 
                      : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-2 rounded-lg ${activeCounty === county.name 
                      ? 'bg-amber-300/50' 
                      : 'bg-white/10'}`}
                  >
                    <MapPin size={20} className={activeCounty === county.name 
                      ? 'text-amber-900' 
                      : 'text-amber-400'} />
                  </motion.div>
                  <span className="font-medium">{county.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Column - County Information Card */}
          <div className="lg:col-span-5 h-full">
            <AnimatePresence mode="wait">
              {selectedCounty ? (
                <motion.div
                  key={selectedCounty.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="sticky top-8 bg-black/40 backdrop-blur-xl rounded-2xl 
                    border border-white/10 overflow-hidden shadow-2xl"
                >
                  {/* County Image with Gradient Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={selectedCounty.image}
                      alt={selectedCounty.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"/>
                  </div>

                  <div className="relative p-6">
                    <div className="flex items-center gap-4 mb-6 -mt-12">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="p-4 bg-amber-400 rounded-xl shadow-xl"
                      >
                        <MapPin size={24} className="text-amber-950" />
                      </motion.div>
                      <div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {selectedCounty.name}
                          </h3>
                          <p className="text-amber-300/80 text-sm">
                            {selectedCounty.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-lg p-3">
                        <Users size={18} className="text-amber-400 mb-1" />
                        <div className="text-sm">
                          <div className="text-white font-medium">
                            {selectedCounty.stats.population}
                          </div>
                          <div className="text-gray-400">Population</div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <Briefcase size={18} className="text-amber-400 mb-1" />
                        <div className="text-sm">
                          <div className="text-white font-medium">
                            {selectedCounty.stats.medianIncome}
                          </div>
                          <div className="text-gray-400">Income</div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <Home size={18} className="text-amber-400 mb-1" />
                        <div className="text-sm">
                          <div className="text-white font-medium">
                            {selectedCounty.stats.medianHome}
                          </div>
                          <div className="text-gray-400">Median Home</div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <Sparkles size={18} className="text-amber-400 mb-1" />
                        <div className="text-sm">
                          <div className="text-white font-medium">
                            {selectedCounty.stats.growth}
                          </div>
                          <div className="text-gray-400">Growth</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 flex-wrap mb-6">
                      {selectedCounty.highlights.map((highlight, index) => (
                        <motion.span
                          key={highlight}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-3 py-1 bg-amber-400/10 text-amber-400 rounded-full
                            text-sm font-medium"
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-amber-400 group"
                      >
                        Learn more about {selectedCounty.name}
                        <ArrowRight size={16} className="transition-transform duration-300
                          group-hover:translate-x-1" />
                      </motion.button>
                    </div>

                    {/* Animated Background Pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-5"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '30px 30px',
                      }}
                    />
                  </div>
                </motion.div>
              ) : (
                <EmptyStateCard onExplore={() => setActiveCounty('Fairfax')} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodMap;