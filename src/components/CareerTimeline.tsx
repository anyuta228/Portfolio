import React from 'react';
import { CAREER_ROLES, PERSONAL_RESUME } from '../data.ts';
import { Award, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const CareerTimeline: React.FC = () => {
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
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="experience-section" className="py-24 sm:py-32 bg-[#08090C]">
      <div className="max-w-[1760px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-16 lg:mb-20"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-sans font-medium text-white/50 mb-6">
                <span className="w-12 h-px bg-white/20" />
                03 / Experience & Background
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
        </motion.div>

        {/* Roles Timeline with Bento Cards (Zero Borders) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6"
        >
          {CAREER_ROLES.map((role, idx) => (
            <motion.div
              variants={cardVariants}
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
                    {role.company === 'COMMUNITY DESIGN' && (
                      <>
                        <span className="opacity-40">•</span>
                        <a
                          href="https://vk.ru/community.design"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-sans text-neutral-300 hover:text-white transition-colors underline decoration-white/20 underline-offset-4 hover:decoration-[#8AB4F8]"
                        >
                          <span>Community Design ↗</span>
                        </a>
                      </>
                    )}
                  </div>

                  <h3 className="font-display font-medium text-2xl sm:text-3xl text-white flex flex-wrap items-center gap-2.5">
                    <span>{role.title}</span>
                    <span className="opacity-30">/</span>
                    {role.company === 'COMMUNITY DESIGN' ? (
                      <a
                        href="https://vk.ru/community.design"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-white/90 hover:text-white transition-colors group/cd"
                        title="Перейти в Community Design"
                      >
                        <span className="underline decoration-white/30 underline-offset-4 group-hover/cd:decoration-[#8AB4F8] transition-all">
                          {role.company}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#8AB4F8] transition-transform group-hover/cd:translate-x-0.5 group-hover/cd:-translate-y-0.5" />
                      </a>
                    ) : (
                      <span className="text-white/80">{role.company}</span>
                    )}
                  </h3>

                  {role.summary && (
                    <p className="mt-3.5 text-base text-neutral-300 leading-relaxed font-sans max-w-4xl">
                      {role.company === 'COMMUNITY DESIGN' ? (
                        <>
                          Проектирование веб-сервисов, образовательных платформ и дизайн-систем для B2B/B2C клиентов в рамках{' '}
                          <a
                            href="https://vk.ru/community.design"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8AB4F8] hover:text-white underline decoration-[#8AB4F8]/40 hover:decoration-[#8AB4F8] underline-offset-4 transition-colors font-medium inline-flex items-center gap-0.5"
                          >
                            дизайн-сообщества
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </>
                      ) : (
                        role.summary
                      )}
                    </p>
                  )}
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

              {/* Structured Client Cases Block (KFBIO, FITVEND, STITCHLAB, LIBRIUM) */}
              {role.clientCases && (
                <div className="mt-8 pt-6 border-t border-white/[0.06] relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-[#8AB4F8] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8AB4F8]" />
                      Кейсы коммерческой практики и продуктовая ценность
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {role.clientCases.map((cCase, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-display font-medium text-lg text-white tracking-tight">
                              {cCase.client}
                            </span>
                            <span className="text-[10px] font-sans px-2 py-0.5 rounded bg-white/[0.06] text-white/70">
                              {cCase.tag}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-300 leading-relaxed font-sans mb-3">
                            {cCase.desc}
                          </p>
                        </div>
                        <div className="text-[11px] font-sans text-[#8AB4F8] font-medium pt-2 border-t border-white/[0.04]">
                          {cCase.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Qualification & Certification Banner (Zero Borders) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
            href="https://dprofile.ru/case/876/ez-bystryi-poisk-ispolnitelei-i-zakazcikov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-sans font-medium tracking-wide self-start md:self-auto text-white transition-all bg-white/[0.06] hover:bg-white/[0.12] active:scale-95 relative z-10"
          >
            <span>Верифицированный диплом UPROCK (Gold)</span>
            <ArrowUpRight className="w-4 h-4 text-[#8AB4F8]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
