'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Pourquoi = () => {
  const roasts = [
    "Ton talent légendaire pour perdre à tous les jeux",
    "Ta coupe de cheveux qui défie les lois de la physique",
    "Tes blagues qui font pleurer (de désespoir)",
    "Ta capacité à rater même les trucs les plus simples",
  ];

  return (
    <section id="pourquoi" className="py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neonRed/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neonOrange/5 rounded-full blur-3xl" />

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Text Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-neonOrange mb-8 leading-tight"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Parce que tu l&apos;as bien cherché
          </motion.h2>
          
          <motion.p
            className="text-gray-300 text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            On pourrait lister tes qualités, mais on a préféré faire un site pour te rappeler à quel point tu es... toi. 
            Ce monument numérique est une ode à tes moments de gloire, tes blagues (un peu) nulles et ta capacité 
            légendaire à nous faire rire, souvent à tes dépens.
          </motion.p>
          
          <motion.p
            className="text-gray-300 text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Considère ça comme un trophée. Un trophée en forme de doigt d&apos;honneur, certes, mais un trophée quand même.
          </motion.p>

          {/* Roast List */}
          <motion.ul
            className="space-y-4 my-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {roasts.map((roast, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-3 text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              >
                <span className="text-neonRed text-xl">🖕</span>
                <span>{roast}</span>
              </motion.li>
            ))}
          </motion.ul>
          
          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Alors, profite de ta célébrité. Tu es notre star du jour, et on ne pouvait pas rater ça.
          </motion.p>
        </div>

        {/* Image with Effects */}
        <motion.div
          className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
          initial={{ x: 100, opacity: 0, rotate: 5 }}
          whileInView={{ x: 0, opacity: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="https://i.imgur.com/3xX1PAm.jpeg"
            alt="Doigt d'honneur stylisé"
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neonRed/40 via-transparent to-neonOrange/30 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Animated Border */}
          <motion.div
            className="absolute inset-0 border-4 border-neonRed/30 rounded-2xl"
            animate={{
              borderColor: ['rgba(255, 0, 51, 0.3)', 'rgba(255, 102, 0, 0.5)', 'rgba(255, 0, 51, 0.3)'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Floating Emoji */}
          <motion.div
            className="absolute top-4 right-4 text-6xl"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🖕
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Pourquoi;
