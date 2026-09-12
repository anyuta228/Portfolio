import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, EyeOff, ShieldAlert } from 'lucide-react';

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

      {/* Main Glass Card (Spacious, bg-[#0a0d14]/90 backdrop-blur-2xl, strictly border-0) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          boxShadow:
            '0 30px 80px rgba(0, 0, 0, 0.85), inset 0 1px 1px 0 rgba(255, 255, 255, 0.12), inset 0 0 40px -10px rgba(138, 180, 248, 0.08)',
        }}
        className="relative z-10 w-full max-w-[460px] bg-[#0a0d14]/90 backdrop-blur-2xl rounded-[32px] p-10 md:p-12 border-0"
      >
        {/* Card Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Miniature optical light point over brand */}
          <div className="mb-6 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8AB4F8] shadow-[0_0_12px_#8AB4F8,0_0_24px_rgba(138,180,248,0.7)] animate-pulse" />
          </div>

          {/* Brand Heading «атома» with signature lunar corona glow */}
          <h1
            style={{
              textShadow:
                '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(138, 180, 248, 0.25)',
            }}
            className="font-display font-medium text-4xl sm:text-5xl text-white tracking-tight leading-none"
          >
            атома
          </h1>

          {/* Subtitle: тонкий, разреженный sans-serif, БЕЗ ТОЧЕК */}
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-neutral-400 font-sans font-light">
            Вход в приватное портфолио
          </p>

          {/* Clean description without telemetry jargon */}
          <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-sm font-normal">
            Для доступа к коммерческим кейсам и дизайн-системам введите ключ доступа
          </p>

          {/* Form with Password Input */}
          <form onSubmit={handleSubmit} className="w-full mt-8 space-y-4">
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
                className={`w-full px-5 py-3.5 pr-12 rounded-xl bg-[#050608] text-white placeholder:text-neutral-500 font-sans text-sm outline-none transition-all duration-300 border-0 ${
                  hasError
                    ? 'ring-1 ring-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.25)] text-red-200'
                    : isSuccess
                    ? 'ring-1 ring-[#8AB4F8]/70 shadow-[0_0_25px_rgba(138,180,248,0.35)]'
                    : 'focus:ring-1 focus:ring-[#8AB4F8]/50 focus:shadow-[0_0_20px_rgba(138,180,248,0.15)]'
                }`}
              />

              {/* Show / Hide Password Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-white/40 hover:text-white transition-colors cursor-pointer"
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
              className={`w-full py-3.5 px-6 rounded-xl font-sans text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] border-0 cursor-pointer ${
                isSuccess
                  ? 'bg-[#8AB4F8] text-[#08090C] shadow-[0_0_30px_rgba(138,180,248,0.5)]'
                  : 'bg-white text-black hover:bg-neutral-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]'
              }`}
            >
              <span>{isSuccess ? 'Доступ подтвержден...' : 'Разблокировать →'}</span>
            </button>
          </form>

          {/* Bottom Copyright separated by mt-8 */}
          <div className="mt-8 flex items-center justify-center text-xs font-sans text-neutral-500 tracking-normal">
            <span>Anna Aghabekyan • Middle+ Product Designer</span>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};
