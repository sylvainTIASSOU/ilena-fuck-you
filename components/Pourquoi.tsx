'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';
import { whyImage } from '@/lib/imageCatalog';

const Pourquoi = () => {
  const roasts = [
    'Ton talent a transformer chaque pause en scene memorable',
    'Ton regard ultra serieux pour des bugs qui se reglent en une ligne',
    'Ton style de reaction qui vaut un generique de cinema',
    'Ta constance: toujours present quand il faut faire rire le bureau',
  ];

  return (
    <section id="pourquoi" className="px-4 py-16 md:px-8">
      <motion.div
        className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-ink/10 bg-white/70 p-6 shadow-2xl shadow-ink/10 md:p-10 lg:grid-cols-[0.9fr_1.1fr]"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-ink/10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={whyImage.src}
            alt={whyImage.alt}
            width={900}
            height={1200}
            className="h-full min-h-[420px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
          <p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-dark">
            {whyImage.caption}
          </p>
        </motion.div>

        <div>
          <motion.h2
            className="title-display text-4xl font-bold leading-tight text-dark md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Pourquoi ce site existe?
            <span className="gradient-text block">Parce que les archives sont trop bonnes.</span>
          </motion.h2>

          <motion.p
            className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ce projet transforme les photos du quotidien en une experience web plus propre,
            plus moderne et beaucoup plus fun. Le ton reste pique, mais la realisation est
            clairement premium.
          </motion.p>

          <motion.p
            className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Design editorial, cartes dynamiques, ambiance studio et galerie complete: tout est
            pense pour raconter la meme histoire visuelle du debut a la fin.
          </motion.p>

          <motion.ul
            className="mt-8 space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {roasts.map((roast, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-white/80 p-4 text-sm text-ink-soft md:text-base"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              >
                <FiCheckCircle className="mt-0.5 shrink-0 text-base text-neonRed" />
                <span>{roast}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            className="mt-8 rounded-2xl border border-dashed border-ink/20 bg-paper px-5 py-4 text-sm text-ink/80 md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Conclusion officielle: impossible de ne pas faire ce site. Trop de matiere,
            trop de moments forts, trop de preuves visuelles pour laisser ca dormir.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Pourquoi;
