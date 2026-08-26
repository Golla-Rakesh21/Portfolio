import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '../data/portfolioData';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  isDecimal?: boolean;
  isYear?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, suffix = '', isDecimal = false, isYear = false }) => {
  const [count, setCount] = useState(isYear ? value : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || isYear) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, isYear]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {isDecimal ? count.toFixed(2) : Math.floor(count)}
      {suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="py-16 relative bg-slate-50 dark:bg-slate-950/60 border-y border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-all group"
            >
              <div className="text-3xl sm:text-4xl text-slate-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                <AnimatedCounter
                  value={stat.count}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                  isYear={stat.isYear}
                />
              </div>
              <p className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
