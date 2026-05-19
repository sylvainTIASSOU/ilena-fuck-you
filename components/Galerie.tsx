'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiX, FiZoomIn } from 'react-icons/fi';
import { galleryImages } from '@/lib/imageCatalog';

const Galerie = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedImage = galleryImages.find((img) => img.src === selectedId);

  return (
    <section id="galerie" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="title-display text-4xl font-bold text-dark md:text-6xl">
            Galerie complete: 34 photos, zero filtre
          </h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Toutes les images que tu as partagees sont integrees ici, en local,
            avec lightbox et navigation visuelle moderne.
          </motion.p>
        </motion.div>

        <div className="section-shell p-4 md:p-6">
          <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                className="group mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lg"
                layoutId={image.src}
                onClick={() => setSelectedId(image.src)}
                initial={{ y: 36, opacity: 0, scale: 0.95 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.03, duration: 0.45, type: 'spring', bounce: 0.24 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 18px 35px rgba(19,23,34,0.2)',
                  zIndex: 10,
                }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={700}
                    height={900}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                      {image.caption}
                    </p>
                  </div>

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-90 text-white/0 transition-all duration-300 group-hover:scale-100 group-hover:text-white">
                    <FiZoomIn className="text-3xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
              />

              <motion.div
                layoutId={selectedId}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedId(null)}
              >
                <motion.div
                  className="relative w-full max-w-5xl"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: 'spring', bounce: 0.3 }}
                >
                  <Image
                    src={selectedId}
                    alt={selectedImage?.alt || 'Image en grand'}
                    width={1200}
                    height={800}
                    className="max-h-[80vh] w-full rounded-3xl border border-white/10 object-contain shadow-2xl"
                  />

                  <motion.button
                    className="absolute right-2 top-2 rounded-full bg-white/90 p-2 text-dark shadow-lg"
                    onClick={() => setSelectedId(null)}
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                  >
                    <FiX className="text-xl" />
                  </motion.button>

                  {selectedImage && (
                    <motion.div
                      className="mx-auto mt-3 w-fit rounded-full bg-white/90 px-4 py-2 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-sm font-semibold text-dark md:text-base">{selectedImage.caption}</p>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Galerie;
