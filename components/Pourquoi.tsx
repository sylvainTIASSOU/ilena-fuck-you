
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Pourquoi = () => {
  return (
    <section id="pourquoi" className="py-24 px-4">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className="prose prose-invert prose-lg">
          <h2 className="text-4xl font-display font-bold text-neonOrange mb-6">
            Parce que tu l&apos;as bien cherché
          </h2>
          <p>
            On pourrait lister tes qualités, mais on a préféré faire un site pour te rappeler à quel point tu es...
            toi. Ce monument numérique est une ode à tes moments de gloire, tes blagues (un peu) nulles et ta capacité
            légendaire à nous faire rire, souvent à tes dépens.
          </p>
          <p>
            Considère ça comme un trophée. Un trophée en forme de doigt d&apos;honneur, certes, mais un trophée quand
            même.
          </p>
          <p>
            Alors, profite de ta célébrité. Tu es notre star du jour, et on ne pouvait pas rater ça.
          </p>
        </div>
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="https://i.imgur.com/3xX1PAm.jpeg"
            alt="Doigt d&apos;honneur stylisé"
            layout="fill"
            objectFit="cover"
            className="transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-neonRed/30"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Pourquoi;
