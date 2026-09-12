import React, { useState, useEffect } from 'react';
import { ProjectCase } from '../types.ts';
import { PROJECTS } from '../data.ts';
import {
  ArrowLeft,
  ArrowUpRight,
  Share2,
  Check,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Smartphone,
  Layers,
  Zap,
  Target,
  BookOpen,
  Clock,
  ShieldCheck,
  Award,
  Eye,
  Sliders,
  Compass,
  Play,
  Image as ImageIcon,
  ExternalLink
} from 'lucide-react';

interface LibriumCaseStudyProps {
  project: ProjectCase;
  onBack: () => void;
  onSelectProject: (p: ProjectCase) => void;
}

interface MediaBlockProps {
  sectionNumber: string;
  eyebrow: string;
  title: string;
  aspectClass: string;
  kinescopeEmbedUrl: string;
  kinescopeDirectUrl: string;
  screensSrc: string;
  screensAlt: string;
  caption: string;
  secondaryImage?: string;
  secondaryTitle?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const InteractiveMediaBlock: React.FC<MediaBlockProps> = ({
  sectionNumber,
  eyebrow,
  title,
  aspectClass,
  kinescopeEmbedUrl,
  kinescopeDirectUrl,
  screensSrc,
  screensAlt,
  caption,
  secondaryImage,
  secondaryTitle,
  icon: Icon
}) => {
  const [activeTab, setActiveTab] = useState<'screens' | 'video'>('screens');
  const [activeScreenView, setActiveScreenView] = useState<'primary' | 'secondary'>('primary');

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8AB4F8] font-medium mb-3">
            <Icon className="w-4 h-4" />
            {sectionNumber} / {eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-light text-white tracking-tight eclipse-glow">
            {title}
          </h2>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-white/[0.04] p-1.5 rounded-full border-0 self-start sm:self-auto backdrop-blur-md">
          <button
            onClick={() => setActiveTab('screens')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'screens'
                ? 'bg-white text-black font-medium shadow-sm'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Экраны UI (HD)</span>
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'video'
                ? 'bg-white text-black font-medium shadow-sm'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current text-[#8AB4F8]" />
            <span>Kinescope Видео</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-[1440px] mx-auto rounded-2xl overflow-hidden bento-card p-3 sm:p-5 bg-[#0e1118] border-0">
        {activeTab === 'screens' ? (
          <div className="relative group overflow-hidden rounded-xl bg-black/50">
            {/* Sub-switcher for alternative screen if available */}
            {secondaryImage && (
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/70 backdrop-blur-md p-1 rounded-full border-0 shadow-lg">
                <button
                  onClick={() => setActiveScreenView('primary')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeScreenView === 'primary' ? 'bg-white/20 text-white font-medium' : 'text-white/60 hover:text-white'
                  }`}
                >
                  Обзор экранов
                </button>
                <button
                  onClick={() => setActiveScreenView('secondary')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeScreenView === 'secondary' ? 'bg-white/20 text-white font-medium' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {secondaryTitle || 'Детали флоу'}
                </button>
              </div>
            )}

            <div className={`w-full ${aspectClass} overflow-hidden flex items-center justify-center bg-[#07090e]`}>
              <img
                src={activeScreenView === 'primary' ? screensSrc : (secondaryImage || screensSrc)}
                alt={screensAlt}
                className="w-full h-full object-contain rounded-xl transition-transform duration-700 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* Floating Action Button to switch to Video */}
            <div className="absolute bottom-4 right-4 z-20">
              <button
                onClick={() => setActiveTab('video')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/80 hover:bg-black text-white text-xs sm:text-sm font-medium border-0 shadow-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#8AB4F8]" />
                <span>Запустить Kinescope плеер</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className={`w-full ${aspectClass} rounded-xl overflow-hidden bg-[#0a0c12] relative`}>
              <iframe
                src={kinescopeEmbedUrl}
                title={title}
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
                frameBorder="0"
                allowFullScreen
                referrerPolicy="no-referrer"
                style={{ backgroundColor: '#0a0c12', colorScheme: 'dark' }}
                className="w-full h-full rounded-xl bg-[#0a0c12]"
              />
            </div>

            {/* Direct Link and AdBlock Helper */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border-0 text-xs sm:text-sm text-neutral-400 font-sans">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Если видео блокируется расширением браузера (AdBlock / Brave / VPN):</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab('screens')}
                  className="text-white hover:text-[#8AB4F8] transition-colors underline font-medium"
                >
                  Показать экраны HD
                </button>
                <span className="text-white/20">•</span>
                <a
                  href={kinescopeDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8AB4F8] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>Открыть в Kinescope</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Player Caption */}
      <p className="text-sm sm:text-base text-white/60 text-center max-w-3xl mx-auto font-sans leading-relaxed">
        {caption}
      </p>
    </section>
  );
};

export const LibriumCaseStudy: React.FC<LibriumCaseStudyProps> = ({
  project,
  onBack,
  onSelectProject
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Find next project in list for footer navigation
  const currentIndex = PROJECTS.findIndex(p => p.id === 'librium');
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F8FAFC] pb-24 font-sans animate-in fade-in duration-300">
      
      {/* Sticky Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#08090C]/85 backdrop-blur-xl">
        <div className="max-w-[1680px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-white/80 hover:text-white font-medium text-xs sm:text-sm transition-all shadow-none"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Все проекты</span>
            </button>

            <div className="hidden md:flex items-center gap-2.5 text-xs text-white/50">
              <span>Портфолио</span>
              <span className="opacity-30">/</span>
              <span>EdTech</span>
              <span className="opacity-30">/</span>
              <span className="text-white font-medium">Librium Mobile</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.behance.net/gallery/247098601/LIBRIUM-a-mobile-application-for-education"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0e1118] text-neutral-300 hover:text-white text-xs sm:text-sm font-medium border-0 hover:shadow-[0_0_20px_rgba(138,180,248,0.25)] hover:bg-[#141824] transition-all active:scale-95"
            >
              <span>Кейс на Behance ↗</span>
            </a>

            <button
              type="button"
              onClick={handleCopyLink}
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white/70 hover:text-white transition-colors"
              title="Скопировать ссылку на страницу"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#8AB4F8]" /> : <Share2 className="w-4 h-4" />}
            </button>

            <a
              href="https://t.me/vaivin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-white/90 font-medium text-xs sm:text-sm transition-all flex items-center gap-1.5 active:scale-95 shadow-sm"
            >
              <span>Обсудить кейс</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </header>

      {/* Main Longread Container (max-w-[1680px] mx-auto px-6 md:px-12) */}
      <main className="max-w-[1680px] mx-auto px-6 md:px-12 pt-8 sm:pt-14 space-y-20 sm:space-y-28">

        {/* ========================================================================= */}
        {/* РАЗДЕЛ 1: Hero кейса и контекст продукта                                 */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          
          {/* Eyebrow & Platform Tags */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] text-[#8AB4F8] text-xs font-medium uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              01 / EdTech Product Case Study
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs sm:text-sm font-medium text-white/60">Community Design</span>
            <span className="text-white/20">•</span>
            <span className="text-xs sm:text-sm text-[#8AB4F8] font-medium">Релиз MVP</span>
            <span className="text-white/20">•</span>
            <a
              href="https://www.behance.net/gallery/247098601/LIBRIUM-a-mobile-application-for-education"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e1118] text-neutral-300 hover:text-white text-xs font-medium border-0 hover:shadow-[0_0_15px_rgba(138,180,248,0.25)] hover:bg-[#141824] transition-all"
            >
              <span>Кейс на Behance ↗</span>
            </a>
          </div>

          {/* Large H1 Heading (Zero trailing dot) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-white tracking-tight leading-[1.08] max-w-5xl eclipse-glow">
            Librium — Мобильная платформа для адаптивного обучения
          </h1>

          {/* Clean Metadata Line (Strictly zero borders, pure Swiss layout) */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm sm:text-base text-white/60 font-sans pt-2">
            <span>Роль: <strong className="text-white font-medium">Product UX/UI Designer (Solo)</strong></span>
            <span className="text-white/20">•</span>
            <span>Длительность: <strong className="text-white font-medium">6 месяцев</strong></span>
            <span className="text-white/20">•</span>
            <span>Тип: <strong className="text-white font-medium">EdTech Startup</strong></span>
            <span className="text-white/20">•</span>
            <span>Платформа: <strong className="text-white font-medium">iOS / Android</strong></span>
          </div>

          {/* Problem & Task Bento Card */}
          <div className="bento-card p-8 sm:p-12 mt-6">
            <div className="max-w-4xl space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#8AB4F8] font-medium">
                Проблема рынка и задача
              </span>
              <p className="text-lg sm:text-2xl text-white/90 font-light leading-relaxed font-display">
                Традиционные образовательные платформы страдают от потери фокуса пользователя и низкой доходимости курсов. Задачей было с нуля за 6 месяцев спроектировать мобильный опыт, который снижает когнитивную нагрузку и удерживает интерес студента через порционное микрообучение и систему трекинга прогресса
              </p>
              
              <div className="pt-4 flex flex-wrap gap-2.5">
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] text-xs font-medium text-white/70">
                  Цикл 6 месяцев
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] text-xs font-medium text-white/70">
                  End-to-End проектирование
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] text-xs font-medium text-white/70">
                  Снижение когнитивной нагрузки
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] text-xs font-medium text-white/70">
                  W1 Retention Focus
                </span>
              </div>
            </div>
          </div>

        </section>


        {/* ========================================================================= */}
        {/* РАЗДЕЛ 2: Исследования и архитектура решений (Связка: от проблемы к логике) */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8AB4F8] font-medium mb-3">
              <Compass className="w-4 h-4" />
              02 / Research & Solution Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-light text-white tracking-tight eclipse-glow">
              От проблемы к архитектуре решений
            </h2>
          </div>

          {/* Narrative Text Bridge */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] bento-card">
            <p className="text-lg sm:text-xl text-neutral-300 font-light italic leading-relaxed">
              «Чтобы обучение не воспринималось как рутина, мы переосмыслили путь студента от первого входа до закрытия модулей»
            </p>
          </div>

          {/* 3 Hypotheses & UX Architecture Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bento-card p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center text-[#8AB4F8]">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium text-white">
                  Декомпозиция сложных тем на 5-минутные интерактивные спринты
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  Дробление объемных 40-минутных лекций на атомарные смысловые кванты снижает порог входа и устраняет ментальное сопротивление перед началом сессии.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] text-xs font-medium text-[#8AB4F8]">
                Кванты по 3–5 минут вместо лонгридов
              </div>
            </div>

            <div className="bento-card p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center text-[#8AB4F8]">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium text-white">
                  Интуитивная визуализация прогресса вместо скучных списков
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  Замена линейных чекбоксов на интерактивный граф связей понятий дает студенту осязаемое чувство роста и открывает новые ветки навыков.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] text-xs font-medium text-[#8AB4F8]">
                Граф взаимосвязей и динамика навыков
              </div>
            </div>

            <div className="bento-card p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center text-[#8AB4F8]">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium text-white">
                  Бесшовный онбординг с моментальной персонализацией программы
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  Быстрый интерактивный экспресс-квиз из трех вопросов без обязательной регистрации сразу генерирует индивидуальный трек обучения.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] text-xs font-medium text-[#8AB4F8]">
                3 шага до первого урока без трения
              </div>
            </div>

          </div>

        </section>


        {/* ========================================================================= */}
        {/* РАЗДЕЛ 3: Первый интерактивный блок (Кинетика онбординга и экраны UI)     */}
        {/* ========================================================================= */}
        <InteractiveMediaBlock
          sectionNumber="03"
          eyebrow="Onboarding Kinetics & Motion"
          title="Кинетика онбординга и первый вход"
          aspectClass="aspect-[4/3]"
          kinescopeEmbedUrl="https://kinescope.io/embed/9jk7w45u4Hp7dEFqFRrKsc"
          kinescopeDirectUrl="https://kinescope.io/9jk7w45u4Hp7dEFqFRrKsc"
          screensSrc="/projects/librium/screens_overview.png"
          screensAlt="Ключевые экраны мобильного приложения Librium в разрешении 4:3"
          secondaryImage="/projects/librium/onboarding_flow.png"
          secondaryTitle="Флоу онбординга"
          caption="Кинетика интерфейса и адаптивный флоу первого входа — сокращение времени настройки профиля и мгновенный фокус на первом уроке"
          icon={Smartphone}
        />


        {/* ========================================================================= */}
        {/* РАЗДЕЛ 4: Проектирование ключевых сценариев (Core Learning Experience)    */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8AB4F8] font-medium mb-3">
              <BookOpen className="w-4 h-4" />
              04 / Core Learning Experience
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-light text-white tracking-tight eclipse-glow">
              Проектирование ключевых сценариев
            </h2>
          </div>

          {/* Narrative Text Bridge */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] bento-card">
            <p className="text-lg sm:text-xl text-neutral-300 font-light italic leading-relaxed">
              «После оптимизации входа фокус сместился на экраны самого учебного процесса»
            </p>
          </div>

          {/* 3 Core Scenario Detail Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bento-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center text-[#8AB4F8]">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-medium text-white">
                Карточки уроков с динамическими состояниями
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Интуитивная система трех статусов: <span className="text-white font-medium">активно</span> (световой контур), <span className="text-white font-medium">пройдено</span> (мягкая отметка) и <span className="text-white font-medium">закрыто</span> (деликатная блокировка). Пользователь всегда понимает следующий шаг без изучения инструкций.
              </p>
            </div>

            <div className="bento-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center text-[#8AB4F8]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-medium text-white">
                Фокус-режим чтения
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Скрытие второстепенного визуального шума, таб-бара и назойливых уведомлений во время выполнения практических тестов и тестов на закрепление понятий. В поле зрения только контекст задачи.
              </p>
            </div>

            <div className="bento-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center text-[#8AB4F8]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-medium text-white">
                Система мгновенного фидбека
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Тактильные микроанимации и визуальные подсказки при ошибках без чувства наказания. Пользователь получает моментальное объяснение сути правила и возможность сразу повторить попытку.
              </p>
            </div>

          </div>

        </section>


        {/* ========================================================================= */}
        {/* РАЗДЕЛ 5: Второй интерактивный блок (Интерактивная механика модулей)      */}
        {/* ========================================================================= */}
        <InteractiveMediaBlock
          sectionNumber="05"
          eyebrow="Interactive Mechanics & Dynamic Testing"
          title="Интерактивная механика модулей"
          aspectClass="aspect-[1920/1518]"
          kinescopeEmbedUrl="https://kinescope.io/embed/kycri4X5eue7h57S6e146s"
          kinescopeDirectUrl="https://kinescope.io/kycri4X5eue7h57S6e146s"
          screensSrc="/projects/librium/video2_poster.jpg"
          screensAlt="Экраны интерактивных механик и тестирования в темной и светлой темах"
          secondaryImage="/projects/librium/learning_scenarios.png"
          secondaryTitle="Механика фидбека"
          caption="Интерактивный цикл прохождения модулей и интерфейс проверки знаний в динамике"
          icon={Layers}
        />


        {/* ========================================================================= */}
        {/* РАЗДЕЛ 6: Дизайн-система и масштабируемость (Связка: от фич к системе)   */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8AB4F8] font-medium mb-3">
              <ShieldCheck className="w-4 h-4" />
              06 / Scalable Design Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-light text-white tracking-tight eclipse-glow">
              Дизайн-система и масштабируемость
            </h2>
          </div>

          {/* Narrative Text Bridge */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] bento-card">
            <p className="text-lg sm:text-xl text-neutral-300 font-light italic leading-relaxed">
              «6-месячный цикл потребовал создания устойчивой дизайн-системы для быстрой передачи в разработку»
            </p>
          </div>

          {/* 3 Architecture Specifications Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bento-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center text-[#8AB4F8]">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-medium text-white">
                Единая сетка и система отступов под iOS HIG
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                8pt модульная система, соблюдение зон безопасности (Safe Area) для актуальных моделей iPhone и Android, поддержка Dynamic Island и жестовой навигации.
              </p>
            </div>

            <div className="bento-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center text-[#8AB4F8]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-medium text-white">
                Токенизированная палитра и библиотека состояний
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Семантические токены для темной темы, типографическая шкала и библиотека переиспользуемых состояний инпутов, карточек, прогресс-баров и модальных окон.
              </p>
            </div>

            <div className="bento-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center text-[#8AB4F8]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-medium text-white">
                Оптимизированный хэндофф для инженеров
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Полная спецификация состояний компонентов (Default, Active, Error, Disabled), физика пружинных кривых переходов, интерактивные прототипы и handoff-спецификации для мобильной разработки.
              </p>
            </div>

          </div>

          {/* Real UI & Design System Components Showcase */}
          <div className="bento-card p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8AB4F8] font-medium">
                  UI Guidelines & Component Hierarchy
                </span>
                <h4 className="text-xl sm:text-2xl font-display font-light text-white pt-1">
                  Справочник, каталог тем и визуализация прогресса
                </h4>
              </div>
              <span className="text-xs text-neutral-400 font-sans">
                iOS HIG • 8pt Grid • Typography & Components
              </span>
            </div>

            <div className="rounded-xl overflow-hidden bg-[#07090e] border-0 p-2 sm:p-4">
              <img
                src="/projects/librium/design_system_preview.png"
                alt="Дизайн-система и компоненты приложения Librium"
                className="w-full h-auto object-contain rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

        </section>


        {/* ========================================================================= */}
        {/* РАЗДЕЛ 7: Итоги и влияние на продукт                                     */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8AB4F8] font-medium mb-3">
              <CheckCircle2 className="w-4 h-4" />
              07 / Impact & Public Release
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-light text-white tracking-tight eclipse-glow">
              Итоги и влияние на продукт
            </h2>
          </div>

          {/* Compact Outcomes Bento Block */}
          <div className="bento-card p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
                  Готовый к масштабированию MVP за 6 месяцев
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
                  За 6 месяцев стартап получил целостный MVP и масштабируемую базу, готовую к запуску на тестах с реальными пользователями. Продуманный путь онбординга и адаптивный микроформат уроков позволили сократить отток на этапе знакомства и подготовить фундамент для стабильного удержания аудитории.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.behance.net/gallery/247098601/LIBRIUM-a-mobile-application-for-education"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#0e1118] text-neutral-300 hover:text-white font-medium text-sm sm:text-base border-0 hover:shadow-[0_0_25px_rgba(138,180,248,0.25)] hover:bg-[#141824] transition-all active:scale-95"
                  >
                    <span>Кейс на Behance ↗</span>
                  </a>

                  <a
                    href="https://dprofile.ru/case/181859/librium-mobilnoe-prilozenie-dlia-obuceniia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-white text-black font-medium text-sm sm:text-base hover:bg-white/90 transition-all active:scale-95 shadow-sm"
                  >
                    <span>Кейс на Dprofile</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <span className="text-xs text-white/40 font-sans">
                  Официальные публикации • Behance & Dprofile /case/181859
                </span>
              </div>

            </div>
          </div>

        </section>


        {/* ========================================================================= */}
        {/* FOOTER SWITCHER: Переход к следующему кейсу                               */}
        {/* ========================================================================= */}
        <section className="pt-12 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-medium text-white/40 tracking-wider">
              Следующая работа
            </span>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="text-left group block mt-1"
            >
              <div className="text-xl sm:text-2xl font-display font-medium text-white group-hover:text-[#8AB4F8] transition-colors flex items-center gap-2">
                <span>{nextProject.title.split('//')[0].trim()}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white/40" />
              </div>
              <div className="text-xs sm:text-sm text-white/50 mt-0.5">
                {nextProject.originLabel}
              </div>
            </button>
          </div>

          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Вернуться ко всем проектам</span>
          </button>
        </section>

      </main>

    </div>
  );
};
