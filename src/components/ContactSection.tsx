import React, { useState } from 'react';
import { PERSONAL_RESUME, CONTACT_CHANNELS } from '../data.ts';
import { Send, Copy, Check, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    const url = `https://t.me/vaivin?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank');
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="contact-section" className="py-24 sm:py-32 bg-[#08090C]">
      <div className="max-w-[1760px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="relative mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-sans font-medium text-white/50 mb-6">
                <span className="w-12 h-px bg-white/20" />
                06 / Direct Comms
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] text-white eclipse-glow">
                Обсудить<br />
                <span className="text-white/40">проект</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-2">
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans">
                Открыта к предложениям: Middle+ Product Designer (удаленно, гибрид или офис)
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Direct Telegram Quick Message Form with Bento Card (7 cols, Zero Borders) */}
          <div
            onMouseMove={handleMouseMove}
            className="lg:col-span-7 bento-card p-8 sm:p-10"
          >
            <div className="relative z-10">
              <h3 className="font-display font-medium text-2xl text-white mb-2">
                Быстрое сообщение
              </h3>
              <p className="text-white/60 text-sm sm:text-base mb-6 leading-relaxed font-sans">
                Опишите задачу или пришлите ссылку на вакансию — сообщение откроется в диалоге с дизайнером в Telegram.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <textarea
                    rows={4}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Привет, Анна! Мы ищем продуктового дизайнера в команду..."
                    className="w-full bg-white/[0.04] rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#8AB4F8]/40 text-sm sm:text-base leading-relaxed resize-none transition-all font-sans"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-3 min-h-[48px] rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all flex items-center gap-2 active:scale-95 shadow-sm font-sans"
                  >
                    <Send className="w-4 h-4" />
                    <span>Отправить в Telegram @vaivin</span>
                  </button>

                  <div className="text-xs sm:text-sm text-white/40 font-sans">
                    Ответ в течение 2 часов
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Channels Matrix (5 cols, Zero Borders) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs uppercase tracking-[0.16em] text-white/50 mb-4 font-sans font-medium">
              Прямые контакты и профили
            </div>

            {CONTACT_CHANNELS.map((ch, idx) => (
              <div
                key={idx}
                onMouseMove={handleMouseMove}
                className="bento-card p-5 rounded-2xl flex items-center justify-between group"
              >
                <div className="relative z-10">
                  <div className="text-xs text-white/50 font-sans">{ch.label}</div>
                  <div className="text-white font-sans font-medium text-sm sm:text-base mt-0.5 group-hover:text-white transition-colors">
                    {ch.handle}
                  </div>
                </div>

                <div className="flex items-center gap-2 relative z-10">
                  <button
                    type="button"
                    onClick={() => handleCopy(ch.value, ch.handle)}
                    className="p-2 rounded-full hover:bg-white/[0.08] text-white/50 hover:text-white transition-colors"
                    title="Скопировать"
                  >
                    {copiedKey === ch.handle ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <a
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/[0.05] hover:bg-white hover:text-black text-white/70 transition-all"
                    title="Открыть"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
