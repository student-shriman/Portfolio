import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  Layers, CheckCircle2, ChevronRight, X, Cpu, Server, 
  Activity, ShieldCheck, Sparkles, ChevronDown, ChevronUp,
  FileText, Wrench, AlertTriangle, Lightbulb
} from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeModalTab, setActiveModalTab] = useState('specs'); // 'specs' | 'tech' | 'problem' | 'highlights'
  const [expandedCards, setExpandedCards] = useState({});

  const filterTags = [
    'All', 
    'Agentic AI & Healthcare', 
    'Enterprise RAG & Analytics', 
    'Fine-Tuning & EdTech', 
    'Computer Vision & Edge'
  ];

  const toggleCardExpand = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
            Deep-Dive Production AI Projects
          </p>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Exhaustive specifications, multi-agent pipelines, foundational model fine-tuning, and edge computer vision deployments built for enterprise scale.
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
          {filteredProjects.map((project) => {
            const isExpanded = !!expandedCards[project.id];

            return (
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

                  {/* Overview Text */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.overview}
                  </p>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center sm:text-left">
                        <span className="text-[11px] text-slate-500 block truncate">{metric.label}</span>
                        <span className="text-xs sm:text-sm font-bold text-cyan-400 font-mono">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 8).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 8 && (
                      <span className="px-2 py-1 rounded-md text-xs text-slate-500 font-medium">
                        +{project.techStack.length - 8} more
                      </span>
                    )}
                  </div>

                  {/* Inline Quick Expandable Architecture Preview */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-800 space-y-4 animate-fade-in">
                      {/* Problem Statement Snippet */}
                      <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Problem Statement</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {project.problemStatement}
                        </p>
                      </div>

                      {/* Specifications Summary */}
                      <div className="space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                          Core Architecture Modules:
                        </div>
                        {project.specifications.slice(0, 4).map((spec, sIdx) => (
                          <div key={sIdx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60">
                            <h5 className="text-xs font-semibold text-slate-200 mb-1 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                              {spec.section}
                            </h5>
                            <ul className="list-disc list-inside text-xs text-slate-400 space-y-0.5 pl-2">
                              {spec.points.map((pt, ptIdx) => (
                                <li key={ptIdx} className="leading-relaxed">{pt}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-5 mt-4 border-t border-slate-800/70 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => toggleCardExpand(project.id)}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <span>Show Less</span>
                        <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>Quick Overview</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveModalTab('specs');
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all hover:scale-105"
                  >
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span>Full System Architecture Deep Dive</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Immersive Deep-Dive Case Study Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/10">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="pr-12">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {selectedProject.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                  {selectedProject.title}
                </h3>
                <p className="text-sm sm:text-base text-cyan-400 font-medium">
                  {selectedProject.subtitle}
                </p>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  {selectedProject.organization} • {selectedProject.period}
                </p>
              </div>

              {/* Metrics Summary Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 bg-slate-950 p-4 rounded-xl border border-slate-800">
                {selectedProject.metrics.map((metric, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <span className="text-xs text-slate-400 block">{metric.label}</span>
                    <span className="text-base font-bold text-cyan-400 font-mono">{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Modal Navigation Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3 mb-6">
                <button
                  onClick={() => setActiveModalTab('specs')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                    activeModalTab === 'specs'
                      ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Architecture Specifications ({selectedProject.specifications.length})</span>
                </button>

                <button
                  onClick={() => setActiveModalTab('tech')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                    activeModalTab === 'tech'
                      ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white'
                  }`}
                >
                  <Wrench className="w-4 h-4" />
                  <span>Technologies Used ({selectedProject.technologiesUsed?.length || 0})</span>
                </button>

                <button
                  onClick={() => setActiveModalTab('problem')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                    activeModalTab === 'problem'
                      ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white'
                  }`}
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span>Problem Statement & Overview</span>
                </button>

                <button
                  onClick={() => setActiveModalTab('highlights')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                    activeModalTab === 'highlights'
                      ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white'
                  }`}
                >
                  <Lightbulb className="w-4 h-4" />
                  <span>Engineering Highlights ({selectedProject.additionalHighlights?.length || 0})</span>
                </button>
              </div>

              {/* Tab 1: Specifications & Architecture */}
              {activeModalTab === 'specs' && (
                <div className="space-y-4 animate-fade-in">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    System Architecture & Step-by-Step Implementation:
                  </h4>
                  {selectedProject.specifications.map((spec, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90"
                    >
                      <h5 className="text-sm font-semibold text-cyan-300 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        {spec.section}
                      </h5>
                      <ul className="space-y-1.5 pl-6 text-xs sm:text-sm text-slate-300">
                        {spec.points.map((pt, pIdx) => (
                          <li key={pIdx} className="leading-relaxed list-disc">
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 2: Technologies Used Breakdown */}
              {activeModalTab === 'tech' && (
                <div className="space-y-3 animate-fade-in">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                    Detailed Technology Stack & Operational Roles:
                  </h4>
                  {selectedProject.technologiesUsed?.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-start gap-2"
                    >
                      <span className="w-full sm:w-48 shrink-0 text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
                        {item.category}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.details}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Problem Statement & Overview */}
              {activeModalTab === 'problem' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Industrial Challenge & Problem Statement
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedProject.problemStatement}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Project Overview & Scope
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedProject.overview}
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 4: Engineering Highlights & Bullet Points */}
              {activeModalTab === 'highlights' && (
                <div className="space-y-3 animate-fade-in">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                    Additional Engineering Highlights & Trade-Off Decisions:
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {selectedProject.additionalHighlights?.map((hl, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {hl}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {selectedProject.title} • {selectedProject.organization}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-white transition-colors"
                >
                  Close Case Study
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
