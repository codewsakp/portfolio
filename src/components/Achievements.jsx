import { motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';
import { achievements } from '../data/achievements.js';
import Section from './Section.jsx';

// To use a new icon: import it above, add it here, use its name in data/achievements.js
const ICONS = { Trophy, Award, Medal };

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="05 / achievements" title="Achievements">
      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map((a, i) => {
          const Icon = ICONS[a.icon] ?? Award;
          return (
            <motion.div
              key={a.title + a.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="card relative overflow-hidden p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-purple/20 blur-2xl" />
              <div className="relative flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue text-white shadow-glow">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="font-mono text-xs text-brand-blue">{a.year}</p>
                  <h3 className="font-display text-xl font-semibold">{a.title}</h3>
                  <p className="mt-1 text-sm text-ink">{a.event}</p>
                  <p className="text-sm text-ink-muted">{a.org}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
