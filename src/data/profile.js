// =====================================================================
// PROFILE: your name, headline, intro text, links and photo.
// Edit the text between the quotes. Save the file and the site updates.
// =====================================================================

export const profile = {
  name: 'Sakshi Jaywant Patil',
  displayName: 'SAKSHI PATIL',
  headline: 'Aspiring Java Developer | Backend & Full Stack Development',

  // Words shown by the typing animation in the hero section.
  typingRoles: ['Java Developer', 'Backend Developer', 'Full Stack Developer'],

  // Short intro shown in the hero section.
  heroIntro:
    "I'm an M.Sc. Computer Science student who enjoys building Java and Spring Boot applications. I've built a full-stack, AI-integrated expense tracker and a transactional banking API, working with REST APIs, MySQL and React.",

  // Shown as the small availability badge in the hero.
  availability: 'Open to internships & entry-level roles',

  // Paragraphs for the About section. Add or remove strings freely.
  about: [
    "I'm pursuing my M.Sc. in Computer Science after completing a B.Sc. in Computer Science with a CGPA of 9.21. Along the way I found that I enjoy the backend side of software the most: designing clean object-oriented code, modelling data and exposing it through well-structured REST APIs.",
    "Java and Spring Boot are my main tools. I've used Spring Data JPA, Hibernate and MySQL to build applications, and Spring Security to protect them. SmartSpend AI, my full-stack expense tracker, combines a React frontend with a Spring Boot backend and is deployed on Railway.",
    "I'm also interested in bringing AI into everyday software. In SmartSpend AI I used Spring AI with Ollama to turn natural-language sentences into structured expenses, with validation and user confirmation before anything is saved.",
  ],

  // Quick facts shown beside the About text.
  highlights: [
    { label: 'B.Sc. CGPA', value: '9.21' },
    { label: 'Projects built', value: '2' },
    { label: 'Focus', value: 'Java + Spring Boot' },
  ],

  // Photo: replace the file public/images/profile.webp (or change this path).
  photo: '/images/profile.webp',
  photoAlt: 'Portrait of Sakshi Patil',

  // Resume: replace the file public/Sakshi_Patil_Resume.pdf (or change this path).
  resume: '/Sakshi_Patil_Resume.pdf',

  email: 'sakshijpatil04@gmail.com',
  location: 'Pune, Maharashtra',
  links: {
    linkedin: 'https://www.linkedin.com/in/sakshi-patil-849704253/',
    github: 'https://github.com/codewsakp',
  },
};
