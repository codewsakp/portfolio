// =====================================================================
// PROJECTS: to add a project, copy one object below, paste it at the
// END of the list and change the values. That is all.
//
// Fields:
//   id            unique short name, no spaces (e.g. 'my-new-app')
//   title         project name
//   tagline       one-line summary
//   status        e.g. 'Deployed', 'Completed', 'In progress'
//   year          e.g. '2026'
//   description   2-3 sentences about what it is
//   features      list of key features (short bullet points)
//   contribution  what YOU did (be accurate, especially for adapted projects)
//   tech          list of technologies (shown as badges)
//   screenshots   list of { src, label }. Put images in public/images/projects/
//                 If an image file is missing, a neat labelled tile is shown instead.
//   github        GitHub link, or '' to hide the button
//   live          Live demo link, or '' to hide the button (never add a fake link)
//   notes         optional list of { title, text } callouts shown on the card
// =====================================================================

export const projects = [
  {
    id: 'smartspend-ai',
    title: 'SmartSpend AI',
    tagline: 'AI-powered expense tracker',
    status: 'Deployed on Railway',
    year: '2026',
    description:
      'A full-stack expense tracker with a Spring Boot REST API, MySQL database and React frontend. Users track spending, manage budgets and view monthly dashboards. With a local Ollama model, they can also type an expense in plain English and have it turned into a structured entry.',
    features: [
      'Expense CRUD operations with monthly expense tracking',
      'Budget management and spending summaries',
      'Interactive spending dashboards',
      'User authentication',
      'AI natural-language expense extraction using Spring AI and Ollama',
      'Personalised AI spending insights',
      'Input validation and user confirmation before saving AI-generated expenses',
    ],
    contribution:
      'Designed and built the full stack: REST APIs, database layer, React frontend and the Spring AI integration, then deployed it on Railway.',
    tech: [
      'Java 24', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'React.js',
      'JavaScript', 'Spring AI', 'Ollama', 'REST APIs', 'Postman', 'Maven', 'Railway',
    ],
    screenshots: [
      { src: '/images/projects/smartspend-dashboard.png', label: 'Dashboard' },
      { src: '/images/projects/smartspend-analytics.png', label: 'Analytics' },
      { src: '/images/projects/smartspend-transactions.png', label: 'Transactions' },
      { src: '/images/projects/smartspend-budget.png', label: 'Budget management' },
      { src: '/images/projects/smartspend-ai-entry.png', label: 'AI expense entry' },
    ],
    github: 'https://github.com/codewsakp/SmartSpend-AI-Frontend',
    live: 'https://smartspend-ai-frontend-production.up.railway.app/login',
    notes: [
      {
        title: 'On the live Railway app',
        text: 'Authentication, expense management, budgets and dashboards.',
      },
      {
        title: 'Runs locally with Ollama',
        text: 'AI expense extraction and spending insights need an Ollama model running on my machine, so they are not available on the public demo.',
      },
    ],
  },

  {
    id: 'ledgerpro',
    title: 'LedgerPro',
    tagline: 'Banking & transaction management system',
    status: 'Backend completed (no frontend deployed)',
    year: '2026',
    description:
      'A banking simulation backend exposing REST APIs for accounts, deposits, withdrawals, fund transfers and transaction history. It focuses on data consistency: transfers are transactional and roll back on failure.',
    features: [
      'Account management',
      'Deposits, withdrawals and fund transfers',
      'Transaction history',
      'Transactional rollback using @Transactional',
      'Database constraints and concurrency controls against invalid balance updates',
      'Authentication and account-level authorization',
      'JUnit tests for transaction logic, insufficient balances and failure scenarios',
    ],
    contribution:
      'Started from an existing public open-source repository, which I cloned and adapted. My work on it, as listed on my resume: @Transactional fund transfers with rollback, database constraints and concurrency controls, authentication with account-level authorization, and JUnit tests for transaction and failure scenarios.',
    tech: [
      'Java 24', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL',
      'Spring Security', 'REST APIs', 'Postman', 'JUnit', 'Maven', 'GitHub',
    ],
    screenshots: [],
    github: 'https://github.com/tamaraghosn/springboot-banking-system',
    live: '',
    notes: [
      {
        title: 'Project origin',
        text: 'Adapted from a public repository (springboot-banking-system by tamaraghosn). The original base is not my independent work.',
      },
    ],
  },

  // ---- ADD YOUR NEXT PROJECT HERE (copy one of the objects above) ----
];
