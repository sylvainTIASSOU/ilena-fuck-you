'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiX, FiZoomIn } from 'react-icons/fi';

const images = [
  { src: 'https://i.imgur.com/gL96g5d.jpeg', alt: 'Doigt d\'honneur 1', caption: 'Le classique' },
  { src: 'https://i.imgur.com/fQJjU2b.jpeg', alt: 'Doigt d\'honneur 2', caption: 'Avec style' },
  { src: 'https://i.imgur.com/c6Lg3iI.jpeg', alt: 'Doigt d\'honneur 3', caption: 'Version cartoon' },
  { src: 'https://i.imgur.com/xQ1pG3D.jpeg', alt: 'Doigt d\'honneur 4', caption: 'Mode expert' },
  { src: 'https://i.imgur.com/bA6g8hJ.jpeg', alt: 'Doigt d\'honneur 5', caption: 'La honte' },
  { src: 'https://i.imgur.com/L3TQW1O.jpeg', alt: 'Doigt d\'honneur 6', caption: 'Niveau suprême' },
  { src: 'https://i.imgur.com/iKfYw9a.jpeg', alt: 'Doigt d\'honneur 7', caption: 'Artistique' },
  { src: 'https://i.imgur.com/v8nC3bH.jpeg', alt: 'Doigt d\'honneur 8', caption: 'Pour la route' },
  { src: 'https://i.imgur.com/R3SoK8p.jpeg', alt: 'Doigt d\'honneur 9', caption: 'Le grand final' },
  { src: 'https://i.imgur.com/3xX1PAm.jpeg', alt: 'Doigt d\'honneur 10', caption: 'Encore un' },
  { src: 'https://i.imgur.com/8QqSg7D.jpeg', alt: 'Moment légendaire', caption: 'Souvenir souvenir' },
  { src: 'https://i.imgur.com/sC3d3gy.jpeg', alt: 'Danse mythique', caption: 'Quel talent' },
];

const Galerie = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedImage = images.find(img => img.src === selectedId);

  return (
    <section id="galerie" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,102,0,0.08),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-neonOrange neon-glow mb-4">
            La Galerie de la Honte
          </h2>
          <motion.p 
            className="text-xl text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Édition Kevin • Fais défiler... et pleure.
          </motion.p>
        </motion.div>
        
        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              layoutId={image.src}
              onClick={() => setSelectedId(image.src)}
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.08, duration: 0.5, type: 'spring', bounce: 0.3 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: Math.random() * 6 - 3,
                boxShadow: '0 20px 40px rgba(255, 0, 51, 0.4)',
                zIndex: 10,
              }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="object-cover w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-bold text-sm">{image.caption}</p>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/0 group-hover:text-white/100 transition-all duration-500 scale-0 group-hover:scale-100">
                  <FiZoomIn className="text-4xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedId && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
              />
              
              {/* Modal Content */}
              <motion.div
                layoutId={selectedId}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedId(null)}
              >
                <motion.div 
                  className="relative max-w-5xl max-h-[90vh] w-full"
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
                    className="rounded-2xl shadow-2xl w-full h-auto object-contain max-h-[85vh]"
                  />
                  
                  {/* Close Button */}
                  <motion.button
                    className="absolute -top-4 -right-4 bg-neonRed text-white p-3 rounded-full shadow-lg hover:bg-neonOrange transition-colors"
                    onClick={() => setSelectedId(null)}
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                  >
                    <FiX className="text-2xl" />
                  </motion.button>

                  {/* Caption */}
                  {selectedImage && (
                    <motion.div
                      className="absolute -bottom-16 left-0 right-0 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-2xl font-bold text-neonOrange">{selectedImage.caption}</p>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Decorative Elements */}
        <motion.div
          className="fixed bottom-10 right-10 text-8xl opacity-20 pointer-events-none select-none"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🖕
        </motion.div>
      </div>
    </section>
  );
};

export default Galerie;
