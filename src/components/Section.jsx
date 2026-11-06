import { motion } from 'framer-motion';

// Wrapper used by every section: gives it an id (for navigation), consistent
// spacing, a gradient heading and a gentle fade-in when scrolled into view.
export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="font-mono text-sm tracking-wide text-brand-blue">{eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          <span className="gradient-text">{title}</span>
        </h2>
        {subtitle && <p className="mt-3 max-w-2xl text-ink-muted">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
}
