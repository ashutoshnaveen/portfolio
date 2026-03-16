import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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

const skillCategories = [
  {
    title: 'Languages — Proficient',
    color: 'orange',
    skills: ['Python', 'C++', 'C', 'Java', 'SQL'],
  },
  {
    title: 'Languages — Working Knowledge',
    color: 'pink',
    skills: ['JavaScript', 'Node.js', 'C#', 'Bash', 'REST APIs'],
  },
  {
    title: 'Distributed Systems',
    color: 'blue',
    skills: ['MPI', 'Kafka', 'Event-Driven Architecture', 'Microservices', 'Message Queues', 'Fault Tolerance', 'Genetic Algorithms'],
  },
  {
    title: 'Infrastructure & Platform',
    color: 'purple',
    skills: ['Kubernetes', 'Docker', 'Linux', 'Raspbian', 'MID Server', 'ServiceNow Platform'],
  },
  {
    title: 'Big Data & Analytics',
    color: 'cyan',
    skills: ['Apache Spark', 'Impala SQL', 'Data Pipelines', 'ETL', 'Hadoop Ecosystem', 'Matplotlib', 'Pandas'],
  },
  {
    title: 'AI/ML & Computer Vision',
    color: 'green',
    skills: ['TensorFlow', 'OpenCV', 'CNNs', 'Deep Learning', 'Image Processing', 'Fuzzy Logic', 'Data Science'],
  },
  {
    title: 'Observability & Monitoring',
    color: 'blue',
    skills: ['Prometheus', 'Grafana', 'Self-Healing Systems', 'Anomaly Detection', 'MTTR Optimization', 'Alerting'],
  },
  {
    title: 'Tools & Practices',
    color: 'pink',
    skills: ['Git', 'CI/CD', 'Agile', 'System Design', 'MATLAB', 'Simulink', 'Code Reviews'],
  },
];

const colorMap = {
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', pill: 'bg-blue-500/5 text-blue-400/80 border-blue-500/10' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20', pill: 'bg-purple-500/5 text-purple-400/80 border-purple-500/10' },
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20', pill: 'bg-cyan-500/5 text-cyan-400/80 border-cyan-500/10' },
  green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20', pill: 'bg-green-500/5 text-green-400/80 border-green-500/10' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20', pill: 'bg-orange-500/5 text-orange-400/80 border-orange-500/10' },
  pink: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20', pill: 'bg-pink-500/5 text-pink-400/80 border-pink-500/10' },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#08080d]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-blue-500/50" />
            <span className="text-blue-400 font-mono text-sm">05. Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mb-16">
            Deep expertise across the infrastructure stack — from low-level distributed systems
            to high-level analytics platforms.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color];
            return (
              <FadeIn key={category.title} delay={index * 0.05}>
                <div className={`p-6 rounded-2xl border ${colors.border} bg-white/[0.02] h-full`}>
                  <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} mb-4`}>
                    {category.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 text-xs rounded-lg border ${colors.pill} font-medium`}
                      >
                        {skill}
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
