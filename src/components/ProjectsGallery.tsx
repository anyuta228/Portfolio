import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data.ts';
import { ProjectCase } from '../types.ts';
import { ProjectPreview } from './ProjectPreview.tsx';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsGalleryProps {
  onSelectProject: (project: ProjectCase) => void;
}

interface CleanProjectMeta {
  title: string;
  role: string;
  discipline: string;
  context: string;
  summary: string;
  tagsLine: string;
  technicalBadge?: string;
  behanceUrl?: string;
}

const PROJECT_CLEAN_MAP: Record<string, CleanProjectMeta> = {
  'belosnezhka': {
    title: 'Кафе «Белоснежка»',
    role: 'Product UX/UI Designer (Manual Figma) & AI-Assisted Dev',
    discipline: 'Digital Transformation & Web Service',
    context: '2025 — 2026 • В разработке (Live WIP)',
    summary: 'Цифровая трансформация легендарного заведения (с 2003 г.): авторский UX/UI-дизайн в Figma (дизайн-система, адаптивные сетки), онлайн-меню и умная корзина. Разработка при поддержке AI-инструментов',
    tagsLine: 'Figma (Manual UX/UI) · AI-Assisted Dev · Smart Cart · Live WIP',
  },
  'ppkas': {
    title: 'PPKAS',
    role: 'Lead Product Designer',
    discipline: 'Web3 & GameFi Architecture',
    context: '2025 — 2026 • Kaspa Network',
    summary: 'Продуктовый интерфейс P2E-платформы на блокчейне Kaspa в международной команде: архитектура онбординга, retention, токеномика и некастодиальный кошелек',
    tagsLine: 'Web3 Architecture · Kaspa Blockchain · GameFi · Core Team',
  },
  'librium': {
    title: 'LIBRIUM',
    role: 'Middle+ Product Designer',
    discipline: 'EdTech Mobile Ecosystem',
    context: '2024 — 2025 • EdTech Platform',
    summary: 'Мобильное приложение для микрообучения (6 месяцев разработки ДО перехода в PPKAS): интерактивный граф знаний, сессии фокуса и архитектура мобильного интерфейса',
    tagsLine: 'EdTech Platform · Knowledge Graph · Mobile App · 6 Months R&D',
    behanceUrl: 'https://www.behance.net/gallery/247098601/LIBRIUM-a-mobile-application-for-education',
  },
  'ez-marketplace': {
    title: 'EZ — Платформа для поиска специалистов',
    role: 'Mobile UX/UI Design',
    discipline: 'Mobile UX/UI Design',
    context: 'Флагманский проект',
    summary: 'Проект попал в рекомендации Behance (Featured / Curated), вызвал высокую вовлеченность профессионального сообщества и стал главным драйвером входящих офферов и коммерческих заказов',
    tagsLine: 'Behance Curated · Community Featured · Mobile UX/UI',
    technicalBadge: 'Behance Curated / Community Featured',
    behanceUrl: 'https://www.behance.net/gallery/137808103/EZ-Mobile-UXUI-design-for-freelance-service',
  },
  'community-design': {
    title: 'Community Design',
    role: 'Design Lead & Design Systems',
    discipline: 'B2B SaaS & Design Systems',
    context: '2022 — 2025 • B2B Startups',
    summary: 'Масштабируемые дизайн-системы и комплексные интерфейсы управления для B2B SaaS стартапов: KFBIO, FitVend и StitchLab',
    tagsLine: 'B2B SaaS · Design System Ops · Dashboards',
  },
};

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECTS[0]?.id ?? 'belosnezhka');
  const projectItemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const isHoveringCardsRef = useRef<boolean>(false);
  const intersectionRatiosRef = useRef<Map<string, number>>(new Map());

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'commercial') return p.origin === 'commercial';
    if (activeFilter === 'non_commercial') return p.origin === 'non_commercial';
    return true;
  });

  // Keep activeProjectId synchronized when filter changes
  useEffect(() => {
    if (!filteredProjects.some((p) => p.id === activeProjectId)) {
      if (filteredProjects.length > 0) {
        setActiveProjectId(filteredProjects[0].id);
      }
    }
  }, [activeFilter, filteredProjects, activeProjectId]);

  // High-precision IntersectionObserver: updates activeProjectId on scroll ONLY when user is not actively hovering
  useEffect(() => {
    intersectionRatiosRef.current.clear();

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('data-project-id');
        if (id) {
          if (entry.isIntersecting) {
            intersectionRatiosRef.current.set(id, entry.intersectionRatio);
          } else {
            intersectionRatiosRef.current.delete(id);
          }
        }
      });

      // CRITICAL: Active user hover has absolute priority over scroll observer
      if (isHoveringCardsRef.current) {
        return;
      }

      // Find the card with the highest visible ratio in the viewport
      let bestId: string | null = null;
      let maxRatio = -1;
      intersectionRatiosRef.current.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          bestId = id;
        }
      });

      if (bestId && maxRatio > 0.15) {
        setActiveProjectId(bestId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-15% 0px -25% 0px',
      threshold: [0.15, 0.3, 0.5, 0.7, 0.9],
    });

    projectItemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [filteredProjects]);

  const activeProject =
    filteredProjects.find((p) => p.id === activeProjectId) ||
    filteredProjects[0] ||
    PROJECTS[0];

  const activeMeta =
    (activeProject && PROJECT_CLEAN_MAP[activeProject.id]) || {
      title: activeProject?.title ?? 'Кейс',
      role: 'Product Designer',
      discipline: activeProject?.category ?? 'Product Design',
      context: activeProject?.period ?? '',
      summary: activeProject?.subtitle ?? '',
      tagsLine: activeProject?.tags?.slice(0, 3).join(' · ') ?? 'Product UX/UI',
    };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const handleCardMouseEnter = (projectId: string) => {
    isHoveringCardsRef.current = true;
    setActiveProjectId(projectId);
  };

  const handleCardMouseMove = (projectId: string, e: React.MouseEvent<HTMLDivElement>) => {
    isHoveringCardsRef.current = true;
    handleMouseMove(e);
    if (activeProjectId !== projectId) {
      setActiveProjectId(projectId);
    }
  };

  const handleCardMouseLeave = () => {
    isHoveringCardsRef.current = false;
  };

  return (
    <section id="works-section" className="scroll-mt-24 py-24 sm:py-32 bg-[#08090C] relative">
      <div className="max-w-[1760px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header: Pure Swiss Typography */}
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
                01 / Избранные проекты (Featured Projects)
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] text-white eclipse-glow">
                Избранные<br />
                <span className="text-white/40">проекты</span>
              </h2>
            </div>
            
            <div className="lg:col-span-5 lg:pb-2">
              <p className="text-lg text-white/60 leading-relaxed mb-6 font-sans">
                Реальные продуктовые релизы: от CustDev и проектирования логики до дизайн-систем и боевого продакшн-запуска
              </p>

              {/* Minimalist Filter Tabs (Zero Borders) */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'all', label: 'Все проекты' },
                  { id: 'commercial', label: 'Коммерческие' },
                  { id: 'non_commercial', label: 'R&D & Исследования' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-medium uppercase tracking-wider transition-all flex items-center justify-center ${
                      activeFilter === tab.id
                        ? 'bg-white text-black font-semibold'
                        : 'bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/[0.08]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2-Column Layout with Kinetic Sticky Scroll on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start relative">
          
          {/* Left Column: Clean Structured Project Cards with Scroll Zone */}
          <div className="lg:col-span-7 space-y-6">
            {filteredProjects.map((project) => {
              const isActive = project.id === activeProjectId;
              const meta = PROJECT_CLEAN_MAP[project.id] || {
                title: project.title.split('//')[0].trim(),
                role: 'Product Designer',
                discipline: project.category,
                context: project.period,
                summary: project.subtitle,
                tagsLine: project.tags?.slice(0, 3).join(' · ') ?? 'Product UX/UI',
              };

              return (
                <motion.div
                  key={project.id}
                  data-project-id={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  ref={(el) => {
                    if (el) projectItemRefs.current.set(project.id, el);
                    else projectItemRefs.current.delete(project.id);
                  }}
                  onClick={() => onSelectProject(project)}
                  onMouseEnter={() => handleCardMouseEnter(project.id)}
                  onMouseMove={(e) => handleCardMouseMove(project.id, e)}
                  onMouseLeave={handleCardMouseLeave}
                  className={`p-7 sm:p-8 cursor-pointer group transition-all duration-300 bento-card relative overflow-hidden flex flex-col justify-between border-0 ${
                    isActive
                      ? 'bg-[#121622] opacity-100 shadow-[inset_0_0_30px_rgba(138,180,248,0.06),0_0_35px_-5px_rgba(0,87,255,0.12)]'
                      : 'bg-[#0e1118] opacity-90 hover:opacity-100 hover:shadow-[inset_0_0_30px_rgba(138,180,248,0.05),0_0_35px_-5px_rgba(0,87,255,0.1)]'
                  }`}
                >
                  {/* Subtle inner ambient glow on hover (zero white borders) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0057ff]/[0.05] via-transparent to-[#8AB4F8]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Meta Context & Technical Badge */}
                      {meta.technicalBadge ? (
                        <div className="flex flex-wrap items-center gap-2.5 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0057ff]/10 text-[#8AB4F8] font-mono text-[11px] sm:text-xs font-medium tracking-wide uppercase border-0 shadow-[0_0_12px_rgba(0,87,255,0.25)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0057ff] shadow-[0_0_6px_#0057ff] animate-pulse" />
                            {meta.technicalBadge}
                          </span>
                          <span className="text-xs sm:text-sm font-sans tracking-wider text-white/40 uppercase">
                            {meta.context}
                          </span>
                        </div>
                      ) : (
                        <div className="text-xs sm:text-sm font-sans tracking-wider text-white/50 uppercase mb-2.5">
                          <span>{meta.context} • {meta.discipline}</span>
                        </div>
                      )}

                      {/* Project Title */}
                      <h3 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight leading-tight mb-3 group-hover:text-white transition-colors">
                        {meta.title}
                      </h3>

                      {/* Summary Description (2-3 lines living language, zero trailing periods) */}
                      <p className="text-white/70 text-sm sm:text-base leading-relaxed font-sans mb-6">
                        {meta.summary}
                      </p>
                    </div>

                    {/* Clean Footer Row: Single Tag Line + Action Buttons */}
                    <div className="pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                      <div className="text-xs sm:text-sm font-sans text-white/50 tracking-wide">
                        {meta.tagsLine}
                      </div>

                      <div className="flex flex-wrap items-center gap-2.5">
                        {meta.behanceUrl && (
                          <a
                            href={meta.behanceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141926] hover:bg-[#1d2436] text-neutral-300 hover:text-white text-xs sm:text-sm font-sans font-medium transition-all active:scale-95 border-0 hover:shadow-[0_0_20px_rgba(138,180,248,0.25)] shadow-sm"
                          >
                            <span>Смотреть на Behance ↗</span>
                          </a>
                        )}

                        {project.externalLinks?.liveSite && !meta.behanceUrl && (
                          <a
                            href={project.externalLinks.liveSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/12 text-white text-xs sm:text-sm font-sans font-medium transition-all active:scale-95 border-0"
                          >
                            <span>Перейти на сайт</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-white/70" />
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProject(project);
                          }}
                          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-xs sm:text-sm font-sans font-medium hover:bg-white/90 transition-all active:scale-95 shadow-sm"
                        >
                          <span>Смотреть кейс</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Kinetic Sticky Preview Stage (Desktop 5 cols, position: sticky; top: 100px) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-[100px] h-fit">
            <div onMouseMove={handleMouseMove} className="bento-card p-6 bg-[#0e1118]">
              
              {/* Header Status Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8AB4F8] shadow-[0_0_10px_rgba(138,180,248,0.9)]" />
                  <span className="font-sans text-xs sm:text-sm uppercase tracking-wider text-white/80">
                    {activeMeta.title}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-sans text-white/40">
                  {activeProject?.period ?? ''}
                </span>
              </div>

              {/* Animated Visual Mockup Preview (aspect-[16/10]) with Kinetic Parallax & Opacity */}
              <div 
                onClick={() => onSelectProject(activeProject)}
                className="aspect-[16/10] w-full rounded-2xl overflow-hidden cursor-pointer relative group bg-[#07090E] transition-transform duration-300 ease-out hover:scale-[1.01]"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative"
                  >
                    {activeProject.coverImage ? (
                      <div className="w-full h-full relative group/cover select-none">
                        <img
                          src={activeProject.coverImage}
                          alt={activeMeta.title}
                          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-xs font-sans text-white/80 pointer-events-none">
                          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 font-medium">
                            {activeProject.originLabel}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/70">
                            {activeProject.period}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <ProjectPreview project={activeProject} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Stage Footer Info */}
              <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-base font-medium text-white">{activeMeta.title}</div>
                  <div className="text-xs font-sans text-white/60 mt-0.5">{activeMeta.role} • {activeMeta.discipline}</div>
                </div>
                <div className="flex items-center gap-2">
                  {activeMeta.behanceUrl && (
                    <a
                      href={activeMeta.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-full bg-[#141926] hover:bg-[#1d2436] text-neutral-300 hover:text-white text-xs font-sans font-medium transition-all active:scale-95 border-0 hover:shadow-[0_0_15px_rgba(138,180,248,0.25)] shadow-sm"
                    >
                      <span>Behance ↗</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => onSelectProject(activeProject)}
                    className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-sans font-medium hover:bg-white/90 transition-all flex items-center gap-1.5 active:scale-95 shadow-sm"
                  >
                    <span>Детали</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
