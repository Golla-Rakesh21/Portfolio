import { motion } from 'framer-motion';
import { Download, Mail, Code2, Sparkles, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Dynamic Floating Background Mesh & Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/20 via-indigo-500/20 to-sky-300/10 dark:from-blue-600/10 dark:via-indigo-600/10 dark:to-purple-600/5 rounded-full blur-3xl animate-mesh" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-300/15 dark:bg-blue-900/15 rounded-full blur-2xl animate-mesh" style={{ animationDelay: '-5s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-300/15 dark:bg-indigo-900/15 rounded-full blur-3xl animate-mesh" style={{ animationDelay: '-10s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Profile Image & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start justify-center"
          >
            <div className="relative group">
              {/* Outer Glowing Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-400 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              {/* Avatar Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border-2 border-white/80 dark:border-slate-800 shadow-2xl">
                <img
                  src="/profile.png"
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-4 -right-2 sm:right-2 glass-panel px-4 py-2 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-700/80 flex items-center space-x-2"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Open to Opportunities
                </span>
              </motion.div>

              {/* Tech Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-4 -left-2 glass-panel px-3.5 py-1.5 rounded-2xl shadow-md border border-slate-200/80 dark:border-slate-700/80 flex items-center space-x-1.5"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                  Java & Spring Boot Developer
                </span>
              </motion.div>
            </div>

            {/* Quick Specs Under Image */}
            <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-xs text-center sm:text-left">
              <div className="glass-panel p-3 rounded-xl border border-slate-200/50 dark:border-slate-800">
                <p className="text-[11px] font-medium uppercase text-slate-400 tracking-wider">Degree</p>
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100">B.Tech CSE (2026)</p>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-slate-200/50 dark:border-slate-800">
                <p className="text-[11px] font-medium uppercase text-slate-400 tracking-wider">Academic Score</p>
                <p className="text-xs font-bold text-blue-600 dark:text-blue-400">8.84 CGPA</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Headline & Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            {/* Top Pill Tag */}
            <div className="inline-flex items-center self-center lg:self-start px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 mb-4 shadow-sm">
              <Code2 className="w-3.5 h-3.5 mr-1.5" />
              Software Engineering & Java Backend Developer
            </div>

            {/* Main Name Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I'm{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Subheadline Roles */}
            <h2 className="mt-3 text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300 tracking-tight">
              {PERSONAL_INFO.role}
            </h2>

            {/* Detailed Description */}
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all flex items-center group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-2xl text-sm font-semibold text-slate-800 dark:text-slate-100 glass-panel border border-slate-300/80 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-[1.02] transition-all"
              >
                Contact Me
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download="Golla_Venkata_Rakesh_Resume.pdf"
                className="px-5 py-3.5 rounded-2xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-all"
              >
                <Download className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-center lg:justify-start space-x-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white glass-panel border border-slate-200/60 dark:border-slate-800 hover:scale-110 transition-all font-mono text-xs font-bold"
              >
                GH
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white glass-panel border border-slate-200/60 dark:border-slate-800 hover:scale-110 transition-all font-mono text-xs font-bold"
              >
                IN
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white glass-panel border border-slate-200/60 dark:border-slate-800 hover:scale-110 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white glass-panel border border-slate-200/60 dark:border-slate-800 hover:scale-110 transition-all font-mono text-xs font-bold"
              >
                LC
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
