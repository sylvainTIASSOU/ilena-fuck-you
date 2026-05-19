'use client';

import { motion } from 'framer-motion';
import { FiShare2, FiWifi, FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';

const CTA = () => {
  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = "J'ai trouvé ça et j'ai pensé à toi... 🤣";
    
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (navigator.share) {
      try {
        await navigator.share({ title: 'Un message pour Kevin', text, url });
      } catch (err) {
        console.error('Erreur de partage:', err);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Lien copié ! Il est temps de spammer le monde entier.');
    }
  };

  return (
    <section id="contact" className="py-40 px-4 text-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-black" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neonRed/10 rounded-full blur-3xl" />
      
      {/* Giant Finger Background */}
      <motion.div
        className="absolute -bottom-32 -right-32 text-[40rem] text-neonRed/5 select-none pointer-events-none"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        🖕
      </motion.div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.7, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
      >
        {/* Main Title */}
        <motion.h2 
          className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-neonRed neon-glow mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Tu veux que ça s&apos;arrête ?
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Désolé, c&apos;est trop tard. Le mal est fait. La seule chose qu&apos;il te reste à faire, 
          c&apos;est de le partager à tous tes contacts. 😈
        </motion.p>

        {/* Share Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.button
            onClick={() => handleShare('whatsapp')}
            className="px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 flex items-center space-x-3"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-2xl" />
            <span>WhatsApp</span>
          </motion.button>

          <motion.button
            onClick={() => handleShare('twitter')}
            className="px-8 py-4 bg-sky-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-sky-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 flex items-center space-x-3"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTwitter className="text-2xl" />
            <span>Twitter</span>
          </motion.button>

          <motion.button
            onClick={() => handleShare('facebook')}
            className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 flex items-center space-x-3"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFacebook className="text-2xl" />
            <span>Facebook</span>
          </motion.button>

          <motion.button
            onClick={() => handleShare('native')}
            className="px-8 py-4 bg-gradient-to-r from-neonRed to-neonOrange text-white font-bold text-lg rounded-full shadow-lg hover:shadow-neonRed/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 flex items-center space-x-3"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiShare2 className="text-2xl" />
            <span>Autre</span>
          </motion.button>
        </motion.div>

        {/* Final Message */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
        >
          <motion.div
            className="text-9xl inline-block mb-6"
            animate={{
              y: [0, -20, 0],
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🖕
          </motion.div>
          
          <motion.h3 
            className="text-5xl md:text-6xl font-display font-black gradient-text neon-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Bisous, KEVIN ❤️
          </motion.h3>

          <motion.p 
            className="mt-6 text-gray-500 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            On t&apos;aime bien quand même... mais pas trop.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
