export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  text: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface TranslationType {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    bio: string;
    education: string;
    educationText: string;
    experience: string;
    experienceText: string;
  };
  skills: {
    title: string;
    core: string;
    frameworks: string;
    tools: string;
    showMore: string;
    showLess: string;
    moreSkills: string;
    advanced: string;
  };
  experience: {
    title: string;
    current: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    viewProject: string;
    viewCode: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    title: string;
    items: TestimonialItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    instagram: string;
    telegram: string;
    github: string;
    facebook: string;
    whatsapp: string;
    phone: string;
    linkedin: string;
    twitter: string;
    website: string;
  };
  footer: {
    copyright: string;
  };
  loading: {
    loadings: string;
  };
}

export const translations: Record<"en" | "ru" | "uz", TranslationType> = {
  en: {
    loading: {
      loadings: "Loading...",
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Diyor Olimov",
      title: "Middle Fullstack Developer",
      subtitle:
        "Building high-performance, complete web applications with modern frontend and robust backend technologies",
      cta: "Get In Touch",
    },
    about: {
      title: "About Me",
      bio: "Middle Fullstack Developer with deep expertise in React, Node.js, and TypeScript. I specialize in building scalable, secure, and user-centric digital products that deliver real business value.",
      education: "Education & Background",
      educationText:
        "Advanced training at Najot Ta'lim and IT Park Uzbekistan. Focused on full-stack architecture, modern workflows, and industry-standard security.",
      experience: "Professional Journey",
      experienceText:
        "Leading end-to-end development of complex web applications. Expert in performance optimization and streamlining development cycles for faster delivery.",
    },
    skills: {
      title: "Skills & Expertise",
      core: "Core Technologies",
      frameworks: "Frameworks & Libraries",
      tools: "Development Tools",
      advanced: "Advanced Concepts",
      showMore: "Show",
      showLess: "Show Less",
      moreSkills: "More",
    },
    experience: {
      title: "Professional Experience",
      current: "Current",
      items: [
        {
          title: "Middle Fullstack Developer",
          company: "diorsolutions",
          period: "2023 - Present",
          description:
            "Building scalable APIs, intuitive UIs, and robust architectures using the latest full-stack technologies and industry-standard practices.",
        },
        {
          title: "Frontend Developer",
          company: "Freelance",
          period: "2022 - 2023",
          description:
            "Developed responsive web applications using React, TypeScript, and modern CSS frameworks with focus on pixel-perfect designs.",
        },
        {
          title: "Web Developer",
          company: "IT Park Uzbekistan",
          period: "2021 - 2022",
          description:
            "Built interactive web interfaces and collaborated with design teams to create user-friendly experiences for various digital platforms.",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Live",
      viewCode: "Source Code",
      items: [
        {
          title: "AI Chat App",
          description: "Intelligent messaging platform with AI integration, real-time communication, and advanced user experience optimization.",
        },
        {
          title: "Dentist CMS",
          description: "Professional management system for dental clinics featuring real-time scheduling, patient records, and analytics dashboard.",
        },
        {
          title: "Cheff Bros",
          description: "Premium food delivery platform with seamless animations, real-time order tracking, and highly responsive mobile-first design.",
        },
        {
          title: "PIRLS Test",
          description: "Advanced educational assessment platform with secure authentication, real-time analytics, and dynamic test management.",
        }
      ],
    },
    testimonials: {
      title: "What Clients Say",
      items: [
        {
          name: "Sarah Johnson",
          role: "Product Manager",
          company: "TechCorp",
          text: "Diyor delivered exceptional results. His full-stack expertise and attention to detail exceeded our professional expectations.",
        },
        {
          name: "Ahmed Hassan",
          role: "CTO",
          company: "StartupXYZ",
          text: "Working with Diyor was a game-changer. His modern full-stack approach and clean code made a huge impact on our product.",
        },
        {
          name: "Maria Rodriguez",
          role: "Design Lead",
          company: "Creative Agency",
          text: "Perfectly translated our designs into premium, high-performance applications. Highly recommended for any complex project!",
        },
      ],
    },
    contact: {
      title: "Let's Connect",
      subtitle:
        "Ready to bring your ideas to life? Let's discuss your next project!",
      email: "Email",
      instagram: "Instagram",
      telegram: "Telegram",
      github: "GitHub",
      linkedin: "LinkedIn",
      whatsapp: "Whatsapp",
      facebook: "Facebook",
      twitter: "Twitter/X",
      website: "Website",
      phone: "Phone",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Diyor Olimov. All rights reserved.`,
    },
  },
  ru: {
    loading: {
      loadings: "Падаждите...",
    },
    nav: {
      home: "Главная",
      about: "Обо мне",
      skills: "Навыки",
      experience: "Опыт",
      projects: "Проекты",
      testimonials: "Отзывы",
      contact: "Контакты",
    },
    hero: {
      greeting: "Привет, я",
      name: "Диёр Олимов",
      title: "Middle Fullstack Разработчик",
      subtitle:
        "Создаю высокопроизводительные веб-приложения с использованием современных фронтенд и бэкенд технологий",
      cta: "Связаться",
    },
    about: {
      title: "Обо мне",
      bio: "Middle Fullstack разработчик с опытом в React, Node.js и TypeScript. Специализируюсь на создании масштабируемых, безопасных и ориентированных на пользователя цифровых продуктов.",
      education: "Образование и опыт",
      educationText:
        "Продвинутое обучение в Najot Ta'lim и IT Park Uzbekistan. Фокус на фуллстек разработке, современных архитектурах и стандартах безопасности.",
      experience: "Профессиональный путь",
      experienceText:
        "Разработка сложных веб-приложений от начала до конца. Эксперт по оптимизации производительности и ускорению процессов разработки.",
    },
    skills: {
      title: "Навыки и экспертиза",
      core: "Основные технологии",
      frameworks: "Фреймворки и библиотеки",
      tools: "Инструменты разработки",
      advanced: "Продвинутые концепции",
      showMore: "увидеть все",
      showLess: "снижение",
      moreSkills: "снова",
    },
    experience: {
      title: "Профессиональный опыт",
      current: "Текущий",
      items: [
        {
          title: "Middle Fullstack Разработчик",
          company: "diorsolutions",
          period: "2023 - Настоящее время",
          description:
            "Разработка масштабируемых API, надежных архитектур и качественных интерфейсов с использованием современных fullstack технологий.",
        },
        {
          title: "Frontend Разработчик",
          company: "Фриланс",
          period: "2022 - 2023",
          description:
            "Создание адаптивных веб-приложений с упором на современные CSS фреймворки и безупречный пользовательский интерфейс.",
        },
        {
          title: "Веб-разработчик",
          company: "IT Park Uzbekistan",
          period: "2021 - 2022",
          description:
            "Разработка интерактивных модулей и сотрудничество с дизайнерами для создания удобных и привлекательных решений.",
        },
      ],
    },
    projects: {
      title: "Избранные проекты",
      viewProject: "Посмотреть",
      viewCode: "Исходный код",
      items: [
        {
          title: "AI Chat Приложение",
          description: "Интеллектуальная платформа для обмена сообщениями с AI, поддержкой реального времени и оптимизацией UX.",
        },
        {
          title: "Dentist CMS",
          description: "Система управления для стоматологических клиник с расписанием, картами пациентов и панелью аналитики.",
        },
        {
          title: "Cheff Bros",
          description: "Премиальная платформа доставки еды с плавной анимацией, отслеживанием заказов и адаптивным дизайном.",
        },
        {
          title: "PIRLS Тест",
          description: "Образовательная платформа для тестирования с безопасной авторизацией и аналитикой в реальном времени.",
        }
      ],
    },
    testimonials: {
      title: "Отзывы клиентов",
      items: [
        {
          name: "Сара Джонсон",
          role: "Продакт-менеджер",
          company: "TechCorp",
          text: "Диёр выполнил исключительную работу. Его fullstack экспертиза и внимание к деталям превзошли все наши ожидания.",
        },
        {
          name: "Ахмед Хассан",
          role: "CTO",
          company: "StartupXYZ",
          text: "Работа с Диёром изменила наш продукт. Его современный подход к разработке и чистый код заметно улучшили результат.",
        },
        {
          name: "Мария Родригес",
          role: "Руководитель дизайна",
          company: "Creative Agency",
          text: "Идеально воплотил наши дизайны в высокопроизводительные приложения. Рекомендую для любых сложных проектов!",
        },
      ],
    },
    contact: {
      title: "Давайте свяжемся",
      subtitle:
        "Готовы воплотить ваши идеи в жизнь? Давайте обсудим ваш следующий проект!",
      email: "Электронная почта",
      instagram: "инстаграм",
      telegram: "Телеграмма",
      github: "GitHub",
      whatsapp: "Bатсап",
      linkedin: "LinkedIn",
      facebook: "фейсбук",
      twitter: "Твиттер/X",
      website: "Веб-сайт",
      phone: "Телефон",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Диёр Олимов. Все права защищены.`,
    },
  },
  uz: {
    loading: {
      loadings: "Iltimos kuting...",
    },
    nav: {
      home: "Bosh sahifa",
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      experience: "Tajriba",
      projects: "Loyihalar",
      testimonials: "Fikrlar",
      contact: "Aloqa",
    },
    hero: {
      greeting: "Salom, men",
      name: "Diyor Olimov",
      title: "Middle Fullstack Dasturchi",
      subtitle:
        "Zamonaviy frontend va baquvvat backend texnologiyalari orqali yuqori sifatli veb-ilovalar yarataman",
      cta: "Bog'lanish",
    },
    about: {
      title: "Men haqimda",
      bio: "React, Node.js va TypeScript bo'yicha tajribaga ega Middle Fullstack dasturchiman. Xavfsiz va samarali raqamli mahsulotlar yaratishga ixtisoslashganman.",
      education: "Ta'lim va tajriba",
      educationText:
        "Najot Ta'lim va IT Park Uzbekistan'da ilg'or ta'lim. Full-stack arxitektura, zamonaviy ish jarayonlari va xavfsizlik standartlariga yo'naltirilgan.",
      experience: "Professional yo'l",
      experienceText:
        "Murakkab veb-ilovalarni to'liq yakunigacha ishlab chiqish. Ishlash tezligini optimallashtirish va jarayonlarni avtomatlashtirish bo'yicha mutaxassis.",
    },
    skills: {
      title: "Ko'nikmalar va tajriba",
      core: "Asosiy texnologiyalar",
      frameworks: "Freymvorklar va kutubxonalar",
      tools: "Ishlab chiqish vositalari",
      advanced: "Ilg'or tushunchalar",
      showMore: "Barchasini ko'rish",
      showLess: "Qisqartirish",
      moreSkills: "Yana",
    },
    experience: {
      title: "Professional tajriba",
      current: "Hozirgi",
      items: [
        {
          title: "Middle Fullstack Dasturchi",
          company: "diorsolutions",
          period: "2023 - Hozir",
          description:
            "Zamonaviy full-stack texnologiyalar yordamida sifatli API, mustahkam web-arxitekturalar va foydalanuvchi-markazli interfeyslar yaratish.",
        },
        {
          title: "Frontend Dasturchi",
          company: "Freelance",
          period: "2022 - 2023",
          description:
            "React va zamonaviy CSS frameworklar yordamida har qanday qurilmaga moslashuvchan, mukammal dizaynli veb-ilovalar ishlab chiqish.",
        },
        {
          title: "Veb-dasturchi",
          company: "IT Park Uzbekistan",
          period: "2021 - 2022",
          description:
            "Interaktiv modullar yaratish va dizayn jamoalari bilan hamkorlikda innovatsion raqamli tajribalarni hayotga tatbiq etish.",
        },
      ],
    },
    projects: {
      title: "Tanlangan loyihalar",
      viewProject: "Jonli ko'rish",
      viewCode: "Manba kodi",
      items: [
        {
          title: "AI Chat Ilovasi",
          description: "AI integratsiyasi, real-vaqtda muloqot va yuqori darajadagi UX optimallashuviga ega aqlli chat platformasi.",
        },
        {
          title: "Dentist CMS",
          description: "Stomatologiya klinikalari uchun maxsus boshqaruv tizimi: jadval, bemorlar bazasi va tahliliy dashboard.",
        },
        {
          title: "Cheff Bros",
          description: "Premium ovqat buyurtma qilish platformasi: silliq animatsiyalar, buyurtmani kuzatish va mukammal dizayn.",
        },
        {
          title: "PIRLS Test",
          description: "Xavfsiz avtorizatsiya va real-vaqtda tahlilga ega zamonaviy ta'limiy imtihon va test platformasi.",
        }
      ],
    },
    testimonials: {
      title: "Mijozlar fikri",
      items: [
        {
          name: "Sara Jonson",
          role: "Mahsulot menejeri",
          company: "TechCorp",
          text: "Diyor ajoyib natija ko'rsatdi. Uning fullstack tajribasi va har bir detalga bo'lgan e'tibori professional darajada qoyil qoldirdi.",
        },
        {
          name: "Ahmad Hasan",
          role: "CTO",
          company: "StartupXYZ",
          text: "Diyor bilan ishlash mahsulotimizga katta ta'sir qildi. Uning zamonaviy yondashuvi va toza kodi sifatni sezilarli darajada oshirdi.",
        },
        {
          name: "Mariya Rodriges",
          role: "Dizayn rahbari",
          company: "Creative Agency",
          text: "Dizaynlarimizni yuqori samarali ilovalarga mukammal darajada o'girib berdi. Murakkab loyihalar uchun tavsiya etaman!",
        },
      ],
    },
    contact: {
      title: "Keling bog'lanaylik",
      subtitle:
        "G'oyalaringizni hayotga tatbiq etishga tayyormisiz? Keyingi loyihangizni muhokama qilaylik!",
      email: "Elektron pochta",
      telegram: "Telegram",
      instagram: "Instagram",
      github: "GitHub",
      whatsapp: "Whatsapp",
      facebook: "facebook",
      phone: "Telefon",
      linkedin: "LinkedIn",
      twitter: "Twitter/X",
      website: "Veb-sayt",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Diyor Olimov. Barcha huquqlar himoyalangan.`,
    },
  },
};
