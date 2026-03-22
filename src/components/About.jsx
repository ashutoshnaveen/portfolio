import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Building2, Calendar, Cpu, MapPin } from 'lucide-react';

function FadeInSection({ children, delay = 0 }) {
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

const stats = [
  { label: 'Years of Experience', value: '6+' },
  { label: 'Enterprise Customers Served', value: '108+' },
  { label: 'Instances Monitored', value: '20K+' },
  { label: 'Internal Services Adopted', value: '52' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-blue-500/50" />
            <span className="text-blue-400 font-mono text-sm">01. About</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Who I Am
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <FadeInSection delay={0.1}>
            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Senior Software Engineer</span> specializing
                in distributed systems, infrastructure reliability, and data platforms at scale.
                I graduated from <span className="text-white font-medium">IIT (BHU) Varanasi</span> with
                a B.Tech in Electrical Engineering in 2019, and I've spent 6+ years building
                systems that serve thousands of enterprise customers globally.
              </p>
              <p>
                Over the past 6+ years, I've architected self-healing frameworks that reduced MTTR by 68%,
                led Kubernetes containerization efforts cutting provisioning from 25 minutes to 3, and built
                big data pipelines monitoring 20,000+ ServiceNow instances globally.
              </p>
              <p>
                My engineering roots trace back to building Raspberry Pi clusters for parallel
                optimization under <span className="text-white font-medium">Dr. Devender Singh</span> and
                researching deep neural networks for computer vision under
                <span className="text-white font-medium">Dr. Tanima Dutta</span> (CSE, IIT BHU).
                That foundation in distributed computing and ML shaped a passion for building
                resilient systems at the intersection of infrastructure and intelligence.
                I'm increasingly drawn to AI/ML systems, large-scale computing, and the
                engineering challenges behind modern AI.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">ServiceNow</h3>
                  <p className="text-gray-500 text-sm">Senior Software Engineer · 2019–Present</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">IIT (BHU) Varanasi</h3>
                  <p className="text-gray-500 text-sm">B.Tech Electrical Engg. · CGPA 7.49 · 2015–2019</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">Focus Areas</h3>
                  <p className="text-gray-500 text-sm">Distributed Systems · Infrastructure · Big Data · AI/ML</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-400 shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">Career Promotions</h3>
                  <p className="text-gray-500 text-sm">Associate → SE (2021) → Senior SE (2025)</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Stats */}
        <FadeInSection delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
