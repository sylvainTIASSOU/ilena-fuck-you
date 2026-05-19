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
      const newParticles = Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 4,
        duration: Math.random() * 24 + 16,
        delay: Math.random() * 5,
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
          className="particle blur-[1px]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: indexToColor(particle.id),
          }}
          animate={{
            y: [0, -70, 0],
            x: [0, (particle.id % 2 ? -1 : 1) * 35, 0],
            opacity: [0, 0.4, 0],
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
    'rgba(0, 166, 251, 0.35)',
    'rgba(240, 78, 35, 0.28)',
    'rgba(255, 138, 0, 0.25)',
  ];

  return swatches[index % swatches.length];
};

export default ParticlesBackground;
