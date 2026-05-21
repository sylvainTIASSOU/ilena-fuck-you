'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ZoomIn, Download, Terminal, Calendar, Layers, ShieldAlert, Cpu } from 'lucide-react';
import { galleryImages } from '@/lib/imageCatalog';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { playCyberSound } from '@/lib/audio';

const Galerie = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'focus' | 'dragon' | 'legende'>('all');

  const selectedImageIndex = galleryImages.findIndex((img) => img.src === selectedId);
  const selectedImage = selectedImageIndex !== -1 ? galleryImages[selectedImageIndex] : null;

  // Categorize images dynamically based on index to distribute them across tabs
  const getCategory = (index: number): 'focus' | 'dragon' | 'legende' => {
    if (index % 3 === 0) return 'focus';
    if (index % 3 === 1) return 'dragon';
    return 'legende';
  };

  const filteredImages = galleryImages.filter((img, idx) => {
    if (activeFilter === 'all') return true;
    return getCategory(idx) === activeFilter;
  });

  const handleFilterChange = (filter: typeof activeFilter) => {
    playCyberSound('click');
    setActiveFilter(filter);
  };

  const openLightbox = (src: string) => {
    playCyberSound('success');
    setSelectedId(src);
  };

  const filters = [
    { value: 'all', label: 'Tous les dossiers' },
    { value: 'focus', label: 'Session Intensive' },
    { value: 'dragon', label: 'Mode Dragon' },
    { value: 'legende', label: 'Moments Cultes' },
  ] as const;

  return (
    <section id="galerie" className="px-4 py-12 md:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Header Block */}
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-1.5 justify-center mb-3">
              <Layers className="h-4.5 w-4.5 text-[#d946ef] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#d946ef]">Accès complet aux archives</span>
            </div>
            <h2 className="title-display text-3.5xl font-bold text-white md:text-5xl uppercase font-mono-cyber">
              La Chambre des Archives
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 font-sans">
              34 captures à haute valeur probante, triées et classées dans notre base de données sécurisée.
            </p>
          </motion.div>
        </div>

        {/* Categories filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => handleFilterChange(f.value)}
              onMouseEnter={() => playCyberSound('hover')}
              className={`rounded-lg px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeFilter === f.value
                  ? 'bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/40 shadow-[0_0_12px_rgba(0,240,255,0.15)]'
                  : 'bg-black/40 border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="rounded-[2rem] border border-white/10 bg-black/40 p-4 md:p-6 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          
          <motion.div 
            layout
            className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => {
                // Recover exact index in absolute catalog for display
                const origIndex = galleryImages.findIndex((img) => img.src === image.src);
                return (
                  <motion.div
                    layout
                    key={image.src}
                    className="group mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-2xl border border-white/5 bg-black/40 shadow-lg relative"
                    onClick={() => openLightbox(image.src)}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    whileHover={{
                      scale: 1.02,
                      borderColor: 'rgba(0,240,255,0.3)',
                      boxShadow: '0 10px 25px rgba(0,240,255,0.15)',
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={800}
                        className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Info label sliding up */}
                      <div className="absolute bottom-0 left-0 right-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0 z-10 flex items-center justify-between">
                        <p className="rounded-md bg-black/80 border border-white/10 px-2 py-0.5 text-[8px] font-mono uppercase tracking-wider text-slate-300">
                          {image.caption}
                        </p>
                        <span className="text-[8px] font-mono text-slate-500">#{origIndex + 1}</span>
                      </div>

                      {/* Zoom glass icon indicator */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="h-10 w-10 rounded-full bg-black/70 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                          <ZoomIn className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* HUD Evidence Dialog Lightbox */}
        <Dialog open={selectedId !== null} onOpenChange={(open) => !open && setSelectedId(null)}>
          {selectedImage && (
            <DialogContent className="max-w-4xl p-0 overflow-hidden border-white/15 bg-[#07070d]/95 backdrop-blur-3xl">
              
              <div className="grid md:grid-cols-[1.1fr_0.9fr] items-stretch">
                
                {/* Left Side: Large Image */}
                <div className="relative bg-black flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1000}
                    height={800}
                    className="max-h-[75vh] w-full object-contain"
                  />
                  {/* Neon laser scanbar */}
                  <div className="absolute inset-x-0 h-[2px] bg-[#d946ef] top-0 shadow-[0_0_10px_#d946ef] animate-[cyber-pulse_3s_infinite_linear] opacity-75" />
                </div>

                {/* Right Side: Cyber Diagnostic Ledger */}
                <div className="p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/15 font-mono text-xs text-slate-300">
                  
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldAlert className="h-4.5 w-4.5 text-[#00f0ff]" />
                      <span className="text-[10px] uppercase tracking-widest text-[#00f0ff] font-bold">ANALYSE DE PREUVE</span>
                    </div>

                    <DialogTitle className="text-xl font-bold uppercase text-white font-mono-cyber tracking-wider mb-2">
                      Fiche #{selectedImageIndex + 1}
                    </DialogTitle>
                    <DialogDescription className="text-slate-400 text-xs mb-6">
                      Rapport d&apos;analyse géométrique de la cible.
                    </DialogDescription>

                    {/* Metadata Specs Table */}
                    <div className="space-y-3.5 mb-8">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">FICHIER SOURCE :</span>
                        <span className="text-white font-bold">{selectedImage.src.split('/').pop()}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">CAPTION INDEX :</span>
                        <span className="text-[#d946ef] font-bold">{selectedImage.caption}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">HORODATAGE :</span>
                        <span className="text-white flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-slate-500" />
                          ARCHIVE_2026
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">EXPLOIT TYPE :</span>
                        <span className="text-[#00f0ff] uppercase">{getCategory(selectedImageIndex)}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">NIVEAU DE DOSSIER :</span>
                        <Badge variant="destructive" className="text-[8px] py-0">CLASSIFIÉ TOP SECRET</Badge>
                      </div>
                    </div>

                    {/* Fun cyber description */}
                    <div className="rounded-xl border border-white/5 bg-black/60 p-4 mb-6">
                      <div className="flex items-center gap-1.5 mb-1.5 text-slate-400 font-bold uppercase text-[9px]">
                        <Cpu className="h-3.5 w-3.5 text-[#00f0ff]" /> Rapport de scan
                      </div>
                      <p className="font-sans text-slate-350 text-xs leading-relaxed">
                        Preuve irréfutable de pause non réglementaire. Le sujet affiche un visage de déni complet 
                        face à toute notion de productivité standard.
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="cyber" 
                      className="w-full text-xs"
                      onClick={() => {
                        playCyberSound('success');
                        window.open(selectedImage.src, '_blank');
                      }}
                    >
                      <Download className="h-4 w-4" />
                      Télécharger la preuve
                    </Button>
                  </div>

                </div>

              </div>
              
            </DialogContent>
          )}
        </Dialog>

      </div>
    </section>
  );
};

export default Galerie;
