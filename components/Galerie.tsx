
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  // Ajoutez ici au moins 9 à 12 images
  { src: 'https://i.imgur.com/gL96g5d.jpeg', alt: 'Image 1' },
  { src: 'https://i.imgur.com/fQJjU2b.jpeg', alt: 'Image 2' },
  { src: 'https://i.imgur.com/c6Lg3iI.jpeg', alt: 'Image 3' },
  { src: 'https://i.imgur.com/xQ1pG3D.jpeg', alt: 'Image 4' },
  { src: 'https://i.imgur.com/bA6g8hJ.jpeg', alt: 'Image 5' },
  { src: 'https://i.imgur.com/L3TQW1O.jpeg', alt: 'Image 6' },
  { src: 'https://i.imgur.com/iKfYw9a.jpeg', alt: 'Image 7' },
  { src: 'https://i.imgur.com/v8nC3bH.jpeg', alt: 'Image 8' },
  { src: 'https://i.imgur.com/R3SoK8p.jpeg', alt: 'Image 9' },
];

const Galerie = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section id="galerie" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl font-display font-bold text-center mb-4 text-neonOrange"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          La Galerie de la Honte
        </motion.h2>
        <p className="text-center text-gray-400 mb-12">Fais défiler... et pleure.</p>
        
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-lg cursor-pointer"
              layoutId={image.src}
              onClick={() => setSelectedId(image.src)}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: Math.random() * 6 - 3 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="object-cover w-full h-auto"
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
              onClick={() => setSelectedId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div className="relative max-w-4xl max-h-[90vh] w-full h-full">
                <Image
                  src={selectedId}
                  alt="Image en grand"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Galerie;
