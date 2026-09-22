import React from 'react';
import { ArrowRight, Bot, Cpu, Sparkles, MapPin, Mail, Phone, ExternalLink, Download } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 to-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/10 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>{personalData.badge}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">Hyderabad, India</span>
          </div>

          {/* Name & Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              {personalData.name}
            </span>
          </h1>

          <div className="mt-4 flex items-center gap-2 text-lg sm:text-2xl font-semibold text-slate-300">
            <Bot className="w-6 h-6 text-cyan-400" />
            <span>AI Engineer</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">Generative AI & Agentic Systems</span>
          </div>

          {/* Summary / Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
            {personalData.summary}
          </p>

          {/* Contact Details Quick Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
            <a
              href={`mailto:${personalData.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personalData.email}</span>
            </a>
            <a
              href={`tel:${personalData.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personalData.phone}</span>
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              <span>{personalData.location}</span>
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-xl shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <span>Explore Projects & Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:border-slate-500 transition-all"
            >
              <span>Get in Touch</span>
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-base font-semibold bg-slate-900/80 hover:bg-slate-800/90 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 transition-all"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="mt-16 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4">
            {personalData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl border border-slate-800 text-center hover:border-cyan-500/40 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
