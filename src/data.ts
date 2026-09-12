import { ProjectCase, CareerRole, ContactChannel, MotionWork, Endorsement } from './types.ts';

export const PERSONAL_RESUME = {
  name: 'Анна Агабекян',
  enName: 'Anna Aghabekyan',
  title: 'Продуктовый дизайнер',
  roleLevel: 'Middle+ Product Designer',
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
  bio: 'Я проектирую интерфейсы для сложных цифровых продуктов более 5 лет. Провожу проекты полного цикла: от CustDev-интервью и CJM до дизайн-систем, компонентных библиотек и развертывания в облачной инфраструктуре. В фокусе: системность, скорость взаимодействия и конверсионные петли. В портфолио — P2E-экосистема PPKAS на блокчейне Kaspa (+22% D1 Retention, 89% конверсия онбординга), EdTech-платформа микрообучения LIBRIUM, масштабируемые дизайн-системы для B2B SaaS (KFBIO, FitVend, StitchLab) и коммерческий запуск веб-сервиса кафе «Белоснежка» (дизайн + фронтенд + серверная часть).',
};

export const CORE_METRICS = [
  { value: '+22%', label: 'D1 Retention', context: 'Web3 / Kaspa Network' },
  { value: '89%', label: 'Конверсия онбординга', context: 'Некастодиальные кошельки' },
  { value: '5m → 1m', label: 'Task Velocity', context: 'B2B SaaS Dashboard' },
  { value: '-40%', label: 'Handoff Time', context: 'Design System Ops' },
  { value: '+30%', label: 'Воронка курсов', context: 'EdTech / LIBRIUM Mobile' },
  { value: 'End-to-End', label: 'Full-Stack релиз', context: 'Figma → React → Cloud' }
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
      'ATOMA: Full-cycle запуск продуктов под ключ',
      'Frontend & Backend разработка для веб-сервисов',
      'DevOps: аренда хостинга, покупка домена, DNS & SSL',
      'EdTech: микрообучение и графы знаний',
      'Web3 & блокчейн (Kaspa Network)',
      'Некастодиальные кошельки & безопасность (DevSecOps)'
    ]
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
    role: 'Lead UX/UI Designer (Manual Figma) & AI Full-Stack Developer',
    company: 'Кафе «Белоснежка» (г. Октябрьский)',
    tags: ['В разработке', 'Live WIP', 'Figma (Manual UX/UI)', 'AI-Assisted Dev', 'Онлайн-меню', 'Умная корзина', 'HoReCa Digital', 'belosnezhka-cafe.ru'],
    metrics: 'Авторский UX/UI + AI Full-Stack запуск, онлайн-меню и корзина на belosnezhka-cafe.ru',
    description: 'Цифровая трансформация легендарного кафе (г. Октябрьский, с 2003 года). Полный авторский UX/UI-дизайн спроектирован вручную в Figma, архитектура фронтенда и бэкенда реализована при поддержке AI-инструментов.',
    longDescription: 'Проект решает задачу комплексной цифровой трансформации легендарного заведения в г. Октябрьский (работает с 2003 года). Полный UX/UI-дизайн спроектирован вручную Анной в Figma: визуальный стиль, дизайн-система, адаптивные сетки, каталог кухни и бара («Мангал и стейки», «Салаты», «Банкетные залы»), интерактивная корзина и предзаказ. Архитектура фронтенда и бэкенда реализована при поддержке современных AI-инструментов, обеспечивая быстрый отклик и боевой деплой на домене belosnezhka-cafe.ru.',
    problemStatement: 'У заведения отсутствовал централизованный веб-сервис: гости искали меню по разрозненным фотографиям в соцсетях, что снижало конверсию в заказы и бронирование столиков.',
    solutionHypothesis: 'Быстрый адаптивный веб-сервис с онлайн-меню, интерактивной корзиной, кнопками прямого предзаказа и локацией в г. Октябрьский увеличит приток гостей и структурирует поток обращений.',
    duties: [
      'Анализ специфики легендарного кафе (с 2003 года), структуры кухни и бара, сценариев гостей и банкетов',
      'Полное ручное проектирование UX/UI в Figma: фирменная стилистика, дизайн-система компонентов, сетки для десктопа и смартфонов',
      'Проектирование интерактивного онлайн-меню по категориям (мангал, стейки, салаты, напитки, банкетные залы)',
      'Проектирование сценариев умной корзины и быстрого оформления предзаказа',
      'Разработка архитектуры фронтенда и бэкенда при поддержке AI-инструментов',
      'Инфраструктура: покупка и делегирование домена belosnezhka-cafe.ru, хостинг с SSL-сертификатом, боевой продакшн-деплой'
    ],
    achievements: [
      'Создан авторский UX/UI-дизайн веб-сервиса с премиальной гастрономической эстетикой и адаптивностью под смартфоны',
      'Проект успешно запущен в боевой продакшн на домене https://belosnezhka-cafe.ru/ (статус Live WIP / активное развитие)',
      'Интегрированы онлайн-меню кухни и бара, умная корзина и быстрое бронирование',
      'Полная синергия ручного проектирования в Figma и скоростной разработки при поддержке AI'
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
      dprofile: 'https://dprofile.ru/case/181859/librium-mobilnoe-prilozenie-dlia-obuceniia',
      behance: 'https://behance.net/exussremo',
      telegram: 'https://t.me/vaivin'
    },
    accentColor: '#0D9488',
    previewVisual: 'librium-mobile'
  },
  {
    id: 'ez-marketplace',
    index: '04',
    title: 'EZ // БЫСТРЫЙ ПОИСК ИСПОЛНИТЕЛЕЙ И ЗАКАЗЧИКОВ',
    subtitle: 'Сервис поиска исполнителей и заказчиков фриланс-услуг с прозрачным расчетом смет и безопасной сделкой',
    category: 'saas',
    origin: 'non_commercial',
    originLabel: 'Учебный проект • Школа UPROCK',
    isLatest: false,
    period: '2021 — 2022',
    role: 'UX/UI Designer / UPROCK',
    company: 'Школа UPROCK (Учебный проект)',
    tags: ['Некоммерческий проект', 'Учебный проект UPROCK', 'Маркетплейс', 'Поиск исполнителей', 'CJM 2 ролей', 'Dprofile /case/876'],
    metrics: 'CJM для 2 ролей, поиск исполнителя <2 мин, Золотой сертификат UPROCK',
    description: 'Учебный проект в школе UPROCK: сервис быстрого поиска исполнителей и заказчиков. Глубокий анализ конкурентов, CJM для заказчиков и фрилансеров, калькулятор сметы и дизайн-система.',
    longDescription: 'Проект EZ выполнен в учебном плане школы UPROCK. Цель сервиса — кардинально ускорить процесс подбора квалифицированных специалистов и согласования условий. На классических биржах заказчики тратят часы на изучение откликов, а фрилансеры страдают от демпинга. В EZ спроектирована система прозрачных карточек с фиксированными тарифами, быстрым предпросмотром портфолио в 1 клик и автоматическим расчетом сметы.',
    problemStatement: 'Заказчики тратят часы на разбор сотен нерелевантных откликов, а исполнители сталкиваются с непрозрачными условиями и задержками выплат.',
    solutionHypothesis: 'Стандартизированная карточка специалиста с подтвержденными навыками, витриной работ и авто-расчетом сметы сократит время первого контакта до 2 минут.',
    duties: [
      'Конкурентный анализ ведущих платформ поиска исполнителей (YouDo, FL.ru, Kwork, Behance)',
      'Проработка детальных User Personas и карты путей пользователя (CJM) для двух ролей: Заказчик и Специалист',
      'Проектирование информационной архитектуры, фильтров каталога и карточек услуг',
      'Разработка модульной сетки и адаптивной дизайн-системы для десктопа и мобильных устройств',
      'Интерактивное прототипирование ключевых сценариев безопасной сделки в Figma'
    ],
    achievements: [
      'Спроектирован сквозной сценарий поиска, согласования сметы и оформления безопасной сделки',
      'Создана чистая модульная дизайн-система карточек с акцентом на типографику и удобство сканирования',
      'Проект успешно защищен в рамках учебного плана школы UPROCK и получил Золотой сертификат',
      'Кейс опубликован на Dprofile: dprofile.ru/case/876/ez-bystryi-poisk-ispolnitelei-i-zakazcikov'
    ],
    keyFeatures: [
      'Умная фильтрация по компетенциям, ставкам и доступности специалиста',
      'Прозрачный калькулятор стоимости и расчет сроков выполнения задач',
      'Быстрый просмотр кейсов портфолио прямо из списка специалистов',
      'Безопасная сделка (Escrow) с пошаговым подтверждением этапов'
    ],
    externalLinks: {
      dprofile: 'https://dprofile.ru/case/876/ez-bystryi-poisk-ispolnitelei-i-zakazcikov',
      behance: 'https://behance.net/exussremo',
      telegram: 'https://t.me/vaivin'
    },
    accentColor: '#2563EB',
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
      dprofile: 'https://dprofile.ru/myonlyregret',
      behance: 'https://behance.net/exussremo'
    },
    accentColor: '#0284C7',
    previewVisual: 'saas-dashboard'
  }
];

export const CAREER_ROLES: CareerRole[] = [
  {
    period: '2025 — по наст. время',
    title: 'Lead Product Designer & Full-stack Developer',
    company: 'ATOMA',
    type: 'Авторская продуктовая практика, коммерческая веб-разработка',
    location: 'Октябрьский / Remote',
    clients: ['Кафе «Белоснежка» (г. Октябрьский)'],
    duties: [
      'Полный цикл проектирования и запуска коммерческих цифровых продуктов под ключ (End-to-End)',
      'UX/UI дизайн в Figma: исследование рынка HoReCa, интерактивные прототипы, мобильная эргономика',
      'Frontend & Backend веб-разработка: верстка, анимации, серверная логика обработки заказов',
      'DevOps & Инфраструктура: подбор и покупка доменов, аренда хостинга, настройка DNS/SSL и деплой на сервере'
    ],
    achievements: [
      'Запущена авторская продуктовая практика ATOMA',
      'С нуля спроектирован, разработан и запущен сайт кафе «Белоснежка» — https://belosnezhka-cafe.ru/ (дизайн + фронт + бэк + хостинг)'
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
    title: 'Product Designer',
    company: 'COMMUNITY DESIGN',
    type: 'Фриланс, удалённо',
    location: 'Remote',
    clients: ['KFBIO', 'FITVEND', 'STITCHLAB'],
    duties: [
      'Разработка воронок адаптации, мобильных потоков регистрации и B2B дашбордов',
      'Создание сквозных дизайн-систем в Figma с компонентами и переменными',
      'Проведение юзабилити-тестирований и синтез результатов в продуктовый бэклог'
    ],
    achievements: [
      'EdTech: разработано обучающее приложение LIBRIUM (18 CustDev-интервью, интерактивный граф знаний, Dprofile case/181859)',
      'EdTech воронка: переработанный флоу регистрации увеличил завершенные регистрации на 30% в 1-й месяц',
      'FinTech: прототип P2P-платежей успешно прошел 5 сессий тестирования и включен в топ-приоритет разработки',
      'E-commerce: создана дизайн-система из 50+ компонентов, сократившая время передачи в разработку на 40%',
      'B2B SaaS: переработана панель управления, сократившая время выполнения задач пользователями с 5 мин до 1 мин'
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
    id: 'skyrim-hud',
    index: '01',
    title: 'The Elder Scrolls V: Skyrim',
    subtitle: 'Реконцепция интерфейса инвентаря и созвездий навыков',
    category: 'Game UI & Spatial HUD',
    videoUrl: 'https://cdn.dribbble.com/userupload/48913360/file/large-20299b23f4b755a5113c937b1606043f.mp4',
    stillUrl: 'https://cdn.dribbble.com/userupload/48913360/file/still-20299b23f4b755a5113c937b1606043f.png?format=webp&resize=800x600&vertical=center',
    dribbbleUrl: 'https://dribbble.com/shots/27701749-The-Elder-Scrolls-5',
    stack: ['3D Spatial HUD', 'Interactive Constellations', 'After Effects'],
    description: 'Эргономичная навигация по предметам, трехмерное вращение артефактов и кинетический отклик созвездий прокачки персонажа.'
  },
  {
    id: 'tesla',
    index: '02',
    title: 'Tesla Telemetry & OS',
    subtitle: 'Бортовой HUD-интерфейс и мобильный пульт управления электрокаром',
    category: 'Automotive & IoT Telemetry',
    videoUrl: 'https://cdn.dribbble.com/userupload/48913347/file/large-24df2defdf51007e228dc1ec03437576.mp4',
    stillUrl: 'https://cdn.dribbble.com/userupload/48913347/file/still-96e2da2ae928056c40b69dbcc545f9d2.png?format=webp&resize=800x600&vertical=center',
    dribbbleUrl: 'https://dribbble.com/shots/27701747-Tesla',
    stack: ['Framer Motion', 'Automotive Telemetry HUD', 'SVG Dynamics 60 FPS'],
    description: 'Динамическая визуализация расхода батареи, температурного зонирования и тактильной реактивности сенсорных переключателей на 60 FPS.'
  },
  {
    id: 'united-nations',
    index: '03',
    title: 'United Nations Platform',
    subtitle: 'Интерактивная карта гуманитарных потоков и динамические фильтры',
    category: 'Global Data Viz & Humanitarian UI',
    videoUrl: 'https://cdn.dribbble.com/userupload/48913377/file/large-358990908be53eb6eac5a7dcfb44223e.mp4',
    stillUrl: 'https://cdn.dribbble.com/userupload/48913377/file/still-aba3f280e4aec36a27f4e8d06354e101.png?format=webp&resize=800x600&vertical=center',
    dribbbleUrl: 'https://dribbble.com/shots/27701755-United-Nations',
    stack: ['WebGL Micro-Interactions', 'Global Data Map', 'After Effects'],
    description: 'Кинетика переключения глобальных показателей гуманитарного мониторинга, плавное развертывание инфографики и тактильный отклик контроллеров.'
  },
  {
    id: 'tiffany',
    index: '04',
    title: 'Tiffany & Co.',
    subtitle: 'Премиальная кинетика каталога ювелирных коллекций',
    category: 'Luxury E-Commerce & High-End Retail',
    videoUrl: 'https://cdn.dribbble.com/userupload/48913369/file/large-921df3f93e5977cb3bb6935cd220b1f9.mp4',
    stillUrl: 'https://cdn.dribbble.com/userupload/48913369/file/still-35955e6cf8fd930b70601b69f63a4741.png?format=webp&resize=800x600&vertical=center',
    dribbbleUrl: 'https://dribbble.com/shots/27701752-Tiffany',
    stack: ['Framer Motion', 'Luxury Catalog Kinematics', 'ProtoPie'],
    description: 'Бесшовный скролл, оптическое преломление карточек драгоценностей и деликатная кинетическая типографика с акцентом на фактуру изделий.'
  },
  {
    id: 'metropolitan-opera',
    index: '05',
    title: 'The Metropolitan Opera',
    subtitle: 'Афиша репертуара и пространственный выбор мест зала',
    category: 'Culture & Digital Stage Booking',
    videoUrl: 'https://cdn.dribbble.com/userupload/48913365/file/large-878dde3c6622dbf0c8afc22d23499cc2.mp4',
    stillUrl: 'https://cdn.dribbble.com/userupload/48913365/file/still-29a1922898713745c276eda2816fd430.png?format=webp&resize=800x600&vertical=center',
    dribbbleUrl: 'https://dribbble.com/shots/27701751-The-Metropolitan-Opera',
    stack: ['ProtoPie', 'Editorial Typography', 'Spatial Navigation'],
    description: 'Театральная пластика переходов: раздвигающиеся панели расписания, оптическая смена контрастов и микроанимации бронирования лож.'
  },
  {
    id: 'bolshoi-theatre',
    index: '06',
    title: 'Большой Театр',
    subtitle: 'Иммерсивная сценография и динамическая хроника постановок',
    category: 'Digital Scenography & Dynamic UI',
    videoUrl: 'https://cdn.dribbble.com/userupload/48913349/file/large-49c9cbba7193738be477722aa72e7427.mp4',
    stillUrl: 'https://cdn.dribbble.com/userupload/48913349/file/still-3da96ca74b1e4fbba0f03126be15d0ea.png?format=webp&resize=800x600&vertical=center',
    dribbbleUrl: 'https://dribbble.com/shots/27701748-The-Bolshoi-Theatre',
    stack: ['Fluid Stage Physics', 'Principle', 'After Effects'],
    description: 'Глубокие параллакс-планы кулис, мягкая физика инерции при скролле архивных афиш и адаптивный контрастный лейаут.'
  }
];

export const ENDORSEMENTS: Endorsement[] = [
  {
    id: 'alex-vance-ppkas',
    author: 'Alex Vance',
    role: 'Lead Product Architect',
    company: 'PPKAS Ecosystem / Kaspa Network',
    relation: 'International Core Team • GameFi & Web3 Infrastructure',
    quote: 'Anna demonstrated exceptional product ownership and high-tempo execution while designing the PPKAS Web3 gaming ecosystem. She completely re-architected our non-custodial onboarding flow, trimming the friction from 7 tedious steps down to 2 seamless biometric interactions. Her deep UX audit and telemetry-driven design reduced drop-off rates and boosted our Day 1 Retention by +22%. Anna has a rare talent for translating complex cryptographic constraints into intuitive, human-centered interfaces that both web3 natives and mainstream players enjoy.',
    quoteEn: 'Anna demonstrated exceptional product ownership and high-tempo execution while designing the PPKAS Web3 gaming ecosystem. She completely re-architected our non-custodial onboarding flow, trimming the friction from 7 tedious steps down to 2 seamless biometric interactions. Her deep UX audit and telemetry-driven design reduced drop-off rates and boosted our Day 1 Retention by +22%. Anna has a rare talent for translating complex cryptographic constraints into intuitive, human-centered interfaces that both web3 natives and mainstream players enjoy.',
    quoteRu: '«Анна продемонстрировала исключительное продуктовое лидерство и высокую скорость работы при проектировании Web3 игровой экосистемы PPKAS. Она полностью переработала архитектуру онбординга некастодиального кошелька, сократив барьеры с 7 утомительных шагов до 2 бесшовных биометрических действий. Глубокий UX-аудит и дизайн на основе телеметрии снизили отток и увеличили наше удержание первого дня (D1 Retention) на +22%. У Анны редкий талант превращать сложные криптографические ограничения в интуитивные, понятные людям интерфейсы».',
    context: 'Проектирование некастодиального кошелька Kaspa, игрового HUD и аудит конверсии P2E',
    authorInitials: 'AV',
    linkedinUrl: 'https://www.linkedin.com/in/vaivin/',
    skillsHighlighted: ['Web3 Architecture', 'Kaspa Blockchain', 'D1 Retention (+22%)', 'Telemetry & Onboarding'],
    verifiedDate: '2025 — 2026 • Международная команда PPKAS',
    badgeLabel: 'Web3 Core Team // Kaspa Network'
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
