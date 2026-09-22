import React, { useState } from 'react';
import { technicalSkills } from '../data/portfolioData';
import { Bot, GitFork, Database, Cpu, Server, Cloud, Eye, Search, Sparkles } from 'lucide-react';

const iconMap = {
  Bot,
  GitFork,
  Database,
  Cpu,
  Server,
  Cloud,
  Eye,
};

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...technicalSkills.map((c) => c.category)];

  const filteredCategories = technicalSkills
    .filter((cat) => activeCategory === 'All' || cat.category === activeCategory)
    .map((cat) => {
      const filteredSkills = cat.skills.filter((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Technical Proficiency
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Comprehensive Skills Matrix
          </p>
          <p className="mt-4 text-slate-400 text-base">
            End-to-end capabilities spanning autonomous multi-agent orchestration, hybrid RAG retrieval, foundational model fine-tuning, high-throughput APIs, and production MLOps.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skills (e.g. LangGraph, Qdrant)..."
              className="w-full pl-9 pr-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const Icon = iconMap[group.icon] || Cpu;
            return (
              <div
                key={group.category}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-100 text-base">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No skills found matching "{searchTerm}".
          </div>
        )}

      </div>
    </section>
  );
}
