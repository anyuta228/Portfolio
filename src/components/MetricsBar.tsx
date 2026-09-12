import React from 'react';
import { CORE_METRICS } from '../data.ts';

export const MetricsBar: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section className="py-20 md:py-28 bg-[#08090C]">
      <div className="max-w-[1760px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header with Eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
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
        </div>

        {/* 6-column Bento Grid with Spotlight illumination */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CORE_METRICS.map((metric, idx) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
