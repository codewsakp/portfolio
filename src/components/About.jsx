import { profile } from '../data/profile.js';
import { projects } from '../data/projects.js';
import Section from './Section.jsx';

export default function About() {
  // The project count is calculated, so it updates when you add a project.
  const stats = [
    ...profile.highlights.filter((h) => h.label !== 'Projects built'),
    { label: 'Projects built', value: String(projects.length) },
  ];

  return (
    <Section id="about" eyebrow="01 / about" title="A bit about me">
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5 leading-relaxed text-ink-muted">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 md:grid-cols-1">
          {stats.map((s) => (
            <div key={s.label} className="card p-5 text-center md:text-left">
              <p className="font-display text-xl font-bold gradient-text sm:text-2xl">{s.value}</p>
              <p className="mt-1 text-xs text-ink-muted sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
