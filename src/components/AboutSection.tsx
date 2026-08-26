import { motion } from 'framer-motion';
import { User, CheckCircle2, GraduationCap, Sparkles } from 'lucide-react';
import { ABOUT_HIGHLIGHTS } from '../data/portfolioData';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 mb-3">
            <User className="w-3.5 h-3.5 mr-1.5" />
            <span>Background & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Passionate Software Engineer specializing in high-performance backend systems, full-stack applications, and artificial intelligence solutions.
          </p>
        </div>

        {/* Content & Highlight Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Main Description Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-panel p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Computer Science Engineer</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Graduating Class of 2026</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                <p>
                  I am a Computer Science and Engineering graduate with a strong foundation in <strong className="text-blue-600 dark:text-blue-400 font-semibold">Java, Object-Oriented Programming, Data Structures, SQL, JDBC, Spring Boot, REST APIs</strong>, and software development.
                </p>
                <p>
                  I enjoy solving real-world problems through clean, maintainable code and continuously learning modern technologies. My interests include backend development, full-stack engineering, AI applications, and cloud-native software solutions.
                </p>
              </div>
            </div>

            {/* Bottom Key Strengths List */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800 grid grid-cols-2 gap-3">
              <div className="flex items-center text-xs font-medium text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                Clean Code Architecture
              </div>
              <div className="flex items-center text-xs font-medium text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                IEEE Published Author
              </div>
              <div className="flex items-center text-xs font-medium text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                Scalable Backend APIs
              </div>
              <div className="flex items-center text-xs font-medium text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                GenAI & RAG Solutions
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {ABOUT_HIGHLIGHTS.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-panel p-5 rounded-2xl border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between group hover:border-blue-500/50 transition-all shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.label}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
