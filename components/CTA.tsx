'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Send, Share2, Terminal, ShieldAlert } from 'lucide-react';
import { FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';
import { ctaImages } from '@/lib/imageCatalog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { playCyberSound } from '@/lib/audio';

const CTA = () => {
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    '$ initialize-propagation --target=ilem-network',
    '[OK] Connexion établie avec le serveur de stockage',
    '[OK] 34 archives compressées prêtes pour la diffusion',
    '$ select-destination-protocol --awaiting-input',
  ]);

  const handleShare = async (platform: string) => {
    playCyberSound('success');
    const url = window.location.href;
    const text = "Alerte de sécurité : le dossier secret d'Ilem est en ligne ! Regarde ça vite... 🖕🤣";

    // Add log to terminal
    const newLog = `[INFO] Diffusion initiée via le protocole: ${platform.toUpperCase()}`;
    setTerminalLogs((prev) => [...prev, newLog, '$ status --running...']);

    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (navigator.share) {
      try {
        await navigator.share({ title: 'Dossier Ilem Compromis', text, url });
      } catch (err) {
        console.error('Erreur de partage:', err);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Lien copié dans le presse-papiers ! Le monde doit savoir.');
    }
  };

  return (
    <section id="contact" className="px-4 py-12 md:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="grid gap-8 items-stretch lg:grid-cols-[1.1fr_0.9fr]"
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          
          {/* Left Column: Command center & Action buttons */}
          <Card className="p-6 md:p-8 border-white/10 bg-black/60 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-[#d946ef]/40 pointer-events-none" />
            
            <div>
              {/* Heading */}
              <div className="flex items-center gap-2 mb-4">
                <Send className="h-4.5 w-4.5 text-[#d946ef] animate-bounce" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#d946ef] font-bold">Protocole de propagation</span>
              </div>
              <h2 className="title-display text-3xl font-bold text-white md:text-5xl uppercase font-mono-cyber leading-tight">
                Propager le 
                <span className="gradient-text-cyber block font-extrabold tracking-tight">Chef-d&apos;œuvre</span>
              </h2>
              <p className="mt-4 text-sm text-slate-350 leading-relaxed font-sans">
                Sélectionnez le protocole réseau pour diffuser le dossier compromis aux autorités compétentes (vos groupes de potes).
              </p>

              {/* Social actions buttons */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <Button
                  variant="cyber-cyan"
                  onClick={() => handleShare('whatsapp')}
                  onMouseEnter={() => playCyberSound('hover')}
                  className="gap-2 text-xs uppercase tracking-widest outline-none cursor-pointer"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  WhatsApp
                </Button>
                
                <Button
                  variant="cyber-pink"
                  onClick={() => handleShare('twitter')}
                  onMouseEnter={() => playCyberSound('hover')}
                  className="gap-2 text-xs uppercase tracking-widest outline-none cursor-pointer"
                >
                  <FaTwitter className="h-4 w-4" />
                  Twitter
                </Button>
                
                <Button
                  variant="cyber-outline"
                  onClick={() => handleShare('facebook')}
                  onMouseEnter={() => playCyberSound('hover')}
                  className="gap-2 text-xs uppercase tracking-widest outline-none cursor-pointer hover:border-[#00f0ff] hover:text-[#00f0ff]"
                >
                  <FaFacebook className="h-4 w-4" />
                  Facebook
                </Button>
                
                <Button
                  variant="cyber"
                  onClick={() => handleShare('native')}
                  onMouseEnter={() => playCyberSound('hover')}
                  className="gap-2 text-xs uppercase tracking-widest outline-none cursor-pointer"
                >
                  <Share2 className="h-4 w-4" />
                  Partage Natif
                </Button>
              </div>
            </div>

            {/* Hacker command shell console mock */}
            <div className="mt-8 rounded-xl border border-white/5 bg-black/85 p-4 font-mono text-[10px] text-[#00f0ff]">
              <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-2 text-slate-500 font-bold uppercase">
                <Terminal className="h-4 w-4" /> Console de transmission
              </div>
              <div className="space-y-1.5">
                {terminalLogs.map((log, idx) => (
                  <p key={idx} className={idx === terminalLogs.length - 1 ? 'animate-pulse text-[#d946ef]' : 'text-slate-350'}>
                    {log}
                  </p>
                ))}
              </div>
            </div>

          </Card>

          {/* Right Column: Previews grid */}
          <div className="grid grid-cols-2 gap-3 relative z-10">
            {ctaImages.map((item, idx) => (
              <motion.article
                key={item.src}
                className="relative h-40 md:h-48 overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ 
                  y: -5,
                  borderColor: idx % 2 === 0 ? '#00f0ff' : '#d946ef',
                  boxShadow: idx % 2 === 0 ? '0 0 15px rgba(0,240,255,0.25)' : '0 0 15px rgba(217,70,239,0.25)'
                }}
                onMouseEnter={() => playCyberSound('hover')}
                onClick={() => playCyberSound('click')}
              >
                <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1">
                  <ShieldAlert className="h-3 w-3 text-[#d946ef]" />
                  <p className="rounded-md bg-black/70 border border-white/15 px-2 py-0.5 text-[8px] font-mono uppercase tracking-wider text-slate-300">
                    {item.caption.split(' ')[0]} #{idx + 82}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
