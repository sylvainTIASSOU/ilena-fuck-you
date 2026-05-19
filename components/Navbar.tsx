'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };
    const unsubscribe = scrollY.onChange(updateScrollDirection);
    return () => unsubscribe();
  }, [scrollY]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Lien copié ! Partage ce chef-d\'œuvre à tes risques et périls.');
  };

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Pourquoi toi ?', href: '#pourquoi' },
    { name: 'Les Preuves', href: '#preuves' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'p-4 flex justify-between items-center',
          'glassmorphism'
        )}
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={isHidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        <div className="font-display text-2xl font-bold tracking-wider gradient-text neon-glow">
          🖕 Fuck You Kevin
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-neonOrange transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neonRed group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <button
            onClick={handleShare}
            className="px-6 py-2 bg-gradient-to-r from-neonRed to-neonOrange text-white font-bold rounded-lg shadow-lg hover:shadow-neonRed/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            Partage ce chef-d&apos;œuvre
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-3xl text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/95 md:hidden"
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          x: isMobileMenuOpen ? 0 : '100%' 
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-3xl font-bold text-white hover:text-neonRed transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0, 
                y: isMobileMenuOpen ? 0 : 20 
              }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            onClick={() => {
              handleShare();
              setIsMobileMenuOpen(false);
            }}
            className="px-8 py-3 bg-gradient-to-r from-neonRed to-neonOrange text-white font-bold rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0, 
              scale: isMobileMenuOpen ? 1 : 0.8 
            }}
            transition={{ delay: navLinks.length * 0.1 }}
          >
            Partager le site
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
