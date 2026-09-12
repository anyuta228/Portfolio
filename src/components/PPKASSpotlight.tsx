import React, { useState } from 'react';
import { PPKAS_CASE_STEPS } from '../data.ts';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const PPKASSpotlight: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = PPKAS_CASE_STEPS[activeStepIdx];

  return (
    <section id="flagship-section" className="py-20 md:py-28 border-b border-zinc-200/80 bg-white">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-zinc-200/80">
          <div>
            <div className="text-xs sm:text-sm text-emerald-800 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>Флагманский кейс • Апрель 2025 — Май 2026</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-zinc-900 tracking-tight">
              PPKAS: Web3 P2E на блокчейне Kaspa
            </h2>
          </div>

          <div className="text-sm text-zinc-600 max-w-md">
            Полный цикл продуктового дизайна: от исследования пользовательского пути до запуска некастодиальных кошельков и дизайн-системы.
          </div>
        </div>

        {/* Highlight Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          <div className="p-6 sm:p-8 bg-[#FBFBFD] border border-zinc-200/80 rounded-2xl shadow-xs">
            <div className="text-xs sm:text-sm text-zinc-500 font-medium mb-1">Время прохождения регистрации</div>
            <div className="font-display font-extrabold text-4xl sm:text-5xl text-zinc-900 mb-2">
              +20% быстрее
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Выявила и устранила критические барьеры после глубокого UX-аудита старого интерфейса.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl shadow-xs">
            <div className="text-xs sm:text-sm text-emerald-800 font-medium mb-1">Удержание пользователей (D1)</div>
            <div className="font-display font-extrabold text-4xl sm:text-5xl text-emerald-900 mb-2">
              +22% Retention
            </div>
            <p className="text-sm text-emerald-800/90 leading-relaxed">
              Внедрила модель Instant Play: игрок погружается в геймплей до обязательной привязки кошелька.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-[#FBFBFD] border border-zinc-200/80 rounded-2xl shadow-xs">
            <div className="text-xs sm:text-sm text-zinc-500 font-medium mb-1">Конверсия создания кошельков</div>
            <div className="font-display font-extrabold text-4xl sm:text-5xl text-zinc-900 mb-2">
              89% создано
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Сократила процесс создания кошелька с 7 шагов до 2 интуитивных действий с биометрией.
            </p>
          </div>
        </div>

        {/* Interactive Step-by-Step Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Step Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-500 mb-4">
              Этапы продуктовой трансформации
            </div>

            {PPKAS_CASE_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIdx;
              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  onClick={() => setActiveStepIdx(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                    isActive
                      ? 'bg-white border-zinc-900 shadow-md ring-1 ring-zinc-900'
                      : 'bg-[#FBFBFD] border-zinc-200/80 hover:border-zinc-300 hover:bg-white'
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                      isActive ? 'bg-[#18181B] text-white' : 'bg-zinc-200 text-zinc-600'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg text-zinc-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Stage Showcase (7 cols) */}
          <div className="lg:col-span-7 bg-[#FBFBFD] border border-zinc-200/90 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200/80 text-sm mb-6">
                <span className="text-emerald-800 font-bold text-xs sm:text-sm uppercase tracking-wider">
                  Этап 0{activeStepIdx + 1} из 04
                </span>
                <span className="text-zinc-500 text-xs font-medium">PPKAS Ecosystem</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-zinc-900 mb-4">
                {activeStep.title}
              </h3>

              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-8">
                {activeStep.description}
              </p>

              {/* Verified Results Pill */}
              <div className="p-5 bg-white border border-emerald-200/80 rounded-2xl mb-8 flex items-start gap-3 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-emerald-800 font-bold mb-1">
                    Ключевой результат
                  </div>
                  <div className="text-zinc-900 font-semibold text-base">
                    {activeStep.impact}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-zinc-200/80 flex flex-wrap items-center justify-between gap-4 text-sm">
              <span className="text-zinc-500">
                Стек: Figma Tokens, User Research, Kaspa API
              </span>

              <a
                href="https://t.me/vaivin"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#18181B] text-white font-bold hover:bg-zinc-800 transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Обсудить опыт в Web3</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
