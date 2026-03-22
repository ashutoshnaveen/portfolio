---
description: Comprehensive review of the live portfolio at ashutoshnaveen.com — technical QA, visual polish, responsiveness, and professional/career positioning audit
---

# Portfolio Review Workflow

Review the live portfolio at **https://ashutoshnaveen.com** using Playwright MCP. This workflow has two parts:
- **Part A**: Technical & Visual QA
- **Part B**: Professional & Career Positioning Review

---

## Owner Profile

- **Name**: Ashutosh Naveen
- **Current Role**: Senior Software Engineer at ServiceNow (Feb 2025–Present)
- **Background**: B.Tech EE, IIT (BHU) Varanasi, 2019. 6+ years in distributed systems, infra, big data.
- **Career Goals**:
  - Land roles at **top-tier tech companies** (Google, Meta, Apple, Microsoft, Anthropic, OpenAI, etc.)
  - Position for **AI/ML research roles**, especially at **Anthropic**
  - Build a strong professional network with **senior engineers, researchers, and leaders** in tech
  - Present as a **systems thinker** with both depth (distributed systems, infra) and breadth (AI/ML, big data)

---

# Part A — Technical & Visual QA

## 1. Open the live site

Navigate to the live website:
```
mcp1_browser_navigate → https://ashutoshnaveen.com
```

## 2. Full-page desktop screenshot

```
mcp1_browser_take_screenshot → fullPage: true, filename: "review-desktop-full.png"
```

## 3. Accessibility snapshot

Capture the full accessibility tree — check semantic structure, headings hierarchy, link labels, and ARIA:
```
mcp1_browser_snapshot
```

## 4. Section-by-section review

For each section, screenshot it and verify:
- **Content accuracy**: names, dates, numbers, descriptions
- **Layout**: spacing, alignment, visual hierarchy
- **Typography**: readability, contrast, consistency
- **Links**: all hrefs correct and functional

### Sections checklist:
1. **Hero** — name, title, tagline, social links (GitHub, LinkedIn, email), 3D model rendering, no clipping
2. **About** — bio accuracy, mentor names (Dr. Devender Singh, Dr. Tanima Dutta), stats
3. **Education** — degrees, schools, scores (CGPA 7.49, 12th 94.6%, 10th 95%), certifications
4. **Experience** — roles, dates, bullet points, impact metrics
5. **Projects** — professional (6) and early (6) projects, mentor credits, tech tags
6. **Skills** — 8 categories, all skills listed correctly
7. **Timeline** — 6 career milestones with correct years
8. **Awards** — 4 awards with correct years and descriptions
9. **Extracurriculars** — 6 activities with correct years
10. **Ventures** — 3 ventures with correct descriptions and statuses
11. **Contact** — email (hello@ashutoshnaveen.com), LinkedIn (/in/ashutoshnaveen/), GitHub
12. **Footer** — branding ("Think."), copyright year dynamic

## 5. Responsive — Tablet (768px)

```
mcp1_browser_resize → width: 768, height: 1024
mcp1_browser_take_screenshot → fullPage: true, filename: "review-tablet-full.png"
```

Check: layout reflows, text readable, no overflow/clipping, 3D model scales.

## 6. Responsive — Mobile (375px)

```
mcp1_browser_resize → width: 375, height: 812
mcp1_browser_take_screenshot → fullPage: true, filename: "review-mobile-full.png"
```

Check: hamburger menu works, sections stack, 3D model doesn't clip, text doesn't overflow.

## 7. Interactive checks

- Click hamburger menu on mobile → verify it opens and links navigate correctly
- Click social links → verify correct destinations (LinkedIn, GitHub, mailto)
- Click "Send a Message" → verify mailto:hello@ashutoshnaveen.com
- Scroll through → verify all Framer Motion animations trigger

## 8. Performance & Console

Check for JS errors or warnings:
```
mcp1_browser_console_messages → level: "warning"
```

Check network requests for failed loads:
```
mcp1_browser_network_requests → includeStatic: false
```

---

# Part B — Professional & Career Positioning Review

Review the portfolio **as if you are a hiring manager or recruiter** at a top-tier tech company (Google, Anthropic, Meta, etc.) or a senior researcher evaluating the candidate. Provide honest, actionable feedback.

## 9. First Impressions (5-second test)

After loading the site, assess:
- Does it **immediately communicate** who this person is and what they do?
- Is the value proposition clear for a **senior/staff engineer** or **research-oriented** role?
- Does it feel **polished enough** for big tech standards?
- Would a recruiter from Anthropic/Google want to keep scrolling?

## 10. Narrative & Positioning Audit

Review the overall story the portfolio tells:
- **Positioning**: Does it position the candidate as someone ready for **top-tier tech / AI research** roles, or does it read more like a ServiceNow-focused career page?
- **AI/ML signal**: Is there enough emphasis on AI/ML interests and capabilities to be credible for Anthropic or similar AI-first companies?
- **Research signal**: Are the academic/research credentials (IIT BHU, Dr. Tanima Dutta DNN work, RPi distributed computing) highlighted enough?
- **Systems thinking**: Does the portfolio convey someone who thinks at the **architecture and systems level**, not just task execution?
- **Growth trajectory**: Is the career progression (Associate → SE → Senior in 6 years at one company) framed as strength or does it need reframing?

## 11. Section-by-section career review

For each section, evaluate from a **big tech hiring lens**:

### Hero
- Does the tagline resonate with target roles (AI research, distributed systems at scale)?
- Are the right keywords front and center?

### About
- Does the bio signal ambition, intellectual curiosity, and breadth?
- Is the tone confident without being arrogant?

### Experience
- Are impact metrics **quantified and impressive** at big tech scale?
- Does it show **ownership, leadership, and architectural thinking**?
- Would Google/Anthropic see this as L5/L6 caliber?

### Projects
- Do the projects demonstrate **depth of technical skill**?
- Are the early research projects (DNN, distributed optimization) positioned to signal research aptitude?
- Any projects that should be **added** (open source, personal AI/ML work, papers)?

### Skills
- Is the skill set aligned with target roles at AI companies?
- Any **missing skills** that should be highlighted (PyTorch, LLMs, transformers, RLHF, etc.)?

### Awards
- Are these awards meaningful outside ServiceNow context? How to make them resonate externally?

### Ventures
- Do the ventures help or hurt the professional image?
- Does "Slick India — Custom Sneaker Art" add personality or create confusion?

### Contact
- Is it easy for a recruiter to reach out?

## 12. Gap Analysis

Identify what's **missing** from the portfolio to be competitive for:
- **Anthropic** (AI safety, interpretability, RLHF, large-scale ML systems)
- **Google/DeepMind** (distributed ML, systems for ML, research publications)
- **Meta FAIR / Apple MLR** (applied research, production ML)
- **Staff/Principal Engineer** roles at any big tech

Consider:
- Publications or blog posts?
- Open source contributions?
- AI/ML project portfolio?
- Thought leadership (talks, writing)?

## 13. Networking & Discoverability

- Does the site work well when shared as a **LinkedIn link** or in cold outreach?
- Is there good **Open Graph / SEO meta** so it previews well when shared?
- Would this site impress someone if sent in an email to a researcher or VP of Engineering?

## 14. Final Recommendations

Summarize:
1. **Top 3 strengths** of the portfolio
2. **Top 5 actionable improvements** to better position for big tech / AI research roles
3. **Content gaps** that should be addressed (new sections, projects, blog, etc.)
4. **Quick wins** that can be done immediately
