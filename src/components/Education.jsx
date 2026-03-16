import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, School, BookOpen, Award } from 'lucide-react';

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

const education = [
  {
    degree: 'B.Tech — Electrical Engineering',
    institution: 'Indian Institute of Technology (BHU), Varanasi',
    score: 'CGPA: 7.49',
    year: '2015–2019',
    icon: GraduationCap,
    color: 'blue',
    highlights: [
      'Research under Prof. Devender Singh (HOD, EE) — Distributed systems & optimization',
      'Internship under Dr. Tanima Dutta (CSE) — Deep Neural Networks for attendance',
      'Poster Presentation on Institute Day — Parallel Computing on RPi Cluster',
      'Spardha \'16 — Event Co-ordinator, Security Incharge for Core Events',
    ],
  },
  {
    degree: 'CBSE Class XII',
    institution: 'Adarsh Sr. Sec. School, Siwani Mandi, Bhiwani, Haryana',
    score: '94.6%',
    year: '2015',
    icon: School,
    color: 'purple',
    highlights: [],
  },
  {
    degree: 'CBSE Class X',
    institution: 'T.D.B. Sr. Sec. Model School, Hissar, Haryana',
    score: '95.00%',
    year: '2013',
    icon: BookOpen,
    color: 'cyan',
    highlights: [],
  },
];

const certifications = [
  { name: 'Proficiency Certificate in Python', institute: 'Guru Nanak Dev Computer Institute, Sardulgarh', year: '2017' },
  { name: 'Proficiency Certificate in C, C++', institute: 'Guru Nanak Dev Computer Institute, Sardulgarh', year: '2017' },
];

const colorMap = {
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', dot: 'bg-blue-400' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20', dot: 'bg-purple-400' },
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20', dot: 'bg-cyan-400' },
};

export default function Education() {
  return (
    <section id="education" className="relative py-24 bg-[#08080d]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-purple-500/50" />
            <span className="text-purple-400 font-mono text-sm">02. Education</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Academic Background
          </h2>
          <p className="text-gray-400 max-w-2xl mb-16">
            A strong academic foundation from IIT BHU with hands-on research in distributed systems,
            computer vision, and parallel computing.
          </p>
        </FadeIn>

        {/* Education cards */}
        <div className="space-y-6 mb-16">
          {education.map((edu, index) => {
            const colors = colorMap[edu.color];
            const Icon = edu.icon;
            return (
              <FadeIn key={edu.degree} delay={index * 0.1}>
                <div className={`p-6 md:p-8 rounded-2xl border ${colors.border} bg-white/[0.02] card-hover`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${colors.bg}`}>
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-gray-500 text-sm">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-sm font-bold ${colors.text}`}>{edu.score}</span>
                      <span className="text-gray-600 font-mono text-xs">{edu.year}</span>
                    </div>
                  </div>

                  {edu.highlights.length > 0 && (
                    <ul className="space-y-2 mt-4">
                      {edu.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} shrink-0 mt-1.5`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Certifications */}
        <FadeIn delay={0.3}>
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Award className="w-4 h-4 text-yellow-400" />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-start justify-between gap-3"
              >
                <div>
                  <div className="text-white text-sm font-medium">{cert.name}</div>
                  <div className="text-gray-500 text-xs mt-1">{cert.institute}</div>
                </div>
                <span className="text-gray-600 font-mono text-xs shrink-0">{cert.year}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
