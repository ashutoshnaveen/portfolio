import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

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

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@ashutoshnaveen.com',
    href: 'mailto:hello@ashutoshnaveen.com',
    color: 'blue',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ashutoshnaveen/',
    href: 'https://www.linkedin.com/in/ashutoshnaveen/',
    color: 'blue',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ashutoshnaveen',
    href: 'https://github.com/ashutoshnaveen',
    color: 'purple',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#08080d]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-blue-500/50" />
            <span className="text-blue-400 font-mono text-sm">10. Contact</span>
            <div className="h-px flex-1 max-w-12 bg-blue-500/50" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-12">
            I'm always open to conversations about distributed systems, AI/ML,
            infrastructure at scale, or new opportunities. Feel free to reach out.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const Wrapper = link.href ? 'a' : 'div';
              const wrapperProps = link.href
                ? { href: link.href, target: '_blank', rel: 'noopener noreferrer' }
                : {};
              return (
                <Wrapper
                  key={link.label}
                  {...wrapperProps}
                  className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] card-hover no-underline text-left"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 shrink-0">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-medium mb-0.5">{link.label}</div>
                    <div className="text-white text-sm">{link.value}</div>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href="mailto:hello@ashutoshnaveen.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-all duration-200 no-underline text-sm"
          >
            <Send className="w-4 h-4" />
            Send a Message
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
