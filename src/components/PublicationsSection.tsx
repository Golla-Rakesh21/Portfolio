import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, UserCheck, ArrowUpRight } from 'lucide-react';
import { PUBLICATIONS } from '../data/portfolioData';

export const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 relative bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 mb-3">
            <BookOpen className="w-3.5 h-3.5 mr-1.5" />
            <span>Research & Scholarly Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            IEEE Publications & Research Papers
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Academic research papers published in IEEE international conferences focusing on NLP toxicity mitigation and Computer Vision waste segregation models.
          </p>
        </div>

        {/* Google Scholar Style Publications List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {PUBLICATIONS.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all group relative"
            >
              {/* Year & Conference Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  {pub.journal} ({pub.year})
                </span>
                <span className="inline-flex items-center text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <Award className="w-4 h-4 text-amber-500 mr-1" />
                  Peer-Reviewed IEEE Paper
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                {pub.title}
              </h3>

              {/* Authors Row */}
              <div className="mt-3 flex items-center space-x-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                <UserCheck className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>
                  Authors:{' '}
                  {pub.authors.map((author: string, aIdx: number) => (
                    <React.Fragment key={author}>
                      <span className={author.includes('Rakesh') ? 'font-bold text-slate-900 dark:text-white underline decoration-emerald-500' : ''}>
                        {author}
                      </span>
                      {aIdx < pub.authors.length - 1 ? ', ' : ''}
                    </React.Fragment>
                  ))}
                </span>
              </div>

              {/* Abstract */}
              {pub.abstract && (
                <div className="mt-4 p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
                  "{pub.abstract}"
                </div>
              )}

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  IEEE Xplore Digital Library Indexing
                </span>

                <a
                  href={pub.link || 'https://ieeexplore.ieee.org'}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-500 shadow-md transition-all flex items-center"
                >
                  <span>{pub.year === '2025' ? 'Read Paper' : 'View Publication'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
