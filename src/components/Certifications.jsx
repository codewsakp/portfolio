import { motion } from 'framer-motion';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications.js';
import Section from './Section.jsx';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="06 / certifications"
      title="Certifications & programmes"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ y: -3 }}
            className="card flex gap-4 p-5 transition-colors hover:border-brand-purple/40"
          >
            <BadgeCheck className="mt-1 shrink-0 text-brand-purple" size={24} />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge">{c.type}</span>
                <span className="font-mono text-xs text-brand-blue">{c.year}</span>
              </div>
              <h3 className="mt-2 font-display font-semibold leading-snug">{c.title}</h3>
              <p className="text-sm text-ink-muted">{c.issuer}</p>
              {c.credentialUrl && (
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-brand-lavender hover:underline"
                >
                  View credential <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
