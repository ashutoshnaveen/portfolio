import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Truck, Brain, Palette, Lightbulb, Bot, Sparkles } from 'lucide-react';

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

const ventures = [
  {
    title: 'Contactless Vegetable Delivery Platform',
    subtitle: 'COVID-19 Experiment',
    icon: Truck,
    status: 'Experiment',
    statusColor: 'yellow',
    color: 'green',
    description:
      'During the COVID-19 lockdown, I built a hyper-local vegetable delivery platform to reduce physical contact between vendors and customers — connecting neighborhood sellers with nearby households while minimizing pandemic exposure.',
    vision:
      'Longer-term vision was a robotic contactless delivery model with autonomous last-mile logistics. Explored challenges in local supply chains, logistics optimization, and the intersection of robotics and real-world delivery.',
    tags: ['Supply Chain', 'Logistics', 'Local Commerce', 'Robotics Vision'],
  },
  {
    title: 'Teaching AI — Hyper-Personalized Learning',
    subtitle: 'Active Exploration',
    icon: Brain,
    status: 'In Progress',
    statusColor: 'blue',
    color: 'blue',
    description:
      'Exploring an AI-driven teaching system designed to increase children\'s attention span and adapt to individual learning patterns. Unlike traditional one-size-fits-all education, this system dynamically adjusts to each learner\'s pace, curiosity, and cognitive style.',
    vision:
      'Using ML and behavioral analysis for hyper-personalized learning — the system continuously observes how a student interacts with concepts and adjusts explanations, exercises, and pacing in real time.',
    tags: ['Machine Learning', 'EdTech', 'Behavioral Analysis', 'Personalization'],
  },
  {
    title: 'Slick India — Custom Sneaker Art',
    subtitle: 'Creative Venture',
    icon: Palette,
    status: 'Creative',
    statusColor: 'pink',
    color: 'purple',
    description:
      'A creative venture around customized hand-painted sneakers — blending art, storytelling, and personal expression into wearable designs. Each pair serves as a canvas for experiments with color, themes, and illustrations.',
    vision:
      'Inspired by anime, street art, and cultural motifs. Explored creativity outside software systems while learning about branding, niche communities, and product design.',
    tags: ['Art & Design', 'Branding', 'Custom Merchandise', 'Illustration'],
  },
];

const colorMap = {
  green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
};

const statusColorMap = {
  yellow: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/20',
  blue: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
  pink: 'bg-pink-500/15 text-pink-300 border-pink-500/20',
};

export default function Ventures() {
  return (
    <section id="ventures" className="relative py-24 bg-[#08080d]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-emerald-500/50" />
            <span className="text-emerald-400 font-mono text-sm">09. Ventures</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ventures & Experiments
          </h2>
          <p className="text-gray-400 max-w-2xl mb-16">
            Ideas explored beyond the day job — from pandemic-era logistics to AI-powered
            education and creative expression through art.
          </p>
        </FadeIn>

        <div className="space-y-8">
          {ventures.map((venture, index) => {
            const colors = colorMap[venture.color];
            const Icon = venture.icon;
            return (
              <FadeIn key={venture.title} delay={index * 0.1}>
                <div className={`p-6 md:p-8 rounded-2xl border ${colors.border} bg-white/[0.02] card-hover relative overflow-hidden`}>
                  {/* Subtle background glow */}
                  <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full ${colors.bg} blur-3xl opacity-30`} />

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${colors.bg}`}>
                          <Icon className={`w-5 h-5 ${colors.text}`} />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">{venture.title}</h3>
                          <p className="text-gray-500 text-sm">{venture.subtitle}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${statusColorMap[venture.statusColor]}`}>
                        {venture.status}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {venture.description}
                    </p>

                    <div className="flex items-start gap-2 mb-5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <Lightbulb className={`w-4 h-4 ${colors.text} shrink-0 mt-0.5`} />
                      <p className="text-gray-500 text-xs leading-relaxed italic">
                        {venture.vision}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {venture.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-gray-500 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
