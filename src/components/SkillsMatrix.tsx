import React from 'react';
import { SKILL_GROUPS } from '../data.ts';
import { Check } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="skills-section" className="py-24 sm:py-32 bg-[#08090C]">
      <div className="max-w-[1760px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="relative mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-sans font-medium text-white/50 mb-6">
                <span className="w-12 h-px bg-white/20" />
                04 / Architecture & Toolchain
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] text-white eclipse-glow">
                Компетенции<br />
                <span className="text-white/40">и стек</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-2">
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans">
                Product Architecture • Design System Ops • UX Audit & CJM • Interaction Physics
              </p>
            </div>
          </div>
        </div>

        {/* 3 Large Modular Bento Cards (Zero Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              onMouseMove={handleMouseMove}
              className="bento-card p-8 sm:p-9 flex flex-col justify-between"
            >
              <div className="relative z-10">
                <div className="text-xs font-sans font-medium tracking-[0.2em] text-neutral-400 uppercase mb-2.5">
                  {group.code}
                </div>

                <h3 className="font-display font-medium text-2xl text-white mb-6 tracking-tight">
                  {group.category}
                </h3>

                <ul className="space-y-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="p-3.5 bg-white/[0.03] rounded-xl text-sm sm:text-base text-neutral-300 font-sans flex items-center justify-between hover:bg-white/[0.06] transition-colors"
                    >
                      <span className="font-normal">{skill}</span>
                      <Check className="w-4 h-4 text-[#8AB4F8] flex-shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 flex items-center justify-between text-xs text-neutral-400 relative z-10 font-sans tracking-wider">
                <span>Глубина: Middle+ / Lead</span>
                <span className="text-neutral-200">В кейсах</span>
              </div>
            </div>
          ))}
        </div>

        {/* Toolchain Panel (Zero Borders, Static Clean Grid) */}
        <div
          id="tools-panel"
          onMouseMove={handleMouseMove}
          className="mt-8 p-8 sm:p-9 bento-card"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-display font-medium mb-6 relative z-10">
            Инструменты и стек
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5 relative z-10">
            {[
              { name: 'Figma', role: 'Design Systems' },
              { name: 'Miro', role: 'UX Flows & CJM' },
              { name: 'Framer', role: 'Прототипы' },
              { name: 'After Effects', role: 'Motion Physics' },
              { name: 'Spine 2D', role: 'Скелетный арт' },
              { name: 'Lottie', role: 'JSON микро-UI' },
              { name: 'Photoshop', role: '2D графика' },
              { name: 'Analytics', role: 'Core Metrics' }
            ].map((tool, tIdx) => (
              <div
                key={tIdx}
                className="p-4 bg-white/[0.03] rounded-xl text-center hover:bg-white/[0.06] transition-all"
              >
                <div className="text-white font-display font-medium text-base mb-1">{tool.name}</div>
                <div className="text-xs text-neutral-400 leading-snug font-sans">{tool.role}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
