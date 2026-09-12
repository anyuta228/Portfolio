import React, { useEffect } from 'react';
import { PERSONAL_RESUME, CAREER_ROLES } from '../data.ts';
import { X, Printer, Send } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#08090C] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl text-[#F8FAFC]">
        
        {/* Top Controls */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5 text-[#8AB4F8] font-semibold text-sm font-sans">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8AB4F8] shadow-[0_0_8px_rgba(138,180,248,0.8)]" />
            <span>Официальное резюме</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="p-2.5 rounded-full bg-[#0e1118] hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Печать"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#0e1118] hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Закрыть"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Header Profile Block */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            <h1 className="font-display font-light text-3xl sm:text-5xl text-white tracking-tight">
              {PERSONAL_RESUME.name}
            </h1>
            <div className="text-xl sm:text-2xl text-[#8AB4F8] font-medium mt-2">
              {PERSONAL_RESUME.title} ({PERSONAL_RESUME.roleLevel})
            </div>
            <div className="text-slate-300 text-sm sm:text-base mt-3 space-y-1.5 font-sans">
              <div>Опыт работы: <span className="text-white font-medium">{PERSONAL_RESUME.experienceYears}</span></div>
              <div>Локация: {PERSONAL_RESUME.location} ({PERSONAL_RESUME.workPreference})</div>
              <div>Ожидания по зарплате: {PERSONAL_RESUME.expectedSalary}</div>
            </div>
          </div>

          <div className="space-y-2 text-sm text-slate-300 self-start p-5 bg-slate-950/60 rounded-2xl font-sans">
            <div>Telegram: <a href={PERSONAL_RESUME.telegramPersonal} target="_blank" rel="noreferrer" className="text-[#8AB4F8] hover:underline">{PERSONAL_RESUME.telegramPersonalHandle}</a></div>
            <div>Email: <a href={`mailto:${PERSONAL_RESUME.email}`} className="hover:text-white hover:underline">{PERSONAL_RESUME.email}</a></div>
            <div>Канал: <a href={PERSONAL_RESUME.telegramChannel} target="_blank" rel="noreferrer" className="hover:text-white hover:underline">{PERSONAL_RESUME.telegramChannelHandle}</a></div>
            <div>Dprofile: <a href={PERSONAL_RESUME.dprofileUrl} target="_blank" rel="noreferrer" className="hover:text-white hover:underline">myonlyregret</a></div>
            <div>Behance: <a href={PERSONAL_RESUME.behanceUrl} target="_blank" rel="noreferrer" className="hover:text-white hover:underline">exussremo</a></div>
            <div>Dribbble: <a href={PERSONAL_RESUME.dribbbleUrl} target="_blank" rel="noreferrer" className="hover:text-white hover:underline">annaatoma</a></div>
          </div>
        </div>

        {/* Bio Block */}
        <div className="py-8">
          <h2 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 font-sans">
            О себе
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {PERSONAL_RESUME.bio}
          </p>
        </div>

        {/* Experience Chronology */}
        <div className="py-8 space-y-8">
          <h2 className="text-xs uppercase tracking-wider text-slate-400 font-semibold font-sans">
            Опыт работы
          </h2>

          {CAREER_ROLES.map((role, idx) => (
            <div key={idx} className="p-6 bg-slate-950/60 rounded-2xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="text-xl font-medium font-display text-white">
                  {role.title} <span className="text-[#8AB4F8]">/</span> {role.company}
                </div>
                <div className="text-sm text-slate-400 font-sans">
                  {role.period} ({role.type})
                </div>
              </div>

              {role.clients && (
                <div className="text-sm text-slate-400 font-sans">
                  Клиенты: {role.clients.join(', ')}
                </div>
              )}

              {/* Achievements */}
              <div>
                <div className="text-xs text-[#8AB4F8] uppercase font-semibold mb-2 font-sans">Достижения:</div>
                <ul className="space-y-2 text-sm sm:text-base text-slate-300">
                  {role.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5">
                      <span className="text-[#8AB4F8]">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duties */}
              <div>
                <div className="text-xs text-slate-400 uppercase font-semibold mb-1.5 font-sans">Обязанности:</div>
                <ul className="space-y-1 text-sm text-slate-400">
                  {role.duties.map((duty, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-slate-500">•</span>
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Qualification */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-950/60 rounded-2xl">
            <div className="text-xs text-slate-400 uppercase font-semibold mb-2 font-sans">Квалификация</div>
            <div className="text-lg font-medium font-display text-white">{PERSONAL_RESUME.qualification.title}</div>
            <div className="text-sm text-[#8AB4F8] font-medium mt-1">{PERSONAL_RESUME.qualification.honors}</div>
            <div className="text-sm text-slate-400 mt-1 font-sans">{PERSONAL_RESUME.qualification.school} ({PERSONAL_RESUME.qualification.year})</div>
          </div>

          <div className="p-6 bg-[#0e1118] rounded-2xl shadow-lg">
            <div className="text-xs text-slate-400 uppercase font-semibold mb-2 font-sans">Ключевой стек</div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Figma, Adobe After Effects, Miro, Design Systems, CJM, CustDev & User Research, Usability Testing, Web3 & Game UI, Antigravity + Gemini (AI-Assisted Full-Cycle Prototyping & Development).
            </p>
          </div>
        </div>

        {/* Bottom Contact Button */}
        <div className="mt-10 pt-6 border-t border-white/10 flex justify-end">
          <a
            href={PERSONAL_RESUME.telegramPersonal}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-white text-[#08090C] font-semibold text-sm flex items-center gap-2 hover:bg-[#D1E1FF] hover:shadow-[0_0_25px_-5px_rgba(138,180,248,0.6)] transition-all shadow-sm"
          >
            <Send className="w-4 h-4" />
            <span>Написать в Telegram @vaivin</span>
          </a>
        </div>

      </div>
    </div>
  );
};
