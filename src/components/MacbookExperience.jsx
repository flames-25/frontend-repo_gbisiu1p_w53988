import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Palette } from 'lucide-react';

const skills = [
  { label: 'Frontend', icon: Code2 },
  { label: 'Backend', icon: Database },
  { label: 'Systems', icon: Cpu },
  { label: 'Design', icon: Palette },
];

export default function MacbookExperience() {
  return (
    <section className="relative min-h-screen bg-[#0a0114] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ rotateX: 65, y: 60, opacity: 0 }}
          animate={{ rotateX: 0, y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 16 }}
          className="relative mx-auto w-full max-w-3xl perspective-[1200px]"
        >
          {/* Top (screen) */}
          <motion.div
            initial={{ rotateX: 65 }}
            animate={{ rotateX: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 16, delay: 0.15 }}
            className="relative h-72 md:h-96 rounded-xl border border-white/15 bg-gradient-to-b from-[#0f0a1a] to-[#120b20] shadow-2xl overflow-hidden"
            style={{ transformOrigin: 'bottom center' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.25),transparent_60%)]" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-b from-purple-300 to-purple-600 bg-clip-text text-transparent">
                Your Name
              </h2>
              <p className="mt-2 text-sm md:text-base text-white/80">Projects and experiments in web, 3D, and systems.</p>
            </div>
          </motion.div>

          {/* Bottom (keyboard base) */}
          <div className="relative -mt-2 h-6 md:h-8 rounded-b-xl bg-gradient-to-b from-[#1a1328] to-[#0b0712] border-x border-b border-white/15" />
        </motion.div>

        {/* Dock */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 flex items-end justify-center gap-4"
        >
          <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3">
            {skills.map(({ label, icon: Icon }) => (
              <div key={label} className="group flex flex-col items-center">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600/30 via-fuchsia-500/20 to-indigo-500/20 border border-white/10 text-purple-200 shadow-[0_8px_30px_rgba(168,85,247,0.25)] group-hover:scale-105 transition">
                  <Icon />
                </div>
                <span className="mt-1 text-xs text-white/75">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
