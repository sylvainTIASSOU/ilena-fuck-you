'use client';

import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Server, Terminal } from 'lucide-react';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { playCyberSound } from '@/lib/audio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaTwitter, label: 'Twitter', color: 'hover:text-[#00f0ff] hover:border-[#00f0ff]/50' },
    { icon: FaInstagram, label: 'Instagram', color: 'hover:text-[#d946ef] hover:border-[#d946ef]/50' },
    { icon: FaGithub, label: 'GitHub', color: 'hover:text-white hover:border-white/50' },
  ];

  const diagStats = [
    { name: 'OS VERSION', val: 'v2.4.0-STABLE', icon: Terminal },
    { name: 'CPU INTEGRITY', val: '100% OK', icon: Cpu },
    { name: 'SEC BUFFER', val: 'ACTIVE', icon: ShieldCheck },
    { name: 'HOST AGENT', val: 'LOCAL_NODE', icon: Server },
  ];

  return (
    <footer className="px-4 pb-12 pt-6 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-white/10 bg-black/60 px-6 py-10 backdrop-blur-xl relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          
          {/* Subtle neon horizontal dividing glow */}
          <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d946ef] to-transparent opacity-40" />

          {/* Social Navigation Icons */}
          <motion.div
            className="mb-8 flex justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href="#"
                  onClick={() => playCyberSound('click')}
                  onMouseEnter={() => playCyberSound('hover')}
                  className={`rounded-xl border border-white/15 bg-black/50 p-3 text-lg text-slate-400 transition-all duration-300 ${social.color} hover:bg-white/5 cursor-pointer`}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, type: 'spring', bounce: 0.4 }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Core Credits Block */}
          <motion.div
            className="space-y-4 text-center font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#00f0ff]">
              ILEM CYBER SECURITY LOGS // 2026
            </p>
            <p className="title-display text-2xl font-bold text-white md:text-3xl uppercase font-mono-cyber">
              Fait avec style, humour et un peu de chaos
            </p>

            <p className="mx-auto max-w-2xl text-xs leading-relaxed text-slate-400 font-sans">
              Refonte complète sous protocole Next.js avec styles Shadcn et Web Audio FX intégrés. 
              Toute tentative de suppression du dossier entraînera une réplication automatique.
            </p>
          </motion.div>

          {/* System status details display panel */}
          <motion.div
            className="mt-10 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {diagStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex items-center gap-2 font-mono justify-center md:justify-start">
                  <Icon className="h-4 w-4 text-[#d946ef] shrink-0" />
                  <div className="text-left">
                    <p className="text-[8px] text-slate-500 uppercase tracking-widest leading-none">{stat.name}</p>
                    <p className="text-[10px] font-bold text-white tracking-wider mt-1">{stat.val}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Final Cyber Insignia lines */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-4 text-slate-500 font-mono text-[9px] uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/10" />
            <span>Statut : Archive Sécurisée</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/10" />
          </motion.div>

          <p className="mt-4 text-center text-[9px] font-mono text-slate-650">
            © {currentYear} ILEM CORPNET. Tous droits réservés.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
