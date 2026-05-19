'use client';

import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://i.imgur.com/R3SoK8p.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      {/* Animated Particles Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neonRed/40 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: -10,
              opacity: 0,
            }}
            animate={{
              y: typeof window !== 'undefined' ? window.innerHeight + 10 : 1000,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center p-4 max-w-5xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Animated Finger Emoji */}
        <motion.div
          className="text-8xl md:text-9xl mb-8 inline-block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🖕
        </motion.div>

        {/* Staggered Text Animation */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-widest uppercase leading-tight"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="block"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            KEVIN,
          </motion.span>
          <motion.span
            className="block mt-4 gradient-text neon-glow"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
          >
            Tu mérites ça.
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-8 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Un site rien que pour toi... et pour que tout le monde rigole.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={() => scrollTo('pourquoi')}
          className="mt-12 px-10 py-5 bg-transparent border-3 border-neonRed text-neonRed font-bold text-lg md:text-xl rounded-full shadow-lg hover:bg-neonRed hover:text-white hover:shadow-neonRed/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 flex items-center mx-auto group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          Descends voir ta dédicace
          <motion.span
            className="ml-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
          >
            <FiArrowDown />
          </motion.span>
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-neonRed rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Glitch Effect Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.02, 0] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: Math.random() * 5 + 3 }}
        style={{
          background: 'linear-gradient(transparent 50%, rgba(255, 0, 51, 0.1) 50%)',
          backgroundSize: '100% 4px',
        }}
      />
    </section>
  );
};

export default Hero;
