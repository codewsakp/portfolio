import { motion } from 'framer-motion';
import { Code2, Server, LayoutTemplate, Database, Sparkles, Wrench } from 'lucide-react';
import { skills } from '../data/skills.js';
import Section from './Section.jsx';

// To use a new icon: import it above and add it here, then use its name in data/skills.js
const ICONS = { Code2, Server, LayoutTemplate, Database, Sparkles, Wrench };

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 / skills"
      title="Technical skills"
      subtitle="The tools I've used in my projects and coursework."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = ICONS[group.icon] ?? Code2;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="card p-6 transition-colors hover:border-brand-purple/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple/30 to-brand-blue/30 text-brand-lavender">
                  <Icon size={20} />
                </span>
                <h3 className="font-display text-lg font-semibold">{group.category}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="badge">{item}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
