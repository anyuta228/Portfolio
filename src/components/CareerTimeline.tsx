import React from 'react';
import { CAREER_ROLES, PERSONAL_RESUME } from '../data.ts';
import { Award, CheckCircle2 } from 'lucide-react';

export const CareerTimeline: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="experience-section" className="py-24 sm:py-32 bg-[#08090C]">
      <div className="max-w-[1760px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="relative mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-sans font-medium text-white/50 mb-6">
                <span className="w-12 h-px bg-white/20" />
                03 / Track Record & Experience
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] text-white eclipse-glow">
                Карьерный<br />
                <span className="text-white/40">путь</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-2">
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans">
                5 лет продуктовой практики: архитектура решений, CJM, дизайн-системы и запуск сложных систем в EdTech, Web3 и B2B SaaS
              </p>
            </div>
          </div>
        </div>

        {/* Roles Timeline with Bento Cards (Zero Borders) */}
        <div className="space-y-6">
          {CAREER_ROLES.map((role, idx) => (
            <div
              key={idx}
              onMouseMove={handleMouseMove}
              className="bento-card p-8 sm:p-10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 relative z-10">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-sans text-white/60 mb-3">
                    <span className="px-3.5 py-1 bg-white/[0.06] rounded-full text-white/90 font-medium text-xs sm:text-sm">
                      {role.type}
                    </span>
                    <span>{role.period}</span>
                    {role.clients && (
                      <>
                        <span className="opacity-40">•</span>
                        <span className="text-white/70">Клиенты: {role.clients.join(', ')}</span>
                      </>
                    )}
                  </div>

                  <h3 className="font-display font-medium text-2xl sm:text-3xl text-white">
                    {role.title} <span className="opacity-30">/</span> <span className="text-white/80">{role.company}</span>
                  </h3>
                </div>

                <span className="bg-white/[0.05] text-xs font-sans text-white/70 py-1.5 px-4 rounded-full self-start">
                  Product Architecture
                </span>
              </div>

              {/* Achievements & Responsibilities */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 relative z-10">
                {/* Achievements (7 cols) */}
                <div className="lg:col-span-7">
                  <h4 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-neutral-300 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8AB4F8]" />
                    <span>Достижения и ключевые результаты</span>
                  </h4>
                  <ul className="space-y-3.5">
                    {role.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-3 text-base text-neutral-200 leading-relaxed font-sans">
                        <span className="w-2 h-2 rounded-full bg-[#8AB4F8] mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(138,180,248,0.9)]" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duties (5 cols) with Zero Borders */}
                <div className="lg:col-span-5 bg-slate-950/40 p-7 rounded-[22px]">
                  <h4 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-neutral-400 mb-3.5">
                    Зона ответственности
                  </h4>
                  <ul className="space-y-2.5">
                    {role.duties.map((duty, dIdx) => (
                      <li key={dIdx} className="text-base text-neutral-300 flex items-start gap-2.5 font-sans">
                        <span className="text-[#8AB4F8] font-bold">•</span>
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Qualification & Certification Banner (Zero Borders) */}
        <div
          onMouseMove={handleMouseMove}
          className="mt-8 p-8 sm:p-9 bento-card flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center text-white flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display font-medium text-xl text-white mb-1 tracking-tight">
                {PERSONAL_RESUME.qualification.title}
              </div>
              <div className="text-sm text-neutral-400 leading-relaxed font-sans">
                {PERSONAL_RESUME.qualification.school} • {PERSONAL_RESUME.qualification.honors} ({PERSONAL_RESUME.qualification.year})
              </div>
            </div>
          </div>
          <a
            href={PERSONAL_RESUME.dprofileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-xs sm:text-sm font-sans font-medium tracking-wider uppercase self-start md:self-auto text-white transition-all bg-white/[0.06] hover:bg-white/[0.12] relative z-10"
          >
            Сертификаты на Dprofile
          </a>
        </div>

      </div>
    </section>
  );
};
