
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Pourquoi from '@/components/Pourquoi';
import Preuves from '@/components/Preuves';
import Galerie from '@/components/Galerie';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pourquoi />
      <Preuves />
      <Galerie />
      <CTA />
      <Footer />
    </main>
  );
}
