import React from 'react';
import { personalData } from '../data/portfolioData';
import { CheckCircle2, Cpu, Network, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function About() {
  const iconMap = [Cpu, Network, Zap, ShieldCheck, Layers];

  return (
    <section id="about" className="py-20 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Background & Profile
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Architecting Scalable, Production-Grade AI
          </p>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Specialized in developing resilient multi-agent systems, hybrid retrieval, and reasoning-based decision flows designed for complex enterprise datasets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Profile Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                Personal Profile & Core Competencies
              </h3>

              <div className="space-y-4">
                {personalData.personalProfile.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Pillars */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-900/60 border border-slate-800/80">
              <h4 className="text-base font-semibold text-slate-200 mb-3">
                Key Engineering Focus
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Experienced in optimizing large-scale AI workflows for latency, cost, and accuracy using asynchronous execution, multi-agent sequential handoffs, and intelligent fallback strategies across modern AI infrastructure.
              </p>
            </div>
          </div>

          {/* Right Column: Skills Summary Focus Areas */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              Specialization Areas
            </h3>

            {personalData.skillsSummary.map((skill, index) => {
              const Icon = iconMap[index % iconMap.length];
              return (
                <div
                  key={index}
                  className="glass-card p-4 sm:p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/30 transition-all hover:translate-x-1"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-100">
                        {skill.name}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
