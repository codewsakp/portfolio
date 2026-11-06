import { motion } from 'framer-motion';
import { Download, FolderGit2, MapPin } from 'lucide-react';
import { profile } from '../data/profile.js';
import useTypewriter from '../hooks/useTypewriter.js';
import { GithubIcon, LinkedinIcon } from './SocialIcons.jsx';

export default function Hero() {
  const role = useTypewriter(profile.typingRoles);

  return (
    <section id="home" className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-5 pb-16 pt-28 sm:px-8">
      <div className="grid w-full items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        {/* ---- Text (takes most of the space) ---- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="order-2 md:order-1"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-brand-lavender">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="gradient-text">{profile.displayName}</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-ink sm:text-xl">{profile.headline}</p>

          <p className="mt-3 h-8 font-mono text-lg text-brand-blue" aria-live="off">
            <span aria-hidden="true">&gt; </span>
            {role}
            <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-brand-purple align-middle">&nbsp;</span>
          </p>

          <p className="mt-5 max-w-2xl leading-relaxed text-ink-muted">{profile.heroIntro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              <FolderGit2 size={18} /> Explore My Projects
            </a>
            <a href={profile.resume} download className="btn-ghost">
              <Download size={18} /> Download Resume
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2.5">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2.5">
              <GithubIcon /> GitHub
            </a>
          </div>
        </motion.div>

        {/* ---- Small framed photo (~170px) ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 flex flex-col items-center md:order-2"
        >
          <div className="rounded-full bg-gradient-to-br from-brand-purple via-brand-lavender to-brand-blue p-[3px] shadow-glow">
            <img
              src={profile.photo}
              alt={profile.photoAlt}
              width="250"
              height="250"
              fetchpriority="high"
              className="h-32 w-32 rounded-full border-4 border-navy-900 object-cover object-top sm:h-40 sm:w-40 md:h-[250px] md:w-[250px]"
            />
          </div>
          <p className="mt-4 flex items-center gap-1.5 text-xs text-ink-muted">
            <MapPin size={14} /> {profile.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
