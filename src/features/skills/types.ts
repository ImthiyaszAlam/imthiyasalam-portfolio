// Skill and SkillCategory types for the Skills feature

export interface Skill {
  name: string;
  level: number; // 0–100
  icon: string | React.ComponentType<any>;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
