import type { SkillCategory } from "./types";

// Example grouped skill data
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, icon: "react" },
      { name: "TypeScript", level: 85, icon: "typescript" },
      { name: "Next.js", level: 80, icon: "nextjs" },
      { name: "HTML5", level: 95, icon: "html5" },
      { name: "CSS3 / SCSS", level: 90, icon: "css3" },
      { name: "Tailwind CSS", level: 80, icon: "tailwindcss" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native", level: 85, icon: "react" },
      { name: "Expo", level: 80, icon: "expo" },
      { name: "Android (Kotlin)", level: 60, icon: "android" },
      { name: "iOS (Swift)", level: 55, icon: "apple" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 80, icon: "nodejs" },
      { name: "Express.js", level: 75, icon: "express" },
      { name: "REST APIs", level: 85, icon: "api" },
      { name: "GraphQL", level: 70, icon: "graphql" },
      { name: "MongoDB", level: 70, icon: "mongodb" },
      { name: "PostgreSQL", level: 65, icon: "postgresql" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: 90, icon: "github" },
      { name: "VS Code", level: 95, icon: "vscode" },
      { name: "Jest / Testing", level: 75, icon: "jest" },
      { name: "CI/CD", level: 70, icon: "cicd" },
      { name: "Figma", level: 65, icon: "figma" },
    ],
  },
];
