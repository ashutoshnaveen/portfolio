---
description: Work on portfolio content gaps (AI/ML projects, blog, open source, resume CTA, OG image)
---

# Content Gaps Workflow

Work through the 5 content gaps identified in the portfolio review to strengthen positioning for top-tier tech and AI/ML research roles. Reference files are in `.content-gaps/` (gitignored).

---

## Gap 1: OG Preview Image (Quick Win — ~30 min)

1. Design a 1200x630px branded OG card:
   - Dark background (#0a0a0f), blue gradient accent
   - Text: "Ashutosh Naveen", "Senior Software Engineer", "Distributed Systems | AI/ML | Infrastructure at Scale"
   - Save as `public/og-preview.png`

2. Add meta tags to `index.html` after existing OG tags:
```html
<meta property="og:image" content="https://ashutoshnaveen.com/og-preview.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:image" content="https://ashutoshnaveen.com/og-preview.png" />
```

3. Test at https://www.opengraph.xyz/ with `https://ashutoshnaveen.com`
// turbo
4. Commit and push: `git add -A && git commit -m "Add OG preview image" && git push origin main`

---

## Gap 2: Resume PDF + Download CTA (Quick Win — ~1 hr)

1. Create resume PDF tailored for target roles:
   - Lead with distributed systems + AI/ML interest
   - Quantified impact metrics front and center
   - IIT BHU + research experience highlighted
   - Save as `public/Ashutosh_Naveen_Resume.pdf`

2. Add download CTA to Hero section in `src/components/Hero.jsx`, next to "Get in Touch" and "View My Work":
```jsx
<a
  href="/Ashutosh_Naveen_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200 no-underline text-sm"
>
  Resume ↓
</a>
```

3. Verify link works on localhost
// turbo
4. Commit and push: `git add -A && git commit -m "Add resume PDF download CTA" && git push origin main`

---

## Gap 3: AI/ML Projects (High Impact — 2-4 weekends)

Reference: `.content-gaps/01-aiml-projects.md`

### Recommended starting project: Distributed Training Experiment
This bridges your distributed systems expertise with ML — strongest narrative fit.

1. Set up project repo: `distributed-training-lab` (or similar)
   - PyTorch DDP / DeepSpeed / FSDP
   - Train a small model across multiple GPUs
   - Benchmark and compare strategies
   - Write a detailed README with architecture diagrams

2. Second project: RAG Pipeline
   - Build a retrieval-augmented generation system
   - Stack: LangChain/LlamaIndex, FAISS/ChromaDB, open-source LLM
   - Deploy a live demo if possible

3. Add projects to portfolio — update `src/components/Projects.jsx`:
   - Add as "Featured Projects" with GitHub links, tech tags, descriptions
   - Ensure AI/ML skills from `Skills.jsx` are backed by these projects

4. Commit and push portfolio changes

---

## Gap 4: Blog / Technical Writing (Medium Effort — 1-2 weekends per post)

Reference: `.content-gaps/02-blog-plan.md`

### Recommended first post: "What I Learned Consolidating 256 Servers to 80"

1. Write the post (1500-2000 words):
   - Architecture before/after
   - Failure modes encountered
   - Migration strategy and lessons
   - Keep it vendor-neutral (don't make it a ServiceNow blog)

2. Choose publishing platform:
   - Option A: Add a `/blog` route to the portfolio (best for SEO)
   - Option B: Publish on Medium/Dev.to and link from portfolio

3. If adding blog to portfolio:
   - Create `src/components/Blog.jsx` section
   - Add blog cards with title, date, reading time, summary
   - Add "Blog" to navbar in `src/components/Navbar.jsx`
   - Update `src/App.jsx` to include the Blog component

4. Second post: "Self-Healing Infrastructure: Building Systems That Fix Themselves"
5. Third post: "From Distributed Systems to Distributed Training"

6. Commit and push after each post

---

## Gap 5: Open Source Contributions (Ongoing — Long Term)

Reference: `.content-gaps/03-open-source.md`

### Getting started

1. Pick 2-3 repos from Tier 1 (directly aligned):
   - `pytorch/pytorch`
   - `huggingface/transformers`
   - `vllm-project/vllm`

2. Star, watch, read CONTRIBUTING.md for each

3. Start with documentation PRs to learn review process

4. Graduate to "good first issue" code PRs

5. Once you have merged PRs, mention them in the About or Projects section of the portfolio

---

## Priority Order

| Priority | Gap | Time | Impact |
|----------|-----|------|--------|
| 1 | OG Preview Image | 30 min | Quick win for link sharing |
| 2 | Resume PDF + CTA | 1 hr | Quick win for recruiters |
| 3 | AI/ML Projects | 2-4 weekends | Highest impact for Anthropic/Google |
| 4 | Blog Posts | 1-2 weekends each | High signal, thought leadership |
| 5 | Open Source | Ongoing | Long-term credibility |
