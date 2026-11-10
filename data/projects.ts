export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  highlights?: string[];
  image?: string;
  tags: string[];
  category: string;
  featured?: boolean;
  github?: string;
  webapp?: string;
}

export const allProjects: Project[] = [
  {
    id: 5,
    title: "Copy Clash Base – Clash of Clans Layout Sharing",
    date: "2024",
    description:
      "Copy Clash Base is a website that helps Clash of Clans players easily copy and use base layouts. It supports all Town Halls from TH1 to TH17, including both Home Village and Builder Base. Players can browse layouts and copy them directly into the game with a single click.",
    image: "/works/copyclashbase.png",
    tags: [
      "Clash of Clans",
      "Web App",
      "Game Utility",
      "Base Layouts",
      "TH1–TH17",
      "Home Village",
      "Builder Base",
    ],
    category: "web app",
    featured: true,
    github: "",
    webapp: "https://copyclashbase.vercel.app",
  },
  {
    id: 0,
    title: "Intellecta - AI Powered Educational Platform",
    date: "Jun 2023 - Jul 2023",
    description:
      "Intellecta is an interactive learning platform designed for students aged 4 to 18, offering personalized lessons, fun activities, and progress tracking to make learning engaging, effective, and age-appropriate.",
    image: "/works/intellecta.png",
    tags: [
      "React.js",
      "TailwindCSS",
      "TypeScript",
      "Zustand",
      "Node.js",
      "Express.js",
      "Mongodb",
      "Socket.io",
      "Microservices",
      "Rabbitmq",
    ],
    category: "web app",
    featured: true,
    github: "https://github.com/fariskt/intellecta",
    webapp: "https://intellecta-web.vercel.app/",
  },
  {
    id: 1,
    title: "Zynk - socail media platform",
    date: "Jun 2023 - Jul 2023",
    description:
      "Zynk, a modern MERN stack social media platform built with Next.js, where users can connect, engage, and communicate in real time.",
    image: "/works/zynk.png",
    tags: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Zustand",
      "Node.js",
      "Express.js",
      "Mongodb",
      "Socket.io",
    ],
    category: "web app",
    featured: true,
    github: "https://github.com/fariskt/zynk-client",
    webapp: "https://zynk-social-media.vercel.app/",
  },
  {
    id: 2,
    title: "Cashvio - Personal Budget Tracker",
    date: "Jun 2023 - Jul 2023",
    description:
      "Cashvio is a personal finance tracker that helps users manage budgets, set financial goals, and track daily expenses — empowering better money habits with a simple, intuitive interface.",
    image: "/works/cashvio.png",
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "Node.js",
      "Express.js",
      "PostgresSql",
    ],
    category: "web app",
    featured: true,
    github: "https://github.com/fariskt/cashvio",
    webapp: "https://cashvio.vercel.app/",
  },
];

export const featuredProjects: Project[] = allProjects.filter((p) => p.featured).slice(0, 8);
