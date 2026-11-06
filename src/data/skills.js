// =====================================================================
// SKILLS: grouped by category. Add a skill by adding a string to a list.
// `icon` must be a Lucide icon name that is registered in
// src/components/Skills.jsx (Code2, Server, LayoutTemplate, Database,
// Sparkles, Wrench). Only list what you can confidently discuss.
// =====================================================================

export const skills = [
  {
    category: 'Programming',
    icon: 'Code2',
    items: ['Java', 'JavaScript', 'C', 'Python'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    items: [
      'Core Java', 'OOP', 'Collections Framework', 'Exception Handling', 'Spring Boot',
      'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST APIs',
    ],
  },
  {
    category: 'Frontend',
    icon: 'LayoutTemplate',
    items: ['React.js', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
  },
  {
    category: 'Databases',
    icon: 'Database',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'DBMS'],
  },
  {
    category: 'AI Integration',
    icon: 'Sparkles',
    items: ['Spring AI', 'Ollama', 'LLM', 'Prompt Engineering'],
  },
  {
    category: 'Tools & Platforms',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'AWS', 'Postman', 'Maven', 'Vercel', 'Render', 'Railway'],
  },
];
