import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neural Notes',
    description: 'AI-assisted note-taking with embeddings and semantic search.',
    tags: ['React', 'FastAPI', 'Pinecone'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Voxel Vista',
    description: 'Web-based 3D scene explorer with Spline and custom shaders.',
    tags: ['Three.js', 'Spline', 'WebGL'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Pulseboard',
    description: 'Real-time dashboard for product analytics and growth metrics.',
    tags: ['Next.js', 'Tailwind', 'Supabase'],
    link: '#',
    repo: '#',
  },
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-[#0a0114] via-[#0b0614] to-[#0a0114] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-purple-500/40 transition"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-600/30 via-fuchsia-500/20 to-indigo-500/20" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.link} className="inline-flex items-center gap-1 text-purple-300 hover:text-purple-200">
                    <ExternalLink size={16} /> Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-purple-300 hover:text-purple-200">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
