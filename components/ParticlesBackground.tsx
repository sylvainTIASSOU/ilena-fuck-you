'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParticlesBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const generateParticles = () => {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2, // Slightly smaller for more refined look
        duration: Math.random() * 20 + 12,
        delay: Math.random() * 4,
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pointer-events-none opacity-40 blur-[0.5px]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: indexToColor(particle.id),
            boxShadow: `0 0 10px ${indexToColor(particle.id)}`,
          }}
          animate={{
            y: [0, -90, 0],
            x: [0, (particle.id % 2 ? -1 : 1) * 25, 0],
            opacity: [0, 0.45, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

const indexToColor = (index: number) => {
  const swatches = [
    'rgba(0, 240, 255, 0.4)', // Cyber cyan
    'rgba(217, 70, 239, 0.35)', // Cyber pink
    'rgba(139, 92, 246, 0.3)',  // Cyber violet
  ];

  return swatches[index % swatches.length];
};

export default ParticlesBackground;
