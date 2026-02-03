
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Environment from './components/Environment';
import FloatingWorld from './components/FloatingWorld';
import Noise from './components/Noise';
import HUD from './components/HUD';
import Manifest from './components/Manifest';
import Header from './components/Header';
import { DroamState } from './types';
import { audioService } from './services/audioService';
import { BREAKPOINTS } from './constants';

const App: React.FC = () => {
  const [state] = useState<DroamState>('ENTERED');
  const [isIdle, setIsIdle] = useState(false);

  const idleTimerRef = useRef<number | null>(null);
  const longPressTimerRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialize audio. Browser policy requires interaction, so this will truly start on first click/move.
    audioService.init();
    audioService.startHum();
    audioService.startBackgroundMusic();

    resetIdleTimer();
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  const resetIdleTimer = useCallback(() => {
    setIsIdle(false);
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = window.setTimeout(() => {
      setIsIdle(true);
    }, BREAKPOINTS.IDLE_THRESHOLD);
  }, []);

  const handleInteraction = () => {
    resetIdleTimer();
    audioService.init();
    audioService.startHum();
    audioService.startBackgroundMusic();
  };

  const scrollToPlan = () => {
    const container = document.querySelector('.manifest-container');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
    audioService.playTone(200, 0.4);
  };

  const openArchive = () => {
    audioService.playTone(400, 0.2);
  };

  const handleMouseDown = () => {
    longPressTimerRef.current = window.setTimeout(() => {
      audioService.playTone(60, 1.5);
    }, 800);
  };

  const handleMouseUp = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  };

  return (
    <div
      className="relative w-screen h-screen cursor-none overflow-hidden select-none bg-[#EAE8E0]"
      onClick={handleInteraction}
      onMouseMove={handleInteraction}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      <Environment state={state} isIdle={isIdle} />
      <FloatingWorld />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Header onPlanClick={scrollToPlan} onArchiveClick={openArchive} />
          <HUD />
          <Manifest />
        </motion.div>
      </AnimatePresence>

      <Noise />

      <CustomCursor />
    </div>
  );
};

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const update = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1000]">
      <motion.div
        className="w-[1px] h-4 bg-black/10"
        animate={{ x: pos.x, y: pos.y - 8 }}
        transition={{ type: 'spring', damping: 35, stiffness: 500, mass: 0.1 }}
      />
    </div>
  );
};

export default App;
