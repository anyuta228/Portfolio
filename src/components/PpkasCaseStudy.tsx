import React, { useEffect } from 'react';
import { ProjectCase } from '../types.ts';
import { 
  ArrowLeft, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  Gamepad2, 
  Wallet, 
  Repeat
} from 'lucide-react';

interface PpkasCaseStudyProps {
  project: ProjectCase;
  onBack: () => void;
}

export const PpkasCaseStudy: React.FC<PpkasCaseStudyProps> = ({
  project,
  onBack
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F8FAFC] selection:bg-[#8AB4F8] selection:text-[#08090C] relative font-sans">
      
      {/* Top Floating Bar: Single Clean Back Button */}
      <header className="sticky top-0 z-40 bg-[#08090C]/90 backdrop-blur-md border-b border-white/[0.06] transition-all">
        <div className="max-w-[1680px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs sm:text-sm font-sans font-medium transition-all active:scale-95 border-0"
          >
            <ArrowLeft className="w-4 h-4 text-[#8AB4F8]" />
            <span>Назад к проектам</span>
          </button>

          <div className="hidden sm:flex items-center gap-3 text-xs text-white/50 font-sans tracking-wide">
            <span>PPKAS</span>
            <span className="text-white/20">•</span>
            <span>Kaspa Web3 Ecosystem</span>
          </div>
        </div>
      </header>

      {/* Main Structured Longread */}
      <main className="max-w-[1680px] mx-auto px-6 md:px-12 pt-10 sm:pt-16 pb-28 space-y-20 sm:space-y-28">

        {/* ========================================================================= */}
        {/* БЛОК 1: Hero и метаданные                                                */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          
          {/* Eyebrow & Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] text-[#8AB4F8] text-xs font-sans font-medium uppercase tracking-wider">
              <Gamepad2 className="w-3.5 h-3.5" />
              Web3 & GameFi Case Study
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs sm:text-sm font-sans font-medium text-white/60">Kaspa Network</span>
            <span className="text-white/20">•</span>
            <span className="text-xs sm:text-sm font-sans text-[#8AB4F8] font-medium">Production Release</span>
          </div>

          {/* Heading H1 (No trailing dot) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-white tracking-tight leading-[1.08] max-w-5xl eclipse-glow">
            PPKAS — Архитектура онбординга и финансовых циклов в Web3 P2E экосистеме
          </h1>

          {/* Role & Context Row */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm sm:text-base text-white/70 font-sans pt-1">
            <div>
              <span className="text-white/40">Роль: </span>
              <strong className="text-white font-medium">Middle+ Product Designer</strong>{' '}
              <span className="text-white/60">(в сотрудничестве с DevSecOps, PM и Core инженерами)</span>
            </div>
          </div>

          {/* Tags Line */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {[
              'Web3',
              'Kaspa Blockchain',
              'P2E Gaming',
              'UX Audit',
              'FinTech Mechanics'
            ].map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] text-xs sm:text-sm font-sans text-neutral-300 font-normal"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Intro Essence Box */}
          <div
            onMouseMove={handleMouseMove}
            className="bento-card p-8 sm:p-10 bg-[#0e1118] border-0"
          >
            <div className="max-w-4xl space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#8AB4F8] font-sans font-medium">
                Вводная суть
              </span>
              <p className="text-lg sm:text-2xl text-white/90 font-light leading-relaxed font-display">
                Проектирование сквозного пути игрока в экосистеме Kaspa: от первого клика до взаимодействия с токенами и участия в игровых циклах
              </p>
            </div>
          </div>

          {/* Cover Visual Preview Container */}
          <div className="w-full rounded-2xl overflow-hidden bento-card bg-[#0e1118] border-0 p-3 sm:p-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black/60">
              <img
                src={project.coverImage}
                alt="PPKAS Web3 P2E Ecosystem"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-sans text-white/80">
                <span className="font-medium">Интерфейс P2E-экосистемы PPKAS на блокчейне Kaspa</span>
                <span className="text-white/50">Архитектура онбординга & некастодиальный кошелек</span>
              </div>
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* БЛОК 2: Твердые продуктовые метрики (Метрическая плашка)                 */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8AB4F8] font-sans font-medium mb-3">
                <TrendingUp className="w-4 h-4" />
                Твердые продуктовые метрики
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-light text-white tracking-tight eclipse-glow">
                Результаты UX-аудита и оптимизации воронок
              </h2>
            </div>
          </div>

          {/* 3 Metric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Metric 1 */}
            <div
              onMouseMove={handleMouseMove}
              className="bento-card p-8 sm:p-10 bg-[#0e1118] border-0 flex flex-col justify-between"
            >
              <div>
                <div className="text-5xl sm:text-6xl font-display font-light text-[#8AB4F8] tracking-tight mb-4 drop-shadow-[0_0_24px_rgba(138,180,248,0.25)]">
                  +22%
                </div>
                <div className="text-lg sm:text-xl font-display font-medium text-white mb-2">
                  Day 1 Retention
                </div>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed pt-4 border-t border-white/[0.06]">
                За счет внедрения поэтапного онбординга и мгновенного доступа к игре
              </p>
            </div>

            {/* Metric 2 */}
            <div
              onMouseMove={handleMouseMove}
              className="bento-card p-8 sm:p-10 bg-[#0e1118] border-0 flex flex-col justify-between"
            >
              <div>
                <div className="text-5xl sm:text-6xl font-display font-light text-[#8AB4F8] tracking-tight mb-4 drop-shadow-[0_0_24px_rgba(138,180,248,0.25)]">
                  89%
                </div>
                <div className="text-lg sm:text-xl font-display font-medium text-white mb-2">
                  Wallet Conversion
                </div>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed pt-4 border-t border-white/[0.06]">
                Показатель успешного создания кошельков благодаря упрощению процессов настройки и минтинга
              </p>
            </div>

            {/* Metric 3 */}
            <div
              onMouseMove={handleMouseMove}
              className="bento-card p-8 sm:p-10 bg-[#0e1118] border-0 flex flex-col justify-between"
            >
              <div>
                <div className="text-5xl sm:text-6xl font-display font-light text-[#8AB4F8] tracking-tight mb-4 drop-shadow-[0_0_24px_rgba(138,180,248,0.25)]">
                  +20%
                </div>
                <div className="text-lg sm:text-xl font-display font-medium text-white mb-2">
                  Registration Velocity
                </div>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed pt-4 border-t border-white/[0.06]">
                Ускорение адаптации после устранения барьеров по итогам UX-аудита
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* БЛОК 3: Выявленные проблемы и UX-аудит (Problem Framing)                  */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8AB4F8] font-sans font-medium mb-3">
              <AlertCircle className="w-4 h-4" />
              Аудит барьеров
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-light text-white tracking-tight eclipse-glow">
              Выявленные проблемы и UX-аудит (Problem Framing)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Problem 1 */}
            <div
              onMouseMove={handleMouseMove}
              className="bento-card p-8 bg-[#0e1118] border-0 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-sans font-medium uppercase tracking-wider text-red-400/80 mb-3">
                  Фрикция // 01
                </div>
                <h3 className="text-lg sm:text-xl font-display font-medium text-white mb-3">
                  Высокий барьер входа в блокчейн-игры
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                  Пользователи отваливались на сложных этапах работы с некастодиальными кошельками
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-white/50 font-sans">
                До 60% оттока на стадии сид-фразы
              </div>
            </div>

            {/* Problem 2 */}
            <div
              onMouseMove={handleMouseMove}
              className="bento-card p-8 bg-[#0e1118] border-0 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-sans font-medium uppercase tracking-wider text-red-400/80 mb-3">
                  Фрикция // 02
                </div>
                <h3 className="text-lg sm:text-xl font-display font-medium text-white mb-3">
                  Когнитивный перегруз
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                  Смешение сложной крипто-терминологии с базовыми игровыми механиками
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-white/50 font-sans">
                Усталость от валидаций и параметров сети
              </div>
            </div>

            {/* Problem 3 */}
            <div
              onMouseMove={handleMouseMove}
              className="bento-card p-8 bg-[#0e1118] border-0 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-sans font-medium uppercase tracking-wider text-red-400/80 mb-3">
                  Фрикция // 03
                </div>
                <h3 className="text-lg sm:text-xl font-display font-medium text-white mb-3">
                  Разрыв игрового цикла
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                  Задержки в подтверждении транзакций ломали динамику геймплея
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-white/50 font-sans">
                Потеря вовлеченности в игровом процессе
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* БЛОК 4: Архитектура решений (Key Design Interventions)                    */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8AB4F8] font-sans font-medium mb-3">
              <Zap className="w-4 h-4" />
              Инженерный подход к UX
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-light text-white tracking-tight eclipse-glow">
              Архитектура решений (Key Design Interventions)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Intervention 1 */}
            <div
              onMouseMove={handleMouseMove}
              className="bento-card p-8 bg-[#0e1118] border-0 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] text-xs font-sans font-medium text-[#8AB4F8] mb-4">
                  <Repeat className="w-3.5 h-3.5" />
                  <span>STEP 01 // Progressive Flow</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-white mb-3">
                  Progressive Onboarding
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                  Разделение знакомства с игрой и создания кошелька. Игрок получает ценность сразу, а финансовая часть подключается органично
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-[#8AB4F8] font-sans">
                <CheckCircle2 className="w-4 h-4" />
                <span>Мгновенный вход в геймплей без сид-фразы</span>
              </div>
            </div>

            {/* Intervention 2 */}
            <div
              onMouseMove={handleMouseMove}
              className="bento-card p-8 bg-[#0e1118] border-0 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] text-xs font-sans font-medium text-[#8AB4F8] mb-4">
                  <Wallet className="w-3.5 h-3.5" />
                  <span>STEP 02 // Seamless Setup</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-white mb-3">
                  Оптимизация настройки кошелька
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                  Переработка шагов сид-фраз, статусов сети Kaspa и подписи транзакций в интуитивный пошаговый диалог
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-[#8AB4F8] font-sans">
                <CheckCircle2 className="w-4 h-4" />
                <span>Конверсия создания кошелька: 89%</span>
              </div>
            </div>

            {/* Intervention 3 */}
            <div
              onMouseMove={handleMouseMove}
              className="bento-card p-8 bg-[#0e1118] border-0 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] text-xs font-sans font-medium text-[#8AB4F8] mb-4">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>STEP 03 // Core Ecosystem</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-white mb-3">
                  Проектирование игровых и финансовых циклов
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                  Создание консистентных сценариев взаимодействия с игровыми активами совместно с командами безопасности и разработки
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-[#8AB4F8] font-sans">
                <CheckCircle2 className="w-4 h-4" />
                <span>Синхронизация с DevSecOps и Core Team</span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* БЛОК 5: Инженерный и продуктовый стек проекта                            */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8AB4F8] font-sans font-medium mb-3">
              <Cpu className="w-4 h-4" />
              Инструменты и компетенции
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-light text-white tracking-tight eclipse-glow">
              Инженерный и продуктовый стек проекта
            </h2>
          </div>

          <div
            onMouseMove={handleMouseMove}
            className="bento-card p-8 sm:p-10 bg-[#0e1118] border-0"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  title: 'Figma',
                  desc: 'Компонентная база, вариативные токены и интерактивные прототипы'
                },
                {
                  title: 'Design Systems',
                  desc: 'Сквозные дизайн-системы для мобильных и десктоп клиентов экосистемы'
                },
                {
                  title: 'DevSecOps Alignment',
                  desc: 'Спецификации безопасности, анти-фрод проверки и защита транзакций'
                },
                {
                  title: 'Kaspa Network',
                  desc: 'Блокчейн-инфраструктура, быстрые блоки и оптимизация комиссий'
                },
                {
                  title: 'CJM & Usability Audits',
                  desc: 'Аудит пользовательского пути, устранение узких мест и конверсионные воронки'
                }
              ].map((stackItem, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors flex flex-col justify-between"
                >
                  <div className="text-base font-display font-medium text-white mb-2">
                    {stackItem.title}
                  </div>
                  <div className="text-xs text-neutral-400 leading-relaxed font-sans">
                    {stackItem.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* Нижний возврат к проектам (лаконично, без дублирующих кнопок)             */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-sans font-medium hover:bg-white/90 transition-all active:scale-95 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Назад к проектам</span>
          </button>

          <p className="text-xs sm:text-sm text-white/40 font-sans">
            PPKAS • Kaspa Network • Анна Агабекян (атома)
          </p>
        </section>

      </main>
    </div>
  );
};
