import React, { useState } from 'react';
import { Search, Activity, Map, Users, DollarSign, Key, Building, Shield, BarChart } from 'lucide-react';

const BentoItem = ({ 
  icon: Icon, 
  title, 
  description, 
  className = '', 
  size = 'default',
  iconAnimation = 'pulse'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Adjusted size classes to match the image layout exactly
  const sizeClasses = {
    hero: 'col-span-12',          // Full width for hero
    large: 'col-span-6',          // Half width (Market Trends)
    medium: 'col-span-4',         // One third (Area Guide)
    regularRight: 'col-span-4',   // Investment ROI section
    regularLeft: 'col-span-8',    // Virtual Tours section
    regular: 'col-span-4',        // New Listings
    bottom: 'col-span-8',         // Price History
    bottomRight: 'col-span-4'     // Buyer Protection
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]}
        ${className}
        group relative
        overflow-hidden rounded-3xl
        bg-[#1e2430] hover:bg-[#252b38]
        transition-all duration-500 ease-out
        hover:shadow-2xl hover:-translate-y-1
        min-h-[180px]
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Spotlight Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.05), transparent 40%)`,
        }}
      />

      {/* Gradient Overlay Effect */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition-all duration-500 ease-out
        bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/5
      " />

      {/* Content Container */}
      <div className="relative h-full p-6 flex flex-col">
        {/* Icon Container with Lottie-style Animations */}
        <div className="relative mb-4">
          <div className={`
            w-12 h-12 relative
            transition-all duration-300
            ${isHovered ? iconAnimationClasses[iconAnimation] : ''}
          `}>
            <Icon className="
              w-6 h-6 text-amber-500
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              transition-all duration-300
            " />
          </div>
          
          {/* Icon Glow Effect */}
          <div className="
            absolute inset-0 -z-10
            bg-amber-500/20 blur-xl
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            scale-150
          " />
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h3 className="
            font-semibold text-lg text-white
            group-hover:text-amber-500
            transition-colors duration-300
          ">{title}</h3>
          
          <p className="
            text-sm text-gray-400
            group-hover:text-gray-300
            transition-colors duration-300
          ">{description}</p>
        </div>

        {/* Animated Learn More Link */}
        <div className="
          mt-auto pt-4 flex items-center gap-2
          text-amber-500
          opacity-0 -translate-y-2
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300 delay-100
        ">
          <span className="text-sm font-medium">Learn more</span>
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Border Animations */}
        <div className="
          absolute bottom-0 left-0 right-0
          h-[2px] bg-amber-500/50
          transform scale-x-0 group-hover:scale-x-100
          transition-transform duration-500
          origin-left
        " />

        {/* Corner Accents */}
        <div className="
          absolute top-3 left-3
          w-3 h-3 border-t-2 border-l-2
          border-transparent group-hover:border-amber-500/30
          transition-colors duration-500
        " />
        <div className="
          absolute bottom-3 right-3
          w-3 h-3 border-b-2 border-r-2
          border-transparent group-hover:border-amber-500/30
          transition-colors duration-500
        " />
      </div>
    </div>
  );
};

// Define Lottie-style animation classes
const iconAnimationClasses = {
  search: 'animate-search-lottie',
  pulse: 'animate-pulse-lottie',
  map: 'animate-map-lottie',
  chart: 'animate-chart-lottie',
  key: 'animate-key-lottie',
  building: 'animate-building-lottie',
  shield: 'animate-shield-lottie',
  users: 'animate-users-lottie'
};

const BentoGrid = () => {
  const items = [
    {
      icon: Search,
      title: "Smart Search",
      description: "AI-powered home recommendations",
      size: 'hero',
      iconAnimation: 'search'
    },
    {
      icon: Activity,
      title: "Market Trends",
      description: "Real-time market analytics",
      size: 'large',
      iconAnimation: 'chart'
    },
    {
      icon: Map,
      title: "Area Guide",
      description: "Neighborhood insights",
      size: 'medium',
      iconAnimation: 'map'
    },
    {
      icon: Users,
      title: "Expert Agents",
      description: "Top local professionals",
      size: 'medium',
      iconAnimation: 'users'
    },
    {
      icon: DollarSign,
      title: "Investment ROI",
      description: "Return calculations",
      size: 'regularRight',
      iconAnimation: 'pulse'
    },
    {
      icon: Key,
      title: "Virtual Tours",
      description: "3D property viewing",
      size: 'regularLeft',
      iconAnimation: 'key'
    },
    {
      icon: Building,
      title: "New Listings",
      description: "Latest properties",
      size: 'regular',
      iconAnimation: 'building'
    },
    {
      icon: Shield,
      title: "Buyer Protection",
      description: "Secure transactions",
      size: 'bottomRight',
      iconAnimation: 'shield'
    },
    {
      icon: BarChart,
      title: "Price History",
      description: "Historical data analysis",
      size: 'bottom',
      iconAnimation: 'chart'
    }
  ];

  // Add Lottie-style animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes search-lottie {
      0% { transform: scale(1) rotate(0deg); }
      25% { transform: scale(1.2) rotate(-20deg); }
      50% { transform: scale(1.1) rotate(15deg); }
      75% { transform: scale(1.2) rotate(-10deg); }
      100% { transform: scale(1) rotate(0deg); }
    }

    @keyframes pulse-lottie {
      0% { transform: scale(1); }
      25% { transform: scale(1.2); }
      50% { transform: scale(0.9); }
      75% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }

    @keyframes map-lottie {
      0% { transform: translateY(0) scale(1); }
      25% { transform: translateY(-5px) scale(1.1); }
      50% { transform: translateY(3px) scale(0.95); }
      75% { transform: translateY(-2px) scale(1.05); }
      100% { transform: translateY(0) scale(1); }
    }

    @keyframes chart-lottie {
      0% { transform: scaleY(1); }
      25% { transform: scaleY(1.2); }
      50% { transform: scaleY(0.9); }
      75% { transform: scaleY(1.1); }
      100% { transform: scaleY(1); }
    }

    @keyframes key-lottie {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(45deg); }
      50% { transform: rotate(0deg); }
      75% { transform: rotate(-45deg); }
      100% { transform: rotate(0deg); }
    }

    @keyframes building-lottie {
      0% { transform: scale(1) translateY(0); }
      25% { transform: scale(1.1) translateY(-3px); }
      50% { transform: scale(1) translateY(0); }
      75% { transform: scale(1.1) translateY(-2px); }
      100% { transform: scale(1) translateY(0); }
    }

    @keyframes shield-lottie {
      0% { transform: scale(1); }
      25% { transform: scale(1.2) rotate(5deg); }
      50% { transform: scale(1.1) rotate(-5deg); }
      75% { transform: scale(1.15) rotate(3deg); }
      100% { transform: scale(1) rotate(0deg); }
    }

    @keyframes users-lottie {
      0% { transform: scale(1) translateX(0); }
      25% { transform: scale(1.1) translateX(-3px); }
      50% { transform: scale(1) translateX(3px); }
      75% { transform: scale(1.1) translateX(-2px); }
      100% { transform: scale(1) translateX(0); }
    }

    .animate-search-lottie { animation: search-lottie 2s ease-in-out infinite; }
    .animate-pulse-lottie { animation: pulse-lottie 2s ease-in-out infinite; }
    .animate-map-lottie { animation: map-lottie 2s ease-in-out infinite; }
    .animate-chart-lottie { animation: chart-lottie 2s ease-in-out infinite; }
    .animate-key-lottie { animation: key-lottie 2s ease-in-out infinite; }
    .animate-building-lottie { animation: building-lottie 2s ease-in-out infinite; }
    .animate-shield-lottie { animation: shield-lottie 2s ease-in-out infinite; }
    .animate-users-lottie { animation: users-lottie 2s ease-in-out infinite; }
  `;
  document.head.appendChild(style);

  return (
    <section className="w-full py-20 bg-[#131720]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive real estate solutions powered by innovative technology
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {items.map((item, index) => (
            <BentoItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;