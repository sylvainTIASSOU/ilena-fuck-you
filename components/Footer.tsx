'use client';

import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaTiktok, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { icon: FaTwitter, label: 'Twitter', color: 'hover:text-sky-400' },
            { icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-500' },
            { icon: FaTiktok, label: 'TikTok', color: 'hover:text-white' },
            { icon: FaGithub, label: 'GitHub', color: 'hover:text-gray-400' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href="#"
              className={`text-3xl transition-colors duration-300 ${social.color}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', bounce: 0.5 }}
              whileHover={{ scale: 1.3, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Main Text */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-400 text-lg">
            Fait avec <span className="text-neonRed">❤️</span> (et beaucoup de vengeance) en {currentYear}
          </p>
          
          <motion.p 
            className="text-gray-600 text-sm max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Ce site ne respecte rien, et c&apos;est exactement le but. 
            Les rires sont garantis, l&apos;amitié aussi (on espère).
          </motion.p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div 
          className="mt-8 flex items-center justify-center space-x-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-neonRed" />
          <span className="text-2xl">🖕</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-neonOrange" />
        </motion.div>

        {/* Copyright */}
        <motion.p 
          className="text-center text-gray-700 text-xs mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          © {currentYear} - Tous droits réservés (mais on s&apos;en fout).
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
