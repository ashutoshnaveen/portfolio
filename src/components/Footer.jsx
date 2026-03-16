import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-[#08080d] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Terminal className="w-4 h-4" />
          <span className="font-mono">
            <span className="text-blue-400/60">ashutosh</span>
            <span className="text-gray-600">.</span>
            <span className="text-purple-400/60">dev</span>
          </span>
        </div>
        <div className="text-gray-600 text-xs">
          Built with React, TailwindCSS & Framer Motion
        </div>
        <div className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Ashutosh Naveen
        </div>
      </div>
    </footer>
  );
}
