'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X, Share2, Volume2, VolumeX, ShieldAlert } from 'lucide-react';
import { playCyberSound } from '@/lib/audio';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [shareFeedback, setShareFeedback] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    // Initialise audio preference from localStorage
    const savedAudio = localStorage.getItem('hud-audio') !== 'false';
    setIsAudioEnabled(savedAudio);

    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      if (isMobileMenuOpen) {
        setIsHidden(false);
        return;
      }

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };
    const unsubscribe = scrollY.on('change', updateScrollDirection);
    return () => unsubscribe();
  }, [isMobileMenuOpen, scrollY]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hash = window.location.hash;
    if (hash) {
      setActiveSection(hash);
    }

    const sections = navLinks
      .map((link) => document.getElementById(link.href.replace('#', '')))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleShare = () => {
    playCyberSound('success');
    navigator.clipboard.writeText(window.location.href);
    setShareFeedback(true);
    setTimeout(() => setShareFeedback(false), 2000);
  };

  const handleNavClick = (href: string) => {
    playCyberSound('click');
    setActiveSection(href);
    setIsMobileMenuOpen(false);
  };

  const toggleAudio = () => {
    const nextState = !isAudioEnabled;
    setIsAudioEnabled(nextState);
    localStorage.setItem('hud-audio', String(nextState));
    
    // Play sound immediately to confirm change
    if (nextState) {
      setTimeout(() => playCyberSound('success'), 50);
    }
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
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          'px-4 pb-0 pt-3 md:px-8 md:pt-5'
        )}
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={isHidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        <div className="mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-black/70 px-4 py-2.5 shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-xl md:px-6 md:py-3.5 relative overflow-hidden group">
          
          {/* Subtle neon glowing border */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-50" />
          
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <a 
              href="#hero" 
              className="group inline-flex items-center gap-3" 
              onClick={() => handleNavClick('#hero')}
              onMouseEnter={() => playCyberSound('hover')}
            >
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-black border border-white/15 text-white shadow-lg overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/20 via-transparent to-[#d946ef]/20" />
                <span className="relative text-base">🖕</span>
              </span>
              <div className="block">
                <p className="font-mono text-base font-bold leading-none tracking-wider text-white flex items-center gap-1.5 uppercase">
                  Ilem-OS <span className="text-[9px] text-[#00f0ff] border border-[#00f0ff]/30 px-1 rounded animate-pulse font-mono font-normal">v2.4</span>
                </p>
                <p className="text-[10px] font-mono text-slate-400 tracking-tight uppercase">Dossier Compromis</p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 rounded-full border border-white/5 bg-black/40 p-1 font-mono text-xs font-semibold">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    onMouseEnter={() => playCyberSound('hover')}
                    className={cn(
                      'rounded-lg px-4 py-2 uppercase tracking-wider transition-all duration-200 cursor-pointer',
                      isActive
                        ? 'bg-white/10 text-[#00f0ff] border border-white/10 shadow-[inset_0_0_8px_rgba(0,240,255,0.1)]'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Right Action Menu */}
            <div className="flex items-center gap-2">
              
              {/* Sound toggle button */}
              <button
                onClick={toggleAudio}
                onMouseEnter={() => playCyberSound('hover')}
                className={cn(
                  "p-2.5 rounded-xl border transition-colors outline-none cursor-pointer",
                  isAudioEnabled 
                    ? "border-white/10 text-[#00f0ff] hover:bg-white/5" 
                    : "border-white/5 text-slate-500 hover:text-slate-400 hover:bg-white/5"
                )}
                aria-label={isAudioEnabled ? "Muter l'interface" : "Activer l'audio"}
              >
                {isAudioEnabled ? <Volume2 className="h-4.5 w-4.5" /> : <VolumeX className="h-4.5 w-4.5" />}
              </button>

              {/* Share button */}
              <button
                onClick={handleShare}
                onMouseEnter={() => playCyberSound('hover')}
                className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-[#00f0ff]/10 to-[#d946ef]/10 border border-[#00f0ff]/30 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-widest text-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.1)] hover:shadow-[0_0_15px_rgba(217,70,239,0.3)] hover:border-[#00f0ff] hover:text-white transition-all duration-300 hover:scale-[1.03] md:inline-flex outline-none cursor-pointer"
              >
                <Share2 className="h-4 w-4" />
                {shareFeedback ? 'Accès Copié' : 'Partager'}
              </button>

              {/* Mobile Drawer Trigger */}
              <button
                className="rounded-xl border border-white/10 bg-black/60 p-2.5 text-slate-300 hover:text-white md:hidden outline-none cursor-pointer"
                onClick={() => {
                  playCyberSound('click');
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-controls="mobile-nav-drawer"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Glowing laser scroll progress bar */}
          <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-[#00f0ff] via-[#8b5cf6] to-[#d946ef] shadow-[0_0_8px_#00f0ff]"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <motion.div
        id="mobile-nav-drawer"
        className="fixed inset-0 z-40 md:hidden font-mono"
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      >
        {/* Backdrop overlay */}
        <button
          className="absolute inset-0 h-full w-full bg-black/80 backdrop-blur-md"
          onClick={() => {
            playCyberSound('click');
            setIsMobileMenuOpen(false);
          }}
          aria-label="Fermer le menu"
        />

        {/* Drawer Content */}
        <div className="relative ml-auto h-full w-[80%] max-w-sm border-l border-white/10 bg-[#090910] px-6 py-8 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-[#00f0ff]" />
                <p className="text-md font-bold text-white uppercase tracking-wider">ILEM-OS MENU</p>
              </div>
              <button
                className="rounded-xl border border-white/10 bg-black/60 p-2 text-slate-400 hover:text-white"
                onClick={() => {
                  playCyberSound('click');
                  setIsMobileMenuOpen(false);
                }}
                aria-label="Fermer le menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={cn(
                      'flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-widest transition-all border',
                      isActive 
                        ? 'bg-gradient-to-r from-[#00f0ff]/10 to-[#d946ef]/10 border-[#00f0ff]/30 text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.1)]' 
                        : 'border-transparent text-slate-400 hover:bg-white/5 hover:text-white'
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isMobileMenuOpen ? 1 : 0,
                      y: isMobileMenuOpen ? 0 : 20
                    }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    onMouseEnter={() => playCyberSound('hover')}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">CODE: 0{index + 1}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 20
            }}
            transition={{ delay: navLinks.length * 0.05 }}
          >
            <button
              onClick={handleShare}
              onMouseEnter={() => playCyberSound('hover')}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00f0ff]/20 to-[#d946ef]/20 border border-[#00f0ff]/30 py-3 text-xs font-bold uppercase tracking-widest text-[#00f0ff]"
            >
              <Share2 className="h-4 w-4" />
              {shareFeedback ? 'Lien Transmis !' : 'Transmettre Dossier'}
            </button>
            <div className="text-center">
              <p className="text-[9px] text-slate-600 uppercase font-mono tracking-widest">Alerte de niveau 4 - Non classifié</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
