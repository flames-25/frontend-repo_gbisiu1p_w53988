import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white/90 font-semibold tracking-tight">Portfolio</a>
        <nav className="flex items-center gap-4 text-white/80">
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white transition"><Github className="w-5 h-5" /></a>
          <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white transition"><Linkedin className="w-5 h-5" /></a>
          <a aria-label="Email" href="mailto:you@example.com" className="hover:text-white transition"><Mail className="w-5 h-5" /></a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
