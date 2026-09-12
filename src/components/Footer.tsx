import React from 'react';
import { PERSONAL_RESUME } from '../data.ts';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#08090C] select-none">
      <div className="max-w-[1760px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-display text-xl text-white font-medium">атома</span>
            </div>
            <div className="text-white/50 text-sm font-sans">
              Digital Architecture & Product Engineering • {PERSONAL_RESUME.name}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-white/60">
            <a href={PERSONAL_RESUME.telegramPersonal} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Telegram
            </a>
            <a href={PERSONAL_RESUME.telegramChannel} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Канал
            </a>
            <a href={PERSONAL_RESUME.dprofileUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Dprofile
            </a>
            <a href={PERSONAL_RESUME.behanceUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Behance
            </a>
            <a href={PERSONAL_RESUME.dribbbleUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Dribbble
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/[0.05] hover:bg-white hover:text-black text-white/60 transition-all self-start md:self-auto"
            title="Наверх"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/40 font-sans">
          <div>
            {PERSONAL_RESUME.location} • {PERSONAL_RESUME.workPreference}
          </div>
          <div>
            © {new Date().getFullYear()} АТОМА. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};
