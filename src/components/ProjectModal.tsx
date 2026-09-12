import React, { useEffect } from 'react';
import { ProjectCase } from '../types.ts';
import { ProjectPreview } from './ProjectPreview.tsx';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectCase | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#08090C] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl text-[#F8FAFC]">
        
        {/* Close Button - Minimalist Dark Capsule */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-[#0e1118] hover:bg-white/10 text-white/70 hover:text-white backdrop-blur-md transition-all z-20 shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Meta details */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mb-4 pb-4 border-b border-white/[0.06] font-sans">
          <span className="font-semibold text-white">{project.company}</span>
          <span>•</span>
          <span>{project.period}</span>
          <span>•</span>
          <span className="text-[#8AB4F8] font-medium">{project.role}</span>
        </div>

        {/* Project Title */}
        <h2 className="font-display font-light text-3xl sm:text-5xl text-white tracking-tight mb-3 eclipse-glow">
          {project.title}
        </h2>
        <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl">
          {project.subtitle}
        </p>

        {/* Visual Mockup Container */}
        <div className="h-[360px] sm:h-[440px] mb-10 rounded-2xl overflow-hidden bg-[#050608] shadow-2xl">
          <ProjectPreview project={project} />
        </div>

        {/* Key Result Banner (bg-[#0e1118], border-none) */}
        <div className="p-6 sm:p-8 bg-[#0e1118] rounded-2xl mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium font-sans">
              Измеримый бизнес-результат
            </div>
            <div className="font-display font-light text-2xl sm:text-3xl text-white mt-1 drop-shadow-[0_2px_12px_rgba(138,180,248,0.3)]">
              {project.metrics}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3.5 py-1.5 bg-white/[0.04] text-slate-300 text-xs sm:text-sm font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Breakdown */}
        <div className="space-y-8 text-base">
          <div className="p-6 sm:p-8 bg-[#0e1118] rounded-2xl shadow-lg">
            <h3 className="font-display font-medium text-xl text-white mb-3">
              О проекте и продуктовом контексте
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {project.achievements && project.achievements.length > 0 && (
            <div className="p-6 sm:p-8 bg-[#0e1118] rounded-2xl shadow-lg">
              <h3 className="font-display font-medium text-xl text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#8AB4F8]" />
                <span>Достижения в проекте</span>
              </h3>
              <ul className="space-y-3">
                {project.achievements.map((ach, idx) => (
                  <li key={idx} className="text-slate-200 text-base flex items-start gap-3 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8AB4F8] mt-2.5 flex-shrink-0" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.duties && project.duties.length > 0 && (
            <div className="p-6 sm:p-8 bg-[#0e1118] rounded-2xl shadow-lg">
              <h3 className="font-display font-medium text-lg text-slate-200 mb-3">
                Зона ответственности
              </h3>
              <ul className="space-y-2.5">
                {project.duties.map((duty, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                    <span className="text-[#8AB4F8]">•</span>
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.externalLinks?.dprofile && (
              <a
                href={project.externalLinks.dprofile}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#0e1118] hover:bg-white/10 text-white text-sm font-medium rounded-full flex items-center gap-2 transition-colors"
              >
                <span>Dprofile</span>
                <ArrowUpRight className="w-4 h-4 text-[#8AB4F8]" />
              </a>
            )}
            {project.externalLinks?.behance && (
              <a
                href={project.externalLinks.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#0e1118] hover:bg-white/10 text-white text-sm font-medium rounded-full flex items-center gap-2 transition-colors"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-4 h-4 text-[#8AB4F8]" />
              </a>
            )}
            {project.externalLinks?.dribbble && (
              <a
                href={project.externalLinks.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#0e1118] hover:bg-white/10 text-white text-sm font-medium rounded-full flex items-center gap-2 transition-colors"
              >
                <span>Dribbble</span>
                <ArrowUpRight className="w-4 h-4 text-[#8AB4F8]" />
              </a>
            )}
          </div>

          <a
            href="https://t.me/vaivin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full bg-white text-[#08090C] font-semibold text-sm hover:bg-[#D1E1FF] hover:shadow-[0_0_25px_-5px_rgba(138,180,248,0.5)] transition-all flex items-center gap-2"
          >
            <span>Обсудить кейс с Анной</span>
            <ArrowUpRight className="w-4 h-4 text-[#08090C]/80" />
          </a>
        </div>

      </div>
    </div>
  );
};
