import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

interface CommunityAccordionItemProps {
  name: string;
  image: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

export const CommunityAccordionItem: React.FC<CommunityAccordionItemProps> = ({
  name,
  image,
  description,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ease-out
        ${isActive ? 'w-[40rem] flex-grow' : 'w-32 flex-shrink-0'} h-[500px]`}
      onClick={onClick}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-700
            hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-b from-black/20 to-black/80
          transition-opacity duration-500 ${isActive ? 'opacity-70' : 'opacity-40'}`} />
      </div>

      <div className="relative h-full flex flex-col justify-end p-8">
        <div className={`flex items-center gap-3 text-white transition-all duration-500
          ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
          <MapPin size={24} className="text-amber-400" />
          <h3 className="text-3xl font-semibold whitespace-nowrap">{name}</h3>
        </div>

        <div className={`overflow-hidden transition-all duration-500 ease-out
          ${isActive ? 'max-h-48 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
          <p className="text-white/90 text-lg leading-relaxed mb-6">{description}</p>
          <button className="flex items-center gap-2 text-amber-400 hover:text-amber-300
            transition-colors duration-300 text-lg">
            Explore Area <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};