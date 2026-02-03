
import React from 'react';
import { motion } from 'framer-motion';
import { DroamState } from '../types';
import { COLORS } from '../constants';

interface EnvironmentProps {
  state: DroamState;
  isIdle: boolean;
}

const Environment: React.FC<EnvironmentProps> = ({ isIdle }) => {
  return (
    <motion.div
      className="fixed inset-0 overflow-hidden flex items-center justify-center pointer-events-none bg-[#92B6C7]"
      animate={{
        backgroundColor: COLORS.SKY,
      }}
    >
      {/* Infinite Horizon Glow - Very subtle for high-key look */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[70vh] opacity-[0.07]"
        style={{
          background: `radial-gradient(circle at 50% 100%, ${COLORS.SAND}, transparent 80%)`
        }}
      />

      {/* The Monolith (Vertical Axis) */}
      <motion.div
        className="relative z-10 w-[0.5px] bg-black/20"
        initial={{ height: 0 }}
        animate={{
          height: '55vh',
          opacity: isIdle ? 0.1 : 0.4,
          scaleY: [1, 1.01, 1],
        }}
        transition={{
          height: { duration: 2.5, ease: "circOut" },
          scaleY: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Floor Indicator */}
      <div className="absolute bottom-[20vh] w-[40px] h-[0.5px] bg-black/5" />
    </motion.div>
  );
};

export default Environment;
