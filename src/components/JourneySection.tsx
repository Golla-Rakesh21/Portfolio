import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { LEARNING_JOURNEY } from '../data/portfolioData';

export const JourneySection = () => {
  return (
    <section id="journey" className="pt-28 pb-20 sm:py-24 relative bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200/60 dark:border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-800/60 mb-3 shadow-sm">
            <Compass className="w-3.5 h-3.5 mr-1.5" />
            <span>Growth & Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Learning Roadmap
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            The chronological evolution of technical mastery, research publications, certifications, and engineering achievements.
          </p>
        </div>

        {/* Responsive Roadmap Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Desktop Central Gradient Line (lg screens) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500 -translate-x-1/2" />

          {/* Mobile Left Gradient Line (sm & md screens) */}
          <div className="block lg:hidden absolute left-4 sm:left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500" />

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-12 relative">
            {LEARNING_JOURNEY.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.year + step.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative flex flex-col lg:flex-row lg:items-center"
                >
                  
                  {/* MOBILE VIEW LAYOUT (< lg screens) */}
                  <div className="block lg:hidden pl-11 sm:pl-16 w-full">
                    {/* Node Circle on Left Vertical Line */}
                    <div className="absolute left-0 sm:left-2 top-1.5 w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-blue-500/20 ring-4 ring-slate-50 dark:ring-slate-950 z-10">
                      {idx + 1}
                    </div>

                    {/* Card Content */}
                    <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all group">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
                          {step.year}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                          Phase 0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      {step.description && (
                        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* DESKTOP VIEW LAYOUT (>= lg screens) */}
                  <div className={`hidden lg:flex w-full items-center ${isEven ? 'flex-row-reverse' : ''}`}>
                    {/* Card Column */}
                    <div className="w-1/2 px-8">
                      <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all group">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
                          {step.year}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-3">
                          {step.title}
                        </h3>
                        {step.description && (
                          <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Central Node Badge */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-blue-500/30 ring-4 ring-white dark:ring-slate-950 z-10 flex-shrink-0">
                      {idx + 1}
                    </div>

                    {/* Spacer Column */}
                    <div className="w-1/2" />
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
