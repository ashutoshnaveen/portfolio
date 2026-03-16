import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Briefcase, GraduationCap, Rocket, TrendingUp, Database } from 'lucide-react';

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

const milestones = [
  {
    year: '2019',
    title: 'Graduated IIT BHU & Joined ServiceNow',
    description: 'B.Tech in Electrical Engineering. Started career as Associate Software Engineer on the MID Server platform.',
    icon: GraduationCap,
    color: 'cyan',
  },
  {
    year: '2021',
    title: 'Promoted to Software Engineer',
    description: 'Recognized for contributions to MID Server infrastructure. Designed Kafka-based microservice architecture.',
    icon: TrendingUp,
    color: 'blue',
  },
  {
    year: '2022',
    title: 'Unified MID Server Framework',
    description: 'Led development of cluster-level abstraction. Reduced data center MID servers from 256 to 80.',
    icon: Briefcase,
    color: 'purple',
  },
  {
    year: '2022–23',
    title: 'Self-Healing Anomaly Detection',
    description: 'Architected autonomous self-healing framework. 68% MTTR reduction. Adopted across 52 internal services.',
    icon: Award,
    color: 'green',
  },
  {
    year: '2023',
    title: 'Kubernetes Containerization',
    description: 'Led architecture for containerizing MID platform. Provisioning time cut from 25 minutes to 3 minutes.',
    icon: Rocket,
    color: 'orange',
  },
  {
    year: '2025',
    title: 'Promoted to Senior Software Engineer',
    description: 'Building big data pipelines for Instance Observer. Monitoring 20K+ instances for 108 enterprise customers.',
    icon: Database,
    color: 'blue',
  },
];

const colorMap = {
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', dot: 'bg-cyan-400', line: 'from-cyan-500/50' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', dot: 'bg-blue-400', line: 'from-blue-500/50' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', dot: 'bg-purple-400', line: 'from-purple-500/50' },
  green: { bg: 'bg-green-500/10', text: 'text-green-400', dot: 'bg-green-400', line: 'from-green-500/50' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-400', dot: 'bg-orange-400', line: 'from-orange-500/50' },
};

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-blue-500/50" />
            <span className="text-blue-400 font-mono text-sm">06. Timeline</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Career Milestones
          </h2>
          <p className="text-gray-400 max-w-2xl mb-16">
            Key moments that defined my engineering journey.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-cyan-500/30" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const colors = colorMap[milestone.color];
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <FadeIn key={milestone.year} delay={index * 0.08}>
                  <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${colors.dot} ring-4 ring-[#0a0a0f] z-10`} />

                    {/* Content */}
                    <div className={`ml-14 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] card-hover">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-1.5 rounded-lg ${colors.bg}`}>
                            <Icon className={`w-4 h-4 ${colors.text}`} />
                          </div>
                          <span className={`font-mono text-xs ${colors.text}`}>{milestone.year}</span>
                        </div>
                        <h3 className="text-white font-semibold text-sm mb-1">{milestone.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{milestone.description}</p>
                      </div>
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
