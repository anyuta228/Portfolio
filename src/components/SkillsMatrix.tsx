import React from 'react';
import { EXPERTISE_CARDS } from '../data.ts';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

export const SkillsMatrix: React.FC = () => {
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
    <section id="skills-section" className="py-24 sm:py-32 bg-[#08090C]">
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
                04 / Stack & Tooling
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] text-white eclipse-glow">
                Инструменты<br />
                <span className="text-white/40">и экспертиза</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-2">
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans">
                Ключевые направления и ценность для продуктовых команд: архитектура сложных систем, исследования и передача в код без домысливания
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3 Large Modular Bento Cards (Zero Borders, bg-[#0e1118], Lunar Spotlight) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {EXPERTISE_CARDS.map((card) => (
            <motion.div
              variants={cardVariants}
              key={card.id}
              onMouseMove={handleMouseMove}
              className="bento-card p-8 sm:p-9 flex flex-col justify-between group"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-sans font-medium tracking-[0.2em] text-neutral-400 uppercase">
                    {card.code}
                  </span>
                  {card.metricsTag && (
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] text-[#8AB4F8] text-xs font-sans font-medium">
                      {card.metricsTag}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-medium text-2xl sm:text-3xl text-white mb-3 tracking-tight">
                  {card.title}
                </h3>

                <div className="mb-6 pb-5 border-t border-b border-white/[0.06] pt-4">
                  <div className="text-[11px] uppercase tracking-wider text-white/40 font-sans font-medium mb-1.5">
                    Фокус
                  </div>
                  <div className="text-sm sm:text-base font-sans font-medium text-[#8AB4F8]">
                    {card.focus}
                  </div>
                </div>

                {/* Lead Value Box (Clean Sans, No Monospace) */}
                <div className="p-5 rounded-2xl bg-white/[0.03] mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-sans font-medium mb-2.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8AB4F8]" />
                    <span>Ценность для лида и продукта</span>
                  </div>
                  <p className="text-sm sm:text-[15px] text-neutral-200 leading-relaxed font-sans font-normal">
                    {card.leadValue}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-white/40 font-sans font-medium mb-2">
                    Практика и компетенции
                  </div>
                  {card.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3 bg-white/[0.02] rounded-xl text-xs sm:text-sm text-neutral-300 font-sans flex items-start gap-2.5 hover:bg-white/[0.05] transition-colors"
                    >
                      <Check className="w-4 h-4 text-[#8AB4F8] flex-shrink-0 mt-0.5" />
                      <span className="font-normal leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400 relative z-10 font-sans tracking-wide">
                <span className="text-white/60">Глубина: Middle+ / Lead</span>
                <span className="text-neutral-300">Подтверждено в кейсах</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Toolchain Panel (Zero Borders, Static Clean Grid) */}
        <motion.div
          id="tools-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={handleMouseMove}
          className="mt-8 p-8 sm:p-9 bento-card"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-display font-medium mb-6 relative z-10">
            Инструменты и стек
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3.5 relative z-10">
            {[
              { name: 'Figma', role: 'Design Systems' },
              { name: 'Miro', role: 'UX Flows & CJM' },
              { name: 'Framer', role: 'Прототипы' },
              { name: 'After Effects', role: 'Motion Physics' },
              { 
                name: 'Antigravity + Gemini', 
                role: 'AI-Assisted Prototyping & Development',
                highlight: true 
              },
              { name: 'Photoshop', role: '2D графика' },
              { name: 'Analytics', role: 'Core Metrics' }
            ].map((tool, tIdx) => (
              <div
                key={tIdx}
                className={`p-4 rounded-xl text-center transition-all ${
                  tool.highlight
                    ? 'bg-[#0e1118] bg-gradient-to-b from-[#8AB4F8]/[0.09] to-transparent hover:from-[#8AB4F8]/[0.18]'
                    : 'bg-white/[0.03] hover:bg-white/[0.06]'
                }`}
              >
                <div className={`font-display font-medium text-base mb-1 ${tool.highlight ? 'text-white drop-shadow-[0_0_12px_rgba(138,180,248,0.4)]' : 'text-white'}`}>
                  {tool.name}
                </div>
                <div className="text-xs text-neutral-400 leading-snug font-sans">{tool.role}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
