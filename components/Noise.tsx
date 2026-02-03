
import React from 'react';

const DustParticle: React.FC<{ delay: number; left: string }> = ({ delay, left }) => (
  <div 
    className="absolute bottom-0 w-[1px] h-[1px] bg-white opacity-20 pointer-events-none"
    style={{
      left,
      animation: `floatUp 15s linear infinite ${delay}s`,
    }}
  />
);

const Noise: React.FC = () => {
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    delay: Math.random() * 15,
    left: `${Math.random() * 100}%`
  }));

  return (
    <>
      <div className="noise-overlay" />
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
        {particles.map((p, i) => (
          <DustParticle key={i} delay={p.delay} left={p.left} />
        ))}
      </div>
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.1; }
          80% { opacity: 0.1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default Noise;
