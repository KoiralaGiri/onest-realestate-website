import React from 'react';

interface SectionDividerProps {
  variant: 'wave' | 'peaks' | 'curve' | 'triangle';
  fromColor: string;
  toColor: string;
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ 
  variant, 
  fromColor, 
  toColor,
  className = ''
}) => {
  const paths = {
    wave: "M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    peaks: "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,165.3C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    curve: "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,133.3C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    triangle: "M0,128L1440,320L1440,320L0,320Z"
  };

  return (
    <div className={`absolute left-0 right-0 h-32 -mt-32 overflow-hidden pointer-events-none ${className}`}>
      <svg 
        preserveAspectRatio="none"
        viewBox="0 0 1440 320" 
        className="absolute w-full h-full transform scale-y-150"
        style={{ transform: 'translateZ(0)' }}
      >
        <defs>
          <linearGradient id={`gradient-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: fromColor }} />
            <stop offset="100%" style={{ stopColor: toColor }} />
          </linearGradient>
        </defs>
        <path
          d={paths[variant]}
          fill={`url(#gradient-${variant})`}
          className="transition-all duration-700"
        />
      </svg>
    </div>
  );
};