import React from 'react';
import { educationHistory } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Academic Background & Certifications
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Education & Continuous Learning
          </p>
          <p className="mt-4 text-slate-400 text-base">
            Grounded in core mathematical disciplines (Calculus, Linear Algebra, Statistics) complemented by specialized master programs in Machine Learning and Computer Vision.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationHistory.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {item.degree}
                </h3>
                <p className="text-sm font-medium text-cyan-300 mb-4">
                  {item.institution}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.focus}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400">
                <Award className="w-4 h-4 text-indigo-400" />
                <span>Verified Credentials & Specialization</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
