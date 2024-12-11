import React from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface ActionButtonsProps {
  onClick?: () => void;
  className?: string;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onClick, className = '' }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          to="/contact"
          className="contact-button"
          onClick={onClick}
        >
          <Send size={16} />
          Contact eNest
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          to="/login"
          className="login-button"
          onClick={onClick}
        >
          Login
        </Link>
      </motion.div>
    </div>
  );
};