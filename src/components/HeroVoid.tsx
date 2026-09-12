import React from 'react';
import { PERSONAL_RESUME } from '../data.ts';
import { HeroEclipse } from './HeroEclipse.tsx';
import { ArrowDown, FileText, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroVoidProps {
  onOpenResume: () => void;
  onExploreWorks: () => void;
}

export const HeroVoid: React.FC<HeroVoidProps> = ({ onOpenResume, onExploreWorks }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-10 overflow-hidden">
      {/* Interactive Eclipse Canvas as a Seamless Background Layer */}
      <HeroEclipse className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Hero Content (max-w-[1760px] px-6 md:px-12 lg:px-20) */}
      <div className="relative z-10 max-w-[1760px] w-full mx-auto px-6 md:px-12 lg:px-20 flex-1 flex flex-col justify-center">
        <div className="lg:max-w-[56%] xl:max-w-[54%]">
          
          {/* Eyebrow in COMPUTE style */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-sans font-medium text-white/70 tracking-wider">
              <span className="w-8 h-px bg-white/30" />
              <span className="text-white/90">атома</span>
              <span className="text-white/30">/</span>
              <span className="uppercase tracking-wider text-white/70">Anna Aghabekyan • Middle+ Product Designer</span>
            </span>
          </motion.div>

          {/* Author H1 with Phosphor Eclipse Glow (Zero trailing period, pure punchy essence) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <h1 className="text-left text-[clamp(2.5rem,5.2vw,5.2rem)] font-display leading-[0.98] tracking-tight text-white eclipse-glow">
              Проектирую понятные интерфейсы для сложных цифровых продуктов
            </h1>
          </motion.div>

          {/* Punchy 1 short line without fluff and without a period at the end */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-12 font-sans font-normal"
          >
            5 лет опыта: превращаю комплексную логику в интуитивный и измеримый опыт пользователей
          </motion.p>

          {/* 2 Clean Action Buttons (CTA) strictly zero borders */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 mb-10 lg:mb-14"
          >
            <button
              type="button"
              onClick={onExploreWorks}
              className="inline-flex items-center justify-center text-sm font-sans font-medium rounded-full bg-white hover:bg-white/90 text-black px-7 min-h-[48px] transition-all active:scale-95 shadow-sm"
            >
              <span>Смотреть кейсы</span>
              <ArrowDown className="w-3.5 h-3.5 ml-2 text-black/70" />
            </button>

            <a
              href="https://t.me/vaivin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-sm font-sans font-medium rounded-full text-white/90 hover:text-white px-7 min-h-[48px] transition-all bg-white/[0.06] hover:bg-white/[0.12] active:scale-95"
            >
              <span>Связаться</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-white/60" />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Docked Metric Bar across the bottom of Hero (COMPUTE style) */}
      <div className="relative z-10 max-w-[1760px] w-full mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
          className="pt-6 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          <div className="flex flex-col gap-1">
            <span className="text-3xl lg:text-4xl font-display text-white">+22%</span>
            <span className="text-xs text-white/60 font-sans uppercase tracking-wider">D1 Retention (Kaspa Web3)</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl lg:text-4xl font-display text-white">89%</span>
            <span className="text-xs text-white/60 font-sans uppercase tracking-wider">Конверсия онбординга</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl lg:text-4xl font-display text-white">5m → 1m</span>
            <span className="text-xs text-white/60 font-sans uppercase tracking-wider">Task Velocity (B2B SaaS)</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl lg:text-4xl font-display text-white">-40%</span>
            <span className="text-xs text-white/60 font-sans uppercase tracking-wider">Handoff Time (Design Ops)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
