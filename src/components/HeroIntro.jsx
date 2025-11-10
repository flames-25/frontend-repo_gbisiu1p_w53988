import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroIntro({ onEnter }) {
  return (
    <section className="relative min-h-screen w-full bg-[#0a0114] overflow-hidden">
      {/* Spline brain scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Purple radial glow overlay - allow clicks to pass through */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_60%)]" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-purple-300 to-purple-600 text-transparent bg-clip-text drop-shadow-[0_2px_30px_rgba(168,85,247,0.35)]"
        >
          Your Name
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-2xl text-purple-100/80"
        >
          Building delightful interfaces with React, 3D visuals, and smooth motion.
        </motion.p>

        <motion.button
          onClick={onEnter}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.4 }}
          className="mt-10 inline-flex items-center gap-3 rounded-full px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-[0_0_40px_rgba(168,85,247,0.35)] border border-white/10"
        >
          Enter Projects
        </motion.button>
      </div>

      {/* bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0114] to-transparent" />
    </section>
  );
}
