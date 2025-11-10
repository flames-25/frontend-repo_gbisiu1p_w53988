import { Github, Linkedin, Mail } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/60 bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_20px_theme(colors.purple.500)]" />
          <span className="font-semibold tracking-tight text-white">Your Name</span>
        </a>
        <nav className="flex items-center gap-3 text-sm">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition"
          >
            <Github size={16} /> Github
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/90 to-fuchsia-500/90 text-white border border-white/10 shadow-[0_0_30px_theme(colors.purple.500/40)] hover:opacity-90 transition"
          >
            <Mail size={16} /> Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
