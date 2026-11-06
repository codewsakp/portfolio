import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/education.js';
import Section from './Section.jsx';

export default function Education() {
  return (
    <Section id="education" eyebrow="04 / education" title="Academic journey">
      <ol className="relative ml-4 border-l border-brand-purple/30 sm:ml-6">
        {education.map((e, i) => (
          <motion.li
            key={e.degree}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative pb-8 pl-8 last:pb-0 sm:pl-10"
          >
            <span className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-blue text-white shadow-glow">
              <GraduationCap size={16} />
            </span>
            <div className="card p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
                <span className="font-mono text-xs text-brand-blue">{e.period}</span>
              </div>
              <p className="mt-1 text-sm text-ink-muted">{e.institution}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="badge">{e.score}</span>
                {e.status === 'Pursuing' && <span className="badge">In progress</span>}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
