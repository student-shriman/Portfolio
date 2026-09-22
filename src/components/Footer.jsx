import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-500 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="text-slate-300 font-semibold">{personalData.name}</span>
              <p className="text-xs text-slate-500">
                Senior AI Engineer • Multi-Agent Architectures & LLM Systems
              </p>
            </div>
          </div>

          {/* Hosting Note */}
          <div className="text-center md:text-left text-xs text-slate-400">
            Deployed on <span className="text-cyan-400 font-medium">Render Static Sites</span> • 100% Free & Global CDN
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Shriman Narayan. All rights reserved. Built with React, Vite & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
