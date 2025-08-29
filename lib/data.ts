// import HtmlSvg from "../public/skills/html.svg";

export const skillsData = {
  core: [
    {
      name: "HTML5",
      level: 95,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg",
      alt: "HTML5 logo",
    },
    {
      name: "CSS3",
      level: 95,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      alt: "CSS3 logo",
    },
    {
      name: "JavaScript",
      level: 98,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "JavaScript logo",
    },
    {
      name: "TypeScript",
      level: 92,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      alt: "TypeScript logo",
    },
  ],
  frameworks: [
    {
      name: "React.js",
      level: 95,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "React.js logo",
    },
    {
      name: "Next.js",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      alt: "Next.js logo",
    },
    {
      name: "Vue.js",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      alt: "Vue.js logo",
    },
    {
      name: "Jest",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
      alt: "Jest logo",
    },
    {
      name: "Svelte",
      level: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
      alt: "Svelte logo",
    },
  ],
  tools: [
    {
      name: "Webpack",
      level: 88,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
      alt: "Webpack logo",
    },
    {
      name: "Docker",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      alt: "Docker logo",
    },
    {
      name: "GraphQL",
      level: 82,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
      alt: "GraphQL logo",
    },
  ],
  advanced: [
    {
      name: "MongoDB",
      level: 92,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB logo",
    },
    {
      name: "Nest.js",
      level: 92,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      alt: "Nest.js logo",
    },
  ],
};

// Enhanced Projects data with images
export const projectsData = [
  // {
  //   id: 1,
  //   title: "E-Commerce Platform",
  //   description:
  //     "Full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard",
  //   image: "/projects/e-commerce.jpg",
  //   tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
  //   liveUrl: "https://diorsolutions.site",
  //   codeUrl: "https://github.com/diorsolutions/mern-stack-e-commerce",
  //   featured: true,
  // },
  // {
  //   id: 2,
  //   title: "SaaS Dashboard",
  //   description:
  //     "Modern analytics dashboard with real-time data visualization, user management, and subscription handling",
  //   image: "/projects/ui-saas.jpg",
  //   tech: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io"],
  //   liveUrl: "https://diorsolutions.site",
  //   codeUrl: "https://github.com/diorsolutions/saas-dashboard",
  //   featured: true,
  // },
  {
    id: 3,
    title: "AI-Powered Chat App",
    description:
      "Intelligent chat application with AI integration, real-time messaging, and advanced user experience",
    image: "/projects/chat.jpg",
    tech: ["React", "OpenAI API", "WebSocket", "Redis", "Docker"],
    liveUrl: "https://fs-chat-app-qx4l.onrender.com/",
    codeUrl: "https://github.com/diorsolutions/mern-chat-application",
    featured: true,
  },
  {
    id: 4,
    title: "Professional Dentists CMS Dashboard",
    description:
      "Professional trading interface with real-time market data, advanced charting, and portfolio management",
    image: "/projects/dentist.png",
    tech: ["Vue.js", "TradingView", "WebSocket", "Express", "JWT"],
    liveUrl: "https://dentist-cms-production.up.railway.app",
    codeUrl: "https://github.com/diorsolutions/dentist-cms",
    featured: false,
  },
];
