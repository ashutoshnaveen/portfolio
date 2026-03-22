import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function AmbientAudio() {
  const [playing, setPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/audio/ambient.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = 'auto';
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggleAudio = useCallback(() => {
    if (!hasInteracted) setHasInteracted(true);

    if (playing) {
      if (audioRef.current) audioRef.current.pause();
      setPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
        setPlaying(true);
      }
    }
  }, [playing, hasInteracted]);

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
