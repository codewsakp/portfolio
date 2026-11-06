## Portfolio on : https://portfolio-sakshipatil.vercel.app/
# Sakshi Patil: Developer Portfolio

A dark, purple-blue portfolio built with **React + Vite + Tailwind CSS + Framer Motion + Lucide icons**.
All text and links live in a few simple files in `src/data/`, so you can update the site without touching any design code.

---

## 1. Run it on your computer

You need [Node.js](https://nodejs.org) (version 18 or newer; the LTS download is fine).

```bash
npm install      # downloads the libraries (first time only)
npm run dev      # starts the site at http://localhost:5173
```

Edit a file, save it, and the browser updates automatically.

Before deploying, check that the production build works:

```bash
npm run build
npm run preview
```

---

## 2. Folder structure

```
sakshi-portfolio/
├── public/
│   ├── Sakshi_Patil_Resume.pdf      <- your resume (download button)
│   ├── favicon.svg
│   └── images/
│       ├── profile.webp             <- your photo
│       └── projects/                <- project screenshots go here
├── src/
│   ├── data/                        <- ALL your content lives here
│   │   ├── profile.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── education.js
│   │   ├── achievements.js
│   │   └── certifications.js
│   ├── components/                  <- the design (you rarely need to edit these)
│   ├── hooks/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html                       <- page title, description, social-sharing tags
├── tailwind.config.js               <- colours and fonts
├── package.json
└── vercel.json
```

---

## 3. How to edit each section

Open the file, change the text **between the quotes**, save. Do not delete commas, brackets or quotes.

| I want to…                          | Edit this file                       |
| ----------------------------------- | ------------------------------------ |
| Change name, intro, About text, links, email | `src/data/profile.js`       |
| Change the typing-animation words   | `typingRoles` in `profile.js`        |
| Change the availability badge       | `availability` in `profile.js`       |
| Add / edit / remove a project       | `src/data/projects.js`               |
| Update skills                       | `src/data/skills.js`                 |
| Update education or SGPA            | `src/data/education.js`              |
| Add an achievement                  | `src/data/achievements.js`           |
| Add a certification                 | `src/data/certifications.js`         |
| Change page title / sharing preview | `index.html`                         |
| Change colours                      | `tailwind.config.js`                 |

### Change my photograph
Replace `public/images/profile.webp` with your new photo (square, around 400-500 px works well, saved as `.webp`, `.png` or `.jpg`).
If your new file has a different name or type, update `photo` in `src/data/profile.js`.

### Replace my resume
Replace `public/Sakshi_Patil_Resume.pdf` with your new PDF, **keeping the same file name**.
(Or use a new name and update `resume` in `src/data/profile.js`.)

### Add a project
1. Open `src/data/projects.js`.
2. Copy one whole `{ ... },` project block and paste it just before the final `];`.
3. Change the values (`id` must be unique). Set `live: ''` if there is no live demo, and the button disappears automatically.
4. Save. Your project appears on the page.

### Add project screenshots
1. Save images (PNG/JPG/WebP, about 1200 px wide) in `public/images/projects/`.
2. Make sure the file names match the `screenshots` list in `projects.js` (for example `/images/projects/smartspend-dashboard.png`), or change the list to your file names.
3. Until an image exists, the site shows a neat labelled tile for it instead of a broken image.

### Add a certificate link
In `certifications.js`, paste the link into `credentialUrl: ''`. A "View credential" link appears automatically.

---

## 4. Put the code on GitHub

1. Create a free account at <https://github.com> (you already have one: `codewsakp`).
2. Click **New repository**. Name it `portfolio`. Keep it **Public**. Do **not** tick "Add a README". Click **Create repository**.
3. In a terminal inside this project folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/codewsakp/portfolio.git
git push -u origin main
```

(If you prefer no terminal: use **GitHub Desktop**, choose *Add existing repository*, then *Publish repository*.)

---

## 5. Deploy on Vercel (free)

1. Go to <https://vercel.com> and click **Sign Up → Continue with GitHub**.
2. Click **Add New… → Project**.
3. Find the `portfolio` repository and click **Import**.
4. Vercel detects Vite automatically (settings are already in `vercel.json`). Leave everything as it is and click **Deploy**.
5. After about a minute you get a public address such as `https://portfolio-xxxx.vercel.app`. Anyone can open it without logging in.

### Get a clean permanent URL
In your Vercel project open **Settings → Domains** and edit the default `.vercel.app` name to something like `sakshi-patil.vercel.app` (if available). Use that URL on your resume, LinkedIn and GitHub profile.

Afterwards, update these two lines in `index.html` with your real URL so link previews work properly:
```html
<link rel="canonical" href="https://YOUR-URL.vercel.app/" />
<meta property="og:url" content="https://YOUR-URL.vercel.app/" />
```

---

## 6. Update the site later

1. Edit the file(s) in `src/data/` (or replace the photo/resume).
2. Save, then in the terminal:

```bash
git add .
git commit -m "Update portfolio"
git push
```

3. Vercel redeploys **automatically** within a minute. The URL stays the same. You can watch the progress under the **Deployments** tab on vercel.com.

---

## 7. Troubleshooting

- **Blank page after editing a data file:** you probably removed a comma, quote or bracket. Undo the last change (Ctrl+Z) and try again. The terminal running `npm run dev` shows the exact line.
- **Photo or screenshot not showing:** check that the file name and folder match exactly, including capital letters.
- **Resume download opens instead of downloading:** that is normal in some browsers; it is the correct file.
- **Fonts look different offline:** fonts load from Google Fonts and need an internet connection.
