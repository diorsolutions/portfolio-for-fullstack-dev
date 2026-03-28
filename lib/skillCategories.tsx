// Skill type
export type Skill = {
  name: string;
  icon: string;
  alt: string;
};

// Category type
export type SkillCategory = {
  key: "frontend" | "backend" | "wordpress" | "design";
  data: Skill[];
};

// Skills data
export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    data: [
      { name: "HTML-5", icon: "/icons/html.svg", alt: "HTML-5" },
      { name: "CSS-3", icon: "/icons/css.svg", alt: "CSS-3" },
      {
        name: "Tailwind-css",
        icon: "/icons/tailwind.svg",
        alt: "Tailwind-css",
      },
      { name: "M-UI", icon: "/icons/m.svg", alt: "M-UI" },
      { name: "Vite", icon: "/icons/vite.svg", alt: "Vite" },
      { name: "React", icon: "/icons/react.svg", alt: "React" },
      { name: "Next.js", icon: "/icons/next.svg", alt: "Next.js" },
      { name: "TypeScript", icon: "/icons/ts.svg", alt: "TypeScript" },
      { name: "Jest", icon: "/icons/jest.svg", alt: "Jest" },
      { name: "Github", icon: "/icons/github.svg", alt: "Github" },
    ],
  },
  {
    key: "backend",
    data: [
      { name: "Node.js", icon: "/icons/node.svg", alt: "Node.js" },
      { name: "Express.js", icon: "/icons/express.svg", alt: "Express" },
      { name: "Web-socket", icon: "/icons/socket.svg", alt: "Web-socket" },
    ],
  },
  {
    key: "wordpress",
    data: [
      { name: "WordPress", icon: "/icons/wp.svg", alt: "WordPress" },
      { name: "Woocommerce", icon: "/icons/woo.svg", alt: "Woocommerce" },
      {
        name: "Yoast SEO",
        icon: "/icons/yoast.svg",
        alt: "Yoast SEOYoast SEO",
      },
      { name: "WPML", icon: "/icons/wpml.svg", alt: "WPML" },
      { name: "REST API", icon: "/icons/rest.svg", alt: "REST API" },
      { name: "Sass", icon: "/icons/sass.svg", alt: "Sass" },
      { name: "Security", icon: "/icons/security.svg", alt: "Security" },
      { name: "Elementor", icon: "/icons/elementor.svg", alt: "Elementor" },
    ],
  },
  {
    key: "design",
    data: [
      { name: "Canva", icon: "/icons/canva.svg", alt: "Canva" },
      { name: "Figma", icon: "/icons/figma.svg", alt: "Figma" },
      { name: "Photoshop", icon: "/icons/ps.svg", alt: "Photoshop" },
    ],
  },
];

export default skillCategories;
