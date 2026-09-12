import React, { useState, useEffect } from 'react';
import { PERSONAL_RESUME } from '../data.ts';
import { ArrowUpRight, FileText, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { id: 'works', label: 'Кейсы', href: '#works-section' },
  { id: 'motion', label: 'Динамика', href: '#motion-section' },
  { id: 'experience', label: 'Опыт', href: '#experience-section' },
  { id: 'skills', label: 'Экспертиза', href: '#skills-section' },
  { id: 'endorsements', label: 'Отзывы', href: '#endorsements-section' },
  { id: 'contact', label: 'Контакты', href: '#contact-section' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#08090C]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-[1760px] px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo strictly 'атома' aligned to left guide */}
          <a href="#" className="flex items-center group" aria-label="Наверх">
            <span className="font-display tracking-tight text-2xl text-white font-medium">
              атома
            </span>
          </a>

          {/* Desktop Nav Links with Hairline Underline on Hover (COMPUTE style) */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm font-medium transition-colors duration-300 relative group text-white/70 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full bg-white" />
              </a>
            ))}
          </div>

          {/* Desktop Right Actions (Zero Borders) */}
          <div className="hidden md:flex items-center gap-5">
            <button
              type="button"
              onClick={onOpenResume}
              className="transition-colors duration-300 text-sm font-sans font-medium text-white/70 hover:text-white min-h-[44px] px-2 flex items-center"
            >
              Резюме
            </button>

            <a
              href="#contact-section"
              className="inline-flex items-center justify-center text-sm font-medium rounded-full bg-white hover:bg-white/90 text-black px-6 min-h-[44px] transition-all active:scale-95 shadow-sm"
            >
              Связаться
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 transition-colors text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay (Zero Borders) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#08090C]/95 backdrop-blur-2xl shadow-2xl px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-display text-white/80 hover:text-white transition-colors py-2.5 flex items-center justify-between min-h-[44px]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-white/40" />
                </a>
              ))}

              <div className="pt-4 mt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex-1 min-h-[44px] rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-white text-sm font-sans font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <FileText className="w-4 h-4 text-white/60" />
                  <span>Резюме</span>
                </button>

                <a
                  href="#contact-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 min-h-[44px] rounded-full bg-white text-black text-sm font-medium flex items-center justify-center hover:bg-white/90 transition-colors"
                >
                  Связаться
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
