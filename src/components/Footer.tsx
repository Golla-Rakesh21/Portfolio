import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800 items-start">
          
          {/* Col 1: Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-base">
                R
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 font-semibold">
              {PERSONAL_INFO.role}
            </p>
            <p className="text-xs text-slate-500 italic max-w-md leading-relaxed">
              "Building scalable software and AI-powered solutions."
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills & Tech Stack</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Featured Projects</a></li>
              <li><a href="#publications" className="hover:text-blue-400 transition-colors">IEEE Publications</a></li>
              <li><a href="#education" className="hover:text-blue-400 transition-colors">Education & Timeline</a></li>
            </ul>
          </div>

          {/* Col 3: Social Links & Top Button */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-3">Connect</h4>
              <div className="flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors font-mono text-xs font-bold"
                >
                  GH
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors font-mono text-xs font-bold"
                >
                  IN
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-300 hover:text-blue-400 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center">
            Designed with React 19, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
