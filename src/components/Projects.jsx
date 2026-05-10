import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Cpu, Eye, Zap, Monitor, Home, ShoppingCart, Gamepad2,
  Server, Layers, Shield, Container, Workflow, Database,
  ExternalLink, Brain, GitBranch, Globe,
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

const professionalProjects = [
  {
    title: 'Autonomous Self-Healing Framework',
    period: '2022-2023',
    icon: Shield,
    color: 'blue',
    description: 'Template-based anomaly detection engine with automated remediation workflows and decoupled polling architecture.',
    impact: ['45% reduction in manual intervention', '68% MTTR reduction', 'Adopted across 52 services'],
    tech: ['Java', 'Distributed Systems', 'Event-Driven Architecture'],
  },
  {
    title: 'Kubernetes MID Containerization',
    period: '2023',
    icon: Container,
    color: 'purple',
    description: 'Architecture and POC for containerizing MID platform with K8s orchestration and infrastructure abstraction layer.',
    impact: ['Provisioning: 25min → 3min', '85% resource utilization improvement', 'VM + container deployment support'],
    tech: ['Kubernetes', 'Docker', 'Prometheus', 'Grafana'],
  },
  {
    title: 'Unified MID Server Framework',
    period: '2022',
    icon: Layers,
    color: 'cyan',
    description: 'Cluster-level abstraction framework with unified orchestration and UI abstraction layer for lifecycle management.',
    impact: ['Server count: 256 → 80', 'Major infrastructure consolidation', 'Simplified management model'],
    tech: ['Java', 'ServiceNow Platform', 'Orchestration'],
  },
  {
    title: 'Kafka Workload Offloading',
    period: '2021',
    icon: Workflow,
    color: 'green',
    description: 'Microservice architecture using Kafka for event-driven async task execution with retry and fault tolerance.',
    impact: ['~40% workload offloading', 'Async event pipelines', 'Fault-tolerant design'],
    tech: ['Kafka', 'Microservices', 'Java'],
  },
  {
    title: 'Big Data Instance Observer',
    period: '2025-Present',
    icon: Database,
    color: 'blue',
    description: 'Data ingestion pipelines and analytics platform serving operational dashboards for enterprise customers.',
    impact: ['50% query performance improvement', '108 enterprise customers', '20K+ instances monitored'],
    tech: ['Spark', 'Impala SQL', 'Big Data', 'REST APIs'],
  },
  {
    title: 'Workflow Offloading Platform',
    period: '2024',
    icon: Server,
    color: 'purple',
    description: 'Bidirectional connector service enabling synchronization between platform instance and external microservices.',
    impact: ['Event-based workflow execution', 'Instance as datastore', 'Compute offloading to microservices'],
    tech: ['Microservices', 'Event-Driven', 'Java'],
  },
];

const earlyProjects = [
  {
    title: 'Distributed Optimization on RPi Cluster',
    icon: Cpu,
    description: 'Parallel genetic algorithm engine on 3×3 Raspberry-Pi cluster via MPI. Achieved ~9× speedup. Mentored by Dr. Devender Singh.',
    tech: ['MPI', 'Python', 'Distributed Systems'],
  },
  {
    title: 'Vision-Based DNN Attendance System',
    icon: Eye,
    description: 'Real-time attendance using CNNs with live recognition in unconstrained environments.',
    tech: ['TensorFlow', 'OpenCV', 'Python'],
  },
  {
    title: 'Distributed Power Grid Monitoring',
    icon: Zap,
    description: 'ML-based monitoring with image-based meter reading on Raspberry-Pi clusters. Mentored by Dr. Devender Singh.',
    tech: ['Machine Learning', 'Raspberry Pi', 'Python'],
  },
  {
    title: 'Motion Detection System',
    icon: Monitor,
    description: 'Real-time motion detection for low-cost security monitoring using computer vision.',
    tech: ['OpenCV', 'Python', 'Raspberry Pi'],
  },
  {
    title: 'Home Automation System',
    icon: Home,
    description: 'Web-based home automation controlling electrical switches via local LAMP server.',
    tech: ['Linux', 'Apache', 'MySQL', 'PHP', 'Python'],
  },
  {
    title: 'Flash Sale Automation Bot',
    icon: ShoppingCart,
    description: 'Browser automation bot for Flipkart flash sales with automated purchase workflow.',
    tech: ['Java', 'Python', 'Selenium'],
  },
];

const aimlProjects = [
  {
    title: 'Model Serving Infrastructure',
    icon: Brain,
    color: 'cyan',
    description: 'Wrote an LLM inference server from scratch, loosely based on vLLM. Handles KV-cache with a PagedAttention-style block allocator, continuous batching at the iteration level, and streams responses over SSE.',
    highlights: ['PagedAttention-style block memory management', 'Continuous batching (iteration-level)', 'Prometheus metrics + SSE streaming'],
    tech: ['PyTorch', 'FastAPI', 'HuggingFace', 'Docker'],
    github: 'https://github.com/ashutoshnaveen/model-serving-infra',
  },
  {
    title: 'Wumpus World - AI Textbook Companion',
    icon: Gamepad2,
    color: 'green',
    description: 'Built this while studying the logical inference chapters of Russell & Norvig. It\'s a playable Wumpus World with two AI agents that solve the cave using KB inference and probability. There\'s also a shadow AI that watches your moves and grades them after each game. Everything runs from one HTML file, no server needed.',
    highlights: ['KB inference engine for propositional logic', 'Gameplay analysis that grades your moves A through F', 'Probabilistic agent with pit/wumpus probability overlays', '17 test suites covering 7000+ generated worlds', 'Works offline on phones and desktop (PWA)'],
    tech: ['JavaScript', 'AI/Logic', 'Probability', 'PWA'],
    github: 'https://github.com/ashutoshnaveen/wumpus-world',
    live: 'https://ashutoshnaveen.github.io/wumpus-world/',
  },
];

const colorMap = {
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
  green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-blue-500/50" />
            <span className="text-blue-400 font-mono text-sm">04. Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Work
          </h2>
          <p className="text-gray-400 max-w-2xl mb-16">
            Key projects spanning enterprise infrastructure, distributed systems, and platform engineering.
          </p>
        </FadeIn>

        {/* Professional Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {professionalProjects.map((project, index) => {
            const colors = colorMap[project.color];
            const Icon = project.icon;
            return (
              <FadeIn key={project.title} delay={index * 0.05}>
                <div className={`h-full p-6 rounded-2xl border ${colors.border} bg-white/[0.02] card-hover`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg ${colors.bg}`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <span className="text-gray-600 font-mono text-xs">{project.period}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Impact metrics */}
                  <div className="space-y-2 mb-4">
                    {project.impact.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                        <span className="text-gray-500 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-500 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* AI/ML & Research Projects */}
        <FadeIn>
          <h3 className="text-xl font-semibold text-white mb-2">AI/ML & Infrastructure Research</h3>
          <p className="text-gray-500 text-sm mb-8">Deep dives into ML systems, inference optimization, and distributed training</p>
        </FadeIn>

        <div className="grid md:grid-cols-1 gap-6 mb-20">
          {aimlProjects.map((project, index) => {
            const colors = colorMap[project.color];
            const Icon = project.icon;
            return (
              <FadeIn key={project.title} delay={index * 0.05}>
                <div className={`p-6 rounded-2xl border ${colors.border} bg-white/[0.02] card-hover`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg ${colors.bg}`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div className="flex items-center gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-gray-500 hover:text-green-400 transition-colors text-xs font-mono"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          Live Demo
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-gray-500 hover:text-cyan-400 transition-colors text-xs font-mono"
                        >
                          <GitBranch className="w-3.5 h-3.5" />
                          Source
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {project.highlights && (
                    <div className="space-y-2 mb-4">
                      {project.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                          <span className="text-gray-500 text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-500 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Early Projects */}
        <FadeIn>
          <h3 className="text-xl font-semibold text-white mb-2">Early Research & Engineering</h3>
          <p className="text-gray-500 text-sm mb-8">Projects from university and early career (2016–2019)</p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {earlyProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <FadeIn key={project.title} delay={index * 0.05}>
                <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] card-hover h-full">
                  <Icon className="w-5 h-5 text-gray-500 mb-3" />
                  <h4 className="text-white font-medium text-sm mb-2">{project.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] rounded bg-white/5 text-gray-600 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
