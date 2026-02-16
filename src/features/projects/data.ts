import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio site to showcase my work and skills, built with React, TypeScript, and styled-components.",
    techStack: ["React", "TypeScript", "styled-components", "Vercel"],
    image:
      "https://plus.unsplash.com/premium_photo-1757690499338-38c511645730?q=80&w=701&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    featured: true,
  },
  {
    id: "2",
    title: "Task Manager App",
    description:
      "A cross-platform productivity app for managing daily tasks, with offline support and real-time sync.",
    techStack: ["React Native", "Expo", "Redux", "Firebase"],
    image: "https://via.placeholder.com/400x240?text=Task+Manager",
    liveUrl: "https://your-taskapp.com",
    githubUrl: "https://github.com/yourusername/task-manager",
    featured: false,
  },
  {
    id: "3",
    title: "E-commerce Platform",
    description:
      "A scalable e-commerce platform with product catalog, shopping cart, and secure checkout.",
    techStack: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    image: "https://via.placeholder.com/400x240?text=E-commerce",
    liveUrl: "https://your-shop.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    featured: true,
  },
  {
    id: "4",
    title: "Blog Engine",
    description:
      "A fast, SEO-friendly blog engine with markdown support and custom themes.",
    techStack: ["Gatsby", "GraphQL", "TypeScript", "Netlify"],
    image: "https://via.placeholder.com/400x240?text=Blog+Engine",
    liveUrl: "https://your-blog.com",
    githubUrl: "https://github.com/yourusername/blog-engine",
    featured: false,
  },
  {
    id: "5",
    title: "Weather Dashboard",
    description:
      "A real-time weather dashboard with interactive charts and location search.",
    techStack: ["Vue.js", "TypeScript", "Chart.js", "OpenWeatherMap API"],
    image: "https://via.placeholder.com/400x240?text=Weather+Dashboard",
    liveUrl: "https://your-weather.com",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    featured: false,
  },
  {
    id: "6",
    title: "Fitness Tracker",
    description:
      "A mobile app to track workouts, nutrition, and progress with analytics and reminders.",
    techStack: ["React Native", "Expo", "SQLite", "Redux"],
    image: "https://via.placeholder.com/400x240?text=Fitness+Tracker",
    liveUrl: "https://your-fitnessapp.com",
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    featured: false,
  },
  {
    id: "7",
    title: "Recipe Finder",
    description:
      "A web app to discover, save, and share recipes with ingredient-based search.",
    techStack: ["Vue.js", "TypeScript", "Firebase", "TailwindCSS"],
    image: "https://via.placeholder.com/400x240?text=Recipe+Finder",
    liveUrl: "https://your-recipefinder.com",
    githubUrl: "https://github.com/yourusername/recipe-finder",
    featured: false,
  },
  {
    id: "8",
    title: "Finance Dashboard",
    description:
      "A dashboard for tracking expenses, budgets, and investments with data visualization.",
    techStack: ["Angular", "TypeScript", "D3.js", "Node.js"],
    image: "https://via.placeholder.com/400x240?text=Finance+Dashboard",
    liveUrl: "https://your-financedash.com",
    githubUrl: "https://github.com/yourusername/finance-dashboard",
    featured: false,
  },
];
