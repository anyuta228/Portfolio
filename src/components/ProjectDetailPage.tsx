import React, { useState, useEffect } from 'react';
import { ProjectCase } from '../types.ts';
import { PROJECTS, PERSONAL_RESUME } from '../data.ts';
import { ProjectPreview } from './ProjectPreview.tsx';
import { LibriumCaseStudy } from './LibriumCaseStudy.tsx';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Share2, 
  Video, 
  CheckCircle2, 
  Layers, 
  Users, 
  ChevronRight,
  Link as LinkIcon,
  Check
} from 'lucide-react';

interface ProjectDetailPageProps {
  project: ProjectCase;
  onBack: () => void;
  onSelectProject: (p: ProjectCase) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBack,
  onSelectProject
}) => {
  // Dedicated cohesive longread for Librium case study
  if (project.id === 'librium') {
    return (
      <LibriumCaseStudy
        project={project}
        onBack={onBack}
        onSelectProject={onSelectProject}
      />
    );
  }

  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [customVideoUrl, setCustomVideoUrl] = useState(project.videoUrl || '');
  const [isEditingVideoUrl, setIsEditingVideoUrl] = useState(false);
  const [tempVideoUrl, setTempVideoUrl] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  const stages = project.videoStages || [
    {
      step: '01',
      title: 'CustDev & Анализ болей',
      desc: 'Глубинные интервью с целевой аудиторией, выявление барьеров и составление CJM',
      duration: 'Недели 1–2'
    },
    {
      step: '02',
      title: 'Информационная архитектура',
      desc: 'Картирование пользовательских сценариев и связей модулей',
      duration: 'Недели 3–4'
    },
    {
      step: '03',
      title: 'Вайрфреймы и тест гипотез',
      desc: 'Low-Fi прототипирование и качественное тестирование на пользователях',
      duration: 'Недели 5–6'
    },
    {
      step: '04',
      title: 'Дизайн-система и токены',
      desc: 'Разработка библиотеки компонентов, типографики и цветовой палитры',
      duration: 'Недели 7–8'
    },
    {
      step: '05',
      title: 'Интерактивный прототип & Handoff',
      desc: 'Финальная сборка микроанимаций в Figma/Framer и передача спецификаций',
      duration: 'Релиз MVP'
    }
  ];

  // Find next project in list
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSaveVideoUrl = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomVideoUrl(tempVideoUrl);
    setIsEditingVideoUrl(false);
  };

  // Helper to determine video embed format
  const renderVideoPlayer = () => {
    if (customVideoUrl) {
      if (customVideoUrl.includes('youtube.com') || customVideoUrl.includes('youtu.be')) {
        let embedUrl = customVideoUrl;
        if (customVideoUrl.includes('watch?v=')) {
          embedUrl = customVideoUrl.replace('watch?v=', 'embed/');
        } else if (customVideoUrl.includes('youtu.be/')) {
          embedUrl = customVideoUrl.replace('youtu.be/', 'www.youtube.com/embed/');
        }
        return (
          <iframe
            src={embedUrl}
            title={project.title}
            className="w-full h-full rounded-2xl border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        );
      }
      if (customVideoUrl.includes('vimeo.com')) {
        const id = customVideoUrl.split('/').pop();
        return (
          <iframe
            src={`https://player.vimeo.com/video/${id}`}
            title={project.title}
            className="w-full h-full rounded-2xl border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        );
      }
      return (
        <video
          src={customVideoUrl}
          controls
          className="w-full h-full object-contain rounded-2xl"
        />
      );
    }

    // Default Interactive Prototype Simulation Canvas
    const activeStage = stages[activeStageIndex];
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden bg-[#0A0D14]">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative z-10 max-w-lg space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#8AB4F8] shadow-[0_0_25px_rgba(138,180,248,0.25)]">
            <Video className="w-8 h-8" />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#8AB4F8] text-xs font-sans mb-2">
              <span>СТАДИЯ {activeStage.step} // {activeStage.duration}</span>
            </div>
            <h3 className="font-display font-light text-2xl sm:text-3xl text-white">
              {activeStage.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
              {activeStage.desc}
            </p>
          </div>

          <div className="flex items-center justify-center gap-1.5 pt-2">
            {stages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStageIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  activeStageIndex === i ? 'w-8 bg-[#8AB4F8]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Ambient subtle backdrop */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(138,180,248,0.15),transparent_70%)]" />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F8FAFC] pb-24 animate-in fade-in duration-300">
      
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 bg-[#08090C]/85 backdrop-blur-xl">
        <div className="max-w-[1760px] mx-auto px-6 md:px-12 lg:px-20 h-18 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-all shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Все проекты</span>
            </button>

            <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 font-sans">
              <span>Портфолио</span>
              <span className="opacity-30">/</span>
              <span>{project.originLabel}</span>
              <span className="opacity-30">/</span>
              <span className="font-medium text-white truncate max-w-[200px]">{project.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyLink}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Скопировать ссылку на страницу"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#8AB4F8]" /> : <Share2 className="w-4 h-4" />}
            </button>

            <a
              href="https://t.me/vaivin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white text-[#08090C] hover:bg-[#D1E1FF] hover:shadow-[0_0_20px_-5px_rgba(138,180,248,0.6)] font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>Обсудить кейс</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </header>

      {/* Main Page Container */}
      <main className="max-w-[1760px] mx-auto px-6 md:px-12 lg:px-20 pt-10 sm:pt-14 space-y-14 sm:space-y-20">
        
        {/* Project Header Block */}
        <div className="border-b border-white/10 pb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4 font-sans">
            <span className="pill-badge">
              {project.originLabel}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs sm:text-sm font-medium text-slate-300">{project.company}</span>
            <span className="text-white/20">•</span>
            <span className="text-xs sm:text-sm text-slate-400">{project.period}</span>
            <span className="text-white/20">•</span>
            <span className="text-xs sm:text-sm text-[#8AB4F8] font-medium">{project.role}</span>
          </div>

          <h1 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 max-w-5xl eclipse-glow">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-4xl font-normal">
            {project.subtitle}
          </p>

          {/* Quick Metrics & Meta Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="p-6 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl">
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1 font-sans">
                Ключевой результат
              </div>
              <div className="font-display font-light text-2xl sm:text-3xl text-white drop-shadow-[0_2px_12px_rgba(138,180,248,0.3)]">
                {project.metrics}
              </div>
            </div>

            <div className="p-6 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl">
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1 font-sans">
                Фокус и статус
              </div>
              <div className="text-base sm:text-lg font-medium text-white mt-1 flex items-center gap-2">
                {project.isInProgress && (
                  <span className="w-2 h-2 rounded-full bg-[#8AB4F8] shadow-[0_0_8px_rgba(138,180,248,0.8)] animate-pulse" />
                )}
                <span>{project.isInProgress ? 'В активной разработке' : 'Реализован'}</span>
              </div>
              <div className="text-xs text-slate-400 mt-1 font-sans">
                {project.originLabel}
              </div>
            </div>

            <div className="p-6 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl">
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1 font-sans">
                Ключевые теги & инструменты
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.tags.slice(0, 5).map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs font-medium rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Prominent Live Site / External Banner if available */}
          {project.externalLinks?.liveSite && (
            <div className="mt-6 p-5 sm:p-6 bg-[#0E131F]/70 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8AB4F8] shadow-[0_0_10px_rgba(138,180,248,0.8)] animate-pulse flex-shrink-0" />
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-slate-400 font-sans">
                    Боевой сайт кафе «Белоснежка» (г. Октябрьский) • Live WIP
                  </div>
                  <div className="text-sm font-medium text-white font-sans mt-0.5">
                    {project.externalLinks.liveSite}
                  </div>
                </div>
              </div>
              <a
                href={project.externalLinks.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-[#08090C] hover:bg-[#D1E1FF] hover:shadow-[0_0_20px_-5px_rgba(138,180,248,0.6)] font-semibold text-xs sm:text-sm rounded-full transition-all shadow-sm"
              >
                <span>Перейти на сайт</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}

          {project.externalLinks?.dprofile && (
            <div className="mt-6 p-5 sm:p-6 bg-[#0E131F]/70 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8AB4F8] flex-shrink-0" />
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-slate-400 font-sans">
                    Официальный кейс опубликован на Dprofile
                  </div>
                  <div className="text-sm font-medium text-slate-300 font-sans mt-0.5">
                    {project.externalLinks.dprofile}
                  </div>
                </div>
              </div>
              <a
                href={project.externalLinks.dprofile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-full transition-all border border-white/10"
              >
                <span>Смотреть кейс на Dprofile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* SECTION 1: VIDEO SHOWCASE STAGE */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-[#8AB4F8] mb-1 flex items-center gap-2 font-sans">
                <Video className="w-4 h-4" />
                <span>Видеодемонстрация этапов разработки</span>
              </div>
              <h2 className="font-display font-light text-2xl sm:text-4xl text-white eclipse-glow">
                Интерактивный процесс создания приложения
              </h2>
            </div>

            {/* Video URL Controller */}
            <div className="flex items-center gap-2">
              {isEditingVideoUrl ? (
                <form onSubmit={handleSaveVideoUrl} className="flex items-center gap-2">
                  <input
                    type="url"
                    placeholder="Вставьте ссылку на MP4 / YouTube / Loom / Vimeo"
                    value={tempVideoUrl}
                    onChange={(e) => setTempVideoUrl(e.target.value)}
                    className="px-3.5 py-2 text-xs rounded-full border border-white/20 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-[#8AB4F8] w-64 sm:w-80"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white text-black rounded-full text-xs font-semibold hover:bg-slate-200"
                  >
                    Сохранить
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditingVideoUrl(false)}
                    className="px-3 py-2 text-slate-400 text-xs hover:text-white"
                  >
                    Отмена
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setTempVideoUrl(customVideoUrl);
                    setIsEditingVideoUrl(true);
                  }}
                  className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-medium flex items-center gap-2 transition-colors"
                >
                  <LinkIcon className="w-3.5 h-3.5 text-[#8AB4F8]" />
                  <span>{customVideoUrl ? 'Изменить ссылку на видео' : 'Вставить ссылку на видео'}</span>
                </button>
              )}
            </div>
          </div>

          {/* 16:9 Video Canvas Frame */}
          <div className="w-full aspect-video min-h-[380px] sm:min-h-[520px] bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            {renderVideoPlayer()}
          </div>

          {/* Stage Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
            {stages.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-4 rounded-2xl text-left transition-all border ${
                    isActive
                      ? 'bg-white/[0.08] border-[#8AB4F8] shadow-[0_0_20px_-5px_rgba(138,180,248,0.3)]'
                      : 'bg-slate-900/40 hover:bg-slate-900/70 border-white/10 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-medium mb-1 font-sans">
                    <span className={isActive ? 'text-[#8AB4F8]' : 'text-slate-400'}>
                      Этап {stage.step}
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal">{stage.duration}</span>
                  </div>
                  <div className={`text-xs sm:text-sm font-medium ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {stage.title}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: PROBLEM STATEMENT & HYPOTHESIS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 text-xs font-medium font-sans uppercase tracking-wider border border-rose-500/20">
              <span>Проблема стартапа</span>
            </div>
            <h3 className="font-display font-light text-2xl sm:text-3xl text-white">
              Когнитивная перегрузка и потеря контекста
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {project.problemStatement || 'Пользователи бросают до 85% купленных онлайн-курсов из-за монолитных 40-минутных форматов и нехватки ощущения прогресса в плотном графике.'}
            </p>
            <ul className="space-y-2.5 pt-2 text-sm sm:text-base text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">•</span>
                <span>Сложно выделить 1–2 часа непрерывного времени в будние дни</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">•</span>
                <span>Отсутствие наглядной карты связи между разрозненными терминами</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">•</span>
                <span>Быстрое забывание материала без интервального тестирования</span>
              </li>
            </ul>
          </div>

          <div className="p-8 sm:p-10 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8AB4F8]/10 text-[#8AB4F8] text-xs font-medium font-sans uppercase tracking-wider border border-[#8AB4F8]/20">
              <span>Продуктовая гипотеза</span>
            </div>
            <h3 className="font-display font-light text-2xl sm:text-3xl text-white">
              Микрообучение и ментальный граф понятий
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {project.solutionHypothesis || 'Дробление сложных дисциплин на 4-минутные интерактивные сессии с визуальным графом взаимосвязи понятий увеличит недельное удержание пользователей (W1 Retention) минимум на 35%.'}
            </p>
            <ul className="space-y-2.5 pt-2 text-sm sm:text-base text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-[#8AB4F8] font-bold">•</span>
                <span>Сессии 3–5 минут с фокусным погружением в один конкретный квант</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#8AB4F8] font-bold">•</span>
                <span>Интерактивное древо понятий, визуализирующее прогресс освоения</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#8AB4F8] font-bold">•</span>
                <span>Алгоритм интервальных повторений, предотвращающий забывание</span>
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 3: USER RESEARCH & TARGET AUDIENCE */}
        {project.targetAudience && (
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#8AB4F8] font-sans">
              <Users className="w-4 h-4" />
              <span>CustDev и портреты пользователей</span>
            </div>
            <h2 className="font-display font-light text-2xl sm:text-4xl text-white eclipse-glow">
              Для кого мы проектировали интерфейс
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.targetAudience.map((user, idx) => (
                <div key={idx} className="p-8 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-medium text-xl text-white">{user.persona}</span>
                    <span className="text-xs px-3 py-1 bg-white/5 text-slate-300 font-medium rounded-full border border-white/10 font-sans">
                      {user.role}
                    </span>
                  </div>
                  <div className="text-sm text-slate-300">
                    <span className="font-medium text-white">Основная боль: </span>
                    {user.painPoint}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 4: FULL VISUAL MOCKUP & DESIGN SYSTEM */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-[#8AB4F8] mb-1 flex items-center gap-2 font-sans">
                <Layers className="w-4 h-4" />
                <span>Финальный интерфейс & дизайн-система</span>
              </div>
              <h2 className="font-display font-light text-2xl sm:text-4xl text-white eclipse-glow">
                Визуальное воплощение и компоненты
              </h2>
            </div>
          </div>

          <div className="h-[460px] sm:h-[580px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/80">
            <ProjectPreview project={project} />
          </div>

          {/* Design System Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-slate-900/40 border border-white/10 rounded-2xl">
              <div className="text-xs text-slate-400 font-medium font-sans">Цветовая концепция</div>
              <div className="text-base font-medium text-white mt-1">Deep Eclipse Spectrum</div>
              <div className="text-xs text-slate-400 mt-1">Глубокий обсидиановый фон, холодный фотонный белый и призматический ореол</div>
            </div>
            <div className="p-5 bg-slate-900/40 border border-white/10 rounded-2xl">
              <div className="text-xs text-slate-400 font-medium font-sans">Типографика</div>
              <div className="text-base font-medium text-white mt-1">Unbounded + Onest</div>
              <div className="text-xs text-slate-400 mt-1">Геометрический футуристический дисплей и чистый гротеск с поддержкой кириллицы</div>
            </div>
            <div className="p-5 bg-slate-900/40 border border-white/10 rounded-2xl">
              <div className="text-xs text-slate-400 font-medium font-sans">Компонентный подход</div>
              <div className="text-base font-medium text-white mt-1">Figma Token Architecture</div>
              <div className="text-xs text-slate-400 mt-1">80+ переиспользуемых атомов, молекул и организмов для масштабирования</div>
            </div>
            <div className="p-5 bg-slate-900/40 border border-white/10 rounded-2xl">
              <div className="text-xs text-slate-400 font-medium font-sans">Моушн & Микро-отклик</div>
              <div className="text-base font-medium text-white mt-1">Spring Physics 60 FPS</div>
              <div className="text-xs text-slate-400 mt-1">Кинетические парящие пилюли, плавные переходы и динамическая подсветка</div>
            </div>
          </div>
        </section>

        {/* SECTION 5: ACHIEVEMENTS & BUSINESS OUTCOMES */}
        <section className="p-8 sm:p-12 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-sm space-y-8">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-[#8AB4F8] mb-1 flex items-center gap-2 font-sans">
              <CheckCircle2 className="w-4 h-4" />
              <span>Результаты и вклад в проект</span>
            </div>
            <h2 className="font-display font-light text-2xl sm:text-4xl text-white eclipse-glow">
              Что было сделано и доказанный эффект
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-display font-medium text-lg text-white">
                Ключевые достижения
              </h3>
              <ul className="space-y-3">
                {project.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200 leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#8AB4F8] mt-2 flex-shrink-0" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-display font-medium text-lg text-white">
                Зона ответственности ведущего дизайнера
              </h3>
              <ul className="space-y-2.5">
                {project.duties.map((duty, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                    <span className="text-[#8AB4F8] font-bold">•</span>
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 6: NEXT PROJECT SWITCHER & CONTACT */}
        <section className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase font-medium text-slate-400 tracking-wider font-sans">Следующая работа</div>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="text-left group mt-1"
            >
              <div className="font-display font-light text-2xl sm:text-3xl text-white group-hover:text-[#8AB4F8] transition-colors flex items-center gap-2">
                <span>{nextProject.title}</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform text-slate-400" />
              </div>
              <div className="text-sm text-slate-400 font-sans">{nextProject.originLabel}</div>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-3 rounded-full glass-pill hover:border-[#8AB4F8]/40 text-slate-300 hover:text-white font-medium text-sm transition-all"
            >
              Вернуться ко всем проектам
            </button>
            <a
              href={PERSONAL_RESUME.telegramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-white text-[#08090C] hover:bg-[#D1E1FF] hover:shadow-[0_0_25px_-5px_rgba(138,180,248,0.6)] font-semibold text-sm transition-all flex items-center gap-2"
            >
              <span>Написать в Telegram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>

    </div>
  );
};
