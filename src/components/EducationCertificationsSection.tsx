import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const EducationCertificationsSection = () => {
  return (
    <section id="education" className="py-24 relative bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Timeline (Left Side) */}
          <div id="education-timeline" className="lg:col-span-7">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Education Timeline
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Academic achievements & coursework</p>
              </div>
            </div>

            {/* Timeline Tree */}
            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-10">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-600 group-hover:scale-125 transition-transform" />

                  <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm group-hover:border-blue-500/50 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full">
                        {edu.period}
                      </span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-xl border border-emerald-200 dark:border-emerald-800">
                        {edu.gradeType}: {edu.grade}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                      {edu.degree} {edu.field && `— ${edu.field}`}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications (Right Side) */}
          <div id="certifications" className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-500/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Certifications
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Verified Industry Credentials</p>
              </div>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
                        {cert.issuer}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mt-0.5">
                        {cert.title}
                      </h3>
                      {cert.program && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {cert.program}
                        </p>
                      )}
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    {cert.date ? (
                      <span className="text-slate-400 font-mono flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        {cert.date}
                      </span>
                    ) : <span />}

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
