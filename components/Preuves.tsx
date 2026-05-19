'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFingerprint } from 'react-icons/fa';
import { proofCards } from '@/lib/imageCatalog';

const Preuves = () => {
  return (
    <section id="preuves" className="px-4 py-16 md:px-8">
      <div className="relative mx-auto max-w-6xl rounded-[2rem] bg-dark px-6 py-10 md:px-10">
        <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_10%_20%,rgba(0,166,251,0.22),transparent_44%),radial-gradient(circle_at_88%_90%,rgba(240,78,35,0.3),transparent_36%)]" />

        <div className="relative z-10">
          <motion.h2
            className="title-display mb-4 text-center text-4xl font-bold text-white md:text-6xl"
            initial={{ opacity: 0, y: -40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}
          >
            Les preuves ne mentent jamais
          </motion.h2>
          <motion.p
            className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Selection premium des moments les plus iconiques de la collection.
            Style carte magazine, transitions fluides et lisibilite optimisee.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.14 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {proofCards.map((preuve, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black/35 shadow-xl"
                variants={{
                  hidden: { y: 36, opacity: 0, rotateX: -8 },
                  visible: { y: 0, opacity: 1, rotateX: 0 }
                }}
                transition={{ duration: 0.55, type: 'spring', bounce: 0.25 }}
                whileHover={{
                  scale: 1.02,
                  zIndex: 10,
                  boxShadow: '0 20px 45px rgba(10, 10, 10, 0.35)',
                }}
              >
                <Image
                  src={preuve.image.src}
                  alt={preuve.title}
                  width={400}
                  height={500}
                  className="h-[370px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent transition-all duration-500 group-hover:from-black/95" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="title-display mb-2 text-2xl font-semibold text-white md:text-3xl">
                    {preuve.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80 md:text-base">
                    {preuve.description}
                  </p>
                </div>

                <motion.div
                  className="absolute right-4 top-4 rounded-full bg-black/40 p-3 text-xl text-white/70 backdrop-blur"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                  }}
                >
                  <FaFingerprint />
                </motion.div>

                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/15" />
              </motion.div>
            ))}
          </motion.div>

          <div className="pointer-events-none absolute -left-8 -top-8 h-20 w-20 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full border border-white/20" />
        </div>
      </div>
    </section>
  );
};

export default Preuves;
