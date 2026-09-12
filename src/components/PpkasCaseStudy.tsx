import React, { useEffect } from 'react';
import { ProjectCase } from '../types.ts';
import { 
  ArrowLeft, 
  TrendingUp, 
  Play, 
  Figma, 
  Smartphone, 
  Send, 
  Sparkles, 
  Image as ImageIcon,
  CheckCircle2,
  Clock,
  Layers
} from 'lucide-react';

interface PpkasCaseStudyProps {
  project: ProjectCase;
  onBack: () => void;
}

export const PpkasCaseStudy: React.FC<PpkasCaseStudyProps> = ({
  project,
  onBack
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const FIGMA_GAMES = [
    {
      file: './images/cases/ppkas/games/game_1_space_hopper_figma.png',
      badge: 'Figma Canvas // 01',
      title: 'Space Hopper: сборка уровней и спрайты платформ',
      description: 'Сетка динамических платформ, физика прыжка, состояния анимации астронавта и тайминги фреймов для механики вертикального раннера'
    },
    {
      file: './images/cases/ppkas/games/game_2_crazy_rocket_biomes_figma.png',
      badge: 'Figma Canvas // 02',
      title: 'Crazy Rocket: матрица 4 биомов, цветовые палитры и спрайты',
      description: 'Визуальная вариативность локаций (Космос, Вулканический мир, Сакура-планета, Арктика), анимации препятствий, астероидов и спрайты ракеты'
    },
    {
      file: './images/cases/ppkas/games/game_3_t_catcher_flow_ui.png',
      badge: 'Figma Canvas // 03',
      title: 'T-Catcher: игровая механика и интерфейсный цикл',
      description: 'Сквозной флоу казуальной мини-игры: экран старта (Get Ready / Dual Tap), конвейерные механики ловли ассетов (D-Pad управление) и экран Game Over с начислением наград'
    }
  ];

  const TELEGRAM_STORIES = [
    {
      file: './images/cases/ppkas/telegram/stories/story_1_fresh_p2e.png',
      headline: 'Fresh Play2Earn',
      caption: 'Come & see fresh Play2Earn on Kaspa — earn for real',
      tag: 'Story // 01'
    },
    {
      file: './images/cases/ppkas/telegram/stories/story_2_play_earn_repeat.png',
      headline: 'Play. Earn. Repeat.',
      caption: 'Быстрые циклы удержания и вовлечения аудитории',
      tag: 'Story // 02'
    },
    {
      file: './images/cases/ppkas/telegram/stories/story_3_first_p2e_history.png',
      headline: 'First P2E on Kaspa',
      caption: 'Исторический запуск первого P2E на блокчейне Kaspa',
      tag: 'Story // 03'
    },
    {
      file: './images/cases/ppkas/telegram/stories/story_4_hints_puzzles_rewards.png',
      headline: 'Hints & Real Rewards',
      caption: 'Головоломки, подсказки сообществу и реальные награды',
      tag: 'Story // 04'
    },
    {
      file: './images/cases/ppkas/telegram/stories/story_5_ton_yesterday_kaspa_next.png',
      headline: 'Kaspa Game is Next!',
      caption: 'Смена парадигмы: переход от TON к экосистеме Kaspa',
      tag: 'Story // 05'
    }
  ];

  const STICKERS = [
    {
      file: './images/cases/ppkas/telegram/sticker_1_hi.png',
      title: 'Приветствие / Hi!',
      badge: 'Sticker // 01'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_2_shock.png',
      title: 'Удивление & Шок',
      badge: 'Sticker // 02'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_3_thinking.png',
      title: 'Размышление & Анализ',
      badge: 'Sticker // 03'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_4_laugh.png',
      title: 'Радость & Победа',
      badge: 'Sticker // 04'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_5_moon_flag.png',
      title: 'Флаг на Луне (Kaspa P2E)',
      badge: 'Sticker // 05'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_6_money_rain.png',
      title: 'Денежный дождь / Profit',
      badge: 'Sticker // 06'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_7_take_money.png',
      title: 'Take My Money!',
      badge: 'Sticker // 07'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_8_halloween_moon.png',
      title: 'Kaspa Moon Halloween',
      badge: 'Sticker // 08'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_9_ufo_beam.png',
      title: 'UFO Beam / Внеземной рост',
      badge: 'Sticker // 09'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_10_halloween_witch.png',
      title: 'Pepe Witch Flight',
      badge: 'Sticker // 10'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_11_vampire_moon.png',
      title: 'Вампир Pepe / Halloween',
      badge: 'Sticker // 11'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_12_bull_market_surfer.png',
      title: 'Буллран & Серфинг (Pump)',
      badge: 'Sticker // 12'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_13_bear_market_hodler.png',
      title: 'Медвежий рынок / HODL',
      badge: 'Sticker // 13'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_14_diamond_hands.png',
      title: 'Diamond Hands $PPKAS',
      badge: 'Sticker // 14'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_15_kaspa_love.png',
      title: 'Kaspa Love / В объятиях Луны',
      badge: 'Sticker // 15'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_16_rocket_to_moon.png',
      title: 'To the Moon / Взлет ракеты',
      badge: 'Sticker // 16'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_17_kaspa_rock.png',
      title: 'Kaspa Rock / Две планеты',
      badge: 'Sticker // 17'
    },
    {
      file: './images/cases/ppkas/telegram/sticker_18_euphoria_coins.png',
      title: 'Эйфория / Монеты Kaspa',
      badge: 'Sticker // 18'
    }
  ];

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F8FAFC] selection:bg-[#8AB4F8] selection:text-[#08090C] relative font-sans">
      
      {/* Top Floating Bar: Single Clean Back Button (Zero clutter) */}
      <header className="sticky top-0 z-40 bg-[#08090C]/90 backdrop-blur-md border-b border-white/[0.06] transition-all">
        <div className="max-w-[1680px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs sm:text-sm font-sans font-medium transition-all active:scale-95 border-0"
          >
            <ArrowLeft className="w-4 h-4 text-[#8AB4F8]" />
            <span>Назад к проектам</span>
          </button>

          <div className="hidden sm:flex items-center gap-3 text-xs text-white/50 font-sans tracking-wide">
            <span>PPKAS</span>
            <span className="text-white/20">•</span>
            <span>Kaspa Web3 P2E Ecosystem</span>
          </div>
        </div>
      </header>

      {/* Main Longread Content */}
      <main className="max-w-[1680px] mx-auto px-6 md:px-12 pt-10 sm:pt-16 pb-28 space-y-20 sm:space-y-28">

        {/* ========================================================================= */}
        {/* БЛОК 1: Hero & Продуктовые метрики                                       */}
        {/* ========================================================================= */}
        <section className="scroll-mt-24 space-y-8">
          
          {/* Eyebrow & Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] text-[#8AB4F8] text-xs font-sans font-medium uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              01 / Web3 Case Study
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs sm:text-sm font-sans font-medium text-white/60">Kaspa Network</span>
            <span className="text-white/20">•</span>
            <span className="text-xs sm:text-sm font-sans text-[#8AB4F8] font-medium">Production Release</span>
          </div>

          {/* Heading H1 (No trailing dot) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-white tracking-tight leading-[1.08] max-w-5xl eclipse-glow">
            PPKAS — Web3 P2E Экосистема на базе Kaspa
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm sm:text-base text-white/70 font-sans pt-1">
            <span>Middle+ Product Designer</span>
            <span className="text-white/20">•</span>
            <span>Апрель 2025 – Май 2026</span>
            <span className="text-white/20">•</span>
            <span className="text-neutral-300">Web3, P2E, DevSecOps</span>
          </div>

          {/* Metric Cards: Ключевой импакт */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            {/* Metric 1 */}
            <div
              onMouseMove={handleMouseMove}
              className="bento-card p-8 sm:p-10 bg-[#0e1118] border-0 flex flex-col justify-between"
            >
              <div>
                <div className="text-5xl sm:text-6xl font-display font-light text-[#8AB4F8] tracking-tight mb-4 drop-shadow-[0_0_24px_rgba(138,180,248,0.25)]">
                  +22%
                </div>
                <div className="text-lg sm:text-xl font-display font-medium text-white mb-2">
                  D1 Retention
                </div>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed pt-4 border-t border-white/[0.06]">
                За счет бесшовного онбординга и мгновенного доступа к игровому процессу
              </p>
            </div>

            {/* Metric 2 */}
            <div
              onMouseMove={handleMouseMove}
              className="bento-card p-8 sm:p-10 bg-[#0e1118] border-0 flex flex-col justify-between"
            >
              <div>
                <div className="text-5xl sm:text-6xl font-display font-light text-[#8AB4F8] tracking-tight mb-4 drop-shadow-[0_0_24px_rgba(138,180,248,0.25)]">
                  89%
                </div>
                <div className="text-lg sm:text-xl font-display font-medium text-white mb-2">
                  Wallet Conversion
                </div>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed pt-4 border-t border-white/[0.06]">
                Конверсия создания некастодиальных кошельков благодаря упрощению настройки и минтинга
              </p>
            </div>

            {/* Metric 3 */}
            <div
              onMouseMove={handleMouseMove}
              className="bento-card p-8 sm:p-10 bg-[#0e1118] border-0 flex flex-col justify-between"
            >
              <div>
                <div className="text-5xl sm:text-6xl font-display font-light text-[#8AB4F8] tracking-tight mb-4 drop-shadow-[0_0_24px_rgba(138,180,248,0.25)]">
                  +20%
                </div>
                <div className="text-lg sm:text-xl font-display font-medium text-white mb-2">
                  Registration Velocity
                </div>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed pt-4 border-t border-white/[0.06]">
                Оптимизация регистрации и скорости адаптации новых игроков по итогам UX-аудита
              </p>
            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* БЛОК 2: Игровые механики и анимации (P2E Core Loops)                     */}
        {/* ========================================================================= */}
        <section className="scroll-mt-24 space-y-8">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8AB4F8] font-sans font-medium mb-3">
              <Play className="w-4 h-4 fill-current" />
              P2E Core Loops
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-light text-white tracking-tight eclipse-glow mb-3">
              Игровые механики и анимации
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed max-w-4xl">
              Проектирование вовлекающих казуальных циклов внутри Telegram WebApp для роста ежедневной активности аудитории. Быстрые игровые сессии, мгновенный отклик и прозрачная интеграция с блокчейном Kaspa обеспечивают высокий retention
            </p>
          </div>

          {/* 3 Kinescope Players Grid (Vertical Mobile Format) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Video 1: Открытие кейсов / Лутбоксы */}
            <div
              onMouseMove={handleMouseMove}
              className="bento-card p-4 sm:p-5 bg-[#0e1118] border-0 flex flex-col justify-between"
            >
              <div className="mb-4">
                <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#8AB4F8] block mb-1">
                  Механика // 01
                </span>
                <h3 className="text-base sm:text-lg font-display font-medium text-white">
                  Открытие кейсов (Лутбоксы)
                </h3>
              </div>
              <div className="relative w-full rounded-2xl overflow-hidden bg-black/60 shadow-xl">
                <iframe
                  src="https://kinescope.io/embed/rXVGWkC4aQaLZ1sZ4grHiN"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full aspect-[544/848] rounded-2xl"
                  title="Открытие кейсов / Лутбоксы"
                />
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs text-neutral-400 font-sans">
                Анимация лутбоксов, дропы наград и мгновенная валидация транзакций
              </div>
            </div>

            {/* Video 2: Space Hopper — механика Doodle Jump */}
            <div
              onMouseMove={handleMouseMove}
              className="bento-card p-4 sm:p-5 bg-[#0e1118] border-0 flex flex-col justify-between"
            >
              <div className="mb-4">
                <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#8AB4F8] block mb-1">
                  Механика // 02
                </span>
                <h3 className="text-base sm:text-lg font-display font-medium text-white">
                  Space Hopper (Doodle Jump)
                </h3>
              </div>
              <div className="relative w-full rounded-2xl overflow-hidden bg-black/60 shadow-xl">
                <iframe
                  src="https://kinescope.io/embed/eH47V3WLJBZfvu7rrjCX4m"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full aspect-[576/1280] rounded-2xl"
                  title="Space Hopper — механика Doodle Jump"
                />
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs text-neutral-400 font-sans">
                Вертикальный раннер с динамическими платформами и счетчиком очков
              </div>
            </div>

            {/* Video 3: Crazy Rocket — механика Flappy Bird */}
            <div
              onMouseMove={handleMouseMove}
              className="bento-card p-4 sm:p-5 bg-[#0e1118] border-0 flex flex-col justify-between"
            >
              <div className="mb-4">
                <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#8AB4F8] block mb-1">
                  Механика // 03
                </span>
                <h3 className="text-base sm:text-lg font-display font-medium text-white">
                  Crazy Rocket (Flappy Bird)
                </h3>
              </div>
              <div className="relative w-full rounded-2xl overflow-hidden bg-black/60 shadow-xl">
                <iframe
                  src="https://kinescope.io/embed/vo6zHjGLb7DmzzXxyVVHez"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full aspect-[576/1280] rounded-2xl"
                  title="Crazy Rocket — механика Flappy Bird"
                />
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs text-neutral-400 font-sans">
                Аркадная механика с физикой гравитации и препятствиями в космосе
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* БЛОК 3: Игровая графика и сборка ассетов в Figma                          */}
        {/* ========================================================================= */}
        <section className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8AB4F8] font-sans font-medium mb-3">
                <Figma className="w-4 h-4" />
                Game Design & Sprites
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-light text-white tracking-tight eclipse-glow mb-3">
                Игровая графика и сборка ассетов в Figma
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed max-w-4xl">
                Создание UI-компонентов, проработка состояний препятствий, платформ и спрайтов для мини-игр экосистемы прямо в Figma для оперативной сборки разработчиками
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] text-xs text-[#8AB4F8] font-sans shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>3 макета из Figma</span>
            </div>
          </div>

          {/* Figma Game Assets Showcase */}
          <div className="space-y-6">
            {FIGMA_GAMES.map((game, idx) => (
              <div
                key={idx}
                onMouseMove={handleMouseMove}
                className="bento-card p-6 sm:p-8 bg-[#0e1118] border-0 rounded-2xl group hover:bg-[#121622] transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#8AB4F8] block mb-1">
                      {game.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-medium text-white">
                      {game.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans md:max-w-md leading-relaxed">
                    {game.description}
                  </p>
                </div>
                <div className="w-full rounded-xl overflow-hidden bg-black/50 border-0 relative group-hover:scale-[1.005] transition-transform duration-300">
                  <img
                    src={game.file}
                    alt={game.title}
                    className="w-full h-auto object-contain filter drop-shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* БЛОК 4: Архитектура экранов Web3-приложения                              */}
        {/* ========================================================================= */}
        <section className="scroll-mt-24 space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8AB4F8] font-sans font-medium mb-3">
              <Smartphone className="w-4 h-4" />
              App Flows & Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-light text-white tracking-tight eclipse-glow mb-3">
              Архитектура экранов Web3-приложения
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed max-w-4xl">
              Флоу привязки некастодиального кошелька Kaspa, экраны инвентаря, квестов и лидерборда
            </p>
          </div>

          {/* Slot for Application Screens */}
          <div
            onMouseMove={handleMouseMove}
            className="bento-card p-10 sm:p-14 bg-[#0e1118] border-0 text-center rounded-2xl relative overflow-hidden"
          >
            <div className="max-w-2xl mx-auto flex flex-col items-center justify-center space-y-4 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#8AB4F8]/[0.08] flex items-center justify-center text-[#8AB4F8] mb-2">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-white">
                [Слот под экраны приложения]
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                Сюда будут встроены макеты экранов привязки некастодиального кошелька Kaspa, инвентаря, квестов и лидерборда
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] text-xs text-white/60 font-mono">
                <span>Папка: /public/images/cases/ppkas/screens/</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#8AB4F8]/[0.02] via-transparent to-transparent pointer-events-none" />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* БЛОК 5: Виральность и коммуникации в Telegram                            */}
        {/* ========================================================================= */}
        <section className="scroll-mt-24 space-y-8">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8AB4F8] font-sans font-medium mb-3">
              <Send className="w-4 h-4" />
              Telegram Growth & Community
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-light text-white tracking-tight eclipse-glow mb-3">
              Виральность и коммуникации в Telegram
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed max-w-4xl">
              Оформление канала и удержание сообщества — серия кастомных Telegram Stories, а также пак стикеров (генерация базы с последующей ручной отрисовкой и доводкой векторов)
            </p>
          </div>

          {/* Subpart A: Telegram Stories Showcase (5 Stories Rendered) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#8AB4F8] block mb-1">
                  Виральный контент
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-white">
                  Серия кастомных Telegram Stories (5 креативов • 3D & UI)
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] text-xs text-[#8AB4F8] font-sans">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Загружено 5 историй</span>
              </div>
            </div>

            {/* 5-Stories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {TELEGRAM_STORIES.map((st, idx) => (
                <div
                  key={idx}
                  onMouseMove={handleMouseMove}
                  className="bento-card p-3 sm:p-4 bg-[#0e1118] border-0 rounded-2xl flex flex-col group hover:bg-[#121622] transition-colors"
                >
                  <div className="w-full aspect-[9/16] rounded-xl bg-black/60 overflow-hidden mb-3 relative group-hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src={st.file}
                      alt={st.headline}
                      className="w-full h-full object-cover object-center filter drop-shadow-md"
                    />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#8AB4F8] block mb-1">
                    {st.tag}
                  </span>
                  <div className="text-sm font-display font-medium text-white leading-snug mb-1">
                    {st.headline}
                  </div>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed line-clamp-2">
                    {st.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Subpart B: Loaded Sticker Pack (18 Stickers Rendered) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#8AB4F8] block mb-1">
                  Активы сообщества
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-white">
                  Официальный пак стикеров PPKAS (18 ассетов • Векторная доводка)
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] text-xs text-[#8AB4F8] font-sans">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Загружено 18 стикеров</span>
              </div>
            </div>

            {/* 18-Sticker Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {STICKERS.map((st, idx) => (
                <div
                  key={idx}
                  onMouseMove={handleMouseMove}
                  className="bento-card p-4 sm:p-5 bg-[#0e1118] border-0 flex flex-col items-center text-center group hover:bg-[#121622] transition-colors"
                >
                  <div className="w-full aspect-square rounded-2xl bg-black/40 flex items-center justify-center p-3 mb-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={st.file}
                      alt={st.title}
                      className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-white/40 block mb-1">
                    {st.badge}
                  </span>
                  <div className="text-xs sm:text-sm font-display font-medium text-white leading-snug">
                    {st.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* Нижний возврат к проектам (лаконично, без дублирующих кнопок)             */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-sans font-medium hover:bg-white/90 transition-all active:scale-95 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Назад к проектам</span>
          </button>

          <p className="text-xs sm:text-sm text-white/40 font-sans">
            PPKAS • Kaspa Network • Анна Агабекян (атома)
          </p>
        </section>

      </main>
    </div>
  );
};
