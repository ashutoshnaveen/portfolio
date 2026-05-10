import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  PenLine, Calendar, Clock, ChevronDown, ChevronUp,
  Zap, BarChart3, Brain, ArrowUpRight, Bot, X, GitBranch,
} from 'lucide-react';

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Blog post data                                                     */
/* ------------------------------------------------------------------ */
const posts = [
  {
    id: 'agentic-ai-productivity',
    title: 'How Agentic AI Made Me a 2× Engineer, and What It Taught Me About the Future of Software',
    date: 'April 2026',
    readTime: '8 min read',
    color: 'blue',
    tags: ['Agentic AI', 'Productivity', 'Engineering Culture', 'Developer Tools'],
    excerpt:
      'I ran a controlled experiment on my own workflow: what happens when you pair a senior engineer with autonomous AI agents for an entire quarter? The results surprised me, and changed how I think about engineering leverage.',
    content: [
      {
        type: 'heading',
        text: 'The Setup: Skepticism Meets Curiosity',
      },
      {
        type: 'paragraph',
        text: 'At the start of Q1 2026, I was a senior engineer on an enterprise observability platform, the kind that monitors thousands of production instances for large customers. My day-to-day was a mix of feature development and on-call support: investigating customer-reported issues across distributed clusters, running SQL queries against big-data backends, correlating logs across services, and writing root-cause analyses. Deeply technical, context-heavy work.',
      },
      {
        type: 'paragraph',
        text: 'I\'d been experimenting with AI coding assistants for a while, mostly for autocompletion and boilerplate. But in January 2026, I made a deliberate decision: I would integrate agentic AI (AI agents that can autonomously execute multi-step workflows) into my daily engineering work and measure the impact rigorously.',
      },
      {
        type: 'heading',
        text: 'What "Agentic" Actually Means in Practice',
      },
      {
        type: 'paragraph',
        text: 'The word "agentic" gets thrown around a lot. Here\'s what it meant concretely for me: I built custom tool integrations that let AI agents SSH into production clusters, execute SQL queries, search across multiple code repositories, read ticketing system data, and generate structured investigation documents, all autonomously. The agent didn\'t just suggest code. It performed entire investigation workflows end-to-end.',
      },
      {
        type: 'paragraph',
        text: 'My typical on-call investigation used to look like this: read the customer ticket (5–10 min), search the codebase for relevant code (15–30 min), SSH into the right cluster and elevate permissions (5–10 min), write and run diagnostic SQL queries (20–60 min), correlate results across tables and clusters (30–60 min), write up findings (20–40 min), and post the update. That\'s 2–4 hours of active investigation per issue.',
      },
      {
        type: 'paragraph',
        text: 'With the agentic setup, I\'d describe the issue to the agent, and it would execute the entire pipeline: read the ticket, search the codebase in parallel across 10+ repos, SSH into clusters, run queries, cross-reference multiple data sources, and produce a structured investigation document with evidence. My role shifted to reviewing the agent\'s analysis, validating the root cause, and making the final call. Active time per issue dropped to 15–30 minutes.',
      },
      {
        type: 'heading',
        text: 'The Numbers: A Quarter-Long Controlled Experiment',
      },
      {
        type: 'paragraph',
        text: 'I didn\'t just "feel" more productive. I measured it. I pulled data from the ticketing system for six quarters across the entire team: resolution times, first-response times (how quickly the assignee begins investigation), volume handled, and concurrent workstreams. Here\'s what the data showed:',
      },
      {
        type: 'stats',
        items: [
          { label: 'Task throughput', before: '4 per quarter', after: '8 per quarter', improvement: '2× volume' },
          { label: 'Median first-response', before: '5.8 days', after: '1.2 days', improvement: '4.8× faster' },
          { label: 'Resolution time vs team', before: 'At team average', after: '50% below team median', improvement: 'Fastest on team' },
          { label: 'Fast resolutions (sub-4 day)', before: '25% of tasks', after: '50% of tasks', improvement: '2× more' },
        ],
      },
      {
        type: 'paragraph',
        text: 'The first-response improvement was the most striking: from nearly 6 days to 1.2 days median. Not because I was working harder. It\'s because the agent could begin triage and investigation within minutes of a ticket arriving, even when I was heads-down on feature work.',
      },
      {
        type: 'heading',
        text: 'Volume × Speed: The Combination Nobody Else Had',
      },
      {
        type: 'paragraph',
        text: 'On a six-person team, I handled 35% of all customer issues that quarter, the highest individual share. But here\'s the key: I did this while also delivering three major platform features, fixing 25+ production defects, shipping 80+ merge requests, and managing five production clusters. Before AI agents, this workload would have been physically impossible for one person.',
      },
      {
        type: 'paragraph',
        text: 'I also contributed investigations to issues assigned to other team members: 10 cross-functional contributions that quarter, up from 4 in my pre-AI period. The AI agents made it trivial to do a quick investigation on someone else\'s ticket and post findings, because the setup cost was near zero.',
      },
      {
        type: 'heading',
        text: 'What I Actually Learned (Beyond the Metrics)',
      },
      {
        type: 'paragraph',
        text: 'The productivity numbers are compelling, but the real value was in what this experience taught me about engineering and about myself:',
      },
      {
        type: 'list',
        items: [
          {
            title: 'Systems thinking scales with AI',
            text: 'The agents were only as good as my ability to decompose problems into structured workflows. I got dramatically better at thinking about investigation as a pipeline: defining clear inputs, transformation steps, and expected outputs. This is systems design applied to cognitive work.',
          },
          {
            title: 'Prompt engineering is really just communication clarity',
            text: 'Writing effective agent instructions forced me to articulate exactly what I wanted, with what evidence, in what format. This made me a better communicator in code reviews, design docs, and customer-facing summaries too.',
          },
          {
            title: 'Context management is the new bottleneck',
            text: 'When the agent can execute 10 tasks in parallel, the challenge shifts from doing the work to maintaining coherent context across workstreams. I learned to build mental frameworks and documentation systems that let me context-switch between 4–5 concurrent investigations without losing the thread.',
          },
          {
            title: 'Quality went up, not down',
            text: 'Pre-AI, investigation findings lived in my head or in brief ticket comments. Post-AI, every investigation produced structured documents with SQL evidence, timeline analysis, and root-cause hypotheses. The documentation quality was higher because the marginal cost of generating it was nearly zero.',
          },
          {
            title: 'Judgment becomes the critical skill',
            text: 'AI agents occasionally produced plausible-but-wrong analyses. My engineering judgment (understanding the system\'s architecture, knowing which edge cases matter, recognizing when data doesn\'t add up) was the irreplaceable layer. The agents amplified my capabilities, but they couldn\'t replace the mental model.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'The Broader Implication',
      },
      {
        type: 'paragraph',
        text: 'I think we\'re entering an era where the gap between engineers who learn to work with AI agents and those who don\'t will be enormous. Not because the work is easier, but because the leverage is fundamentally different. An engineer with good AI tooling isn\'t doing the same job faster; they\'re doing a qualitatively different job, one where they operate at a higher level of abstraction.',
      },
      {
        type: 'paragraph',
        text: 'For me, this quarter confirmed something I\'d been suspecting: the most valuable engineering skill going forward isn\'t writing code. It\'s designing systems that let humans and AI agents collaborate effectively. That means clear interfaces, structured workflows, observable outputs, and a relentless focus on the judgment calls that only humans can make.',
      },
      {
        type: 'heading',
        text: 'What\'s Next',
      },
      {
        type: 'paragraph',
        text: 'I\'m now exploring how these same agentic patterns apply beyond on-call support: to code review automation, to proactive monitoring (agents that detect anomalies before customers report them), and to knowledge management (turning tribal knowledge into searchable, AI-queryable documentation). The tools are evolving fast, but the principles stay the same: decompose, delegate, verify, decide.',
      },
      {
        type: 'paragraph',
        text: 'If you\'re an engineer curious about integrating AI agents into your workflow, my advice is simple: pick a well-defined, repetitive task in your day-to-day, build the tooling to let an agent execute it, and measure the impact honestly. The results might surprise you.',
      },
    ],
  },
  {
    id: 'building-model-serving-infra',
    title: 'I Built a Mini vLLM to Understand LLM Inference. Here\'s What I Learned.',
    date: 'May 2026',
    readTime: '10 min read',
    color: 'cyan',
    tags: ['ML Infrastructure', 'Systems Design', 'PyTorch', 'Inference Optimization'],
    github: 'https://github.com/ashutoshnaveen/model-serving-infra',
    excerpt:
      'I kept reading about KV-cache and PagedAttention but nothing clicked until I tried building it myself. So I wrote a small inference server from scratch with continuous batching, block-based caching, priority scheduling, the whole deal. This is what that process looked like.',
    content: [
      {
        type: 'heading',
        text: 'Why I Started This Project',
      },
      {
        type: 'paragraph',
        text: 'My background is five years of distributed systems. Self-healing frameworks, Kafka pipelines, Kubernetes, big data platforms. When I started looking at AI/ML roles, I could tell there was a gap. I understood systems, but I couldn\'t clearly explain how that maps to the specific challenges of serving ML models. I needed something concrete to bridge that.',
      },
      {
        type: 'paragraph',
        text: 'Then I read the vLLM paper on PagedAttention. The core idea is borrowed straight from operating systems. They manage KV-cache memory the same way an OS manages physical pages. That clicked for me immediately. So I decided to build a small version of it from scratch and see how far I could get.',
      },
      {
        type: 'heading',
        text: 'Starting Simple',
      },
      {
        type: 'paragraph',
        text: 'I started with the most boring thing possible. A FastAPI server that loads GPT-2 and handles one request at a time. Prompt in, tokens out. No batching, no caching tricks, no concurrency. Just raw autoregressive generation.',
      },
      {
        type: 'paragraph',
        text: 'I almost skipped this step but I\'m glad I didn\'t. Having a measured baseline made every later optimization meaningful. I wrote a quick benchmark script, recorded the latency and throughput numbers, and moved on. Never optimize what you haven\'t measured. I picked that up from production work and it really applies here too.',
      },
      {
        type: 'heading',
        text: 'The KV-Cache Problem',
      },
      {
        type: 'paragraph',
        text: 'This is the part that wasn\'t obvious to me until I dug in. Every token you generate depends on key-value pairs from all previous tokens. Those KV pairs (the "KV-cache") grow linearly with sequence length and sit in GPU memory for every active request. One request, no problem. A hundred concurrent requests with different lengths? That\'s where it gets interesting.',
      },
      {
        type: 'paragraph',
        text: 'The naive way is to pre-allocate a contiguous chunk of memory for each request, sized for the max sequence length. Short prompts waste most of that space. Completed requests leave gaps you can\'t reuse. Classic memory fragmentation, basically the same problem operating systems dealt with decades ago using paging.',
      },
      {
        type: 'heading',
        text: 'PagedAttention',
      },
      {
        type: 'paragraph',
        text: 'vLLM\'s approach is to manage KV-cache like an OS manages physical memory. Fixed-size blocks (I used 16 tokens each) allocated from a shared pool. Each sequence gets a "block table" mapping logical indices to physical blocks. Same idea as a page table.',
      },
      {
        type: 'paragraph',
        text: 'I implemented this in about 350 lines of Python. A PhysicalBlock dataclass, a BlockTable for the logical-to-physical mapping, and a CacheManager that handles allocation, deallocation, and LRU eviction. Writing the eviction logic was the part that really felt like OS kernel programming. Tracking reference counts, maintaining access timestamps, figuring out what to evict when the pool fills up.',
      },
      {
        type: 'code',
        caption: 'cache/manager.py — LRU eviction',
        text: `def _evict_lru(self) -> PhysicalBlock:
    """Find and evict the least-recently-used block."""
    candidates = [
        b for b in self.blocks
        if b.ref_count == 0 and b.is_allocated
    ]
    if not candidates:
        raise RuntimeError("No evictable blocks — cache is full")

    victim = min(candidates, key=lambda b: b.last_access_time)
    victim.is_allocated = False
    victim.sequence_id = None
    self.num_free_blocks += 1
    return victim`,
      },
      {
        type: 'heading',
        text: 'Continuous Batching',
      },
      {
        type: 'paragraph',
        text: 'Most inference frameworks do static batching. Group N requests, run them all to completion, then start the next batch. The issue is that if one sequence needs 200 tokens and another needs 20, the short one just sits there waiting. GPU utilization drops.',
      },
      {
        type: 'paragraph',
        text: 'Continuous batching (from the Orca paper) works at the iteration level. Every decode step, the engine checks if any sequence finished and removes it. Then it checks if there are requests waiting and pulls them in. Sequences join and leave the batch freely, so the GPU stays busy.',
      },
      {
        type: 'paragraph',
        text: 'This was the hardest part to get right. The engine has to coordinate with the scheduler, the cache manager, and the model all at once. Tracking which sequences are in prefill vs decode, handling EOS tokens, managing the batch size cap. I spent a few evenings just debugging the state machine.',
      },
      {
        type: 'paragraph',
        text: 'Once it worked though, the numbers were satisfying. I ran the benchmark comparing both engines on the same hardware with 8 concurrent requests:',
      },
      {
        type: 'stats',
        title: 'Naive Engine vs Continuous Batching (8 concurrent requests, GPT-2, CPU)',
        headers: { col1: 'Metric', col2: 'Naive', col3: 'Batching', col4: 'Diff' },
        items: [
          { label: 'Throughput', before: '~4 tok/s', after: '~14 tok/s', improvement: '3.5× faster' },
          { label: 'Avg latency', before: '2.1s', after: '0.8s', improvement: '-62%' },
          { label: 'p99 latency', before: '8.4s', after: '1.9s', improvement: '-77%' },
          { label: 'GPU idle time', before: '~70%', after: '~15%', improvement: '4.7× less' },
        ],
      },
      {
        type: 'heading',
        text: 'Things That Surprised Me',
      },
      {
        type: 'list',
        items: [
          {
            title: 'Scheduling is deceptively hard',
            text: 'FCFS is simple but unfair under load. Priority scheduling helps but opens up starvation risk. I implemented both plus timeout enforcement. It became pretty clear why production systems have complex admission control.',
          },
          {
            title: 'INT8 quantization was almost free',
            text: 'Dynamic quantization on GPT-2 cut memory by about 2.5x with barely any quality difference on short generations. Took maybe 50 lines of code. In production the tradeoffs are more nuanced, but for this project it was a quick win.',
          },
          {
            title: 'Streaming changed how I thought about the API',
            text: 'Once I added SSE for token-by-token streaming, I had to rethink error handling, cancellation, and partial results. It\'s not just a feature, it shifts the whole API design. Makes sense why everyone uses SSE over WebSockets for this.',
          },
          {
            title: 'Metrics as a debugging tool',
            text: 'I added a /metrics endpoint mostly for completeness. Ended up using it constantly during development to understand what was actually happening inside the engine. Turns out deciding what to measure forces you to think clearly about what "healthy" looks like.',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'Since I mentioned quantization, here are the actual numbers from the INT8 experiment:',
      },
      {
        type: 'stats',
        title: 'FP32 vs INT8 Dynamic Quantization (GPT-2, 50 tokens generated)',
        headers: { col1: 'Metric', col2: 'FP32', col3: 'INT8', col4: 'Diff' },
        items: [
          { label: 'Model size', before: '487 MB', after: '182 MB', improvement: '2.7× smaller' },
          { label: 'Inference time', before: '1.24s', after: '0.91s', improvement: '27% faster' },
          { label: 'Peak memory', before: '510 MB', after: '198 MB', improvement: '2.6× less' },
          { label: 'Output quality', before: 'Baseline', after: 'Near-identical', improvement: '~0 loss' },
        ],
      },
      {
        type: 'heading',
        text: 'How It All Fits Together',
      },
      {
        type: 'architecture',
        title: 'System Architecture',
        text: `┌─────────────────────────────────────────────┐
│              FastAPI + SSE Streaming         │  ← /generate, /metrics, /health
├─────────────────────────────────────────────┤
│           Request Scheduler                 │  ← FCFS / priority, timeouts
│           (priority queue + admission)      │
├─────────────────────────────────────────────┤
│        Continuous Batching Engine            │  ← iteration-level scheduling
│        (prefill → decode state machine)     │
├─────────────────────────────────────────────┤
│           KV-Cache Manager                  │  ← block alloc, LRU eviction
│        (PagedAttention-style blocks)        │
├─────────────────────────────────────────────┤
│         Model Backend (PyTorch)             │  ← GPT-2 via HuggingFace
│         + INT8 Dynamic Quantization         │
└─────────────────────────────────────────────┘`,
        caption: 'Each layer is independently testable. The server supports naive and batching modes via env var.',
      },
      {
        type: 'paragraph',
        text: 'Each layer has a clean interface so I could test them independently. The test suite doesn\'t need a GPU since the cache and scheduler logic is pure Python. That was intentional. Keep the ML-dependent code thin and push the complexity into deterministic, testable modules.',
      },
      {
        type: 'heading',
        text: 'What I Took Away From This',
      },
      {
        type: 'paragraph',
        text: 'Honestly, the biggest thing I learned is that ML inference infrastructure is mostly a systems problem. Loading the model and running a forward pass is straightforward. The hard stuff is memory management, scheduling under constraints, getting the state machine right, and making the whole thing observable. Those are the same things I\'ve been doing for years in distributed systems.',
      },
      {
        type: 'paragraph',
        text: 'I also built up a much better intuition for the tradeoffs. Bigger batches improve throughput but hurt tail latency. Caching saves compute but eats memory. The naive engine is 100 lines, the batching engine is 300+. These tradeoffs come up in systems design interviews all the time, and now I can talk about them from experience instead of just theory.',
      },
      {
        type: 'heading',
        text: 'What\'s Next',
      },
      {
        type: 'paragraph',
        text: 'This was the first in a series of projects I\'m doing to connect my systems background to ML infrastructure. Next I want to build a distributed training benchmark comparing PyTorch DDP, DeepSpeed, and FSDP, and after that a fault-tolerant training orchestrator with checkpointing and recovery. Same approach: build it, measure it, write about it.',
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Stat comparison row                                                */
/* ------------------------------------------------------------------ */
function StatRow({ item }) {
  return (
    <div className="grid grid-cols-4 gap-3 items-center py-3 border-b border-white/5 last:border-0">
      <span className="text-gray-400 text-sm font-medium col-span-1">{item.label}</span>
      <span className="text-gray-500 text-sm text-center">{item.before}</span>
      <span className="text-blue-400 text-sm font-semibold text-center">{item.after}</span>
      <span className="text-emerald-400 text-xs font-mono text-right">{item.improvement}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Blog post content renderer                                         */
/* ------------------------------------------------------------------ */
function BlogContent({ blocks }) {
  return (
    <div className="mt-8 space-y-6">
      {blocks.map((block, i) => {
        if (block.type === 'heading') {
          return (
            <h3 key={i} className="text-white font-semibold text-xl mt-10 mb-3 first:mt-0">
              {block.text}
            </h3>
          );
        }
        if (block.type === 'paragraph') {
          return (
            <p key={i} className="text-gray-400 text-[15px] leading-[1.8]">
              {block.text}
            </p>
          );
        }
        if (block.type === 'stats') {
          const h = block.headers || {};
          return (
            <div key={i} className="my-8 p-5 rounded-xl bg-white/[0.03] border border-blue-500/15">
              {block.title && (
                <p className="text-white text-sm font-medium mb-4">{block.title}</p>
              )}
              <div className="grid grid-cols-4 gap-3 mb-3 pb-3 border-b border-white/10">
                <span className="text-gray-500 text-xs uppercase tracking-wider font-mono">{h.col1 || 'Metric'}</span>
                <span className="text-gray-500 text-xs uppercase tracking-wider font-mono text-center">{h.col2 || 'Before'}</span>
                <span className="text-blue-400/70 text-xs uppercase tracking-wider font-mono text-center">{h.col3 || 'After'}</span>
                <span className="text-emerald-400/70 text-xs uppercase tracking-wider font-mono text-right">{h.col4 || 'Impact'}</span>
              </div>
              {block.items.map((item, j) => (
                <StatRow key={j} item={item} />
              ))}
            </div>
          );
        }
        if (block.type === 'code') {
          return (
            <div key={i} className="my-8 rounded-xl overflow-hidden border border-white/[0.06]">
              {block.caption && (
                <div className="px-4 py-2.5 bg-white/[0.04] border-b border-white/[0.06] flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-gray-500 text-xs font-mono ml-2">{block.caption}</span>
                </div>
              )}
              <pre className="p-5 bg-[#0d0d14] overflow-x-auto text-[13px] leading-[1.7] font-mono">
                <code className="text-gray-400">{block.text}</code>
              </pre>
            </div>
          );
        }
        if (block.type === 'architecture') {
          return (
            <div key={i} className="my-8 p-6 rounded-xl bg-white/[0.02] border border-cyan-500/15">
              {block.title && (
                <p className="text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">{block.title}</p>
              )}
              <pre className="text-[13px] leading-[1.8] font-mono text-gray-400 overflow-x-auto whitespace-pre">
{block.text}</pre>
              {block.caption && (
                <p className="text-gray-600 text-xs mt-3 italic">{block.caption}</p>
              )}
            </div>
          );
        }
        if (block.type === 'list') {
          return (
            <div key={i} className="space-y-4 my-6">
              {block.items.map((item, j) => (
                <div key={j} className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5">
                  <ArrowUpRight className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-white font-medium text-sm">{item.title}</span>
                    <span className="text-gray-400 text-sm">: {item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Blog section                                                  */
/* ------------------------------------------------------------------ */
export default function Blog() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="blog" className="relative py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-blue-500/50" />
            <span className="text-blue-400 font-mono text-sm">10. Writing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Blog
          </h2>
          <p className="text-gray-400 max-w-2xl mb-16">
            Long-form thinking on engineering, AI-augmented workflows, and
            building systems that scale.
          </p>
        </FadeIn>

        <div className="space-y-6">
          {posts.map((post, index) => {
            const isExpanded = expandedId === post.id;
            return (
              <FadeIn key={post.id} delay={index * 0.1}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'border-blue-500/30 bg-white/[0.03]'
                      : 'border-white/[0.06] bg-white/[0.02] card-hover'
                  }`}
                >
                  {/* Card header — always visible */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : post.id)}
                    className="w-full text-left p-6 md:p-8 bg-transparent border-none cursor-pointer"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-blue-500/10">
                          <PenLine className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg md:text-xl leading-tight">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-4 mt-1.5">
                            <span className="flex items-center gap-1 text-gray-500 text-xs">
                              <Calendar className="w-3.5 h-3.5" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1 text-gray-500 text-xs">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-2 rounded-lg bg-white/5"
                      >
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </motion.div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-gray-500 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-8 border-t border-white/5 pt-2">
                          {post.github && (
                            <a
                              href={post.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 mt-6 mb-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors no-underline font-mono"
                            >
                              <GitBranch className="w-3.5 h-3.5" />
                              View source on GitHub
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                          <BlogContent blocks={post.content} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
