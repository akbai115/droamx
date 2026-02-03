
import React, { useState, useEffect } from 'react';
import { Phase } from '../types';

const HUD: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
  const [phase, setPhase] = useState<Phase>(Phase.STASIS);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
    }, 60000);

    const phaseTimer = setInterval(() => {
      const phases = [Phase.ASCENDING, Phase.VOID, Phase.STASIS, Phase.ECHO];
      setPhase(phases[Math.floor(Math.random() * phases.length)]);
    }, 45000);

    return () => {
      clearInterval(timer);
      clearInterval(phaseTimer);
    };
  }, []);

  return (
    <>
      {/* Bottom Left: TIME */}
      <div className="fixed bottom-10 left-10 z-[500] flex flex-col items-start gap-1 opacity-[0.15]">
        <span className="text-[7px] tracking-[0.4em] uppercase font-light">SYSTEM.T</span>
        <span className="text-[8px] tracking-[0.2em] font-light">{time}</span>
      </div>

      {/* Bottom Right: PHASE */}
      <div className="fixed bottom-10 right-10 z-[500] flex flex-col items-end gap-1 opacity-[0.15]">
        <span className="text-[7px] tracking-[0.4em] uppercase font-light">PHASE.S</span>
        <span className="text-[8px] tracking-[0.2em] font-light uppercase">{phase}</span>
      </div>
    </>
  );
};

export default HUD;
