import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import { FEATURED_GITHUB_REPOS } from '../data/portfolioData';

export const GithubShowcaseSection = () => {
  const [repos] = useState(FEATURED_GITHUB_REPOS);

  return (
    <section id="github" className="py-24 relative bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 mb-3">
            <span className="font-mono text-xs font-bold mr-1.5">GH</span>
            <span>Open Source & Code Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            GitHub Showcase
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Live repositories showcasing modular software architecture, algorithmic codebases, neural network models, and browser extensions.
          </p>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all group"
            >
              <div>
                {/* Header: Name & Link */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 transition-colors">GH</span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate max-w-[200px]">
                      {repo.name}
                    </h3>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              {/* Repo Stats & Language */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{repo.stars}</span>
                  </span>

                  <span className="flex items-center space-x-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Golla-Rakesh21"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-2xl text-xs font-bold text-slate-900 dark:text-white glass-panel border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105"
          >
            <span className="font-mono text-xs font-bold mr-2">GH</span>
            <span>Explore All Repositories on GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
};
