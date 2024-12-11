import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { path: '/about', label: 'About Us' },
  { path: '/buyers', label: 'Buyers' },
  { path: '/sellers', label: 'Sellers' },
  { path: '/communities', label: 'Communities' },
  { path: '/tools', label: 'Tools' }
] as const;

interface NavLinksProps {
  onClick?: () => void;
  className?: string;
}

export const NavLinks: React.FC<NavLinksProps> = ({ onClick, className = '' }) => {
  return (
    <div className={`nav-links ${className}`}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="nav-link"
          onClick={onClick}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};