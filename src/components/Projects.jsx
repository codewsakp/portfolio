import { projects } from '../data/projects.js';
import Section from './Section.jsx';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 / projects"
      title="Featured projects"
      subtitle="Applications I've built end to end: what they do, how they work and what I contributed."
    >
      <div className="space-y-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
