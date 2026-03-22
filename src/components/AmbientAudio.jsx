import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

function createTanpuraDrone(audioContext) {
  const masterGain = audioContext.createGain();
  masterGain.gain.value = 0;
  masterGain.connect(audioContext.destination);

  const notes = [
    { freq: 130.81, gain: 0.12, type: 'sine' },
    { freq: 196.00, gain: 0.08, type: 'sine' },
    { freq: 261.63, gain: 0.06, type: 'sine' },
    { freq: 131.81, gain: 0.04, type: 'triangle' },
    { freq: 65.41, gain: 0.10, type: 'sine' },
    { freq: 196.00, gain: 0.03, type: 'triangle' },
  ];

  const oscillators = notes.map(({ freq, gain, type }) => {
    const osc = audioContext.createOscillator();
    const oscGain = audioContext.createGain();

    osc.type = type;
    osc.frequency.value = freq;
    oscGain.gain.value = gain;

    const lfo = audioContext.createOscillator();
    const lfoGain = audioContext.createGain();
    lfo.frequency.value = 0.1 + Math.random() * 0.15;
    lfoGain.gain.value = freq * 0.002;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    lfo.start();

    osc.connect(oscGain);
    oscGain.connect(masterGain);
    osc.start();

    return { osc, lfo, oscGain };
  });

  const strumInterval = setInterval(() => {
    const idx = Math.floor(Math.random() * oscillators.length);
    const { oscGain } = oscillators[idx];
    const baseGain = notes[idx].gain;
    const now = audioContext.currentTime;
    oscGain.gain.setValueAtTime(baseGain * 1.8, now);
    oscGain.gain.exponentialRampToValueAtTime(baseGain, now + 2.5);
  }, 3000 + Math.random() * 2000);

  return {
    masterGain,
    stop: () => {
      clearInterval(strumInterval);
      oscillators.forEach(({ osc, lfo }) => {
        osc.stop();
        lfo.stop();
      });
    },
  };
}

export default function AmbientAudio() {
  const [playing, setPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioContextRef = useRef(null);
  const droneRef = useRef(null);
  const audioElementRef = useRef(null);
  const [useFile, setUseFile] = useState(false);

  useEffect(() => {
    const audio = new Audio('/audio/ambient.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audio.addEventListener('canplaythrough', () => setUseFile(true));
    audio.addEventListener('error', () => setUseFile(false));
    audioElementRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const fadeGain = useCallback((gainNode, targetValue, duration = 1.5) => {
    const now = audioContextRef.current.currentTime;
    gainNode.gain.setValueAtTime(gainNode.gain.value, now);
    gainNode.gain.linearRampToValueAtTime(targetValue, now + duration);
  }, []);

  const toggleAudio = useCallback(() => {
    if (!hasInteracted) setHasInteracted(true);

    if (playing) {
      if (useFile && audioElementRef.current) {
        audioElementRef.current.pause();
      } else if (droneRef.current) {
        fadeGain(droneRef.current.masterGain, 0, 1.5);
        setTimeout(() => {
          if (droneRef.current) {
            droneRef.current.stop();
            droneRef.current = null;
          }
          if (audioContextRef.current) {
            audioContextRef.current.close();
            audioContextRef.current = null;
          }
        }, 1600);
      }
      setPlaying(false);
    } else {
      if (useFile && audioElementRef.current) {
        audioElementRef.current.play();
        setPlaying(true);
      } else {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        audioContextRef.current = ctx;
        const drone = createTanpuraDrone(ctx);
        droneRef.current = drone;
        fadeGain(drone.masterGain, 0.15, 2);
        setPlaying(true);
      }
    }
  }, [playing, hasInteracted, useFile, fadeGain]);

  useEffect(() => {
    return () => {
      if (droneRef.current) {
        droneRef.current.stop();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      onClick={toggleAudio}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/70 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer group"
      title={playing ? 'Mute ambient sound' : 'Play ambient music'}
    >
      <AnimatePresence mode="wait">
        {playing ? (
          <motion.div
            key="playing"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Volume2 className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="muted"
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <VolumeX className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>

      {!hasInteracted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute -top-10 right-0 whitespace-nowrap text-[10px] text-gray-500 bg-white/5 border border-white/10 rounded-md px-2 py-1 backdrop-blur-sm"
        >
          ♪ ambient music
        </motion.div>
      )}

      {playing && (
        <motion.div
          className="absolute inset-0 rounded-full border border-blue-400/30"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}
