import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-10 flex items-center justify-between">
        <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="text-sm">Built with love and curiosity.</p>
      </div>
    </footer>
  );
};

export default Footer;
