'use client';

import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaTiktok, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pb-12 pt-6 md:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-ink/10 bg-white/70 px-6 py-8 shadow-xl shadow-ink/5 md:px-10">
        <motion.div
          className="mb-6 flex justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { icon: FaTwitter, label: 'Twitter', color: 'hover:text-sky-400' },
            { icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-500' },
            { icon: FaTiktok, label: 'TikTok', color: 'hover:text-white' },
            { icon: FaGithub, label: 'GitHub', color: 'hover:text-gray-400' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href="#"
              className={`rounded-full border border-ink/10 bg-white p-3 text-xl text-ink/70 transition-colors duration-300 ${social.color}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', bounce: 0.5 }}
              whileHover={{ scale: 1.12, rotate: 6 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="space-y-3 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/55">
            kevin gallery project
          </p>
          <p className="title-display text-2xl font-semibold text-dark md:text-3xl">
            Fait avec style, humour et un peu de chaos en {currentYear}
          </p>

          <motion.p
            className="mx-auto max-w-2xl text-sm leading-relaxed text-ink/65"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Refonte complete Tailwind, assets locaux integres et experience mobile optimisee.
            L&apos;objectif est simple: une page forte, lisible et impossible a oublier.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-6 flex items-center justify-center gap-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-neonRed" />
          <span className="text-lg">archive mode</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-electric" />
        </motion.div>

        <motion.p
          className="mt-6 text-center text-xs text-ink/45"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          © {currentYear} - Tous droits reserves.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
