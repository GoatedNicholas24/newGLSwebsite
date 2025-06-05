import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from "next/image";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
    className="text-white pt-12 pb-6"
    style={{ backgroundColor: '#557553' }}
  >
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
      <div className="flex flex-col items-start gap-4">
        <Image src="/gls-logo-white.webp" alt="Great Lakes Safaris" width={180} height={60} />
        <div>
          <p className="font-bold">Great Lakes Safaris</p>
          <p>P.O. Box 33024<br />Kampala<br />UGANDA</p>
        </div>
        <div>
          <p className="font-bold flex items-center gap-2"><Phone className="w-4 h-4" />Contact Us</p>
          <p>+256 3932 67153<br />+256 7704 86002<br /><Mail className="inline w-4 h-4" /> journey@greatlakessafaris.com</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:flex-row md:justify-between gap-8">
        <nav className="flex flex-col gap-2">
          <a href="#" className="hover:underline">Home</a>
          <a href="/collection" className="hover:underline">Collection</a>
          <a href="/safaris" className="hover:underline">Safaris</a>
          <a href="/community" className="hover:underline">Community</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </nav>
        <div className="mt-6 md:mt-0">
          <p className="font-bold mb-2 flex items-center gap-2"><MapPin className="w-4 h-4" />Our Location</p>
          <p>Great Lakes Safaris<br />P.O. Box 33024<br />Kampala<br />UGANDA</p>
        </div>
      </div>
    </div>
    <div className="border-t border-green-800 mt-8 pt-4 text-center text-sm text-green-100">
      © 2025 Copyright – Great Lakes Safaris &nbsp;|&nbsp;
      <a href="/terms" className="underline hover:text-white">Terms & Conditions</a> &nbsp;–&nbsp;
      <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>
    </div>
  </motion.footer>
);

export default Footer;