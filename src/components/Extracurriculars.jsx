import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swords, Smartphone, Shield, Heart, FlaskConical, Medal } from 'lucide-react';

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

const activities = [
  {
    title: 'Semi-Automatic Combat Robot',
    description: 'Led a team of 6 to build a combat robot for Robowars at Technex\'16, IIT BHU.',
    icon: Swords,
    year: '2016',
    color: 'red',
  },
  {
    title: 'Gesture-Controlled Locomotion Robot',
    description: 'Built a wireless smartphone gesture-controlled robot using IoT for Xestos, Technex\'16.',
    icon: Smartphone,
    year: '2016',
    color: 'blue',
  },
  {
    title: 'NCC Air Wing Cadet',
    description: 'A-level certificate. Attended NCC CATC at No. 1 HAR AIR SQN NCC, Hissar, Haryana.',
    icon: Shield,
    year: '2011–2013',
    color: 'green',
  },
  {
    title: 'NSS Volunteer',
    description: 'Completed 2 years as volunteer. Attended NSS Special Camp under "Stand Up & Take Action" campaign.',
    icon: Heart,
    year: '2013–2015',
    color: 'pink',
  },
  {
    title: 'CBSE Regional Science Exhibition',
    description: 'Presented "Underground Nuclear Plant" model at CBSE Chandigarh Zone Regional Exhibition.',
    icon: FlaskConical,
    year: '2012',
    color: 'cyan',
  },
  {
    title: '2nd Place, Science Project Exhibition',
    description: 'Won 2nd prize for "Underground Nuclear Power Plant" project at ESFUERZO, PPU Hissar.',
    icon: Medal,
    year: '2012',
    color: 'yellow',
  },
];

const colorMap = {
  red: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
  pink: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20' },
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
  yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20' },
};

export default function Extracurriculars() {
  return (
    <section id="beyond" className="relative py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-pink-500/50" />
            <span className="text-pink-400 font-mono text-sm">08. Beyond Engineering</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Extracurriculars & Activities
          </h2>
          <p className="text-gray-400 max-w-2xl mb-16">
            Robotics, national service, and early explorations beyond the classroom.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((activity, index) => {
            const colors = colorMap[activity.color];
            const Icon = activity.icon;
            return (
              <FadeIn key={activity.title} delay={index * 0.05}>
                <div className={`h-full p-5 rounded-xl border ${colors.border} bg-white/[0.02] card-hover`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg ${colors.bg}`}>
                      <Icon className={`w-4 h-4 ${colors.text}`} />
                    </div>
                    <span className="text-gray-600 font-mono text-xs">{activity.year}</span>
                  </div>
                  <h3 className="text-white font-medium text-sm mb-2">{activity.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{activity.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
