import React, { useState } from 'react';
import { ProjectCase } from '../types.ts';
import { ImageIcon } from 'lucide-react';

interface ProjectPreviewProps {
  project: ProjectCase;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project }) => {
  const media = project.previewMedia ?? [];
  const [active, setActive] = useState(0);

  if (project.coverImage) {
    return (
      <div className="w-full h-full min-h-[320px] aspect-[16/10] bg-[#07090E] rounded-2xl overflow-hidden relative group/cover select-none flex items-center justify-center">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02] group-hover/cover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        
        {/* Subtle pill overlay */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-sans text-white/80 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 font-medium">
            {project.originLabel}
          </span>
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/70">
            {project.period}
          </span>
        </div>
      </div>
    );
  }

  if (media.length === 0) {
    // High-fidelity domain-specific UI preview mockup (Strictly zero borders & inner glow)
    if (project.id === 'ppkas') {
      return (
        <div className="w-full h-full min-h-[320px] bg-[#07090E] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#8AB4F8]/[0.04] to-transparent pointer-events-none" />
          
          {/* Top HUD */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8AB4F8] shadow-[0_0_8px_#8AB4F8]" />
              <span className="font-sans text-xs text-white/70 uppercase tracking-wider">Kaspa Non-Custodial Node</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#8AB4F8]/10 text-[#8AB4F8] text-xs font-sans font-medium">Instant Play</span>
          </div>

          {/* Central Architecture Mockup */}
          <div className="my-auto space-y-4 relative z-10">
            <div className="p-4 rounded-xl bg-white/[0.03] space-y-3">
              <div className="flex items-center justify-between text-xs font-sans text-white/50">
                <span>WALLET SETUP PROTOCOL</span>
                <span className="text-[#8AB4F8] font-medium">CONVERSION: 89%</span>
              </div>
              <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#8AB4F8] to-[#D1E1FF] w-[89%]" />
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1 font-sans text-[11px] text-white/70">
                <div className="p-2 rounded bg-black/40">2-Step Biometric Onboarding</div>
                <div className="p-2 rounded bg-black/40">P2P Escrow Verified</div>
              </div>
            </div>

            <div className="flex items-center justify-between px-2 font-sans text-xs text-white/60">
              <span>RETENTION LOOP (D1)</span>
              <span className="text-white font-semibold">+22% HIGHER</span>
            </div>
          </div>

          {/* Bottom HUD */}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-sans text-white/40 relative z-10">
            <span>NETWORK: KASPA KDX</span>
            <span>SPEC: DEVSECOPS COMPLIANT</span>
          </div>
        </div>
      );
    }

    if (project.id === 'librium') {
      return (
        <div className="w-full h-full min-h-[320px] bg-[#07090E] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#2DD4BF]/[0.05] via-transparent to-black/40 pointer-events-none" />
          
          {/* Top HUD */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] shadow-[0_0_8px_#2DD4BF]" />
              <span className="font-sans text-xs text-white/80 uppercase tracking-wider">Librium EdTech Ecosystem</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] text-xs font-sans font-medium border border-[#2DD4BF]/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                Knowledge Graph
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white/70 text-xs font-sans font-medium">iOS & Android</span>
            </div>
          </div>

          {/* Central Interactive Mobile & Microlearning UI Mockup */}
          <div className="my-auto space-y-3.5 relative z-10">
            {/* Knowledge Module Tracker */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between text-xs font-sans text-white/50">
                <span>КВАНТОВОЕ ОБУЧЕНИЕ • СЕССИЯ 04</span>
                <span className="text-[#2DD4BF] font-medium">ПРОГРЕСС: 82%</span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#2DD4BF] to-[#8AB4F8] w-[82%]" />
              </div>

              {/* Active Lesson Node */}
              <div className="p-3 rounded-lg bg-black/50 border border-white/[0.04] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#2DD4BF]/10 border border-[#2DD4BF]/25 flex items-center justify-center text-[#2DD4BF] font-mono text-sm font-semibold">
                    04
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-sans font-medium text-white">
                      Интерактивный граф знаний
                    </div>
                    <div className="text-[11px] font-sans text-white/50">
                      Интервальное повторение • 3.5 мин
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#2DD4BF]/15 text-[#2DD4BF] text-[11px] font-sans font-semibold flex-shrink-0">
                  +42% CVR
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 text-center font-sans pt-1">
                <div className="p-2.5 bg-black/40 rounded-lg">
                  <div className="text-sm text-white font-medium">18</div>
                  <div className="text-[10px] text-white/40 uppercase">CustDev</div>
                </div>
                <div className="p-2.5 bg-black/40 rounded-lg">
                  <div className="text-sm text-[#2DD4BF] font-medium">+42%</div>
                  <div className="text-[10px] text-white/40 uppercase">Скорость</div>
                </div>
                <div className="p-2.5 bg-black/40 rounded-lg">
                  <div className="text-sm text-white font-medium">74%</div>
                  <div className="text-[10px] text-white/40 uppercase">W1 Retention</div>
                </div>
              </div>
            </div>

            {/* Clean Tag Row */}
            <div className="flex items-center justify-between text-xs font-sans text-white/60 pt-0.5">
              <div className="flex items-center gap-2 text-white/60">
                <span className="text-white/80">Figma Tokens</span>
                <span>·</span>
                <span className="text-white/80">CJM</span>
                <span>·</span>
                <span className="text-white/80">Knowledge Graph</span>
                <span>·</span>
                <span className="text-[#2DD4BF] font-medium">Mobile UX</span>
              </div>
              <span className="text-white/40">EdTech MVP</span>
            </div>
          </div>

          {/* Bottom HUD */}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-sans text-white/40 relative z-10">
            <span>PUBLIC: DPROFILE /CASE/181859</span>
            <span>SPEC: SPACED REPETITION</span>
          </div>
        </div>
      );
    }

    if (project.id === 'community-design') {
      return (
        <div className="w-full h-full min-h-[320px] bg-[#07090E] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#8AB4F8]/[0.04] to-transparent pointer-events-none" />
          
          {/* Top HUD */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8AB4F8] shadow-[0_0_8px_#8AB4F8]" />
              <span className="font-sans text-xs text-white/70 uppercase tracking-wider">Design System Ops • 50+ Tokens</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#8AB4F8]/10 text-[#8AB4F8] text-xs font-sans font-medium">B2B SaaS</span>
          </div>

          {/* Central Metric Blueprint */}
          <div className="my-auto space-y-4 relative z-10">
            <div className="p-4 rounded-xl bg-white/[0.03] space-y-3">
              <div className="flex items-center justify-between text-xs font-sans text-white/50">
                <span>TASK VELOCITY OPTIMIZATION</span>
                <span className="text-[#8AB4F8] font-medium">5m → 1m (80% FASTER)</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center font-sans">
                <div className="p-3 bg-black/40 rounded-lg">
                  <div className="text-base text-white font-medium">-40%</div>
                  <div className="text-[10px] text-white/40 uppercase">Handoff Ops</div>
                </div>
                <div className="p-3 bg-black/40 rounded-lg">
                  <div className="text-base text-white font-medium">120+</div>
                  <div className="text-[10px] text-white/40 uppercase">Components</div>
                </div>
                <div className="p-3 bg-black/40 rounded-lg">
                  <div className="text-base text-white font-medium">+30%</div>
                  <div className="text-[10px] text-white/40 uppercase">Funnel CVR</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-2 font-sans text-xs text-white/60">
              <span>STARTUPS: KFBIO • FITVEND • STITCHLAB</span>
              <span className="text-white font-semibold">FIGMA TOKENS</span>
            </div>
          </div>

          {/* Bottom HUD */}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-sans text-white/40 relative z-10">
            <span>FRAMEWORK: COMPONENT ARCHITECTURE</span>
            <span>STATUS: SCALED</span>
          </div>
        </div>
      );
    }

    if (project.id === 'belosnezhka') {
      return (
        <div className="w-full h-full min-h-[320px] bg-[#0E0C0A] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Ambient Warm Amber Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#E5A65D]/[0.07] via-transparent to-black/60 pointer-events-none" />
          
          {/* Top Header: Brand & Live Status */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5A65D] shadow-[0_0_10px_#E5A65D] animate-pulse" />
              <div>
                <span className="font-sans text-xs text-white/90 font-medium uppercase tracking-wider">
                  Белоснежка • Октябрьский
                </span>
                <span className="hidden sm:inline text-[10px] font-sans text-[#E5A65D]/80 ml-2">
                  с 2003 года
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#E5A65D]/15 text-[#E5A65D] text-xs font-sans font-medium border border-[#E5A65D]/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A65D] animate-ping" />
                Live WIP
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white/70 text-xs font-sans font-medium">
                AI-Assisted Dev
              </span>
            </div>
          </div>

          {/* Central Interactive Gastronomy & Smart Cart UI */}
          <div className="my-auto space-y-3.5 relative z-10">
            {/* Category Navigation Bar */}
            <div className="flex items-center gap-1.5 text-xs font-sans overflow-x-auto pb-1 scrollbar-none">
              <span className="px-3 py-1 rounded-full bg-[#E5A65D] text-black font-semibold shadow-sm flex-shrink-0">
                Мангал и стейки
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.05] text-white/60 hover:text-white flex-shrink-0">
                ✦ Новинки
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.05] text-white/60 hover:text-white flex-shrink-0">
                Салаты
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.05] text-white/60 hover:text-white flex-shrink-0">
                Банкетные залы
              </span>
            </div>

            {/* Authentic Dish Card (From belosnezhka-cafe.ru) */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between gap-4 backdrop-blur-sm">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5A65D]/25 via-amber-900/30 to-black/60 border border-[#E5A65D]/30 flex items-center justify-center text-xl flex-shrink-0 shadow-inner">
                  🥩
                </div>
                <div>
                  <div className="text-sm font-sans font-medium text-white flex items-center gap-2">
                    <span>Шашлык свиной на мангале</span>
                    <span className="text-[10px] font-sans px-1.5 py-0.5 rounded bg-[#E5A65D]/20 text-[#E5A65D] border border-[#E5A65D]/30 font-semibold">
                      Хит
                    </span>
                  </div>
                  <div className="text-xs font-sans text-white/50 line-clamp-1 mt-0.5">
                    Сочное отборное мясо, маринованный лук, фирменный соус и лаваш • 100 г
                  </div>
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <div className="text-sm font-sans font-semibold text-[#E5A65D]">400 ₽</div>
                <div className="mt-1.5 px-3 py-1 rounded-lg bg-white text-black text-xs font-sans font-medium flex items-center gap-1 shadow-sm hover:bg-[#E5A65D] transition-colors">
                  <span>В корзину</span>
                  <span>+</span>
                </div>
              </div>
            </div>

            {/* Smart Cart Bar */}
            <div className="p-2.5 rounded-lg bg-[#E5A65D]/[0.08] border border-[#E5A65D]/20 flex items-center justify-between text-xs font-sans">
              <div className="flex items-center gap-2 text-white/80">
                <span className="w-2 h-2 rounded-full bg-[#E5A65D]" />
                <span className="font-medium text-[#E5A65D]">Умная корзина:</span>
                <span className="text-white/70">2 позиции (Шашлык + Салат)</span>
              </div>
              <span className="font-semibold text-white">750 ₽ → Заказ</span>
            </div>
          </div>

          {/* Bottom HUD */}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-sans text-white/40 relative z-10">
            <span className="text-white/60">FIGMA (MANUAL UX/UI) • AI-ASSISTED DEV</span>
            <span className="text-[#E5A65D]/80">BELOSNEZHKA-CAFE.RU</span>
          </div>
        </div>
      );
    }

    if (project.id === 'ez-marketplace') {
      return (
        <div className="w-full h-full min-h-[320px] bg-[#07090E] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#8AB4F8]/[0.04] to-transparent pointer-events-none" />
          
          {/* Top HUD */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8AB4F8] shadow-[0_0_8px_#8AB4F8]" />
              <span className="font-sans text-xs text-white/70 uppercase tracking-wider">UPROCK Gold Certificate • Case /876</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#8AB4F8]/10 text-[#8AB4F8] text-xs font-sans font-medium">Marketplace</span>
          </div>

          {/* Central Architecture Mockup */}
          <div className="my-auto space-y-4 relative z-10">
            <div className="p-4 rounded-xl bg-white/[0.03] space-y-3">
              <div className="flex items-center justify-between text-xs font-sans text-white/50">
                <span>CJM FLOW: SPECIALIST & CLIENT</span>
                <span className="text-[#8AB4F8] font-medium">20+ SCENARIOS</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-left font-sans text-xs text-white/75">
                <div className="p-2.5 rounded bg-black/40">
                  <div className="text-white font-medium">&lt; 2 min</div>
                  <div className="text-[10px] text-white/40 uppercase">Search to Order</div>
                </div>
                <div className="p-2.5 rounded bg-black/40">
                  <div className="text-white font-medium">Escrow 100%</div>
                  <div className="text-[10px] text-white/40 uppercase">Safe Transactions</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-2 font-sans text-xs text-white/60">
              <span>MODULAR CARD SYSTEM & PRICE CALCULATOR</span>
              <span className="text-white font-semibold">GOLD HONORS</span>
            </div>
          </div>

          {/* Bottom HUD */}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-sans text-white/40 relative z-10">
            <span>ACCREDITATION: UPROCK MOBILE PRO</span>
            <span>PUBLIC: DPROFILE /CASE/876</span>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full min-h-[320px] flex flex-col items-center justify-center gap-3 bg-[#07090E] rounded-2xl text-center p-8">
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shadow-[0_0_15px_rgba(138,180,248,0.2)]">
          <ImageIcon className="w-6 h-6 text-[#8AB4F8]" />
        </div>
        <div className="font-display font-medium text-base text-white">
          {project.title}
        </div>
        <div className="text-sm text-slate-400 max-w-xs font-sans">
          {project.metrics}
        </div>
      </div>
    );
  }

  const current = media[Math.min(active, media.length - 1)];

  return (
    <div className="w-full h-full min-h-[320px] relative bg-zinc-950 rounded-2xl overflow-hidden flex items-center justify-center">
      {current.type === 'iframe' && (
        <iframe
          key={current.src}
          src={current.src}
          title={current.title ?? project.title}
          className="w-full h-full border-0"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
          allowFullScreen
        />
      )}

      {current.type === 'video' && (
        <video
          key={current.src}
          src={current.src}
          poster={current.poster}
          controls
          playsInline
          className="w-full h-full object-contain bg-zinc-950"
        />
      )}

      {current.type === 'image' && (
        <img
          key={current.src}
          src={current.src}
          alt={current.title ?? `Превью проекта ${project.title}`}
          className="w-full h-full object-contain bg-zinc-950"
        />
      )}

      {media.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur rounded-full">
          {media.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Показать превью ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === active ? 'bg-white w-5' : 'bg-white/40 w-2'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
