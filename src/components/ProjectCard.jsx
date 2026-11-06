import { motion } from 'framer-motion';
import { CheckCircle2, ExternalLink, Info, User } from 'lucide-react';
import { GithubIcon } from './SocialIcons.jsx';
import ScreenshotGallery from './ScreenshotGallery.jsx';

// One project card. Everything shown comes from an object in data/projects.js.
export default function ProjectCard({ project: p, index }) {
  const hasShots = p.screenshots?.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="card group relative overflow-hidden p-5 transition-colors hover:border-brand-purple/50 sm:p-8"
    >
      {/* soft glow in the corner */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-purple/20 blur-3xl transition-opacity group-hover:opacity-100" />

      <header className="relative flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-brand-blue">
            {index === 0 ? 'FEATURED PROJECT' : `PROJECT 0${index + 1}`} · {p.year}
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{p.title}</h3>
          <p className="text-ink-muted">{p.tagline}</p>
        </div>
        <span className="badge !border-emerald-400/30 !bg-emerald-400/10 !text-emerald-300">{p.status}</span>
      </header>

      {hasShots && (
        <div className="relative mt-6">
          <ScreenshotGallery shots={p.screenshots} title={p.title} />
        </div>
      )}

      <div className="relative mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="leading-relaxed text-ink-muted">{p.description}</p>
          <h4 className="mt-6 font-display text-sm font-semibold uppercase tracking-wider text-brand-lavender">
            Key features
          </h4>
          <ul className="mt-3 space-y-2">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-ink/90">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-purple" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <div>
            <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand-lavender">
              <User size={14} /> My contribution
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.contribution}</p>
          </div>

          {p.notes?.map((n) => (
            <div key={n.title} className="rounded-2xl border border-brand-blue/25 bg-brand-blue/[0.07] p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-brand-lavender">
                <Info size={14} /> {n.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{n.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span key={t} className="badge">{t}</span>
        ))}
      </div>

      {(p.live || p.github) && (
        <div className="relative mt-7 flex flex-wrap gap-3">
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink size={17} /> Live Demo
            </a>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <GithubIcon size={17} /> Source Code
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
