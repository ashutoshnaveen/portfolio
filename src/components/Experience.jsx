import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, TrendingUp, Server, Container, Database, Workflow, ArrowUpRight } from 'lucide-react';

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

const roles = [
  {
    title: 'Senior Software Engineer',
    period: 'Feb 2025 – Present',
    icon: Database,
    color: 'blue',
    description: 'Big Data Platform — Instance Observer',
    highlights: [
      'Building data ingestion pipelines using Spark for analytics workloads',
      'Writing optimized Impala SQL queries for big data analytics',
      'Developing APIs serving operational dashboards for 108 enterprise customers',
      'Improved big-data cluster query performance by ~50%',
      'Platform monitors ~20,000 ServiceNow instances globally',
    ],
  },
  {
    title: 'Software Engineer',
    period: '2021 – 2025',
    icon: Server,
    color: 'purple',
    description: 'MID Server Platform & Infrastructure',
    highlights: [
      'Designed Kafka-based microservice architecture — ~40% workload offloading',
      'Led Unified MID Server Framework — reduced servers from 256 → 80',
      'Architected self-healing framework — 68% MTTR reduction, adopted by 52 services',
      'Led Kubernetes containerization — provisioning time 25min → 3min, 85% resource improvement',
      'Built bidirectional connector for workflow offloading microservices platform',
    ],
  },
  {
    title: 'Associate Software Engineer',
    period: '2019 – 2021',
    icon: Briefcase,
    color: 'cyan',
    description: 'MID Server Infrastructure Platform',
    highlights: [
      'Worked on MID Server infrastructure — bridge between customer data centers and ServiceNow cloud',
      'Contributed to lifecycle management, orchestration workflows, and server-side management',
      'Data center infrastructure orchestration and distributed workflow management',
      'Platform reliability engineering fundamentals',
    ],
  },
];

const colorMap = {
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/20',
    dot: 'bg-blue-400',
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/20',
    dot: 'bg-purple-400',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/20',
    dot: 'bg-cyan-400',
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-[#08080d]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-blue-500/50" />
            <span className="text-blue-400 font-mono text-sm">03. Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mb-16">
            6+ years at ServiceNow building infrastructure that scales. From MID Server orchestration
            to big data analytics platforms.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-cyan-500/50" />

          <div className="space-y-12">
            {roles.map((role, index) => {
              const colors = colorMap[role.color];
              const Icon = role.icon;
              return (
                <FadeIn key={role.title} delay={index * 0.1}>
                  <div className="relative pl-10 md:pl-20">
                    {/* Timeline dot */}
                    <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full ${colors.dot} ring-4 ring-[#08080d]`} />

                    <div className={`p-6 md:p-8 rounded-2xl border ${colors.border} bg-white/[0.02] card-hover`}>
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${colors.bg}`}>
                            <Icon className={`w-5 h-5 ${colors.text}`} />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold text-lg">{role.title}</h3>
                            <p className="text-gray-500 text-sm">{role.description}</p>
                          </div>
                        </div>
                        <span className={`font-mono text-xs px-3 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                          {role.period}
                        </span>
                      </div>

                      <ul className="space-y-3">
                        {role.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                            <ArrowUpRight className={`w-4 h-4 ${colors.text} shrink-0 mt-0.5`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
