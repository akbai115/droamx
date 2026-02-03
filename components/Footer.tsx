
import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  onPlanClick?: () => void;
  onArchiveClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPlanClick, onArchiveClick }) => {
  return (
    <div className="fixed bottom-12 inset-x-0 flex justify-between px-12 z-[300] pointer-events-none">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        whileHover={{ opacity: 1 }}
        onClick={onArchiveClick}
        className="pointer-events-auto text-[9px] tracking-[0.4em] uppercase font-extralight transition-opacity"
      >
        ENTER THE ARCHIVE
      </motion.button>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        whileHover={{ opacity: 1 }}
        onClick={onPlanClick}
        className="pointer-events-auto text-[9px] tracking-[0.4em] uppercase font-extralight transition-opacity"
      >
        THE PLAN
      </motion.button>
    </div>
  );
};

export default Footer;
