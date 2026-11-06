import { Mail } from 'lucide-react';
import { profile } from '../data/profile.js';
import { GithubIcon, LinkedinIcon } from './SocialIcons.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-ink-muted sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-4">
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-brand-lavender">
            <LinkedinIcon size={20} />
          </a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-brand-lavender">
            <GithubIcon size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-brand-lavender">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
