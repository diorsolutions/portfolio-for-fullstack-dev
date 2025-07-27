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
    phone: string;
    linkedin: string;
    twitter: string;
    website: string;
  };
  footer: {
    copyright: string;
    brand: string;
  };
}

export const translations: Record<"en" | "ru" | "uz", TranslationType> = {
  en: {
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
      title: "Senior Frontend Developer",
      subtitle:
        "Crafting exceptional digital experiences with modern JavaScript frameworks and cutting-edge technologies",
      cta: "Get In Touch",
    },
    about: {
      title: "About Me",
      bio: "I'm a senior frontend developer with expertise in modern JavaScript ecosystems, specializing in React, Next.js, and TypeScript. I'm passionate about creating scalable, performant, and user-centric web applications that drive business success.",
      education: "Education & Background",
      educationText:
        "Advanced training at Najot Ta'lim and IT Park Uzbekistan, with continuous learning in emerging technologies and industry best practices.",
      experience: "Professional Journey",
      experienceText:
        'Leading frontend development projects with focus on performance optimization, accessibility, and modern development workflows. Active contributor to the developer community as "diorsolutions".',
    },
    skills: {
      title: "Skills & Expertise",
      core: "Core Technologies",
      frameworks: "Frameworks & Libraries",
      tools: "Development Tools",
      advanced: "Advanced Concepts",
    },
    experience: {
      title: "Professional Experience",
      current: "Current",
      items: [
        {
          title: "Senior Frontend Developer",
          company: "diorsolutions",
          period: "2023 - Present",
          description:
            "Leading frontend development projects, mentoring junior developers, and implementing modern web solutions.",
        },
        {
          title: "Frontend Developer",
          company: "Freelance",
          period: "2022 - 2023",
          description:
            "Developed responsive web applications using React, TypeScript, and modern CSS frameworks.",
        },
        {
          title: "Web Developer",
          company: "IT Park Uzbekistan",
          period: "2021 - 2022",
          description:
            "Built interactive web interfaces and collaborated with design teams to create user-friendly experiences.",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Live",
      viewCode: "Source Code",
    },
    testimonials: {
      title: "What Clients Say",
      items: [
        {
          name: "Sarah Johnson",
          role: "Product Manager",
          company: "TechCorp",
          text: "Diyor delivered exceptional work on our React application. His attention to detail and technical expertise exceeded our expectations.",
        },
        {
          name: "Ahmed Hassan",
          role: "CTO",
          company: "StartupXYZ",
          text: "Working with Diyor was a game-changer for our frontend development. His modern approach and clean code made a huge difference.",
        },
        {
          name: "Maria Rodriguez",
          role: "Design Lead",
          company: "Creative Agency",
          text: "Diyor perfectly translated our designs into pixel-perfect, responsive web applications. Highly recommended!",
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
      facebook: "Facebook",
      twitter: "Twitter/X",
      website: "Website",
      phone: "Phone",
    },
    footer: {
      copyright: "© 2024 Diyor Olimov. All rights reserved.",
      brand: "Built with ❤️ by diorsolutions",
    },
  },
  ru: {
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
      title: "Senior Frontend Разработчик",
      subtitle:
        "Создаю исключительные цифровые решения с современными JavaScript фреймворками и передовыми технологиями",
      cta: "Связаться",
    },
    about: {
      title: "Обо мне",
      bio: "Я senior frontend разработчик с экспертизой в современных JavaScript экосистемах, специализирующийся на React, Next.js и TypeScript. Увлечен созданием масштабируемых, производительных и ориентированных на пользователя веб-приложений.",
      education: "Образование и опыт",
      educationText:
        "Продвинутое обучение в Najot Ta'lim и IT Park Uzbekistan с постоянным изучением новых технологий и лучших практик индустрии.",
      experience: "Профессиональный путь",
      experienceText:
        'Руководство frontend проектами с фокусом на оптимизацию производительности, доступность и современные рабочие процессы. Активный участник сообщества разработчиков как "diorsolutions".',
    },
    skills: {
      title: "Навыки и экспертиза",
      core: "Основные технологии",
      frameworks: "Фреймворки и библиотеки",
      tools: "Инструменты разработки",
      advanced: "Продвинутые концепции",
    },
    experience: {
      title: "Профессиональный опыт",
      current: "Текущий",
      items: [
        {
          title: "Senior Frontend Разработчик",
          company: "diorsolutions",
          period: "2023 - Настоящее время",
          description:
            "Руководство frontend проектами, наставничество младших разработчиков и внедрение современных веб-решений.",
        },
        {
          title: "Frontend Разработчик",
          company: "Фриланс",
          period: "2022 - 2023",
          description:
            "Разработка адаптивных веб-приложений с использованием React, TypeScript и современных CSS фреймворков.",
        },
        {
          title: "Веб-разработчик",
          company: "IT Park Uzbekistan",
          period: "2021 - 2022",
          description:
            "Создание интерактивных веб-интерфейсов и сотрудничество с дизайн-командами для создания удобных пользовательских интерфейсов.",
        },
      ],
    },
    projects: {
      title: "Избранные проекты",
      viewProject: "Посмотреть",
      viewCode: "Исходный код",
    },
    testimonials: {
      title: "Отзывы клиентов",
      items: [
        {
          name: "Сара Джонсон",
          role: "Продакт-менеджер",
          company: "TechCorp",
          text: "Диёр выполнил исключительную работу над нашим React приложением. Его внимание к деталям и техническая экспертиза превзошли наши ожидания.",
        },
        {
          name: "Ахмед Хассан",
          role: "CTO",
          company: "StartupXYZ",
          text: "Работа с Диёром изменила наш подход к frontend разработке. Его современный подход и чистый код имели огромное значение.",
        },
        {
          name: "Мария Родригес",
          role: "Руководитель дизайна",
          company: "Creative Agency",
          text: "Диёр идеально перевел наши дизайны в пиксель-перфектные, адаптивные веб-приложения. Очень рекомендую!",
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
      linkedin: "LinkedIn",
      facebook: "фейсбук",
      twitter: "Твиттер/X",
      website: "Веб-сайт",
      phone: "Телефон",
    },
    footer: {
      copyright: "© 2024 Диёр Олимов. Все права защищены.",
      brand: "Создано с ❤️ от diorsolutions",
    },
  },
  uz: {
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
      title: "Senior Frontend Dasturchi",
      subtitle:
        "Zamonaviy JavaScript freymvorklari va ilg'or texnologiyalar bilan ajoyib raqamli tajribalar yarataman",
      cta: "Bog'lanish",
    },
    about: {
      title: "Men haqimda",
      bio: "Men zamonaviy JavaScript ekotizimlarida tajribaga ega senior frontend dasturchiman, React, Next.js va TypeScript bo'yicha mutaxassisman. Biznes muvaffaqiyatini ta'minlaydigan miqyosli, samarali va foydalanuvchi-markazli veb-ilovalar yaratishga ishtiyoqliman.",
      education: "Ta'lim va tajriba",
      educationText:
        "Najot Ta'lim va IT Park Uzbekistan'da ilg'or ta'lim, yangi texnologiyalar va sanoat eng yaxshi amaliyotlarini doimiy o'rganish bilan.",
      experience: "Professional yo'l",
      experienceText:
        'Ishlash samaradorligi optimallashtirish, foydalanish qulayligi va zamonaviy ishlab chiqish jarayonlariga e\'tibor qaratgan holda frontend loyihalarini boshqarish. "diorsolutions" sifatida dasturchilar jamiyatida faol ishtirokchi.',
    },
    skills: {
      title: "Ko'nikmalar va tajriba",
      core: "Asosiy texnologiyalar",
      frameworks: "Freymvorklar va kutubxonalar",
      tools: "Ishlab chiqish vositalari",
      advanced: "Ilg'or tushunchalar",
    },
    experience: {
      title: "Professional tajriba",
      current: "Hozirgi",
      items: [
        {
          title: "Senior Frontend Dasturchi",
          company: "diorsolutions",
          period: "2023 - Hozir",
          description:
            "Frontend loyihalarini boshqarish, kichik dasturchilarga yo'l ko'rsatish va zamonaviy veb-yechimlarni joriy etish.",
        },
        {
          title: "Frontend Dasturchi",
          company: "Freelance",
          period: "2022 - 2023",
          description:
            "React, TypeScript va zamonaviy CSS freymvorklaridan foydalangan holda moslashuvchan veb-ilovalar ishlab chiqish.",
        },
        {
          title: "Veb-dasturchi",
          company: "IT Park Uzbekistan",
          period: "2021 - 2022",
          description:
            "Interaktiv veb-interfeyslari yaratish va foydalanuvchi uchun qulay tajribalar yaratish uchun dizayn jamoalari bilan hamkorlik qilish.",
        },
      ],
    },
    projects: {
      title: "Tanlangan loyihalar",
      viewProject: "Jonli ko'rish",
      viewCode: "Manba kodi",
    },
    testimonials: {
      title: "Mijozlar fikri",
      items: [
        {
          name: "Sara Jonson",
          role: "Mahsulot menejeri",
          company: "TechCorp",
          text: "Diyor bizning React ilovamizda ajoyib ish qildi. Uning tafsilotlarga e'tibori va texnik tajribasi bizning kutganimizdan oshdi.",
        },
        {
          name: "Ahmad Hasan",
          role: "CTO",
          company: "StartupXYZ",
          text: "Diyor bilan ishlash bizning frontend ishlab chiqishimiz uchun o'zgarish bo'ldi. Uning zamonaviy yondashuvi va toza kodi katta farq qildi.",
        },
        {
          name: "Mariya Rodriges",
          role: "Dizayn rahbari",
          company: "Creative Agency",
          text: "Diyor bizning dizaynlarimizni pixel-mukammal, moslashuvchan veb-ilovalarga mukammal tarzda tarjima qildi. Tavsiya etaman!",
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
      facebook: "facebook",
      phone: "Telefon",
      linkedin: "LinkedIn",
      twitter: "Twitter/X",
      website: "Veb-sayt",
    },
    footer: {
      copyright: "© 2024 Diyor Olimov. Barcha huquqlar himoyalangan.",
      brand: "diorsolutions tomonidan ❤️ bilan yaratilgan",
    },
  },
};
