'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDown, FiCamera, FiGrid } from 'react-icons/fi';
import { heroSpotlight } from '@/lib/imageCatalog';

const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-20 pt-28 md:px-8 md:pt-36">
      <div className="mx-auto max-w-6xl section-shell p-6 md:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
              <FiCamera className="text-neonRed" />
              dossier special 2026
            </span>

            <motion.h1
              className="title-display mt-6 text-4xl font-bold leading-[0.92] text-dark md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              kevin,
              <span className="gradient-text block">la legendaire galerie</span>
              <span className="block">est officiellement ouverte.</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Site modernise, style assume, preuves numeriques intactes. Cette version transforme
              vos meilleurs moments de bureau en exposition premium, sans rien censurer.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button
                onClick={() => scrollTo('galerie')}
                className="inline-flex items-center gap-2 rounded-full bg-dark px-6 py-3 text-sm font-semibold tracking-wide text-white transition-transform hover:-translate-y-0.5"
              >
                Voir la galerie complete
                <FiGrid />
              </button>
              <button
                onClick={() => scrollTo('preuves')}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/80 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
              >
                Aller aux preuves
                <FiArrowDown />
              </button>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-ink/70">
              <span className="rounded-full border border-ink/10 bg-white/70 px-3 py-1">34 photos locales</span>
              <span className="rounded-full border border-ink/10 bg-white/70 px-3 py-1">tailwind refresh</span>
              <span className="rounded-full border border-ink/10 bg-white/70 px-3 py-1">animations fluides</span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            {heroSpotlight.map((item, index) => (
              <motion.article
                key={item.src}
                className={`relative overflow-hidden rounded-2xl border border-ink/10 bg-white/80 shadow-xl ${index === 0 ? 'col-span-2 h-[300px]' : 'h-[220px]'
                  }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <p className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white">
                  {item.caption}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
