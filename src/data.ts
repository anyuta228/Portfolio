import { ProjectCase, CareerRole, ContactChannel, MotionWork, Endorsement, ExpertiseCard } from './types.ts';

export const PERSONAL_RESUME = {
  name: 'Анна Агабекян',
  enName: 'Anna Aghabekyan',
  title: 'Product UX/UI Designer',
  roleLevel: 'Product UX/UI Designer • AI-Assisted Full-Cycle',
  experienceYears: '4 года 11 месяцев',
  expectedSalary: 'Обговаривается',
  location: 'Октябрьский, Башкортостан',
  workPreference: 'Готова к переезду, гибриду либо офису',
  email: 'project.atoma@yandex.com',
  telegramPersonal: 'https://t.me/vaivin',
  telegramPersonalHandle: '@vaivin',
  telegramChannel: 'https://t.me/projectatoma',
  telegramChannelHandle: '@projectatoma',
  dprofileUrl: 'https://dprofile.ru/myonlyregret',
  behanceUrl: 'https://behance.net/exussremo',
  dribbbleUrl: 'https://dribbble.com/annaatoma',
  linkedinUrl: 'https://linkedin.com',
  qualification: {
    year: '2022',
    title: 'UX/UI дизайн мобильных приложений Pro',
    honors: 'ЗОЛОТОЙ СЕРТИФИКАТ',
    school: 'UPROCK'
  },
  bio: 'Я проектирую интерфейсы для сложных цифровых продуктов более 5 лет. Проектирую интерфейсы вручную в Figma, а фронтенд и серверную логику для пет-проектов и коммерческих сервисов (как «Белоснежка») реализую в коде с помощью связки современных AI-агентов (Antigravity + Gemini). В фокусе: системность, скорость взаимодействия и конверсионные петли. В портфолио — P2E-экосистема PPKAS на блокчейне Kaspa (+22% D1 Retention, 89% конверсия создания Web3-кошельков), EdTech-платформа адаптивного обучения LIBRIUM, масштабируемые дизайн-системы для B2B SaaS (KFBIO, FitVend, StitchLab) и запуск веб-сервиса кафе «Белоснежка» (дизайн + фронтенд + серверная часть с AI).',
};

export const CORE_METRICS = [
  { value: '89%', label: 'Конверсия Web3-кошельков', context: 'Переработка процесса нанесения токенов и кастомной настройки (PPKAS)' },
  { value: '+22%', label: 'Рост Day 1 Retention', context: 'Поэтапный онбординг с мгновенным доступом к игре в P2E платформе' },
  { value: '+20%', label: 'Оптимизация регистрации', context: 'Комплексный UX-аудит и устранение критических барьеров' },
  { value: '5 мин → 1 мин', label: 'Сокращение времени задач', context: 'Редизайн UX/UI панели управления B2B SaaS' },
  { value: '+30%', label: 'Завершенные регистрации', context: 'Рост в 1-й месяц: переработка флоу записи на мобильные курсы' },
  { value: '-40%', label: 'Передача макетов в код', context: 'Масштабируемая дизайн-система в Figma из 50+ мастер-компонентов' }
];

export const SKILL_GROUPS = [
  {
    category: 'UX/UI & Продуктовая стратегия',
    code: 'MOD_01',
    skills: [
      'UX-аудит и эвристический анализ',
      'Глубинные интервью (CustDev) & JTBD',
      'Customer Journey Mapping (CJM)',
      'Юзабилити-тестирование (модерируемое)',
      'A/B тестирование и конверсионные воронки',
      'Информационная архитектура (IA)',
      'Аналитика поведения пользователей'
    ]
  },
  {
    category: 'Дизайн-системы & Прототипирование',
    code: 'MOD_02',
    skills: [
      'Figma Tokens, переменные и варианты',
      'Библиотеки 50+ компонентов с автолейаутами',
      'High-Fidelity вайрфреймы и спецификации',
      'Кликабельные прототипы (Figma / Framer)',
      'Miro Flow Mapping & воркшопы',
      'Передача макетов в разработку (Handoff)'
    ]
  },
  {
    category: 'Отраслевой фокус & Технологии',
    code: 'MOD_03',
    skills: [
      'AI-Assisted Full-Cycle Development (Antigravity + Gemini)',
      'Проектирование в Figma и запуск сервисов в коде с AI',
      'Релиз веб-сервисов: аренда хостинга, домен, DNS & SSL',
      'EdTech: адаптивное обучение и графы знаний',
      'Web3 & блокчейн (Kaspa Network)',
      'Некастодиальные кошельки & безопасность (DevSecOps)'
    ]
  }
];

export const EXPERTISE_CARDS: ExpertiseCard[] = [
  {
    id: 'complex-systems',
    code: 'FOCUS // 01',
    title: 'Архитектура сложных систем',
    focus: 'Web3, FinTech, B2B-платформы',
    leadValue: 'Быстро погружаюсь в сложную доменную логику, финансовые потоки и многоуровневые сценарии. Проектирую интерфейсы так, чтобы снижать порог входа и когнитивную нагрузку для пользователя',
    highlights: [
      'Многоуровневые пользовательские сценарии и ветвления',
      'Некастодиальные кошельки и блокчейн-инфраструктура (Kaspa)',
      'Снижение когнитивной нагрузки в насыщенных аналитикой интерфейсах',
      'Безопасность транзакций и валидация критических состояний'
    ],
    metricsTag: 'Web3 & FinTech UX'
  },
  {
    id: 'product-metrics',
    code: 'FOCUS // 02',
    title: 'Продуктовое мышление и метрики',
    focus: 'UX-исследования, CJM, оптимизация воронок',
    leadValue: 'Принимаю дизайн-решения на основе данных, пользовательских интервью и аудитов. Оптимизирую онбординги и ключевые конверсионные пути, влияя на удержание (Retention) и бизнес-показатели продукта',
    highlights: [
      'Глубинные CustDev-интервью и выявление болей аудитории',
      'Проектирование Customer Journey Map (CJM) и Jobs To Be Done',
      'UX-аудит, устранение критических фрикций и рост конверсии',
      'Оптимизация онбординга и влияние на Day 1 Retention (+22%)'
    ],
    metricsTag: 'CJM & Retention'
  },
  {
    id: 'design-systems-code',
    code: 'FOCUS // 03',
    title: 'Системный дизайн и передача в код',
    focus: 'Design Systems, спецификации, AI-assisted tooling',
    leadValue: 'Строю гибкие, масштабируемые дизайн-системы в Figma с продуманными состояниями и токенами. Говорю на одном языке с разработчиками, сокращая время передачи макетов в продакшн',
    highlights: [
      'Масштабируемые дизайн-системы в Figma: токены, варианты, автолейауты',
      'Продуманные краевые состояния (edge cases, empty states, validation)',
      'Бесшовная передача в разработку без домысливания со стороны инженеров',
      'AI-assisted прототипирование и валидация продуктовых гипотез в коде'
    ],
    metricsTag: 'Design Tokens & Handoff'
  }
];

export const PROJECTS: ProjectCase[] = [
  {
    id: 'belosnezhka',
    index: '01',
    title: 'КАФЕ «БЕЛОСНЕЖКА» // ЦИФРОВОЙ ВЕБ-СЕРВИС И ОНЛАЙН-МЕНЮ',
    subtitle: 'Цифровая трансформация легендарного кафе: авторский UX/UI в Figma, онлайн-меню, умная корзина и веб-сервис при поддержке AI-инструментов',
    category: 'fullstack-web',
    origin: 'commercial',
    originLabel: 'Коммерческий проект • Live WIP • В разработке',
    isLatest: true,
    isInProgress: true,
    period: '2025 — 2026 • В разработке',
    role: 'Product UX/UI Designer (Manual Figma) & AI-Assisted Dev',
    company: 'Кафе «Белоснежка» (г. Октябрьский)',
    tags: ['В разработке', 'Live WIP', 'Figma (Manual UX/UI)', 'AI-Assisted Dev', 'Онлайн-меню', 'Умная корзина', 'HoReCa Digital', 'belosnezhka-cafe.ru'],
    metrics: 'Авторский UX/UI + запуск веб-сервиса с AI, онлайн-меню и корзина на belosnezhka-cafe.ru',
    description: 'Цифровая трансформация легендарного кафе (г. Октябрьский, с 2003 года). Полный авторский UX/UI-дизайн спроектирован вручную в Figma, архитектура фронтенда и серверной логики реализована в коде при поддержке современных AI-агентов (Antigravity + Gemini).',
    longDescription: 'Проект решает задачу комплексной цифровой трансформации легендарного заведения в г. Октябрьский (работает с 2003 года). Полный UX/UI-дизайн спроектирован вручную Анной в Figma: визуальный стиль, дизайн-система, адаптивные сетки, каталог кухни и бара («Мангал и стейки», «Салаты», «Банкетные залы»), интерактивная корзина и предзаказ. Фронтенд и серверная логика реализованы в коде с помощью связки современных AI-агентов (Antigravity + Gemini), обеспечивая быстрый отклик и боевой деплой на домене belosnezhka-cafe.ru.',
    problemStatement: 'У заведения отсутствовал централизованный веб-сервис: гости искали меню по разрозненным фотографиям в соцсетях, что снижало конверсию в заказы и бронирование столиков.',
    solutionHypothesis: 'Быстрый адаптивный веб-сервис с онлайн-меню, интерактивной корзиной, кнопками прямого предзаказа и локацией в г. Октябрьский увеличит приток гостей и структурирует поток обращений.',
    duties: [
      'Анализ специфики легендарного кафе (с 2003 года), структуры кухни и бара, сценариев гостей и банкетов',
      'Полное ручное проектирование UX/UI в Figma: фирменная стилистика, дизайн-система компонентов, сетки для десктопа и смартфонов',
      'Проектирование интерактивного онлайн-меню по категориям (мангал, стейки, салаты, напитки, банкетные залы)',
      'Проектирование сценариев умной корзины и быстрого оформления предзаказа',
      'Реализация фронтенда и серверной логики в коде при поддержке AI-агентов (Antigravity + Gemini)',
      'Инфраструктура: покупка и делегирование домена belosnezhka-cafe.ru, хостинг с SSL-сертификатом, боевой продакшн-деплой'
    ],
    achievements: [
      'Создан авторский UX/UI-дизайн веб-сервиса с премиальной гастрономической эстетикой и адаптивностью под смартфоны',
      'Проект успешно запущен в боевой продакшн на домене https://belosnezhka-cafe.ru/ (статус Live WIP / активное развитие)',
      'Интегрированы онлайн-меню кухни и бара, умная корзина и быстрое бронирование',
      'Полная синергия ручного проектирования в Figma и скоростной разработки фронтенда и бэкенда с помощью AI-агентов'
    ],
    keyFeatures: [
      'Онлайн-меню: мангал и стейки, салаты, закуски, банкеты с актуальными ценами',
      'Умная корзина и адаптивное оформление предзаказа',
      'Собственный домен https://belosnezhka-cafe.ru/ с защищенным HTTPS',
      'Быстрое бронирование Большого и Малого банкетных залов',
      'Интерактивная карта и контакты в г. Октябрьский'
    ],
    videoTitle: 'Демонстрация веб-сервиса кафе Белоснежка и этапы разработки',
    videoUrl: '',
    videoStages: [
      {
        step: '01',
        title: 'Брифинг & Гастрономическая HoReCa концепция',
        desc: 'Сбор контента кафе «Белоснежка», анализ категорий кухни и банкетных сценариев гостей',
        duration: 'Этап 1'
      },
      {
        step: '02',
        title: 'Авторский UX/UI дизайн в Figma',
        desc: 'Проектирование дизайна вручную: фирменная теплая кофейно-золотая палитра, типографика, адаптивное меню и корзина',
        duration: 'Этап 2'
      },
      {
        step: '03',
        title: 'AI Full-stack разработка',
        desc: 'Разработка фронтенда и серверной части при поддержке AI-инструментов, интерактивная фильтрация и заказ',
        duration: 'Этап 3'
      },
      {
        step: '04',
        title: 'Деплой на belosnezhka-cafe.ru',
        desc: 'Регистрация домена, хостинг, SSL-сертификаты и боевой релиз сервиса',
        duration: 'Production Live WIP'
      }
    ],
    targetAudience: [
      {
        persona: 'Житель или гость г. Октябрьский',
        role: 'Посетитель кафе',
        painPoint: 'Хочет быстро посмотреть меню с актуальными ценами со смартфона, собрать корзину и забронировать столик или банкет без лишних звонков'
      }
    ],
    externalLinks: {
      liveSite: 'https://belosnezhka-cafe.ru/',
      telegram: 'https://t.me/vaivin'
    },
    accentColor: '#D97706',
    coverImage: './images/cases/belosnezhka-cover.jpg',
    previewVisual: 'belosnezhka-cafe'
  },
  {
    id: 'ppkas',
    index: '02',
    title: 'PPKAS // KASPA P2E & WEB3 ECOSYSTEM',
    subtitle: 'Продуктовый дизайн P2E-платформы на стыке Web3, игр и блокчейн-инфраструктуры Kaspa',
    category: 'web3',
    origin: 'commercial',
    originLabel: 'Коммерческий проект • Web3 & P2E',
    isLatest: false,
    period: '2025 — 2026',
    role: 'Lead Product Designer (Web3 Ecosystem)',
    company: 'PPKAS Core Team',
    tags: ['Коммерческий проект', 'Web3', 'Kaspa Blockchain', 'P2E Games', 'UX Audit', 'Wallet Setup', 'DevSecOps'],
    metrics: '+22% D1 Retention, 89% Wallet Conversion, +20% New User Speed',
    description: 'Разработка, совершенствование и аудит UX/UI для P2E-игры на блокчейне Kaspa в международной команде. Архитектура онбординга, retention, токеномика и некастодиальные кошельки.',
    longDescription: 'В рамках международной команды PPKAS был проведен комплексный UX-аудит P2E-экосистемы. Главный вызов состоял в устранении высокого порога входа в Web3: сложные сид-фразы, комиссии сети и настройка адресов отпугивали новичков. Был спроектирован бесшовный онбординг, где игра доступна мгновенно, а кошелек создается в 2 шага с понятной визуализацией транзакций.',
    problemStatement: 'Сложный криптографический онбординг отсекал более 60% потенциальных игроков до первого игрового действия.',
    solutionHypothesis: 'Отложенное создание кошелька и мгновенный доступ к геймплею поднимут D1 удержание минимум на 15%.',
    duties: [
      'Разработка, совершенствование и проведение аудита UX/UI для продукта P2E на стыке Web3, игр и блокчейн-инфраструктуры Kaspa в международной команде',
      'Разработка пользовательских сценариев, интерфейсов, прототипов и визуальных решений для игровых и финансовых механик продукта',
      'Организация и проведение пользовательских исследований, интервью и тестирования интерфейса',
      'Сотрудничество с продакт-менеджерами, разработчиками и специалистами по безопасности для достижения целей Web3 и DevSecOps',
      'Подготовка, презентация и внедрение основных дизайнерских решений'
    ],
    achievements: [
      'Проведен полный UX-аудит платформы P2E, устранена критическая ошибка, что позволило увеличить скорость и объем регистрации новых пользователей на 20%',
      'Разработан и внедрен поэтапный процесс адаптации, обеспечивающий мгновенный доступ к игре и повысивший удержание пользователей в первый день на 22%',
      'Достигнут 89% показатель успешной конверсии при создании кошельков благодаря переработке всего процесса нанесения токенов и настройки кошелька',
      'В сотрудничестве с командами инженеров и безопасности внедрены ключевые игровые циклы и финансовые механики'
    ],
    keyFeatures: [
      'Non-Custodial Kaspa Wallet с 2-step сид-онбордингом и биометрией',
      'P2E Game Loop Dashboard: мониторинг наград, стейкинга и дропов',
      'Спецификации для DevSecOps с валидацией анти-фрод проверок',
      'Figma дизайн-система токенов для мобильных и десктоп клиентов'
    ],
    externalLinks: {
      dprofile: 'https://dprofile.ru/myonlyregret',
      behance: 'https://behance.net/exussremo',
      telegram: 'https://t.me/vaivin'
    },
    accentColor: '#16A34A',
    coverImage: './images/cases/ppkas-cover.png',
    previewVisual: 'web3-kaspa'
  },
  {
    id: 'librium',
    index: '03',
    title: 'LIBRIUM // МОБИЛЬНОЕ ПРИЛОЖЕНИЕ ДЛЯ ОБУЧЕНИЯ',
    subtitle: 'Образовательное приложение (EdTech): микрообучение, интерактивный граф знаний и сессии фокуса (6 месяцев разработки)',
    category: 'edtech',
    origin: 'commercial',
    originLabel: 'Коммерческий проект • EdTech Platform',
    isLatest: false,
    period: '2024 — 2025',
    role: 'Lead Product & UX Designer',
    company: 'EdTech Startup',
    tags: ['Коммерческий проект', 'EdTech', 'iOS & Android', 'Микрообучение', 'CustDev', 'Граф знаний', 'Dprofile'],
    metrics: '18 CustDev интервью, 4 итерации кликабельного прототипа, +42% скорость усвоения тем',
    description: 'Комплексное проектирование мобильного EdTech-приложения (цикл разработки 6 месяцев ДО перехода в PPKAS): от глубинных интервью и CJM до интерактивного графа знаний и дизайн-системы.',
    longDescription: 'Проект LIBRIUM — мобильное образовательное приложение, проектировавшееся на протяжении 6 месяцев. Задача — переосмыслить опыт мобильного обучения. Традиционные 40-минутные вебинары показывают отток из-за когнитивной усталости. В LIBRIUM спроектировано дробление тем на 3–5 минутные кванты знаний, интерактивный граф взаимосвязей и алгоритм интервального повторения.',
    problemStatement: 'Студенты и специалисты забрасывают до 80% онлайн-курсов из-за монолитного формата и отсутствия видимого прогресса при обучении на ходу.',
    solutionHypothesis: 'Разбивка курсов на 4-минутные интерактивные сессии с визуальным графом взаимосвязи понятий увеличит недельное удержание пользователей (W1 Retention) минимум на 35%.',
    duties: [
      'Проведение 18 глубинных проблемных и решенческих интервью с целевой аудиторией (CustDev)',
      'Формирование продуктовых гипотез, сценариев использования и структуры CJM',
      'Проектирование информационной архитектуры, интерактивного графа знаний и карточек микроуроков',
      'Разработка дизайн-системы и библиотеки компонентов в Figma с токенами для темной и светлой темы',
      'Сборка кликабельного интерактивного прототипа в Figma/Framer с реалистичной физикой микро-анимаций',
      'Модерирование юзабилити-тестирований и подготовка документации для разработчиков'
    ],
    achievements: [
      '18 глубинных CustDev-интервью выявили ключевой паттерн: 76% пользователей учатся урывками в транспорте или между рабочими задачами',
      '4 итерации кликабельного прототипа позволили устранить трение в навигации по древу навыков',
      'По результатам закрытого тестирования скорость освоения сложных понятий выросла на 42% по сравнению с чтением лонгридов',
      'Создана масштабируемая дизайн-система из 80+ компонентов и токенов, готовая к быстрой верстке',
      'Кейс опубликован на Dprofile: dprofile.ru/case/181859/librium-mobilnoe-prilozenie-dlia-obuceniia'
    ],
    keyFeatures: [
      'Интерактивный граф знаний: наглядные связи между сложными терминами',
      'Микро-сессии 3–5 минут: удобный формат для обучения на ходу',
      'Интервальное повторение (Spaced Repetition) на базе кривой Эббингауза',
      'Режим глубокого фокуса с таймером без отвлекающих уведомлений'
    ],
    videoTitle: 'Этапы проектирования и UI-разработки приложения Librium',
    videoUrl: '',
    videoStages: [
      {
        step: '01',
        title: 'CustDev & Исследование болей',
        desc: '18 глубинных интервью, фиксация барьеров традиционных онлайн-курсов, CJM текущего опыта',
        duration: 'Недели 1–2'
      },
      {
        step: '02',
        title: 'Архитектура & Граф знаний',
        desc: 'Проектирование информационной структуры, связей между модулями и алгоритма интервального повторения',
        duration: 'Недели 3–4'
      },
      {
        step: '03',
        title: 'Low-Fi вайрфреймы & Тест гипотез',
        desc: 'Проверка сценария прохождения микро-урока на 5 респондентах в черно-белых прототипах',
        duration: 'Недели 5–6'
      },
      {
        step: '04',
        title: 'Дизайн-система & Токены',
        desc: 'Палитра спокойных оттенков без когнитивного шума, сетка типографики, 80+ UI-компонентов',
        duration: 'Недели 7–8'
      },
      {
        step: '05',
        title: 'Интерактивный кликабельный прототип',
        desc: 'Сборка анимаций переходов, микровзаимодействий и проведение финального юзабилити-тестирования',
        duration: 'MVP финализация'
      }
    ],
    targetAudience: [
      {
        persona: 'Михаил, 24 года',
        role: 'Junior Frontend Developer',
        painPoint: 'Хочет прокачать алгоритмы и архитектуру, но после рабочего дня нет сил смотреть 2-часовые вебинары'
      },
      {
        persona: 'Елена, 28 лет',
        role: 'Product Analyst',
        painPoint: 'Изучает финансовое моделирование, часто отвлекается на звонки и теряет контекст пройденного материала'
      }
    ],
    externalLinks: {
      behance: 'https://www.behance.net/gallery/247098601/LIBRIUM-a-mobile-application-for-education',
      dprofile: 'https://dprofile.ru/case/181859/librium-mobilnoe-prilozenie-dlia-obuceniia',
      telegram: 'https://t.me/vaivin'
    },
    accentColor: '#0D9488',
    coverImage: './images/cases/librium-cover.png',
    previewVisual: 'librium-mobile'
  },
  {
    id: 'ez-marketplace',
    index: '04',
    title: 'EZ // ПЛАТФОРМА ДЛЯ ПОИСКА СПЕЦИАЛИСТОВ',
    subtitle: 'Платформа для поиска специалистов (Mobile UX/UI Design): прозрачный расчет смет, подтвержденная квалификация мастеров и безопасная сделка',
    category: 'saas',
    origin: 'commercial',
    originLabel: 'Флагманский проект • Behance Curated',
    isLatest: false,
    period: '2021 — 2022',
    role: 'Mobile UX/UI Design',
    company: 'EZ Marketplace (Флагманский кейс)',
    tags: ['Behance Curated', 'Community Featured', 'Mobile UX/UI', 'Маркетплейс', 'Поиск специалистов', 'CJM 2 ролей', 'Dprofile'],
    metrics: 'Behance Curated, 20+ сценариев CJM, поиск мастера <2 мин, Золотой сертификат UPROCK',
    description: 'Флагманский кейс: сервис быстрого поиска исполнителей и заказчиков. Проект попал в рекомендации Behance (Featured / Curated), вызвал высокую вовлеченность профессионального сообщества и стал главным драйвером входящих офферов и коммерческих заказов.',
    longDescription: 'Проект EZ — мобильная платформа для быстрого поиска проверенных специалистов и безопасного проведения сделок. Проект был отмечен кураторами Behance (Featured / Curated) и вызвал высокую вовлеченность дизайн-сообщества, став главным драйвером входящих офферов и коммерческих контрактов. В проекте детально проработаны CJM для двух ролей (заказчик и исполнитель), модульная система карточек с фиксированными тарифами и сквозной сценарий безопасной сделки с автоматическим расчетом сметы.',
    problemStatement: 'Заказчики тратят часы на разбор сотен нерелевантных откликов, а исполнители сталкиваются с непрозрачными условиями и задержками выплат.',
    solutionHypothesis: 'Стандартизированная карточка специалиста с подтвержденными навыками, витриной работ и авто-расчетом сметы сократит время первого контакта до 2 минут.',
    duties: [
      'Конкурентный анализ ведущих платформ поиска специалистов и фриланс-бирж',
      'Проработка детальных User Personas и карты путей пользователя (CJM) для двух ролей: Заказчик и Специалист',
      'Проектирование информационной архитектуры, фильтров каталога и карточек услуг',
      'Разработка модульной сетки и адаптивной дизайн-системы для мобильных устройств',
      'Интерактивное прототипирование ключевых сценариев безопасной сделки в Figma'
    ],
    achievements: [
      'Проект получил кураторскую отметку Behance Curated / Community Featured и вошел в рекомендации платформы',
      'Высокая вовлеченность дизайн-сообщества сделала кейс ключевым драйвером входящих офферов и коммерческих заказов',
      'Спроектирован сквозной сценарий поиска, согласования сметы и оформления безопасной сделки (<2 мин до заказа)',
      'Создана чистая модульная дизайн-система карточек с акцентом на типографику и сканируемость',
      'Проект успешно защищен и отмечен Золотым сертификатом школы UPROCK'
    ],
    keyFeatures: [
      'Behance Curated: признание профессиональным дизайн-сообществом',
      'Умная фильтрация по компетенциям, ставкам и доступности специалиста',
      'Прозрачный калькулятор стоимости и расчет сроков выполнения задач',
      'Быстрый просмотр кейсов портфолио прямо из списка специалистов',
      'Безопасная сделка (Escrow) с пошаговым подтверждением этапов'
    ],
    externalLinks: {
      behance: 'https://www.behance.net/gallery/137808103/EZ-Mobile-UXUI-design-for-freelance-service',
      dprofile: 'https://dprofile.ru/case/876/ez-bystryi-poisk-ispolnitelei-i-zakazcikov',
      telegram: 'https://t.me/vaivin'
    },
    accentColor: '#2563EB',
    coverImage: './images/cases/ez-marketplace-cover.png',
    previewVisual: 'ez-marketplace'
  },
  {
    id: 'community-design',
    index: '05',
    title: 'COMMUNITY DESIGN // B2B SAAS & E-COMMERCE',
    subtitle: 'Комплексные продуктовые решения для стартапов и B2B экосистем (KFBIO, FITVEND, STITCHLAB)',
    category: 'saas',
    origin: 'commercial',
    originLabel: 'Коммерческий проект • Community Design',
    period: 'Май 2022 — Апрель 2025',
    role: 'Product Designer (Freelance / Remote)',
    company: 'Community Design (KFBIO, FITVEND, STITCHLAB)',
    tags: ['Коммерческий проект', 'Community Design', 'B2B SaaS', 'E-commerce', 'Design System', 'User Testing'],
    metrics: '+30% Registrations, 5m → 1m Task Time, -40% Handoff Speed',
    description: 'Проектирование B2B SaaS панелей управления, воронки мобильных курсов и масштабируемых дизайн-систем. Ускорение рабочих сценариев пользователей в 5 раз.',
    longDescription: 'В рамках Community Design велись ключевые продуктовые направления для KFBIO, FITVEND и STITCHLAB. Для мобильных курсов переработан процесс регистрации, повысивший закрытие воронок на 30%. Для B2B SaaS создана панель управления, сократившая рутинные сценарии с 5 минут до 1 минуты.',
    duties: [
      'Проектирование воронок регистрации и адаптации пользователей в мобильных сервисах',
      'Проведение сессий пользовательского тестирования и формирование бэклога продуктовых улучшений',
      'Создание комплексных дизайн-систем в Figma с токенами и вариантами',
      'Проектирование B2B SaaS панелей управления с большими объемами аналитических данных'
    ],
    achievements: [
      'Для образовательного направления переработан флоу регистрации, что увеличило количество завершенных регистраций на 30% в первый месяц',
      'Разработана комплексная система дизайна в Figma для платформы электронной коммерции (50+ переиспользуемых компонентов), сократившая время передачи проекта на 40%',
      'Полный цикл проектирования UX/UI для панели управления B2B SaaS-сервиса: сокращение времени выполнения задач пользователями с 5 минут до 1 минуты'
    ],
    keyFeatures: [
      '50+ многократно используемых компонентов в Figma с автолейаутами',
      'B2B SaaS: фильтрация терабайтов аналитических логов с кастомными пресетами',
      'Клиентские проекты: KFBIO, FITVEND, STITCHLAB'
    ],
    externalLinks: {
      liveSite: 'https://vk.ru/community.design',
      dprofile: 'https://dprofile.ru/myonlyregret',
      behance: 'https://behance.net/exussremo'
    },
    accentColor: '#0284C7',
    coverImage: './images/cases/community-design-cover.png',
    previewVisual: 'saas-dashboard'
  }
];

export const CAREER_ROLES: CareerRole[] = [
  {
    period: 'Август 2026 — Настоящее время',
    title: 'Product UX/UI Designer (AI-Assisted Full-Cycle)',
    company: 'ATOMA',
    type: 'Авторская продуктовая практика, AI-ассистированная веб-разработка',
    location: 'Октябрьский / Remote',
    clients: ['Кафе «Белоснежка» (г. Октябрьский)'],
    duties: [
      'Полный цикл проектирования: авторский UX/UI в Figma, CustDev, интерактивные прототипы, мобильная эргономика',
      'Реализация фронтенда и серверной логики в коде с помощью современных AI-агентов (Antigravity + Gemini)',
      'Инфраструктура и релиз: покупка домена, аренда хостинга, настройка DNS/SSL и боевой запуск веб-сервиса'
    ],
    achievements: [
      'Запущена авторская продуктовая практика ATOMA (Figma UX/UI + AI-Assisted Full-Cycle Development)',
      'С нуля спроектирован, реализован в коде и запущен веб-сервис кафе «Белоснежка» — https://belosnezhka-cafe.ru/ (онлайн-меню, корзина, бронирование)'
    ]
  },
  {
    period: 'Апрель 2025 — Май 2026',
    title: 'Middle Product Designer',
    company: 'PPKAS',
    type: 'Полная занятость, удалённо',
    location: 'Remote',
    duties: [
      'Разработка, совершенствование и проведение аудита UX/UI для продукта P2E на стыке Web3, игр и блокчейн-инфраструктуры Kaspa',
      'Разработка пользовательских сценариев, интерфейсов, прототипов и визуальных решений для игровых и финансовых механик продукта',
      'Организация и проведение пользовательских исследований, интервью и тестирования интерфейса',
      'Сотрудничество с продакт-менеджерами, бизнес-аналитиками, разработчиками и специалистами по безопасности (DevSecOps)'
    ],
    achievements: [
      'UX-аудит платформы P2E устранил критическую ошибку, увеличив регистрацию новых пользователей на 20%',
      'Поэтапный онбординг повысил удержание пользователей в первый день (D1) на 22%',
      'Достигнут 89% показатель успешной конверсии при создании некастодиальных кошельков',
      'Спроектированы и внедрены основные игровые циклы и финансовые механики'
    ]
  },
  {
    period: 'Май 2022 — Апрель 2025',
    title: 'Product UX/UI Designer',
    company: 'COMMUNITY DESIGN',
    type: 'Фриланс / Клиентская практика, удалённо',
    location: 'Remote',
    summary: 'Проектирование веб-сервисов, образовательных платформ и дизайн-систем для B2B/B2C клиентов в рамках дизайн-сообщества',
    clients: ['KFBIO', 'FITVEND', 'STITCHLAB', 'LIBRIUM'],
    clientCases: [
      {
        client: 'KFBIO',
        tag: 'Корпоративный веб-сайт',
        desc: 'Проектирование структуры и адаптивного веб-сайта компании с фокусом на ясную презентацию продуктов и технологических решений.',
        value: 'Структура сайта и адаптивный UI'
      },
      {
        client: 'FITVEND',
        tag: 'B2B мобильное приложение',
        desc: 'Мобильное приложение для операторов и владельцев вендинговых сетей — аналитика остатков продукции, умные алерты и своевременная логистика пополнения аппаратов.',
        value: 'Аналитика остатков и умная логистика'
      },
      {
        client: 'STITCHLAB',
        tag: 'Брендинг & Айдентика',
        desc: 'Разработка айдентики и минималистичного логотипа бренда с масштабированием под цифровые поверхности и физическую продукцию.',
        value: 'Айдентика и минималистичный логотип'
      },
      {
        client: 'LIBRIUM',
        tag: 'EdTech MVP / 6 месяцев',
        desc: 'Сквозное проектирование мобильного EdTech-приложения для адаптивного обучения с нуля за 6 месяцев (на этапе MVP/WIP): 18 CustDev-интервью, граф знаний, CJM.',
        value: 'Сквозной дизайн EdTech MVP с нуля'
      }
    ],
    duties: [
      'Разработка воронок адаптации, мобильных потоков регистрации и B2B дашбордов',
      'Создание сквозных дизайн-систем в Figma с компонентами, переменными и автолейаутами',
      'Проведение юзабилити-тестирований и синтез результатов в продуктовый бэклог'
    ],
    achievements: [
      'KFBIO: проектирование структуры и адаптивного веб-сайта компании',
      'FITVEND: мобильное приложение для операторов и владельцев вендинговых сетей — аналитика остатков продукции, умные алерты и своевременная логистика пополнения аппаратов',
      'STITCHLAB: разработка айдентики и минималистичного логотипа бренда',
      'LIBRIUM: сквозное проектирование мобильного EdTech-приложения для адаптивного обучения с нуля за 6 месяцев (на этапе MVP/WIP)'
    ]
  },
  {
    period: 'Июль 2021 — Май 2022',
    title: 'Стажёр UX/UI дизайнер',
    company: 'UPROCK',
    type: 'Частичная занятость, удалённо',
    location: 'Remote',
    certificate: 'ЗОЛОТОЙ СЕРТИФИКАТ (UX/UI дизайн мобильных приложений Pro, 2022)',
    duties: [
      'Ведение проектов от начальной стадии исследований до финальных макетов',
      'Взаимодействие с дизайнерами и инженерами для контроля качества и дедлайнов',
      'Анализ потребностей клиентов и презентация дизайн-решений'
    ],
    achievements: [
      'Разработан проект EZ — быстрый поиск исполнителей и заказчиков (Dprofile case/876)',
      'Участие в разработке дизайна end-to-end для 2 клиентских мобильных проектов',
      'Участие в разработке новой дизайн-системы, компонентов и стилей',
      'Проведение юзабилити-тестирований и формирование рекомендаций для старшей команды'
    ]
  }
];

export const CONTACT_CHANNELS: ContactChannel[] = [
  { label: 'Telegram Direct', handle: '@vaivin', url: 'https://t.me/vaivin', type: 'telegram' },
  { label: 'Telegram Channel', handle: '@projectatoma', url: 'https://t.me/projectatoma', type: 'telegram' },
  { label: 'Email', handle: 'project.atoma@yandex.com', url: 'mailto:project.atoma@yandex.com', type: 'email' },
  { label: 'Dprofile', handle: 'dprofile.ru/myonlyregret', url: 'https://dprofile.ru/myonlyregret', type: 'portfolio' },
  { label: 'Behance', handle: 'behance.net/exussremo', url: 'https://behance.net/exussremo', type: 'portfolio' },
  { label: 'Dribbble', handle: 'dribbble.com/annaatoma', url: 'https://dribbble.com/annaatoma', type: 'portfolio' },
  { label: 'LinkedIn', handle: 'linkedin.com', url: 'https://linkedin.com', type: 'social' }
];

export const PPKAS_CASE_STEPS = [
  {
    stepNumber: '01',
    title: 'Комплексный UX-аудит и устранение фрикций',
    description: 'Глубокий анализ существующего пути пользователя, выявление узких мест и критической ошибки в процессе регистрации.',
    impact: '+20% к скорости и объему регистрации новых пользователей'
  },
  {
    stepNumber: '02',
    title: 'Поэтапный онбординг (Instant Play)',
    description: 'Разработка модели мгновенного входа в геймплей без ожидания привязки криптокошелька на первом экране.',
    impact: '+22% удержание игроков в первый день (D1 Retention)'
  },
  {
    stepNumber: '03',
    title: 'Некастодиальный кошелек Kaspa',
    description: 'Переработка процесса настройки кошелька: сокращение 7 громоздких технических шагов до 2 интуитивных действий с биометрией.',
    impact: '89% успешная конверсия создания и привязки кошельков'
  },
  {
    stepNumber: '04',
    title: 'Игровые циклы и финансовая безопасность',
    description: 'Совместное проектирование ключевых P2E-циклов, наград, стейкинга и механик безопасности с командами инженеров и DevSecOps.',
    impact: 'Готовая масштабируемая дизайн-система токенов в Figma'
  }
];

export const MOTION_WORKS: MotionWork[] = [
  {
    id: 'cirque-du-soleil',
    index: '01',
    title: 'Cirque du Soleil',
    subtitle: 'Интерактивная кинетика и сценическая магия представлений',
    category: 'Entertainment & Stage Kinematics',
    videoUrl: 'https://cdn.dribbble.com/userupload/48902959/file/dd3fe55a7f8b412d21ae64c8d8c4fdca.mp4',
    stillUrl: 'https://cdn.dribbble.com/userupload/48902959/file/still-609882c3e19c68b9aa239b2a3c9610ee.png',
    dribbbleUrl: 'https://dribbble.com/shots/27698918-Cirque-du-Soleil',
    stack: ['After Effects', 'Stage Kinematics', 'Micro-Interactions'],
    description: 'Динамическая пластика акробатических сцен, органические переходы и пространственная кинетика интерфейса, собранные вручную в Adobe After Effects.'
  },
  {
    id: 'birdman',
    index: '02',
    title: 'Birdman',
    subtitle: 'Кинематографичный интерфейс и непрерывная динамика планов',
    category: 'Cinema & Dynamic Spatial Storytelling',
    videoUrl: 'https://cdn.dribbble.com/userupload/48902951/file/d71b4761feea71e0824980cfddfb7b05.mp4',
    stillUrl: 'https://cdn.dribbble.com/userupload/48902951/file/still-3a2ac5f2981cae4cd4f5852533c3e250.png',
    dribbbleUrl: 'https://dribbble.com/shots/27698915-Birdman',
    stack: ['After Effects', 'Editorial Kinematics', 'Micro-Interactions'],
    description: 'Один непрерывный дубль: кинетическая анимация планов, оптическое масштабирование и ритмический отклик, собранные в After Effects.'
  },
  {
    id: 'mmm',
    index: '03',
    title: 'MMM',
    subtitle: 'Экспериментальная микрокинетика и 3D-моделирование интерфейса',
    category: 'Experimental UI & Spatial Dynamics',
    videoUrl: 'https://cdn.dribbble.com/userupload/48913318/file/9130c0a9b5957123929a831796b9bf75.mp4',
    stillUrl: 'https://cdn.dribbble.com/userupload/48913318/file/still-19ebac6b5a924f26d479258dc441e5a0.png',
    dribbbleUrl: 'https://dribbble.com/shots/27701744-MMM',
    stack: ['After Effects', '3D Spatial HUD', 'Micro-Interactions'],
    description: 'Генеративные паттерны, тактильный отклик контроллеров и кинетическое развертывание карточек, анимированные в After Effects.'
  },
  {
    id: 'muse',
    index: '04',
    title: 'Muse',
    subtitle: 'Аудиовизуальный кинетический плеер и звуковая телеметрия',
    category: 'Sound & Media Interaction',
    videoUrl: 'https://cdn.dribbble.com/userupload/48913343/file/a9a4537ccbfd3f9599fda41928917ced.mp4',
    stillUrl: 'https://cdn.dribbble.com/userupload/48913343/file/still-97ccd7961ff5737fb6b733dd7b240456.png',
    dribbbleUrl: 'https://dribbble.com/shots/27701745-Muse',
    stack: ['After Effects', 'Audio-Reactive UI', 'Fluid Dynamics'],
    description: 'Реактивная звуковая форма, кинетические эквалайзеры и плавная физика переходов треков, разработанные вручную в After Effects.'
  },
  {
    id: 'marshmello',
    index: '05',
    title: 'Marshmello',
    subtitle: 'Иммерсивный музыкальный хаб и концертная интерактивность',
    category: 'Music Experience & Festival UI',
    videoUrl: 'https://cdn.dribbble.com/userupload/48902970/file/d096775841130775406708b12d6f0081.mp4',
    stillUrl: 'https://cdn.dribbble.com/userupload/48902970/file/still-26ade756563510cd6ca2ca9bad093102.png',
    dribbbleUrl: 'https://dribbble.com/shots/27698922-Marshmello',
    stack: ['After Effects', 'Interactive Stage', 'Micro-Interactions'],
    description: 'Визуальные вспышки, физика инерции при свайпе треклиста и пространственные карточки тура, созданные в Adobe After Effects.'
  },
  {
    id: 'bank-of-america',
    index: '06',
    title: 'Bank of America',
    subtitle: 'Финтех-телеметрия, баланс и предиктивный финансовый поток',
    category: 'Fintech & Data Telemetry 60 FPS',
    videoUrl: 'https://cdn.dribbble.com/userupload/48902935/file/f13492f2b97a5a2a971a7cd9b6a31d4c.mp4',
    stillUrl: 'https://cdn.dribbble.com/userupload/48902935/file/still-11d0a4328a8de8e4cc74d7557992f703.png',
    dribbbleUrl: 'https://dribbble.com/shots/27698910-Bank-of-America',
    stack: ['After Effects', 'Fintech Telemetry', 'Micro-Interactions'],
    description: 'Мгновенный расчет сценариев, микроанимации перевода средств и динамическая визуализация капитала, созданные в After Effects.'
  }
];

export const ENDORSEMENTS: Endorsement[] = [
  {
    id: 'yonatan-ppkas',
    author: 'Yonatan',
    role: 'Core Contributor @ PPKAS Ecosystem',
    company: 'PPKAS Ecosystem / Kaspa Network',
    relation: 'International Core Team • GameFi & Web3 Protocol Architecture (Анонимный контрибьютор)',
    quote: 'Anna demonstrated exceptional product ownership and high-tempo execution while designing the PPKAS Web3 gaming ecosystem. She completely re-architected our non-custodial onboarding flow, trimming the friction from 7 tedious steps down to 2 seamless biometric interactions. Her deep UX audit and telemetry-driven design reduced drop-off rates and boosted our Day 1 Retention by +22%. Anna has a rare talent for translating complex cryptographic constraints into intuitive, human-centered interfaces that both web3 natives and mainstream players enjoy.',
    quoteEn: 'Anna demonstrated exceptional product ownership and high-tempo execution while designing the PPKAS Web3 gaming ecosystem. She completely re-architected our non-custodial onboarding flow, trimming the friction from 7 tedious steps down to 2 seamless biometric interactions. Her deep UX audit and telemetry-driven design reduced drop-off rates and boosted our Day 1 Retention by +22%. Anna has a rare talent for translating complex cryptographic constraints into intuitive, human-centered interfaces that both web3 natives and mainstream players enjoy.',
    quoteRu: '«Анна продемонстрировала исключительное продуктовое лидерство и высокую скорость работы при проектировании Web3 игровой экосистемы PPKAS. Она полностью переработала архитектуру онбординга некастодиального кошелька, сократив барьеры с 7 утомительных шагов до 2 бесшовных биометрических действий. Глубокий UX-аудит и дизайн на основе телеметрии снизили отток и увеличили наше удержание первого дня (D1 Retention) на +22%. У Анны редкий талант превращать сложные криптографические ограничения в интуитивные, понятные людям интерфейсы».',
    context: 'Проектирование некастодиального кошелька Kaspa, игрового HUD и аудит конверсии P2E',
    authorInitials: 'Y',
    linkedinUrl: 'https://www.linkedin.com/in/vaivin/',
    skillsHighlighted: ['Web3 Architecture', 'Kaspa Blockchain', 'D1 Retention (+22%)', 'Telemetry & Onboarding'],
    verifiedDate: '2025 — 2026 • Международная команда PPKAS',
    badgeLabel: 'Core Contributor // Kaspa Network'
  },
  {
    id: 'evgeny-chernov-uprock',
    author: 'Евгений Чернов',
    role: 'Senior Art Director & Mentor',
    company: 'UPROCK Design School & Agency',
    relation: 'Арт-директор и ментор стажировки в студии UPROCK',
    quote: '«Во время стажировки и совместных проектов Анна проявила зрелую командную культуру и поразительную скорость работы. Она мгновенно встраивается в продуктовые спринты, критически оценивает вводные и выдает чистейшие дизайн-системы с продуманными токенами и состояниями ошибок. Разработчикам не приходится додумывать интерфейс — передача макетов в код проходит без единого лишнего вопроса. Это надежный специалист с высоким уровнем ответственности и бескомпромиссным вниманием к деталям».',
    quoteRu: '«Во время стажировки и совместных проектов Анна проявила зрелую командную культуру и поразительную скорость работы. Она мгновенно встраивается в продуктовые спринты, критически оценивает вводные и выдает чистейшие дизайн-системы с продуманными токенами и состояниями ошибок. Разработчикам не приходится додумывать интерфейс — передача макетов в код проходит без единого лишнего вопроса. Это надежный специалист с высоким уровнем ответственности и бескомпромиссным вниманием к деталям».',
    context: 'Командное взаимодействие, продуктовые спринты и передача дизайн-систем в разработку',
    authorInitials: 'ЕЧ',
    linkedinUrl: 'https://www.linkedin.com/in/vaivin/',
    skillsHighlighted: ['Team Sprint Collaboration', 'Design Tokens Ops', 'Handoff & Edge Cases', 'High-Tempo Iterations'],
    verifiedDate: '2023 — 2024 • Стажировка в UPROCK',
    badgeLabel: 'Стажировка в студии UPROCK'
  },
  {
    id: 'evgeny-kuzmin-uprock',
    author: 'Евгений Кузьмин',
    role: 'Founder & Head of Design',
    company: 'UPROCK (ТОП-1 студия дизайна сайтов РФ)',
    relation: 'Основатель UPROCK, эксперт жюри Dprofile & Рейтинг Рунета',
    quote: '«Дипломный проект Анны (мобильное приложение EZ) был защищен на высший балл и заслуженно отмечен Золотым сертификатом школы UPROCK. Проект отличает фундаментальная глубина: детальный CustDev, разбор всех сценариев CJM и математически выверенная сетка. Анна не поверхностный визуализатор, а вдумчивый продуктовый аналитик, который досконально понимает логику поведения пользователей и умеет решать сложные бизнес-задачи через лаконичный интерфейс».',
    quoteRu: '«Дипломный проект Анны (мобильное приложение EZ) был защищен на высший балл и заслуженно отмечен Золотым сертификатом школы UPROCK. Проект отличает фундаментальная глубина: детальный CustDev, разбор всех сценариев CJM и математически выверенная сетка. Анна не поверхностный визуализатор, а вдумчивый продуктовый аналитик, который досконально понимает логику поведения пользователей и умеет решать сложные бизнес-задачи через лаконичный интерфейс».',
    context: 'Защита дипломного проекта мобильного приложения EZ (Золотой сертификат UPROCK)',
    authorInitials: 'ЕК',
    linkedinUrl: 'https://www.linkedin.com/in/vaivin/',
    skillsHighlighted: ['Золотой сертификат UPROCK', 'CJM & User Logic', 'CustDev Analysis', 'Mobile App Architecture'],
    verifiedDate: '2022 • Обучение на флагманском курсе UPROCK',
    badgeLabel: 'Обучение и Золотой сертификат'
  }
];
