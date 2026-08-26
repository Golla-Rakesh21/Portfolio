import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { LEARNING_JOURNEY } from '../data/portfolioData';

export const JourneySection = () => {
  return (
    <section id="journey" className="py-24 relative bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-800/60 mb-3">
            <Compass className="w-3.5 h-3.5 mr-1.5" />
            <span>Growth & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Learning Roadmap
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            The chronological evolution of technical mastery, research publications, certifications, and engineering achievements.
          </p>
        </div>

        {/* Horizontal & Vertical Responsive Roadmap */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line for Large Screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500 -translate-x-1/2" />

          <div className="space-y-12 relative">
            {LEARNING_JOURNEY.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.year + step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left / Right Card Content */}
                  <div className="w-full lg:w-1/2 px-0 lg:px-8">
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
                  <div className="my-4 lg:my-0 flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-600 shadow-md flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Empty Spacer Column for Alignment */}
                  <div className="hidden lg:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
