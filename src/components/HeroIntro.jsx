import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroIntro = ({ onEnter }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />

      {/* Centered name and CTA */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          onClick={onEnter}
          className="group rounded-full border border-white/20 bg-white/5 px-10 py-6 backdrop-blur-md transition hover:bg-white/10"
        >
          <div className="flex flex-col items-center">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              initial={{ letterSpacing: '0.25em' }}
              animate={{ letterSpacing: '0.02em' }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              Your Name
            </motion.h1>
            <span className="mt-2 text-sm sm:text-base text-white/70">Click to enter</span>
          </div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroIntro;
