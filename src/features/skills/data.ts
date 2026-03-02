import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Android",
    skills: [
      { name: "Kotlin", level: 85, icon: "code" },
      { name: "Java", level: 75, icon: "code" },
      { name: "Android SDK", level: 85, icon: "android" },
      { name: "Android Studio", level: 90, icon: "android" },
      { name: "Gradle", level: 80, icon: "settings" },
      { name: "MVVM Architecture", level: 85, icon: "layers" },
      {
        name: "Jetpack (ViewModel, LiveData, Navigation)",
        level: 80,
        icon: "cpu",
      },
      { name: "REST API Integration", level: 85, icon: "globe" },
      { name: "Room / SQLite", level: 75, icon: "database" },
      { name: "Coroutines", level: 80, icon: "zap" },
      { name: "Git", level: 85, icon: "git-branch" },
    ],
  },
  {
    title: "Modern & Scalable Android",
    skills: [
      { name: "Jetpack Compose", level: 75, icon: "layout" },
      { name: "Clean Architecture", level: 80, icon: "layers" },
      { name: "SOLID Principles", level: 75, icon: "shield" },
      { name: "Dependency Injection (Hilt)", level: 75, icon: "box" },
      { name: "Flow / Reactive Programming", level: 70, icon: "activity" },
      { name: "Firebase (Auth, Crashlytics)", level: 80, icon: "cloud" },
      {
        name: "Unit Testing (JUnit, Mockito)",
        level: 70,
        icon: "check-circle",
      },
      { name: "CI/CD Basics", level: 65, icon: "repeat" },
      { name: "Play Store Deployment", level: 80, icon: "upload" },
      { name: "Performance Optimization", level: 75, icon: "trending-up" },
    ],
  },
  {
    title: "Professional & Leadership Skills",
    skills: [
      { name: "Problem Solving", level: 90, icon: "brain" },
      { name: "Debugging & Production Fixes", level: 85, icon: "tool" },
      { name: "Feature Ownership", level: 80, icon: "flag" },
      { name: "Code Reviews", level: 75, icon: "eye" },
      { name: "Cross-Team Collaboration", level: 80, icon: "users" },
      { name: "Requirement Analysis", level: 85, icon: "file-text" },
      { name: "Communication Skills", level: 85, icon: "message-circle" },
    ],
  },
];
