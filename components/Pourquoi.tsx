'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldAlert, AlertOctagon, Brain, Database, CheckSquare, Clock } from 'lucide-react';
import { whyImage } from '@/lib/imageCatalog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { playCyberSound } from '@/lib/audio';

const Pourquoi = () => {
  const anomalies = [
    'Capacité à transformer un café en pause de 2 heures',
    'Regard ultra-professionnel sur des bugs mineurs résolus par un espace',
    'Sens inné du timing pour quitter le bureau avant les alertes',
    'Talent inestimable pour distraire ses collègues en pleine démo client',
  ];

  const metrics = [
    { name: 'Temps de réponse Slack', val: '4h 12m', icon: Clock },
    { name: 'Excuses préférées', val: '"Chez moi ça marche"', icon: Brain },
    { name: 'Index de distraction', val: '9.2 / 10', icon: AlertOctagon },
    { name: 'Base de données dossiers', val: 'Vérifiée', icon: Database },
  ];

  return (
    <section id="pourquoi" className="px-4 py-12 md:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="grid gap-8 items-stretch lg:grid-cols-[0.9fr_1.1fr]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Left Column: Dossier Image Cover */}
          <Card className="relative overflow-hidden border-white/10 group flex flex-col justify-end min-h-[380px] lg:min-h-[450px]">
            <Image
              src={whyImage.src}
              alt={whyImage.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Dark futuristic screen filter */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030308]/90 via-[#030308]/30 to-transparent pointer-events-none" />
            
            {/* Holographic hud scan grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            
            <div className="relative z-10 p-6 font-mono">
              <Badge variant="destructive" className="mb-2">
                Pièce à conviction #34
              </Badge>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">{whyImage.caption}</h3>
              <p className="text-[10px] text-slate-400 mt-1 uppercase">État : Certifié non retouché</p>
            </div>
          </Card>

          {/* Right Column: Interactive Diagnostic Terminal */}
          <div className="flex flex-col justify-between">
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <ShieldAlert className="text-[#d946ef] h-5 w-5" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#d946ef]">Comportement / Diagnostic</span>
              </div>
              <h2 className="title-display mt-3 text-3.5xl font-bold text-white md:text-5xl uppercase font-mono-cyber leading-tight">
                Analyse de la 
                <span className="gradient-text-cyber block font-extrabold">Cible Ilem</span>
              </h2>
              <p className="mt-4 text-sm text-slate-350 leading-relaxed font-sans">
                Les dossiers compilés confirment un comportement typique nécessitant une surveillance. 
                Utilisez le terminal ci-dessous pour filtrer les rapports de diagnostic système.
              </p>
            </div>

            {/* Tabs for Terminal Viewports */}
            <Tabs defaultValue="rapport" className="w-full flex-grow">
              <TabsList className="w-full justify-start grid grid-cols-3 mb-5">
                <TabsTrigger 
                  value="rapport"
                  onClick={() => playCyberSound('click')}
                  onMouseEnter={() => playCyberSound('hover')}
                >
                  Rapport
                </TabsTrigger>
                <TabsTrigger 
                  value="anomalies"
                  onClick={() => playCyberSound('click')}
                  onMouseEnter={() => playCyberSound('hover')}
                >
                  Anomalies
                </TabsTrigger>
                <TabsTrigger 
                  value="fiche"
                  onClick={() => playCyberSound('click')}
                  onMouseEnter={() => playCyberSound('hover')}
                >
                  Fiche
                </TabsTrigger>
              </TabsList>

              {/* Tab 1: System Rapport */}
              <TabsContent value="rapport">
                <Card className="border-white/5 bg-black/40">
                  <CardContent className="p-5 font-mono text-xs text-slate-300 space-y-4">
                    <div className="flex justify-between border-b border-white/5 pb-2 text-[10px] text-slate-500">
                      <span>RAPP-ID: SEC-889-I</span>
                      <span>AUTORISÉ</span>
                    </div>
                    <p className="leading-relaxed font-sans text-sm text-slate-350">
                      Ilem représente un cas d&apos;école de décontraction de bureau. Nos capteurs révèlent 
                      que sa seule présence augmente le rire au sein du pôle de 42%, tout en réduisant 
                      les chances de livrer à temps de façon similaire.
                    </p>
                    <p className="leading-relaxed font-sans text-sm text-slate-350">
                      Sa résistance naturelle aux deadlines et son attitude face aux bugs critiques 
                      en font une cible parfaite pour cette vitrine technologique.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tab 2: Anomalies Checklist */}
              <TabsContent value="anomalies">
                <div className="space-y-2.5">
                  {anomalies.map((anomaly, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-black/45 p-3.5 text-xs text-slate-300 font-mono"
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                    >
                      <CheckSquare className="h-4 w-4 shrink-0 text-[#00f0ff] mt-0.5" />
                      <span className="text-slate-300 font-sans text-sm">{anomaly}</span>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Tab 3: Detailed Telemetry Specs */}
              <TabsContent value="fiche">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {metrics.map((m, idx) => {
                    const Icon = m.icon;
                    return (
                      <Card key={idx} className="border-white/5 bg-black/50 hover:border-white/10 transition-all p-4">
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-[#d946ef]" />
                          <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{m.name}</span>
                        </div>
                        <p className="text-sm font-mono text-white mt-2.5 font-bold tracking-wide">{m.val}</p>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pourquoi;
