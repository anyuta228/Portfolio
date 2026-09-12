import React, { useRef, useState, useEffect } from 'react';
import { MOTION_WORKS } from '../data.ts';
import { MotionWork } from '../types.ts';
import { ArrowUpRight, Play, Pause } from 'lucide-react';
import { motion } from 'motion/react';

interface MotionCardProps {
  work: MotionWork;
}

const MotionCard: React.FC<MotionCardProps> = ({ work }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true;
    const p = vid.play();
    if (p !== undefined) {
      p.then(() => setIsPlaying(true)).catch(() => {});
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const handleMouseEnter = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const togglePlayback = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
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
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      className="bento-card group flex flex-col justify-between p-6 sm:p-7 rounded-[22px] transition-all duration-400"
    >
      <div className="relative z-10 flex flex-col h-full">
        {/* Card Header Tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs text-[#8AB4F8] tracking-wider uppercase font-semibold">
              {work.index} // {work.category}
            </span>
          </div>
          <a
            href={work.dribbbleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/[0.08] transition-colors"
            title="Открыть на Dribbble"
            aria-label={`Открыть ${work.title} на Dribbble`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Video Preview Container (Strictly Inset / No Borders) */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/60 mb-5 group/media shadow-none">
          <video
            ref={videoRef}
            src={work.videoUrl}
            poster={work.stillUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Optical Vignette & Inset Shadow Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Interactive Play/Pause Control Pill */}
          <button
            type="button"
            onClick={togglePlayback}
            className="absolute bottom-3 right-3 z-20 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-xs font-sans font-medium text-white/90 flex items-center gap-1.5 transition-all hover:bg-white/20 active:scale-95 shadow-none border-0"
            aria-label={isPlaying ? 'Пауза' : 'Воспроизведение'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 text-[#8AB4F8]" />
                <span className="text-[11px] tracking-wider uppercase font-sans">Live</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-white fill-white" />
                <span className="text-[11px] tracking-wider uppercase font-sans">Hover</span>
              </>
            )}
          </button>
        </div>

        {/* Title & Description */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-medium text-xl sm:text-2xl text-white tracking-tight mb-2 group-hover:text-[#D1E1FF] transition-colors">
              {work.title}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4 font-sans">
              {work.subtitle}
            </p>
          </div>

          {/* Tech Stack Badges & Dribbble Link */}
          <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              {work.stack.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full text-xs font-sans text-white/80 bg-white/[0.04] tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={work.dribbbleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-sans text-neutral-400 hover:text-[#8AB4F8] transition-colors pt-1"
            >
              <span>Смотреть шот на Dribbble</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const MotionGallery: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="motion-section" className="py-24 sm:py-32 bg-[#08090C] relative">
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
                02 / Motion & Interaction Physics
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] text-white eclipse-glow">
                Кинетика и<br />
                <span className="text-white/40">микроанимации</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-2">
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans mb-6">
                Интерактивные микродействия, пространственная динамика и кинетика интерфейсов из профиля Dribbble. Все концепты и микроанимации собраны вручную в Adobe After Effects (60 FPS, тактильный физический отклик)
              </p>
              <a
                href="https://dribbble.com/annaatoma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white text-sm font-sans font-medium transition-all duration-300"
              >
                <span>Все шоты на Dribbble</span>
                <ArrowUpRight className="w-4 h-4 text-[#8AB4F8]" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Bento Grid with Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {MOTION_WORKS.map((work) => (
            <MotionCard key={work.id} work={work} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
