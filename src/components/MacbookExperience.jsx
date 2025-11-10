import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code2, Palette, Database } from 'lucide-react';

const skills = [
  { icon: <Code2 className="w-6 h-6" />, label: 'Frontend' },
  { icon: <Database className="w-6 h-6" />, label: 'Backend' },
  { icon: <Cpu className="w-6 h-6" />, label: 'Systems' },
  { icon: <Palette className="w-6 h-6" />, label: 'Design' },
];

const DockItem = ({ icon, label }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.1 }}
    className="flex flex-col items-center"
  >
    <div className="rounded-2xl bg-white/80 text-gray-900 p-3 shadow-xl backdrop-blur-md">
      {icon}
    </div>
    <span className="mt-2 text-xs text-white/80">{label}</span>
  </motion.div>
);

const MacbookExperience = ({ show, name = 'Your Name' }) => {
  return (
    <AnimatePresence>
      {show && (
        <section className="min-h-screen w-full bg-gradient-to-b from-slate-900 to-black text-white flex items-center justify-center p-6">
          <motion.div
            initial={{ rotateX: 65, y: 80, opacity: 0 }}
            animate={{ rotateX: 0, y: 0, opacity: 1 }}
            exit={{ rotateX: 45, y: 60, opacity: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl"
          >
            {/* Macbook Base */}
            <div className="relative mx-auto h-[420px] w-full rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl ring-1 ring-white/10">
              {/* Screen */}
              <motion.div
                initial={{ scaleY: 0.05, transformOrigin: 'bottom' }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute left-6 right-6 top-6 bottom-28 rounded-2xl bg-neutral-950 border border-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(167,139,250,0.25),transparent_40%)]" />
                <div className="relative z-10 h-full w-full flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{name}</h2>
                    <p className="mt-3 text-white/70 max-w-md mx-auto">Developer • Designer • Engineer</p>
                  </div>
                </div>
              </motion.div>

              {/* Keyboard area */}
              <div className="absolute left-0 right-0 bottom-0 h-28">
                <div className="mx-8 h-full rounded-t-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 border-t border-white/10" />
              </div>

              {/* Dock with skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-6 left-0 right-0 flex justify-center"
              >
                <div className="flex items-end gap-6 rounded-3xl bg-white/10 p-4 backdrop-blur-md border border-white/10 shadow-lg">
                  {skills.map((s) => (
                    <DockItem key={s.label} icon={s.icon} label={s.label} />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      )}
    </AnimatePresence>
  );
};

export default MacbookExperience;
