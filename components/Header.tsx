
import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onPlanClick?: () => void;
  onArchiveClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPlanClick, onArchiveClick }) => {
  return (
    <>
      {/* Top Left: ARCHIVE */}
      <div className="fixed top-10 left-10 z-[500]">
        <motion.button
          whileHover={{ opacity: 1, x: 2 }}
          onClick={onArchiveClick}
          className="text-[8px] tracking-[0.6em] uppercase font-light opacity-30 transition-all pointer-events-auto"
        >
          ARCHIVE
        </motion.button>
      </div>

      {/* Top Center: BRAND */}
      <div className="fixed top-10 inset-x-0 flex justify-center z-[500] pointer-events-none">
        <span className="text-[9px] tracking-[1em] font-extralight uppercase opacity-40">
          YZY DROAM
        </span>
      </div>

      {/* Top Right: THE PLAN */}
      <div className="fixed top-10 right-10 z-[500]">
        <motion.button
          whileHover={{ opacity: 1, x: -2 }}
          onClick={onPlanClick}
          className="text-[8px] tracking-[0.6em] uppercase font-light opacity-30 transition-all pointer-events-auto"
        >
          THE PLAN
        </motion.button>
      </div>
    </>
  );
};

export default Header;
