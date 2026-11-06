import { useState } from 'react';
import { Check, Copy, Mail } from 'lucide-react';
import { profile } from '../data/profile.js';
import { GithubIcon, LinkedinIcon } from './SocialIcons.jsx';
import Section from './Section.jsx';

// No contact form on purpose: a form needs a real backend to receive messages.
// Visitors can reach you by email (button below) or on LinkedIn / GitHub.
export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: the visible email address can still be copied by hand */
    }
  };

  const items = [
    { icon: <LinkedinIcon size={20} />, label: 'LinkedIn', text: 'Connect with me', href: profile.links.linkedin },
    { icon: <GithubIcon size={20} />, label: 'GitHub', text: 'codewsakp', href: profile.links.github },
  ];

  return (
    <Section
      id="contact"
      eyebrow="07 / contact"
      title="Let's connect"
      subtitle="I'm looking for internship and entry-level Java / full-stack opportunities. Feel free to reach out."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="card p-6 md:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue text-white">
                <Mail size={22} />
              </span>
              <div>
                <p className="text-sm text-ink-muted">Email</p>
                <p className="font-display text-lg font-semibold break-all">{profile.email}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <Mail size={17} /> Send email
              </a>
              <button onClick={copyEmail} className="btn-ghost" aria-live="polite">
                {copied ? <Check size={17} /> : <Copy size={17} />} {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        </div>

        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center gap-4 p-6 transition hover:-translate-y-1 hover:border-brand-purple/50"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-lavender">
              {it.icon}
            </span>
            <div>
              <p className="font-display font-semibold">{it.label}</p>
              <p className="text-sm text-ink-muted">{it.text}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
