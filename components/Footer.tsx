
'use client';

import { FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-black text-center text-gray-600">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="text-2xl hover:text-neonRed transition-colors"><FaTwitter /></a>
        <a href="#" className="text-2xl hover:text-neonRed transition-colors"><FaInstagram /></a>
        <a href="#" className="text-2xl hover:text-neonRed transition-colors"><FaTiktok /></a>
      </div>
      <p>Fait avec amour (et beaucoup de doigts) en 2024</p>
      <p className="mt-2 text-sm">Ce site ne respecte rien, et c&apos;est pour ça qu&apos;on l&apos;aime.</p>
    </footer>
  );
};

export default Footer;
