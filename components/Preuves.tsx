'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFingerprint } from 'react-icons/fa';

const preuves = [
  {
    title: 'Le jour où tu as raté ce goal',
    description: "Même ta grand-mère l'aurait mis. Et elle était même pas sur le terrain.",
    image: 'https://i.imgur.com/8QqSg7D.jpeg',
  },
  {
    title: 'Ta dance move mythique',
    description: "Le serpent épileptique n'a rien à t'envier. Continue de nous faire rêver.",
    image: 'https://i.imgur.com/sC3d3gy.jpeg',
  },
  {
    title: 'Cette coupe de cheveux...',
    description: "Le coiffeur a glissé ? Ou c'était une tentative d'art moderne ?",
    image: 'https://i.imgur.com/Bf2g4bE.jpeg',
  },
];

const Preuves = () => {
  return (
    <section id="preuves" className="py-32 px-4 bg-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,51,0.05),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-center mb-16 gradient-text neon-glow"
          initial={{ opacity: 0, y: -80, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        >
          Les plus grands hits de Kevin
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              variants={{ 
                hidden: { y: 80, opacity: 0, rotateX: -15 }, 
                visible: { y: 0, opacity: 1, rotateX: 0 } 
              }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
              whileHover={{ 
                scale: 1.05, 
                zIndex: 10,
                boxShadow: '0 20px 40px rgba(255, 0, 51, 0.3)',
              }}
            >
              {/* Image */}
              <Image
                src={preuve.image}
                alt={preuve.title}
                width={400}
                height={500}
                className="object-cover w-full h-[450px] transition-transform duration-700 group-hover:scale-125"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-black/90 group-hover:via-black/70 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl md:text-3xl font-bold font-display text-neonOrange mb-3 drop-shadow-lg">
                  {preuve.title}
                </h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-base leading-relaxed">
                  {preuve.description}
                </p>
              </div>

              {/* Icon Badge */}
              <motion.div 
                className="absolute top-4 right-4 text-5xl text-white/20 group-hover:text-neonRed transition-all duration-500"
                whileHover={{ 
                  scale: 1.5, 
                  rotate: 360,
                  textShadow: '0 0 20px rgba(255, 0, 51, 0.8)'
                }}
              >
                <FaFingerprint />
              </motion.div>

              {/* Animated Border on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-neonRed rounded-2xl transition-colors duration-500 pointer-events-none" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-neonRed/20 via-transparent to-neonOrange/20" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -bottom-20 -left-20 text-9xl text-neonRed/5 select-none"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          🖕
        </motion.div>
        <motion.div
          className="absolute -top-20 -right-20 text-9xl text-neonOrange/5 select-none"
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          🖕
        </motion.div>
      </div>
    </section>
  );
};

export default Preuves;
