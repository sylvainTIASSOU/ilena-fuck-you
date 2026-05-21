'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Fingerprint, Database, Eye, Terminal } from 'lucide-react';
import { proofCards } from '@/lib/imageCatalog';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { playCyberSound } from '@/lib/audio';

const Preuves = () => {
  
  // Custom futuristic tags to enrich each proof card
  const threatLevels = [
    { label: 'RISQUE: MOYEN', variant: 'warning' },
    { label: 'RISQUE: ÉLEVÉ', variant: 'destructive' },
    { label: 'DRAMA: MAXIMAL', variant: 'destructive' },
    { label: 'SIESTE ALERT', variant: 'default' },
    { label: 'CONCENTRATION 0%', variant: 'warning' },
    { label: 'MODE CRITIQUE', variant: 'destructive' },
  ] as const;

  return (
    <section id="preuves" className="px-4 py-12 md:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Title Block */}
        <div className="relative mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-1.5 justify-center mb-3">
              <Database className="h-4.5 w-4.5 text-[#00f0ff] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#00f0ff]">Logs d&apos;activité compromis</span>
            </div>
            <h2 className="title-display text-3.5xl font-bold text-white md:text-5xl uppercase font-mono-cyber">
              Rapport d&apos;anomalies visuelles
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 font-sans">
              Chaque capture représente une infraction aux règles d&apos;efficacité du bureau. 
              Indexation photographique certifiée conforme à l&apos;original.
            </p>
          </motion.div>
        </div>

        {/* Evidence Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {proofCards.map((preuve, index) => {
            const threat = threatLevels[index % threatLevels.length];
            
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Card 
                  className="h-full border-white/10 bg-black/50 hover:border-[#00f0ff]/40 overflow-hidden transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.4)] cursor-pointer"
                  onClick={() => playCyberSound('click')}
                  onMouseEnter={() => playCyberSound('hover')}
                >
                  
                  {/* Holographic header badge metadata */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20 font-mono text-[9px]">
                    <Badge variant={threat.variant} className="text-[8px] py-0.5 tracking-wider">
                      {threat.label}
                    </Badge>
                    <span className="text-slate-500 flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded border border-white/5">
                      <Terminal className="h-3 w-3" />
                      LOG: #{index + 104}
                    </span>
                  </div>

                  {/* Image viewport with scanlines on hover */}
                  <div className="relative h-[280px] w-full overflow-hidden">
                    <Image
                      src={preuve.image.src}
                      alt={preuve.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:filter group-hover:brightness-95"
                    />
                    
                    {/* Glowing blue linear laser line that slides down on hover */}
                    <div className="absolute inset-x-0 h-[1.5px] bg-[#00f0ff] top-0 shadow-[0_0_8px_#00f0ff] opacity-0 group-hover:opacity-100 group-hover:translate-y-[280px] transition-all duration-[1.5s] ease-in-out" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-black/30" />
                    
                    {/* Security crosshair focus marker */}
                    <div className="absolute right-4 bottom-4 rounded-full border border-white/15 bg-black/50 p-2.5 text-slate-300 backdrop-blur group-hover:text-[#00f0ff] group-hover:border-[#00f0ff]/30 transition-all duration-300">
                      <Fingerprint className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  {/* Text descriptions */}
                  <div className="p-5 font-mono">
                    <h3 className="text-md font-bold text-white uppercase tracking-wider mb-2 group-hover:text-[#00f0ff] transition-colors">
                      {preuve.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      {preuve.description}
                    </p>
                  </div>

                  {/* Bottom HUD metadata line */}
                  <div className="px-5 pb-4 pt-2 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-slate-500">
                    <span>CAPTEUR: SHIELD-A</span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" /> ANALYSÉ
                    </span>
                  </div>
                  
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Preuves;
