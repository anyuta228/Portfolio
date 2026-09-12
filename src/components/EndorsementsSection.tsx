import React, { useState } from 'react';
import { ENDORSEMENTS } from '../data.ts';
import { ArrowUpRight, CheckCircle2, Quote, ShieldCheck, Languages, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const EndorsementsSection: React.FC = () => {
  const [showRussianTranslation, setShowRussianTranslation] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const primaryEndorsement = ENDORSEMENTS[0]; // Alex Vance / PPKAS
  const secondaryEndorsements = ENDORSEMENTS.slice(1); // Evgeny Chernov (Internship) & Evgeny Kuzmin (Education)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="endorsements-section" className="py-24 sm:py-32 bg-[#08090C] relative">
      <div className="max-w-[1760px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
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
                05 / Peer Endorsements & Social Proof
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] text-white eclipse-glow">
                Рекомендации и<br />
                <span className="text-white/40">признание</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-2">
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans mb-6">
                Верифицированные отзывы международной продуктовой команды и руководителей студии UPROCK. Оценка продуктового лидерства, архитектуры дизайн-систем и конверсионных циклов
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/vaivin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white text-sm font-sans font-medium transition-all duration-300"
                >
                  <ShieldCheck className="w-4 h-4 text-[#8AB4F8]" />
                  <span>Профиль на LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4 text-white/50" />
                </a>

                <span className="text-xs font-sans text-neutral-400 px-3 py-1 rounded-full bg-white/[0.02]">
                  Золотой сертификат UPROCK 2022
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Hero Recommendation: Alex Vance / PPKAS International Core Team */}
        {primaryEndorsement && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            className="bento-card p-8 sm:p-12 lg:p-14 rounded-[26px] mb-8 relative group bg-[#0e1118]"
          >
            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Top Meta Bar with Bilingual Toggle */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8AB4F8] animate-pulse" />
                  <span className="font-sans text-xs uppercase tracking-widest text-[#8AB4F8] font-medium">
                    {primaryEndorsement.badgeLabel || 'Web3 Core Team'} // {primaryEndorsement.verifiedDate}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Interactive Language Toggle Capsule */}
                  <button
                    type="button"
                    onClick={() => setShowRussianTranslation(!showRussianTranslation)}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white/90 text-xs font-sans font-medium transition-all active:scale-95 border border-white/[0.08]"
                    aria-label="Переключить язык отзыва"
                  >
                    <Languages className="w-3.5 h-3.5 text-[#8AB4F8]" />
                    <span>{showRussianTranslation ? 'EN / Original' : 'RU / Перевод'}</span>
                  </button>

                  <div className="hidden sm:flex items-center gap-1.5 text-xs font-sans text-neutral-400">
                    <CheckCircle2 className="w-4 h-4 text-[#8AB4F8]" />
                    <span>Верифицировано</span>
                  </div>
                </div>
              </div>

              {/* Large Authoritative Quote with Smooth Transition */}
              <div className="py-8 sm:py-10 relative">
                <Quote className="absolute -top-2 -left-2 sm:-left-4 w-12 h-12 text-white/[0.04] group-hover:text-[#8AB4F8]/10 transition-colors pointer-events-none" />
                <AnimatePresence mode="wait">
                  <motion.p
                    key={showRussianTranslation ? 'ru-quote' : 'en-quote'}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="font-display font-light text-2xl sm:text-3xl lg:text-[32px] text-white/95 leading-relaxed tracking-tight"
                  >
                    {showRussianTranslation
                      ? (primaryEndorsement.quoteRu || primaryEndorsement.quote)
                      : (primaryEndorsement.quoteEn || primaryEndorsement.quote)}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Author Details & Skill Chips */}
              <div className="pt-6 border-t border-white/[0.06] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  {/* Monogram Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8AB4F8]/20 via-white/10 to-transparent flex items-center justify-center font-display font-medium text-xl text-white shadow-none border border-white/10">
                    {primaryEndorsement.authorInitials}
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-display font-medium text-xl text-white">
                        {primaryEndorsement.author}
                      </h3>
                      <a
                        href={primaryEndorsement.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-[#8AB4F8] transition-colors p-1"
                        title="Верификация на LinkedIn"
                        aria-label={`Верифицировать рекомендацию ${primaryEndorsement.author} на LinkedIn`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-xs sm:text-sm font-sans text-[#8AB4F8] mb-0.5">
                      {primaryEndorsement.role} • {primaryEndorsement.company}
                    </p>
                    <p className="text-xs text-white/50 font-sans">
                      {primaryEndorsement.context}
                    </p>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {primaryEndorsement.skillsHighlighted.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-sans text-white/80 bg-white/[0.04]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary 2-Column Bento Grid (1: Internship @ UPROCK / Evgeny Chernov, 2: Education & Gold Certificate @ UPROCK / Evgeny Kuzmin) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {secondaryEndorsements.map((item) => (
            <motion.div
              variants={cardVariants}
              key={item.id}
              onMouseMove={handleMouseMove}
              className="bento-card p-8 sm:p-10 rounded-[24px] flex flex-col justify-between group bg-[#0e1118]"
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                {/* Meta Badge */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#8AB4F8]" />
                      <span className="font-sans text-xs uppercase tracking-wider text-[#8AB4F8] font-medium">
                        {item.badgeLabel || item.verifiedDate}
                      </span>
                    </div>
                    <a
                      href={item.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full text-white/40 hover:text-white hover:bg-white/[0.08] transition-colors"
                      title="LinkedIn"
                      aria-label={`Верифицировать рекомендацию ${item.author} на LinkedIn`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Quote Body */}
                  <p className="font-display font-light text-xl sm:text-2xl text-white/90 leading-relaxed mb-8">
                    {item.quote}
                  </p>
                </div>

                {/* Author Card Footer */}
                <div className="pt-6 border-t border-white/[0.06]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/[0.02] flex items-center justify-center font-display font-medium text-lg text-white shadow-none border-0">
                      {item.authorInitials}
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-lg text-white">
                        {item.author}
                      </h4>
                      <p className="text-xs font-sans text-[#8AB4F8] font-medium">
                        {item.role}
                      </p>
                      <p className="text-xs text-white/50 font-sans">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.skillsHighlighted.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-full text-[11px] font-sans text-white/70 bg-white/[0.04]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
