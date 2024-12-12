import React from 'react';
import { Home } from 'lucide-react';

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const AnimatedFooter: React.FC = () => {
  const AnimatedLink = ({ href, children, className = "" }: AnimatedLinkProps) => {
    return (
      <a
        href={href}
        className={`group relative inline-block text-gray-400 hover:text-white transition-all duration-500 ${className}`}
      >
        <span className="relative block overflow-hidden">
          <span className="absolute inset-0 h-full w-full bg-yellow-500 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-[-1]" />
          <span className="relative">{children}</span>
        </span>
      </a>
    );
  };

  return (
    <footer className="relative bg-[#1B1B1B] text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Main Navigation and CTA Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-x-16 gap-y-12">
          {/* Left Column - Buyers */}
          <div className="text-center md:text-left">
            <h3 className="text-yellow-500 font-medium text-xl mb-6">Buyers</h3>
            <div className="flex flex-col space-y-4">
              <AnimatedLink href="/email-marketing">Email Marketing</AnimatedLink>
              <AnimatedLink href="/campaigns">Campaigns</AnimatedLink>
              <AnimatedLink href="/branding">Branding</AnimatedLink>
              <AnimatedLink href="/offline">Offline</AnimatedLink>
            </div>
          </div>

          {/* Center Column - CTA Section */}
          <div className="text-center">
            <p className="text-gray-400 mb-3">Are you ready?</p>
            <h2 className="text-4xl font-light mb-8 tracking-wide">Let's get started</h2>
            <div className="flex flex-col items-center space-y-4">
              <button
                className="group relative overflow-hidden bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-lg transition-all duration-300"
                type="button"
              >
                <span className="relative inline-flex items-center gap-2">
                  <span className="block group-hover:scale-110 transition-transform duration-300">
                    Get started
                  </span>
                  <Home className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <AnimatedLink href="/contact" className="text-sm">
                Contact Us
              </AnimatedLink>
            </div>
          </div>

          {/* Right Column - Sellers */}
          <div className="text-center md:text-right">
            <h3 className="text-yellow-500 font-medium text-xl mb-6">Sellers</h3>
            <div className="flex flex-col space-y-4">
              <AnimatedLink href="/our-story">Our Story</AnimatedLink>
              <AnimatedLink href="/benefits">Benefits</AnimatedLink>
              <AnimatedLink href="/team">Team</AnimatedLink>
              <AnimatedLink href="/careers">Careers</AnimatedLink>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="text-yellow-500 text-3xl font-bold mb-4 tracking-wider">ONEST</div>
          <p className="text-gray-500 text-sm mb-4">
            Copyright © {new Date().getFullYear()} oNest Real Estate.
          </p>
          <div className="flex justify-center space-x-6">
            <AnimatedLink href="/privacy-policy">Privacy Policy</AnimatedLink>
            <AnimatedLink href="/terms-of-service">Terms of Service</AnimatedLink>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1B1B1B] border-t border-gray-800 py-4 px-6">
          <div className="flex justify-around">
            <AnimatedLink href="/buyers">Buyers</AnimatedLink>
            <AnimatedLink href="/sellers">Sellers</AnimatedLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;
