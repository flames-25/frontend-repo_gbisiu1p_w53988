import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'NeuroVision',
    description: 'Real-time image segmentation with TensorRT acceleration and a crisp UI.',
    tags: ['TensorFlow', 'CUDA', 'Vite'],
    live: '#',
    repo: '#',
  },
  {
    title: 'DialogueGPT+',
    description: 'Finetuned LLM chat experience with vector search and RAG pipelines.',
    tags: ['Python', 'FastAPI', 'Pinecone'],
    live: '#',
    repo: '#',
  },
  {
    title: 'QuantDash',
    description: 'Streaming market analytics with anomaly detection and sleek charts.',
    tags: ['Time Series', 'WebSockets', 'D3'],
    live: '#',
    repo: '#',
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="relative w-full py-24" style={{ background: 'linear-gradient(135deg, #0D0D0D, #1A1A1A)' }}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-zinc-100"
        >
          Featured Projects
        </motion.h3>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl hover:border-cyan-300/30 transition"
            >
              <div className="text-xl font-semibold text-zinc-100">{p.title}</div>
              <p className="mt-2 text-sm text-zinc-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.live} className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200"><ExternalLink size={16}/> Live</a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-zinc-300 hover:text-white"><Github size={16}/> Code</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
