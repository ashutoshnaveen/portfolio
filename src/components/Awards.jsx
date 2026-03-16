import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Bug, BookOpen } from 'lucide-react';

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

const awards = [
  {
    year: '2022',
    title: 'Llama Award',
    type: 'llama',
    icon: Trophy,
    color: 'yellow',
    description:
      'Recognized for exceptional work on the Unified MID Manager and self-healing frameworks. Presented the architecture and impact to leadership.',
  },
  {
    year: '2023',
    title: 'Kudos Award — Chief Architect',
    type: 'kudos',
    icon: Bug,
    color: 'red',
    description:
      'Independently identified a critical JavaScript bug where a new JS version could have prevented all global scripts from being accessed in local scope — potentially breaking platform-wide functionality. Promptly diagnosed the root cause and reported it, averting major impact.',
  },
  {
    year: '2024',
    title: 'Llama Award',
    type: 'llama',
    icon: Trophy,
    color: 'yellow',
    description:
      'Awarded for showcasing that MID Server can run on Kubernetes as a lightweight container, significantly reducing infrastructure overhead and proving containerization feasibility.',
  },
  {
    year: '2025',
    title: 'Kudos Award — Documentation',
    type: 'kudos',
    icon: BookOpen,
    color: 'green',
    description:
      'Recognized for publishing the most documentation in the Global Cloud Services organization, contributing to team knowledge sharing and operational excellence.',
  },
];

const colorMap = {
  yellow: {
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-400',
    border: 'border-yellow-500/20',
    glow: 'shadow-yellow-500/5',
    badge: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/20',
  },
  red: {
    bg: 'bg-red-500/10',
    text: 'text-red-400',
    border: 'border-red-500/20',
    glow: 'shadow-red-500/5',
    badge: 'bg-red-500/15 text-red-300 border-red-500/20',
  },
  green: {
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    border: 'border-green-500/20',
    glow: 'shadow-green-500/5',
    badge: 'bg-green-500/15 text-green-300 border-green-500/20',
  },
};

export default function Awards() {
  return (
    <section id="awards" className="relative py-24 bg-[#08080d]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-yellow-500/50" />
            <span className="text-yellow-400 font-mono text-sm">07. Recognition</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Awards & Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mb-16">
            Recognized for high-impact engineering contributions at ServiceNow.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => {
            const colors = colorMap[award.color];
            const Icon = award.icon;
            return (
              <FadeIn key={`${award.year}-${award.title}`} delay={index * 0.08}>
                <div
                  className={`h-full p-6 rounded-2xl border ${colors.border} bg-white/[0.02] card-hover relative overflow-hidden`}
                >
                  {/* Subtle glow */}
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full ${colors.bg} blur-2xl opacity-50`} />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-2.5 rounded-xl ${colors.bg}`}>
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${colors.badge}`}>
                          {award.type === 'llama' ? '🦙 Llama' : '⭐ Kudos'}
                        </span>
                        <span className="text-gray-600 font-mono text-xs">{award.year}</span>
                      </div>
                    </div>

                    <h3 className="text-white font-semibold text-lg mb-3">{award.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{award.description}</p>
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
