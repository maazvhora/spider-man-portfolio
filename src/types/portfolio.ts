export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'React & Frontend' | 'UI/UX & Clone';
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string;
  learnings: string;
  metrics: string;
  liveDemoUrl: string;
  githubUrl: string;
  bannerColor: string;
  accentColor: 'red' | 'blue' | 'purple';
  previewType: 'news' | 'textutils' | 'apple' | 'ecommerce' | 'airpods';
}

export interface SkillPower {
  id: string;
  name: string;
  powerName: string;
  category: 'frontend' | 'backend' | 'tools';
  level: number;
  description: string;
  comicSound: string;
  accent: 'red' | 'blue' | 'purple';
}

export interface OriginStep {
  step: string;
  title: string;
  comicTag: string;
  period: string;
  description: string;
  keyUnlocks: string[];
  techStack: string[];
}

export interface ServiceMission {
  id: string;
  title: string;
  missionCode: string;
  description: string;
  deliverables: string[];
  badge: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
  topics: string[];
}
