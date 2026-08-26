import { motion } from 'framer-motion';
import { Cpu, Terminal, Code2, Database, Wrench, Sparkles, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 1: return <Terminal className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 2: return <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 3: return <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 4: return <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default: return <Wrench className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-50/50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60 mb-3">
            <Cpu className="w-3.5 h-3.5 mr-1.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Technical Stack
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Curated set of technologies, frameworks, databases, and developer tools mastered across academic research and hands-on projects.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Title Header */}
                <div className="flex items-center space-x-3 mb-5 pb-4 border-b border-slate-200/60 dark:border-slate-800">
                  <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Pill Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill: string) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-sm transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Count */}
              <div className="mt-6 pt-3 text-[11px] font-mono text-slate-400 dark:text-slate-500 flex justify-between items-center">
                <span>Category Stack</span>
                <span>{cat.skills.length} Skills</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
