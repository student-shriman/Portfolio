import React from 'react';
import { workExperience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Career Journey
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Professional Experience
          </p>
          <p className="mt-4 text-slate-400 text-base">
            Track record of driving AI engineering, lead roles, multi-agent frameworks, and mission-critical enterprise systems across global organizations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {workExperience.map((exp, index) => (
            <div key={exp.id} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-md shadow-cyan-400/20" />

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.status === 'Current' && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-cyan-300 mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6">
                  {exp.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
