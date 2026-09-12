import React from 'react';
import { CORE_METRICS } from '../data.ts';
import { motion } from 'motion/react';

export const MetricsBar: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="metrics-section" className="py-20 md:py-28 bg-[#08090C]">
      <div className="max-w-[1760px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header with Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-sans font-medium text-white/50 mb-3">
              <span className="w-8 h-px bg-white/30" />
              00 / Impact & Metrics
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display tracking-tight text-white eclipse-glow">
              Измеримые результаты
            </h2>
          </div>
          <span className="text-sm text-neutral-400 tracking-wide font-sans">
            Данные коммерческой практики и продуктовых запусков
          </span>
        </motion.div>

        {/* 6-column Bento Grid with Spotlight illumination */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {CORE_METRICS.map((metric, idx) => (
            <motion.div
              variants={cardVariants}
              key={idx}
              onMouseMove={handleMouseMove}
              className="bento-card p-6 flex flex-col justify-between min-h-[180px]"
            >
              <div className="relative z-10">
                <div className="font-display font-light text-3xl sm:text-4xl text-white mb-2 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm sm:text-base font-medium text-white/95 leading-snug">
                  {metric.label}
                </div>
              </div>
              <div className="relative z-10 text-xs sm:text-sm text-white/55 leading-relaxed pt-3 font-sans">
                {metric.context}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
