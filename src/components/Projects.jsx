import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Layers, CheckCircle2, ChevronRight, X, Cpu, Server, Activity, ShieldCheck, Sparkles } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTags = ['All', 'Agentic AI & Healthcare', 'Enterprise RAG & Analytics', 'Fine-Tuning & EdTech', 'Computer Vision & Edge'];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.tag === activeFilter;
  });

  return (
    <section id="projects" className="py-20 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Featured Case Studies
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Production AI & Agentic Systems
          </p>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Real-world architectures deployed across healthcare intelligence, enterprise customer analytics, multilingual educational platforms, and edge computer vision.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === tag
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Header Tag & Period */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {project.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {project.period}
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-indigo-300 font-medium mt-1 mb-4">
                  {project.subtitle} • <span className="text-slate-400">{project.organization}</span>
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/60">
                  {project.metrics.map((metric, i) => (
                    <div key={i}>
                      <span className="text-xs text-slate-500 block">{metric.label}</span>
                      <span className="text-sm font-bold text-cyan-400 font-mono">{metric.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 7).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 7 && (
                    <span className="px-2 py-1 rounded-md text-xs text-slate-500">
                      +{project.techStack.length - 7} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                >
                  <span>System Architecture & Deep Dive</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Modal Deep Dive */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/10">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="pr-10">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {selectedProject.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mt-3">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-cyan-400 font-medium">
                  {selectedProject.subtitle}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {selectedProject.organization} • {selectedProject.period}
                </p>
              </div>

              {/* Architecture Breakdown */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  Detailed Architecture & Contributions
                </h4>

                <div className="space-y-4">
                  {selectedProject.architectureDetails.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90"
                    >
                      <h5 className="text-sm font-semibold text-cyan-300 mb-1.5 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        {step.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Technologies Stack */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Complete Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium bg-cyan-500 hover:bg-cyan-400 text-white transition-colors"
                >
                  Close Architecture View
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
