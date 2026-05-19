
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
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://i.imgur.com/R3SoK8p.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <motion.div
        className="relative z-10 text-center p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-display font-bold text-white tracking-widest uppercase"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {[..."KEVIN,"].map((char, i) => (
            <motion.span key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h2
          className="text-4xl md:text-6xl font-display font-bold text-neonRed mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Tu mérites ça.
        </motion.h2>
        <motion.p
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Un site rien que pour toi... et pour que tout le monde rigole.
        </motion.p>
        <motion.button
          onClick={() => scrollTo('pourquoi')}
          className="mt-12 px-8 py-4 bg-transparent border-2 border-neonRed text-neonRed font-bold rounded-full shadow-lg hover:bg-neonRed hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          Descends voir ta dédicace <FiArrowDown className="ml-2" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
