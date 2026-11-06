# Resume Review: Technical Recruiter View (Java Developer Fresher)

Reviewed from the text of `Sakshi_Patil_Resume.pdf`. I have not promised any ATS score; no tool can guarantee one. Everything below is based only on what your resume states.

## Overall impression
A strong fresher profile: a real Java/Spring Boot stack, two backend-heavy projects, a live deployed app, a 9.21 CGPA and a research rank. The weaknesses are fixable and mostly about wording, keywords and small errors.

---

## 1. ATS compatibility
- **Good:** single-column, standard section names (Technical Skills, Projects, Education), plain text, no tables.
- **Link text hides URLs.** "LinkedIn | GitHub", "Live Demo" and "Github Source Code" are hyperlinks. Some ATS parsers drop hyperlinks, leaving no URL. Print the actual URLs as text (e.g. `linkedin.com/in/sakshi-patil-849704253`, `github.com/codewsakp`).
- **LedgerPro has an empty link slot** (`LedgerPro … | | 2026`). Add its GitHub link or remove the gap.
- **"Certifications link"** is a bare label in the section heading. Make sure the URL is visible text too.
- Keep the file as a text-based PDF (you did), named like `Sakshi_Patil_Java_Developer_Resume.pdf`.
- Add your **portfolio URL** to the header once deployed.

## 2. Professional summary
"Career Objective" is generic and talks about what you want, not what you offer. Replace it with a 2-3 line summary naming your stack. Suggested (all claims come from your resume):

> M.Sc. Computer Science student (B.Sc. CGPA 9.21) with hands-on experience building Java and Spring Boot applications using Spring Data JPA, Hibernate, MySQL and REST APIs. Built and deployed a full-stack, AI-integrated expense tracker (React.js, Spring AI) and a transactional banking backend with Spring Security and JUnit tests. Seeking a Java Developer / Backend internship or entry-level role.

## 3. Technical skills and keywords
- **Order by what recruiters search first:** Java, OOP, Collections, Spring Boot, REST APIs, Spring Data JPA, Hibernate, Spring Security, MySQL, SQL, JUnit, Maven, Git, React.js.
- **SQL is missing as a keyword.** You list MySQL, but recruiters and ATS often search "SQL" separately. Add it (you clearly use it).
- **JUnit and Postman** appear only inside projects. Add a "Testing & API Tools: JUnit, Postman" line so skill scans find them.
- **Duplicate/odd line:** "AI: Machine Learning, basics of Deep Learning, LLM" repeats the AI Integration line. Merge them, and keep "basics of" so it is honest. For a Java role, put AI after the core Java stack.
- **JWT:** it is not on your resume, so I have **not** added it. Add JWT only if you have actually implemented it (for example in LedgerPro or SmartSpend). If you only learned it, leave it out or list it under "Learning".
- Consistency: "Core Java, Object-Oriented Programming (OOP), Collections Framework, exception handling" mixes capitalisation. Use "Exception Handling".
- Group tools: Git, GitHub, Maven, Postman, AWS (Cloud Foundations), Railway, Render, Vercel.

## 4. Project descriptions
Current bullets are accurate but mostly say *what you did*, not the *result*. Do not invent metrics. You can add real ones you can verify yourself, for example number of REST endpoints, number of JUnit tests, number of entities/tables.

Suggested rewrites (add numbers only if true):

**SmartSpend AI**
- Built a full-stack expense tracker with a Spring Boot REST API, Spring Data JPA/Hibernate and MySQL, plus a React.js frontend with monthly spending dashboards, expense management and budget tracking.
- Integrated Spring AI with a local Ollama LLM to extract expense details from natural-language input and generate personalised spending insights; added input validation and a user-confirmation step before saving AI-generated expenses.
- Tested APIs with Postman and deployed the application on Railway.

**LedgerPro**
- Extended an open-source Spring Boot banking project (GitHub: tamaraghosn/springboot-banking-system) with account management, deposits, withdrawals, fund transfers and transaction history through REST APIs.
- Implemented `@Transactional` fund transfers with rollback, plus database constraints and concurrency controls to prevent invalid balance updates.
- Added Spring Security authentication with account-level authorization, and wrote JUnit tests for transaction logic, insufficient balances and failure scenarios.

**Important about LedgerPro:** the project started from someone else's public repository. Say so on the resume (as above) and be ready to explain exactly what you changed. Interviewers often check GitHub, and being upfront is far safer than being found out. Only keep each bullet if you personally did that work.

## 5. Project ordering
SmartSpend AI first is right: it is live, full-stack and shows AI integration. Keep LedgerPro second. For a purely Java-backend role you could swap them, but a deployed project usually wins. Add the "Tech Stack" line with the Java/Spring keywords first.

## 6. Education
- Update **"1st year SGPA: 9.09"**. It is now November 2026, so you should have newer results (or say "Pursuing, 2nd year").
- Use one date style throughout ("2025 – Present", "2025", "2022", "2020").
- Remove the pincode fragment "Pune-05" from the college line. Keep the city only.
- Be consistent: "ST. Patricks Convent" vs "St. Patrick's Convent". Use the school's official spelling.
- Put CGPA/SGPA in the same format for each entry.

## 7. Certifications and achievements
- **Typo:** "AWS Academy Cloud Foundations … - 2026202" is an invalid year. Correct it (2026?).
- "2nd Rank" shows a superscript line break in the extracted text ("2 / nd"). Write "2nd Rank" with normal text or "Second Rank".
- Add a one-line context for rank and awards (what project, what level). Recruiters want to know the *what* behind "Top 50 projects".
- Order by relevance to the job: AWS Cloud Foundations first, then WAISE, then the rest. Use consistent "Name, Issuer, Year" format. Participation items (Cybage Tech Fest) can go last.

## 8. Formatting
- Keep to **one page**, 10-11 pt font, consistent margins and bullet style.
- Put contact details on one clean line: phone | email | LinkedIn URL | GitHub URL | portfolio URL.
- Use bold for project names and tech stack labels only.
- Avoid columns, icons, photos, graphics.

## 9. Grammar and consistency
- "deployed the application Railway" should be "deployed the application **on** Railway".
- Use "GitHub" everywhere (you have "Github Source Code").
- "Large Language Model (LLM)": fine, but use the same capitalisation style as other items.
- Keep tense consistent: past tense for completed projects ("Built", "Implemented").
- Make bullets start with strong verbs: Built, Implemented, Integrated, Designed, Tested, Deployed.

---

## Suggested resume structure (Java-focused)

1. **Header:** Name | Pune, Maharashtra | phone | email | LinkedIn | GitHub | Portfolio
2. **Summary:** (see section 2)
3. **Technical Skills:**
   - Languages: Java, SQL, JavaScript, C, Python
   - Backend: Core Java, OOP, Collections Framework, Exception Handling, Spring Boot, Spring Data JPA, Hibernate, Spring Security, REST APIs
   - Databases: MySQL, PostgreSQL, MongoDB
   - Frontend: React.js, HTML, CSS, Bootstrap
   - Testing & Tools: JUnit, Postman, Git, GitHub, Maven, AWS, Railway, Render, Vercel
   - AI: Spring AI, Ollama, LLMs, Prompt Engineering, basics of Machine Learning/Deep Learning
4. **Projects:** SmartSpend AI, LedgerPro (rewritten as above)
5. **Education**
6. **Certifications & Achievements**

## Checklist before you resend
- [ ] Printed URLs added and LedgerPro link filled
- [ ] SQL, JUnit, Postman added to skills; duplicate AI line merged
- [ ] JWT added **only if** you've really used it
- [ ] LedgerPro origin stated honestly
- [ ] AWS year typo fixed; M.Sc. result updated
- [ ] "on Railway" and GitHub capitalisation fixed
- [ ] Portfolio URL added to the header
