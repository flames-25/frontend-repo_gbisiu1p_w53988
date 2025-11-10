import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroIntro({ onEnter }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D0D0D, #1A1A1A)' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(138,43,226,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,255,255,0.12),transparent_40%)]" />

      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-100"
            style={{ fontFamily: 'Poppins, Inter, system-ui' }}
          >
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] to-[#00FFFF]">My AI Studio</span>
          </motion.h1>
          <p className="mt-4 text-zinc-300 max-w-2xl mx-auto">
            A cinematic portfolio blending 3D interactions with a luxury dark aesthetic.
          </p>
          <motion.button
            onClick={onEnter}
            className="mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white/10 text-zinc-100 hover:bg-white/20 border border-white/10 backdrop-blur-md transition"
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.02 }}
          >
            Enter Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
