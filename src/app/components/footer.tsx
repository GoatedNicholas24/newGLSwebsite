import Image from "next/image";

const Footer = () => (
  <footer className="  text-white pt-12 pb-6" style={ {backgroundColor: '#557553'}}>
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
      <div className="flex flex-col items-start gap-4">
        <Image src="/gls-logo-white.webp" alt="Great Lakes Safaris" width={180} height={60} />
        <div>
          <p className="font-bold">Great Lakes Safaris</p>
          <p>P.O. Box 33024<br />Kampala<br />UGANDA</p>
        </div>
        <div>
          <p className="font-bold">Contact Us</p>
          <p>+256 3932 67153<br />+256 7704 86002<br />journey@greatlakessafaris.com</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:flex-row md:justify-between gap-8">
        <nav className="flex flex-col gap-2">
          <link href="/" className="hover:underline"/>
          <link href="/collection" className="hover:underline"/>
          <link href="/safaris" className="hover:underline"/>
          <link href="/community" className="hover:underline"/>
          <link href="/about" className="hover:underline"/>
          <link href="/blog" className="hover:underline"/>
          <link href="/contact" className="hover:underline"/>
        </nav>
        <div className="mt-6 md:mt-0">
          <p className="font-bold mb-2">Our Location</p>
          <p>Great Lakes Safaris<br />P.O. Box 33024<br />Kampala<br />UGANDA</p>
        </div>
      </div>
    </div>
    <div className="border-t border-green-800 mt-8 pt-4 text-center text-sm text-green-100">
      © 2025 Copyright – Great Lakes Safaris &nbsp;|&nbsp;
      <link href="/terms" className="underline hover:text-white"/> 
      <link href="/privacy" className="underline hover:text-white"/>
    </div>
  </footer>
);

export default Footer;