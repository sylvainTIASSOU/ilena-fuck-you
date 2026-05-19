
'use client';

import { motion } from 'framer-motion';
import { FiShare2 } from 'react-icons/fi';

const CTA = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Un message pour Kevin',
        text: 'J\'ai trouvé ça et j\'ai pensé à toi... 🤣',
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié ! Il est temps de spammer le monde entier.');
    }
  };

  return (
    <section id="contact" className="py-32 px-4 text-center bg-dark relative overflow-hidden">
      <div
        className="absolute -bottom-48 -right-48 text-neonRed/10"
        style={{ fontSize: '50rem' }}
      >
        🖕
      </div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <h2 className="text-6xl font-display font-bold text-neonRed mb-6">
          Tu veux que ça s&apos;arrête ?
        </h2>
        <p className="text-xl text-gray-300 max-w-xl mx-auto mb-10">
          Désolé, c&apos;est trop tard. Le mal est fait. La seule chose qu&apos;il te reste à faire, c&apos;est de le partager.
        </p>
        <motion.button
          onClick={handleShare}
          className="px-10 py-5 bg-gradient-to-r from-neonRed to-neonOrange text-white font-bold text-2xl rounded-full shadow-2xl hover:shadow-neonRed/50 transition-all duration-300 transform hover:scale-110 flex items-center mx-auto"
          whileHover={{ y: -5 }}
        >
          <FiShare2 className="mr-3" /> Partager la sentence
        </motion.button>
        <div className="mt-16 text-5xl font-display font-bold text-white">
          Bisous, KEVIN ❤️
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
