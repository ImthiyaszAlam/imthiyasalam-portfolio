import type { SkillCategory } from "./types";

// Example grouped skill data
export const skillCategories: SkillCategory[] = [
   
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
