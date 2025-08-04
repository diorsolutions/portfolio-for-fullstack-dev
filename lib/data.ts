export const skillsData = {
  core: [
    { name: "HTML5 / CSS3 / Tailwind", level: 95, icon: "🎨" },
    { name: "JavaScript (ES6+)", level: 98, icon: "⚡" },
    { name: "TypeScript", level: 92, icon: "🔷" },
  ],
  frameworks: [
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "Vue.js", level: 85, icon: "💚" },
    { name: "Svelte", level: 80, icon: "🧡" },
  ],
  tools: [
    { name: "Webpack / Vite", level: 88, icon: "📦" },
    { name: "Docker", level: 85, icon: "🐳" },
    { name: "GraphQL", level: 82, icon: "🔗" },
    { name: "Jest / Testing Library", level: 90, icon: "🧪" },
  ],
  advanced: [
    { name: "Micro-frontends", level: 85, icon: "🏗️" },
    { name: "Performance Optimization", level: 92, icon: "🚀" },
    { name: "PWA Development", level: 88, icon: "📱" },
    { name: "Web Accessibility (a11y)", level: 90, icon: "♿" },
  ],
};

// Enhanced Projects data with images
export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard",
    image: "/projects/e-commerce.jpg",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://diorsolutions.site",
    codeUrl: "https://github.com/diorsolutions",
    featured: true,
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description:
      "Modern analytics dashboard with real-time data visualization, user management, and subscription handling",
    image: "/projects/ui-saas.jpg",
    tech: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://diorsolutions.site",
    codeUrl: "https://github.com/diorsolutions",
    featured: true,
  },
  // {
  //   id: 3,
  //   title: "AI-Powered Chat App",
  //   description:
  //     "Intelligent chat application with AI integration, real-time messaging, and advanced user experience",
  //   image: "/projects/chat.jpg",
  //   tech: ["React", "OpenAI API", "WebSocket", "Redis", "Docker"],
  //   liveUrl: "https://diorsolutions.site",
  //   codeUrl: "https://github.com/diorsolutions",
  //   featured: true,
  // },
  // {
  //   id: 4,
  //   title: "Professional Dentists CMS Dashboard",
  //   description:
  //     "Professional trading interface with real-time market data, advanced charting, and portfolio management",
  //   image: "/projects/dentist.png",
  //   tech: ["Vue.js", "TradingView", "WebSocket", "Express", "JWT"],
  //   liveUrl: "https://diorsolutions.site",
  //   codeUrl: "https://github.com/diorsolutions",
  //   featured: false,
  // },
];
