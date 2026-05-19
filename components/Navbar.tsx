
'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
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
      <div className="font-display text-2xl font-bold tracking-wider text-neonRed">
        Fuck You Kevin
      </div>
      <div className="hidden md:flex space-x-6 items-center">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-neonOrange transition-colors">
            {link.name}
          </a>
        ))}
      </div>
      <button
        onClick={handleShare}
        className="px-4 py-2 bg-neonRed text-white font-bold rounded-lg shadow-lg hover:bg-neonOrange transition-all duration-300 transform hover:scale-105"
      >
        Partage ce chef-d&apos;œuvre
      </button>
    </motion.nav>
  );
};

export default Navbar;
