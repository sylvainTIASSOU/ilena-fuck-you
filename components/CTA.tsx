'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiShare2 } from 'react-icons/fi';
import { FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';
import { ctaImages } from '@/lib/imageCatalog';

const CTA = () => {
  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = "J'ai trouvé ça et j'ai pensé à toi... 🤣";

    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (navigator.share) {
      try {
        await navigator.share({ title: 'Un message pour kevin', text, url });
      } catch (err) {
        console.error('Erreur de partage:', err);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Lien copié ! Il est temps de spammer le monde entier.');
    }
  };

  return (
    <section id="contact" className="px-4 py-16 md:px-8">
      <motion.div
        className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-ink/10 bg-white/80 p-6 shadow-2xl shadow-ink/10 md:p-10 lg:grid-cols-[1.05fr_0.95fr]"
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.25 }}
      >
        <div>
          <motion.h2
            className="title-display text-4xl font-bold text-dark md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Tu veux diffuser le chef-d&apos;oeuvre?
            <span className="gradient-text block">Choisis la plateforme.</span>
          </motion.h2>

          <motion.p
            className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Tout est pret: un clic et le lien part directement. Le design est propre,
            le message est pret, il ne manque que ton feu vert.
          </motion.p>

          <motion.div
            className="mt-8 grid gap-3 sm:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <button
              onClick={() => handleShare('whatsapp')}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#25d366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#1da1f2] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <FaTwitter className="text-lg" />
              Twitter
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#1877f2] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <FaFacebook className="text-lg" />
              Facebook
            </button>
            <button
              onClick={() => handleShare('native')}
              className="flex items-center justify-center gap-2 rounded-2xl bg-dark px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <FiShare2 className="text-lg" />
              Partage natif
            </button>
          </motion.div>

          <p className="mt-8 text-sm font-medium text-ink/65">
            Bisous kevin, edition deluxe.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {ctaImages.map((item) => (
            <motion.div
              key={item.src}
              className="relative h-40 overflow-hidden rounded-2xl border border-ink/10 bg-white md:h-48"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -3 }}
            >
              <Image src={item.src} alt={item.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <p className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-dark">
                {item.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
