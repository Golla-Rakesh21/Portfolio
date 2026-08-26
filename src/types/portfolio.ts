export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  publication?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'AI/ML' | 'Java/Backend' | 'Full-Stack';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  period: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage' | 'Marks';
}

export interface Certification {
  title: string;
  issuer: string;
  program?: string;
  date?: string;
  badge?: string;
}

export interface GithubRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  updatedAt: string;
  url: string;
}

export interface Publication {
  id: string;
  year: string;
  title: string;
  journal: string;
  authors: string[];
  link?: string;
  abstract?: string;
}
