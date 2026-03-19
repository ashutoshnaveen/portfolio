import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';

const Hero3D = lazy(() => import('./Hero3D'));
const Avatar3D = lazy(() => import('./Avatar3D'));

function AvatarCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 4.5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'auto' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-3, 3, 2]} intensity={0.4} color="#3b82f6" />
      <pointLight position={[0, 2, 3]} intensity={0.3} color="#8b5cf6" />
      <Suspense fallback={null}>
        <Avatar3D position={[0, -1.7, 0]} scale={1.55} />
        <ContactShadows position={[0, -1.6, 0]} opacity={0.4} scale={6} blur={2.5} far={4} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* 3D Network Background */}
      <Suspense fallback={
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      }>
        <Hero3D />
      </Suspense>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-mono mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Senior Software Engineer @ ServiceNow
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Ashutosh Naveen</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
            >
              Building distributed systems, self-healing platforms, and big data pipelines
              that power enterprise infrastructure at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-200 no-underline text-sm"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="px-6 py-3 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200 no-underline text-sm"
              >
                View My Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              {[
                { icon: Github, href: 'https://github.com/ashutoshnaveen', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/ashutoshnaveen/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:ashutosh.naveen@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-white/5 hover:border-white/20 text-gray-500 hover:text-white transition-all duration-200 no-underline"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-full max-w-[300px] h-[300px] sm:max-w-[360px] sm:h-[360px] md:max-w-[400px] md:h-[420px] lg:max-w-none lg:w-[42%] lg:h-[80vh] flex-shrink-0 pointer-events-auto"
          >
            <AvatarCanvas />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors no-underline"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
