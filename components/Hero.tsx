'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Terminal, ShieldCheck, ArrowDown, Activity, RefreshCw } from 'lucide-react';
import { heroSpotlight } from '@/lib/imageCatalog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { playCyberSound } from '@/lib/audio';

const Hero = () => {
  const scrollTo = (id: string) => {
    playCyberSound('click');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const systemStats = [
    { label: 'Fichiers Archive', value: '34.IMG', color: 'text-[#00f0ff]' },
    { label: 'Menace Niveau', value: 'CRITIQUE', color: 'text-[#d946ef]' },
    { label: 'Efficacité Code', value: '0.00%', color: 'text-amber-400' },
    { label: 'Quota Sommeil', value: '99.8%', color: 'text-emerald-400' },
  ];

  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-16 pt-24 md:px-8 md:pt-32">
      
      {/* Decorative scanline overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none z-10 opacity-30" />

      <div className="mx-auto max-w-5xl">
        <Card className="p-6 md:p-10 border-white/10 bg-black/60 backdrop-blur-2xl relative overflow-hidden">
          
          {/* Diagnostic Grid lines on top left/right */}
          <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#00f0ff]/50" />
          <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-[#00f0ff]/50" />
          <div className="absolute left-0 bottom-0 h-8 w-8 border-l-2 border-b-2 border-[#00f0ff]/50" />
          <div className="absolute right-0 bottom-0 h-8 w-8 border-r-2 border-b-2 border-[#00f0ff]/50" />
          
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            
            {/* Left side text column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-2">
                <Badge variant="default" className="flex items-center gap-1 text-[10px]">
                  <Terminal className="h-3 w-3 animate-pulse" />
                  ILEM-ARCHIVE-SECURE
                </Badge>
                <div className="h-2 w-2 rounded-full bg-[#00f0ff] animate-ping" />
              </div>

              {/* Glowing Main Title */}
              <motion.h1
                className="title-display mt-6 text-4xl font-bold leading-[0.95] text-white md:text-5xl lg:text-6xl font-mono-cyber uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                Système 
                <span className="gradient-text-cyber block font-extrabold tracking-tight">Ilem Dossier</span>
                officiellement ouvert
              </motion.h1>

              {/* Sub-text description */}
              <motion.p
                className="mt-6 max-w-xl text-sm leading-relaxed text-slate-350 font-sans"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                Extraction complète des archives bureau. L&apos;analyse est sans filtre,
                les preuves sont indexées en local et l&apos;interface a été optimisée 
                pour une surveillance en temps réel de tous ses moments cultes.
              </motion.p>

              {/* Actions section */}
              <motion.div
                className="mt-8 flex flex-wrap items-center gap-3.5"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Button
                  variant="cyber"
                  onClick={() => scrollTo('galerie')}
                  onMouseEnter={() => playCyberSound('hover')}
                  className="gap-2 cursor-pointer outline-none"
                >
                  <Activity className="h-4.5 w-4.5" />
                  Accéder à la galerie
                </Button>
                
                <Button
                  variant="cyber-cyan"
                  onClick={() => scrollTo('preuves')}
                  onMouseEnter={() => playCyberSound('hover')}
                  className="gap-2 cursor-pointer outline-none"
                >
                  Analyser preuves
                  <ArrowDown className="h-4.5 w-4.5 animate-bounce" />
                </Button>
              </motion.div>

              {/* Live metrics / stats widgets */}
              <motion.div
                className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {systemStats.map((stat, idx) => (
                  <div key={idx} className="font-mono">
                    <p className="text-[9px] uppercase tracking-wider text-slate-500">{stat.label}</p>
                    <p className={`text-md font-bold ${stat.color} mt-1 tracking-tight`}>{stat.value}</p>
                  </div>
                ))}
              </motion.div>

            </motion.div>

            {/* Right side Image capsule widgets */}
            <motion.div
              className="grid grid-cols-2 gap-4 relative z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              {heroSpotlight.map((item, index) => (
                <motion.article
                  key={item.src}
                  className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl ${
                    index === 0 ? 'col-span-2 h-[260px] md:h-[280px]' : 'h-[180px]'
                  }`}
                  whileHover={{ 
                    y: -6, 
                    borderColor: index === 0 ? '#d946ef' : '#00f0ff',
                    boxShadow: index === 0 ? '0 0 20px rgba(217,70,239,0.3)' : '0 0 20px rgba(0,240,255,0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => playCyberSound('hover')}
                  onClick={() => playCyberSound('click')}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={index === 0}
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Neon screen raster filter overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Interactive scanning laser bar overlay */}
                  {index === 0 && (
                    <div className="absolute inset-x-0 h-[1.5px] bg-[#00f0ff] top-0 shadow-[0_0_8px_#00f0ff] animate-[cyber-pulse_2.5s_infinite_linear] opacity-80" />
                  )}

                  {/* Caption badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 font-mono">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-[#00f0ff]" />
                    <p className="rounded-md bg-black/75 border border-white/10 px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-slate-350">
                      {item.caption}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>

          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
