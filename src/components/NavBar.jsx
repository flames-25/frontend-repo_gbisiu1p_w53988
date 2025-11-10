import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/60 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-widest uppercase text-zinc-200 hover:text-white transition-colors">Your Name</a>
        <nav className="flex items-center gap-4 text-zinc-300">
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:text-white hover:bg-white/5 transition-colors"><Github size={18} /></a>
          <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:text-white hover:bg-white/5 transition-colors"><Linkedin size={18} /></a>
          <a aria-label="Email" href="mailto:you@example.com" className="p-2 rounded-md hover:text-white hover:bg-white/5 transition-colors"><Mail size={18} /></a>
        </nav>
      </div>
    </header>
  );
}
