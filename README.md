# Ashutosh Naveen — Portfolio

Personal portfolio website built with React, Vite, TailwindCSS v4, and Framer Motion.

## Tech Stack

- **React 19** + **Vite 8** — fast dev/build
- **TailwindCSS v4** — utility-first styling
- **Framer Motion** — scroll animations
- **Lucide React** — icons
- **Firebase Hosting** — deployment

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

## Deploy to Firebase

### 1. Install Firebase CLI (if not already installed)

```bash
npm install -g firebase-tools
```

### 2. Login to Firebase

```bash
firebase login
```

### 3. Initialize (first time only)

Update `.firebaserc` with your Firebase project ID:

```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

### 4. Build & Deploy

```bash
npm run build
firebase deploy --only hosting
```

Your site will be live at `https://<your-project-id>.web.app`

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
