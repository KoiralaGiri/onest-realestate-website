import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

interface CommunityCardProps {
  name: string;
  image: string;
  description: string;
}

export const CommunityCard: React.FC<CommunityCardProps> = ({ name, image, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-[300px] object-cover transition-transform duration-700 
            ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
          opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
      </div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform 
        duration-300 group-hover:translate-y-0">
        <div className="flex items-center gap-2 text-white mb-2">
          <MapPin size={20} className="text-amber-400" />
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        
        <p className="text-gray-200 text-sm mb-4 opacity-0 transform translate-y-4 
          transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {description}
        </p>
        
        <button className="flex items-center gap-2 text-amber-400 opacity-0 transform 
          translate-y-4 transition-all duration-300 group-hover:opacity-100 
          group-hover:translate-y-0 hover:text-amber-300">
          Explore Area <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};