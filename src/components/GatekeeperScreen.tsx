import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Lock, KeyRound, Eye, EyeOff, Sparkles, ShieldAlert } from 'lucide-react';

interface GatekeeperScreenProps {
  onUnlock: () => void;
}

const CORRECT_KEY = '4391Xz10!';

export const GatekeeperScreen: React.FC<GatekeeperScreenProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Autofocus input on initial display
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === CORRECT_KEY) {
      setHasError(false);
      setIsSuccess(true);
      try {
        localStorage.setItem('atoma_portfolio_unlocked', 'true');
      } catch (err) {
        console.warn('LocalStorage unavailable:', err);
      }
      setTimeout(() => {
        onUnlock();
      }, 550);
    } else {
      setHasError(true);
      setTimeout(() => {
        setHasError(false);
      }, 650);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#08090C] text-[#F8FAFC] overflow-hidden select-none font-sans"
    >
      {/* Ambient Deep Cosmic Starfield & Nebula Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Center Lunar Nebula Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] bg-[radial-gradient(circle_at_50%_50%,rgba(138,180,248,0.08)_0%,rgba(14,17,24,0.4)_45%,transparent_70%)] blur-2xl" />
        
        {/* Subtle Eclipse Corona Disk in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-[#8AB4F8]/[0.06] shadow-[0_0_120px_rgba(138,180,248,0.06)]" />

        {/* Twinkling Stars (Geometric CSS Particles) */}
        {[
          { top: '15%', left: '20%', size: 2, delay: '0s' },
          { top: '22%', left: '82%', size: 2.5, delay: '1.2s' },
          { top: '35%', left: '12%', size: 1.5, delay: '0.8s' },
          { top: '42%', left: '88%', size: 2, delay: '2.1s' },
          { top: '68%', left: '18%', size: 2.5, delay: '1.7s' },
          { top: '75%', left: '78%', size: 1.5, delay: '0.4s' },
          { top: '85%', left: '28%', size: 2, delay: '2.5s' },
          { top: '18%', left: '50%', size: 1.5, delay: '1.9s' },
          { top: '82%', left: '60%', size: 2, delay: '0.6s' },
          { top: '28%', left: '35%', size: 1, delay: '1.4s' },
          { top: '60%', left: '85%', size: 2, delay: '2.8s' },
          { top: '50%', left: '8%', size: 1.5, delay: '1.1s' },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/70 animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${3 + (i % 3)}s`,
              animationDelay: star.delay,
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}
      </div>

      {/* Main Glass Card (Strictly bg-[#0e1118]/80, backdrop-blur-xl, ZERO white borders) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[440px] bg-[#0e1118]/80 backdrop-blur-xl rounded-[28px] p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] border-0"
      >
        {/* Subtle Ambient Radial Highlight on Card */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-[28px] pointer-events-none" />

        {/* Card Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Eclipse Moon Brand Emblem */}
          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0c0f16] to-[#121722] flex items-center justify-center shadow-[0_0_35px_rgba(138,180,248,0.15)] relative">
              {/* Glowing Arc Segment */}
              <div className="absolute inset-0 rounded-full border-t border-r border-[#8AB4F8]/70 shadow-[0_0_15px_#8AB4F8]" />
              <Lock className="w-6 h-6 text-[#8AB4F8]/90" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#8AB4F8]/20 flex items-center justify-center">
              <KeyRound className="w-3 h-3 text-[#8AB4F8]" />
            </div>
          </div>

          {/* Brand & Subtitle */}
          <h1 className="font-display font-medium text-4xl sm:text-5xl text-white tracking-tight drop-shadow-[0_0_24px_rgba(138,180,248,0.4)]">
            атома
          </h1>
          <p className="mt-2 text-xs sm:text-sm font-sans tracking-widest uppercase text-white/50">
            Вход в приватное портфолио
          </p>

          <p className="mt-3 text-xs text-neutral-400 font-sans leading-relaxed max-w-xs">
            Для доступа к коммерческим кейсам, продуктовой телеметрии и дизайн-системам введите ключ доступа
          </p>

          {/* Form with Password Input */}
          <form onSubmit={handleSubmit} className="w-full mt-7 space-y-4">
            <motion.div
              animate={
                hasError
                  ? { x: [-8, 8, -6, 6, -3, 3, 0] }
                  : isSuccess
                  ? { scale: [1, 1.02, 1] }
                  : {}
              }
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <input
                ref={inputRef}
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (hasError) setHasError(false);
                }}
                placeholder="Введите ключ доступа..."
                autoComplete="current-password"
                className={`w-full px-5 py-4 pr-12 rounded-2xl bg-black/60 text-white placeholder-white/30 font-sans text-sm outline-none transition-all duration-300 border-0 ${
                  hasError
                    ? 'ring-1 ring-red-500/60 shadow-[0_0_25px_rgba(239,68,68,0.25)] text-red-200'
                    : isSuccess
                    ? 'ring-1 ring-[#8AB4F8]/70 shadow-[0_0_25px_rgba(138,180,248,0.35)]'
                    : 'focus:ring-1 focus:ring-[#8AB4F8]/50 focus:bg-black/80'
                }`}
              />

              {/* Show / Hide Password Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-white/40 hover:text-white transition-colors"
                title={showPassword ? 'Скрыть ключ' : 'Показать ключ'}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </motion.div>

            {/* Error Message with Lunar Red Aura */}
            <AnimatePresence>
              {hasError && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex items-center justify-center gap-1.5 text-xs text-red-400 font-sans"
                >
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Неверный ключ доступа. Попробуйте снова</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Action Button */}
            <button
              type="submit"
              disabled={isSuccess}
              className={`w-full py-3.5 px-6 rounded-2xl font-sans text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] ${
                isSuccess
                  ? 'bg-[#8AB4F8] text-[#08090C] shadow-[0_0_25px_rgba(138,180,248,0.6)]'
                  : 'bg-white text-black hover:bg-[#D1E1FF] hover:shadow-[0_0_25px_rgba(138,180,248,0.4)]'
              }`}
            >
              <span>{isSuccess ? 'Доступ подтвержден...' : 'Разблокировать'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Discreet Hint */}
          <div className="mt-6 flex items-center gap-1.5 text-[11px] font-sans text-white/30">
            <Sparkles className="w-3 h-3 text-[#8AB4F8]/50" />
            <span>Анна Агабекян • Продуктовый UX/UI дизайн</span>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};
