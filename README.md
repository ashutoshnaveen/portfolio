# Ashutosh Naveen — Portfolio

Personal portfolio website built with React, Vite, TailwindCSS v4, and Framer Motion.

## Tech Stack

- **React 19** + **Vite 8** — fast dev/build
- **TailwindCSS v4** — utility-first styling
- **Framer Motion** — scroll animations
- **Lucide React** — icons
- **GitHub Pages** — deployment

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to GitHub Pages

Push to `main` (or run the **Deploy to GitHub Pages** workflow manually) to
build and deploy the site with GitHub Actions. The published site uses the
custom domain configured in `public/CNAME`:

```text
https://ashutoshnaveen.com
```

The repository's Pages source must be set to **GitHub Actions** under
**Settings → Pages**.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Fixed nav with mobile menu
│   ├── Hero.jsx        # Landing section with CTA
│   ├── About.jsx       # Bio, stats, quick info cards
│   ├── Experience.jsx  # Professional timeline at ServiceNow
│   ├── Projects.jsx    # Featured & early projects grid
│   ├── Skills.jsx      # Categorized skill pills
│   ├── Timeline.jsx    # Career milestones (alternating)
│   ├── Contact.jsx     # Contact links & CTA
│   └── Footer.jsx      # Site footer
├── App.jsx             # Root layout
├── main.jsx            # Entry point
└── index.css           # Tailwind + custom styles
