import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Cpu, Code2, Database, Brain } from 'lucide-react';

// Noir Tech styles
const bgStyle = { background: 'linear-gradient(135deg, #0D0D0D, #1A1A1A)' };

export default function MacbookExperience() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-20% 0px -20% 0px', once: true });
  const lidControls = useAnimation();
  const [openProgress, setOpenProgress] = useState(0); // 0 to 1

  useEffect(() => {
    if (inView) {
      // Elastic-like opening using keyframes approximating easeOutElastic
      lidControls.start({
        rotateX: [90, 20, -5, 0],
        y: [10, 4, 1, 0],
        transition: { duration: 2, times: [0, 0.6, 0.85, 1], ease: [0.2, 0.8, 0.2, 1] }
      });
      // progress to trigger icon reveal later
      let start = performance.now();
      const tick = (t) => {
        const elapsed = (t - start) / 2000;
        const p = Math.min(1, elapsed);
        setOpenProgress(p);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, [inView, lidControls]);

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: 'drop-shadow(0 0 0px #00ffff)' },
    visible: (i) => ({
      opacity: 1,
      scale: [1, 1.1, 1],
      filter: 'drop-shadow(0 0 12px #00ffff)',
      transition: { delay: 0.2 + i * 0.15, duration: 0.6, ease: 'easeOut' }
    })
  };

  return (
    <section ref={ref} className="relative w-full min-h-[90vh] flex items-center justify-center py-20" style={bgStyle}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -10 }}
        transition={{ duration: 0.8 }}
        className="absolute top-16 text-center"
      >
        <h2 className="text-zinc-200 tracking-widest uppercase text-xs mb-2" style={{ fontFamily: 'Poppins, Inter' }}>My Skills</h2>
        <div className="text-2xl md:text-3xl font-bold text-zinc-100">
          AI-Powered Craft in a Luxury Dark Mode
        </div>
      </motion.div>

      {/* MacBook 3D-esque mock */}
      <div className="relative perspective-[1200px] w-full max-w-4xl px-6">
        {/* Base */}
        <div className="relative mx-auto w-full max-w-3xl h-6 rounded-b-xl bg-black/80 border-t border-white/10 shadow-[0_-20px_60px_-30px_rgba(0,255,255,0.25)]" />

        {/* Hinge + Body */}
        <div className="relative mx-auto w-full max-w-3xl h-4 bg-zinc-900 rounded-b-2xl border border-zinc-800 shadow-inner shadow-cyan-300/10" />

        {/* Lid/Screen group with 3D rotation */}
        <motion.div
          animate={lidControls}
          initial={{ rotateX: 90, y: 10, transformOrigin: 'bottom center' }}
          className="relative mx-auto w-full max-w-3xl h-[28rem] origin-bottom shadow-[0_40px_120px_-20px_rgba(0,255,255,0.25)] rounded-t-xl"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Screen frame */}
          <div className="absolute inset-0 rounded-t-xl bg-zinc-950 border border-zinc-800 overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-black to-[#0C0F12]" />
            <div className="absolute inset-0 ring-1 ring-white/10" />
            <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 60px rgba(0,255,255,0.12), inset 0 0 80px rgba(138,43,226,0.08)' }} />

            {/* Reflection sweep */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: openProgress > 0.4 ? [0, 0.25, 0] : 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute top-0 left-[-50%] w-[60%] h-full rotate-12"
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 100%)'
              }}
            />

            {/* Icons Grid */}
            <div className="relative z-10 w-full h-full grid grid-cols-3 md:grid-cols-3 gap-4 p-6 place-content-center">
              {[{ icon: <Code2 />, label: 'Python' }, { icon: <Database />, label: 'SQL' }, { icon: <Cpu />, label: 'TensorFlow' }, { icon: <Brain />, label: 'ML' }, { icon: <Database />, label: 'Data Science' }, { icon: <Code2 />, label: 'Flask' }].map((item, idx) => (
                <motion.div
                  key={item.label}
                  custom={idx}
                  initial="hidden"
                  animate={openProgress >= 0.95 ? 'visible' : 'hidden'}
                  variants={iconVariants}
                  className="skill-icon group relative flex flex-col items-center justify-center rounded-xl border border-cyan-300/20 bg-black/40 backdrop-blur-md p-4 text-zinc-200 hover:border-cyan-300/40 transition transform"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-cyan-300 drop-shadow-[0_0_12px_#00ffff]">{item.icon}</div>
                  <div className="mt-2 text-xs tracking-wide text-zinc-300">{item.label}</div>
                  <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: 'inset 0 0 24px rgba(0,255,255,0.15)' }} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
