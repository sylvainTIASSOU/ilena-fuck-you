'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FiMenu, FiShare2, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
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
    const unsubscribe = scrollY.onChange(updateScrollDirection);
    return () => unsubscribe();
  }, [isMobileMenuOpen, scrollY]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const hash = window.location.hash;
    if (hash) {
      setActiveSection(hash);
    }

    const sections = navLinks
      .map((link) => document.getElementById(link.href.replace('#', '')))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

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
    navigator.clipboard.writeText(window.location.href);
    alert('Lien copié ! Partage ce chef-d\'œuvre à tes risques et périls.');
  };

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setIsMobileMenuOpen(false);
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
        <div className="glassmorphism mx-auto w-full max-w-6xl rounded-2xl border border-ink/10 px-3 py-2 shadow-xl shadow-ink/10 md:px-4 md:py-3">
          <div className="flex items-center justify-between gap-4">
            <a href="#hero" className="group inline-flex items-center gap-3" onClick={() => handleNavClick('#hero')}>
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-dark text-white shadow-lg md:h-11 md:w-11">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-neonRed/45 via-transparent to-electric/40" />
                <span className="relative">🖕</span>
              </span>
              <div className="hidden sm:block">
                <p className="title-display text-lg font-bold leading-none gradient-text">
                  kevin
                </p>
                <p className="text-xs text-ink/60">édition bureau légende</p>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-1 rounded-full border border-ink/10 bg-white/70 p-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                      isActive
                        ? 'bg-dark text-white shadow-lg shadow-dark/25'
                        : 'text-ink/80 hover:bg-dark hover:text-white'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="hidden items-center gap-2 rounded-full bg-dark px-5 py-2 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:bg-neonRed md:inline-flex"
              >
                <FiShare2 className="text-base" />
                Partager
              </button>

              <button
                className="rounded-xl border border-ink/15 bg-white/90 p-2 text-2xl text-dark transition-colors hover:bg-white md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-controls="mobile-nav-drawer"
              >
                {isMobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          <motion.div
            className="mt-2 h-1 w-full overflow-hidden rounded-full bg-dark/10"
            initial={false}
          >
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-neonRed via-neonOrange to-electric"
              style={{ scaleX: scrollYProgress }}
            />
          </motion.div>
        </div>
      </motion.nav>

      <motion.div
        id="mobile-nav-drawer"
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      >
        <button
          className="absolute inset-0 h-full w-full bg-dark/35 backdrop-blur-[1px]"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Fermer le menu"
        />

        <div className="relative ml-auto h-full w-[84%] max-w-sm border-l border-ink/10 bg-paper px-6 py-7 shadow-2xl shadow-dark/25">
          <div className="mb-8 flex items-center justify-between">
            <p className="title-display text-2xl font-semibold text-dark">Navigation</p>
            <button
              className="rounded-xl border border-ink/15 bg-white p-2 text-dark"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          <div className="space-y-2">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href;

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'title-display flex items-center justify-between rounded-2xl px-4 py-3 text-xl font-medium transition-colors',
                    isActive ? 'bg-dark text-white' : 'text-dark hover:bg-white/80'
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    y: isMobileMenuOpen ? 0 : 20
                  }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => handleNavClick(link.href)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.name}</span>
                  <span className={cn('text-sm', isActive ? 'text-white/70' : 'text-ink/50')}>0{index + 1}</span>
                </motion.a>
              );
            })}
          </div>

          <motion.button
            onClick={() => {
              handleShare();
              setIsMobileMenuOpen(false);
            }}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-dark px-7 py-3 text-sm font-semibold tracking-wide text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              scale: isMobileMenuOpen ? 1 : 0.8
            }}
            transition={{ delay: navLinks.length * 0.08 }}
          >
            <FiShare2 />
            Partager le site
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
