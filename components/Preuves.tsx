
'use client';

import { motion } from 'framer-motion';
import { FaFingerprint } from 'react-icons/fa';
import Image from 'next/image';

const preuves = [
  {
    title: 'Le jour où tu as raté ce goal',
    description: 'Même ta grand-mère l\'aurait mis. Et elle était même pas sur le terrain.',
    image: 'https://i.imgur.com/8QqSg7D.jpeg',
  },
  {
    title: 'Ta dance move mythique',
    description: 'Le serpent épileptique n\'a rien à t\'envier. Continue de nous faire rêver.',
    image: 'https://i.imgur.com/sC3d3gy.jpeg',
  },
  {
    title: 'Cette coupe de cheveux...',
    description: 'Le coiffeur a glissé ? Ou c\'était une tentative d\'art moderne ?',
    image: 'https://i.imgur.com/Bf2g4bE.jpeg',
  },
];

const Preuves = () => {
  return (
    <section id="preuves" className="py-24 px-4 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-display font-bold text-center mb-12 text-neonRed"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Les plus grands hits de Kevin
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={{ 
            hidden: {}, 
            visible: { transition: { staggerChildren: 0.3 } } 
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {preuves.map((preuve, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
              variants={{ 
                hidden: { y: 50, opacity: 0 }, 
                visible: { y: 0, opacity: 1 } 
              }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={preuve.image}
                alt={preuve.title}
                width={400}
                height={500}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold font-display text-neonOrange">{preuve.title}</h3>
                <p className="mt-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {preuve.description}
                </p>
              </div>
              <div className="absolute top-4 right-4 text-5xl text-white/20 group-hover:text-neonRed group-hover:scale-125 transition-all duration-300">
                <FaFingerprint />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Preuves;
