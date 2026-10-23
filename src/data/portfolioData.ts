import type { Project, SkillCategory, TimelineItem, Education, Certification, Publication, GithubRepo } from '../types';

export const PERSONAL_INFO = {
  name: 'Golla Venkata Rakesh',
  shortName: 'Rakesh Golla',
  role: 'Java & Spring Boot Developer | Full-Stack Enthusiast | AI/ML Explorer',
  bio: 'Recent Computer Science Engineering graduate passionate about building scalable backend systems, full-stack applications, and AI-powered solutions. Experienced in Java, Spring Boot, REST APIs, databases, and real-world software development.',
  aboutDetailed: `I am a Computer Science and Engineering graduate with a strong foundation in Java, Object-Oriented Programming, Data Structures, SQL, JDBC, Spring Boot, REST APIs, and software development.

I enjoy solving real-world problems through clean, maintainable code and continuously learning modern technologies. My interests include backend development, full-stack engineering, AI applications, and cloud-native software solutions.`,
  email: 'rakeshgolla21@gmail.com',
  phone: '+91 9390156078',
  location: 'Andhra Pradesh, India',
  github: 'https://github.com/Golla-Rakesh21',
  githubUsername: 'Golla-Rakesh21',
  linkedin: 'https://www.linkedin.com/in/golla-rakesh-12345b2b6/',
  leetcode: 'https://leetcode.com/u/Golla-Rakesh21/',
  cgpa: '8.84',
  gradYear: '2026',
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1iDfrD0Zjl59ovJx0RVaSdKATQKw-gblK',
  resumeViewUrl: 'https://drive.google.com/file/d/1HmlFW1drFWzzrlEm8iloH09zTa780usT/view?usp=drive_link',
};

export const ABOUT_HIGHLIGHTS = [
  { label: '8.84 CGPA', desc: 'Academics Excellence' },
  { label: 'Java Developer', desc: 'Core & Enterprise' },
  { label: 'Spring Boot Enthusiast', desc: 'Microservices & REST' },
  { label: 'AI & NLP Projects', desc: 'Research & Applications' },
  { label: 'Problem Solver', desc: '100+ DSA Solved' },
  { label: 'Open To Opportunities', desc: 'Software Engineer Roles' },
];

export const STATS = [
  { label: 'Skills', count: 20, suffix: '+' },
  { label: 'Major Projects', count: 5, suffix: '+' },
  { label: 'IEEE Publications', count: 2, suffix: '' },
  { label: 'DSA Solved', count: 100, suffix: '+' },
  { label: 'CGPA', count: 8.84, isDecimal: true, suffix: '' },
  { label: 'Graduate Year', count: 2026, isYear: true, suffix: '' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'SQL', 'Python (Basic)', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Core Java & Backend',
    skills: ['OOP', 'Collections Framework', 'Exception Handling', 'Multithreading', 'JDBC', 'Spring Framework', 'Spring Boot', 'Spring MVC', 'Hibernate ORM', 'Spring Data JPA', 'RESTful APIs'],
  },
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Tailwind CSS', 'Framer Motion', 'ShadCN UI', 'JavaScript (ES6+)', 'Responsive Web Design'],
  },
  {
    title: 'Databases & Storage',
    skills: ['MySQL', 'Relational Database Design', 'Query Optimization', 'JDBC Template'],
  },
  {
    title: 'AI Development',
    skills: ['Natural Language Processing (NLP)', 'Retrieval-Augmented Generation (RAG)', 'LangChain', 'Prompt Engineering', 'Convolutional Neural Networks (CNN)', 'Streamlit'],
  },
  {
    title: 'Tools & Ecosystem',
    skills: ['Git', 'GitHub', 'Apache Maven', 'Postman API Tool', 'VS Code', 'Eclipse IDE', 'Chrome Extensions API'],
  },
];

export const PROJECTS: Project[] = [
  
{
  id: 'proj-1',
  title: 'Student Management System',
  subtitle: 'RESTful Backend Application with Spring Boot',
  description: 'Developed a Student Management System backend using Java and Spring Boot to manage student records efficiently. Implemented RESTful APIs with CRUD operations, database integration using Spring Data JPA and Hibernate, and MySQL for persistent data storage.',
  features: [
    'RESTful APIs for Student CRUD Operations',
    'Student Search, Filtering, and Pagination',
    'MySQL Database Integration with Spring Data JPA',
    'Layered Architecture using Controller, Service, and Repository',
    'Exception Handling and Data Management'
  ],
  tech: [
    'Java',
    'Spring Boot',
    'Spring Web',
    'Spring Data JPA',
    'Hibernate',
    'MySQL',
    'Maven',
    'Docker'
  ],
  category: 'Java/Backend',
  githubUrl: 'https://github.com/Golla-Rakesh21/StudentManagement'
},
  {
    id: 'proj-2',
    title: 'Facebook Toxic Comment Filtering Extension',
    subtitle: 'Real-Time Comment Filtering Extension for Facebook',
    description: 'Chrome extension that automatically detects and hides toxic Facebook comments using NLP techniques in real-time, boosting user mental wellbeing and creating a safer social environment.',
    features: [
      'Toxicity & Abuse Detection',
      'Sentiment Analysis Pipeline',
      'Real-Time Content Filtering',
      'Safer & Cleaner Social Experience'
    ],
    tech: ['JavaScript', 'NLP', 'Chrome Extensions API', 'HTML/CSS'],
    publication: 'IEEE Research Paper Published (ICAISS 2025)',
    category: 'AI/ML',
    githubUrl: 'https://github.com/Golla-Rakesh21/Extension-hide-negative-comments-Facebook'
  },
  {
    id: 'proj-3',
    title: 'Hybrid CNN Waste Classification',
    subtitle: 'Research-Based AI Model for Waste Classification with Environmental Awareness',
    description: 'Deep learning solution combining customized CNN architectures to classify multi-category waste automatically, helping municipal recycling plants and smart bins reduce landfill contamination.',
    features: [
      'Deep Learning Architecture',
      'Hybrid CNN Models',
      'Automated Waste Category Detection',
      'User-Centric Environmental Awareness'
    ],
    tech: ['Python', 'TensorFlow', 'Convolutional Neural Networks (CNN)', 'OpenCV'],
    publication: 'IEEE Published Research (2026)',
    category: 'AI/ML',
    githubUrl: 'https://github.com/Golla-Rakesh21/Waste-Classification'
  },
  {
    id: 'proj-4',
    title: 'Grammar & Spell Checker',
    subtitle: 'AI-Powered Intelligent Proofreading Application',
    description: 'Interactive web-based proofreading assistant that detects complex syntactic errors, typos, and style issues using PySpellChecker & LanguageTool-Python with instant suggestions.',
    features: [
      'Real-time Context Corrections',
      'Grammar & Punctuation Suggestions',
      'Instant Spell Checking with LanguageTool',
      'Built with Python & Streamlit'
    ],
    tech: ['Python', 'Streamlit', 'LanguageTool-Python', 'PySpellChecker', 'NLP'],
    category: 'AI/ML'
  },
  {
    id: 'proj-5',
    title: 'Java Notepad Application',
    subtitle: 'Desktop Text Editing Suite Built with Java Swing',
    description: 'Feature-complete desktop text editing software built using native Java Swing frameworks, allowing users to create, open, edit, save, and print .txt files with keyboard shortcuts.',
    features: [
      'File Operations (Open, Save, Edit, Print .txt)',
      'Rich Text Editing & Keyboard Shortcuts',
      'Native Printing Support & Page Setup',
      'Custom About Section & Clean UI'
    ],
    tech: ['Java Swing', 'AWT', 'Java I/O', 'OOP Architecture'],
    category: 'Java/Backend',
    githubUrl: 'https://github.com/Golla-Rakesh21/Java-Programs'
  },
  {
    id: 'proj-6',
    title: 'GENAI RAG Assistant',
    subtitle: 'Retrieval-Augmented Generation Application with LangChain',
    description: 'Enterprise knowledge-base assistant enabling users to upload custom documents and query them seamlessly using vector store retrieval and Large Language Model contextual reasoning.',
    features: [
      'Semantic Context Retrieval',
      'AI Question Answering over Custom Docs',
      'Vector Database Knowledge Indexing'
    ],
    tech: ['Python', 'LangChain', 'LLMs', 'Vector Stores', 'Streamlit'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Golla-Rakesh21/GENAI_RAG'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-1',
    year: '2026',
    title: 'Hybrid CNN-Based Waste Classification with User-Centric Environmental Awareness',
    journal: 'IEEE Conference Proceedings 2026',
    authors: ['S. Amutha', 'Golla Venkata Rakesh', 'Research Team'],
    link: 'https://ieeexplore.ieee.org/abstract/document/11525724',
    abstract: 'Proposes a novel hybrid Convolutional Neural Network architecture designed for high-accuracy solid waste segregation at source, incorporating real-time feedback mechanisms to boost public recycling awareness.'
  },
  {
    id: 'pub-2',
    year: '2025',
    title: 'Real-Time Comment Filtering: A Chrome Extension for Toxicity Reduction on Facebook',
    journal: 'ICAISS 2025 (IEEE)',
    authors: ['S. Amutha', 'G. V. Rakesh', 'B. L. V. R. Reddy', 'B. Jagadeesh', 'G. S. Kumar', 'K. Ganesan'],
    link: 'https://ieeexplore.ieee.org/abstract/document/11042197',
    abstract: 'Presents an automated client-side browser plugin powered by NLP lightweight models to detect online toxicity and harassment on Facebook comments in real-time.'
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'Kalasalingam Academy of Research and Education',
    degree: 'Bachelor of Technology',
    field: 'Computer Science Engineering',
    period: '2022 - 2026',
    grade: '8.84',
    gradeType: 'CGPA'
  },
  {
    institution: 'Narayana Junior College, Nellore',
    degree: 'Class XII (Intermediate / Senior Secondary)',
    period: '2020 - 2022',
    grade: '93.8%',
    gradeType: 'Percentage'
  },
  {
    institution: 'Sri Chaitanya Techno School',
    degree: 'Class X (Secondary School Certificate)',
    period: '2019 - 2020',
    grade: '575',
    gradeType: 'Marks'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Digital Skills Readiness Program - Java Full Stack',
    issuer: 'Wipro',
    program: 'Enterprise Java & Spring Boot Full-Stack Track',
    date: 'Issued July 2025',
    credentialUrl: 'https://drive.google.com/file/d/1PntV9oaqzigrVtedRO4KDSYCIUveI4si/view?usp=drive_link'
  },
  {
    title: 'Master Java Spring Boot Development',
    issuer: 'Telusko',
    program: 'Enterprise Backend Engineering & Microservices',
    date: 'Issued 2025',
    credentialUrl: 'https://drive.google.com/file/d/1dm3SuRXIviTuyIWqMbH0XWviCvYir0EN/view?usp=drive_link'
  },
  {
    title: 'Java Data Structures and Algorithms Masterclass',
    issuer: 'Udemy',
    program: 'Advanced Problem Solving & Data Structures Mastery',
    credentialUrl: 'https://drive.google.com/file/d/1jKrBgPF_sVi3wkephVJE6gjfEwRxuHfo/view'
  },
  {
    title: 'Learn Java Programming Beginners to Advanced',
    issuer: 'Udemy',
    program: 'Object-Oriented Programming & Core Java Foundations',
    credentialUrl: 'https://drive.google.com/file/d/1kjLY7bAGv9dIOsIECvu-3-dfi0VmSQJZ/view'
  }
];

export const LEARNING_JOURNEY: TimelineItem[] = [
  {
    year: '2022',
    title: 'Started Computer Science Journey',
    description: 'Enrolled in Computer Science Engineering at Kalasalingam Academy. Explored programming fundamentals & logic.'
  },
  {
    year: '2023',
    title: 'Mastered Java & Core Fundamentals',
    description: 'Deep-dived into Java OOP, Data Structures & Algorithms, Multithreading, SQL databases, and JDBC.'
  },
  {
    year: '2024',
    title: 'Built NLP Chrome Extension & IEEE Research',
    description: 'Engineered Facebook Toxic Comment Filtering browser extension and submitted manuscript for IEEE review.'
  },
  {
    year: '2025',
    title: 'IEEE Publication & Wipro Certification',
    description: 'Published paper at ICAISS 2025 and completed Wipro Digital Skills Java Full Stack Program with top honors.'
  },
  {
    year: '2025',
    title: '2nd IEEE Publication on Hybrid CNN',
    description: 'Co-authored 2nd research paper on Hybrid CNN Waste Segregation and expanded into GenAI & RAG architectures.'
  },
  {
    year: '2026',
    title: 'Graduated & Seeking SWE Opportunities',
    description: 'Graduating with 8.84 CGPA. Actively seeking Software Engineering, Java Backend, and Full-Stack positions.'
  }
];

export const FEATURED_GITHUB_REPOS: GithubRepo[] = [
  {
    name: 'GENAI_RAG',
    description: 'Retrieval Augmented Generation pipeline with LangChain and vector store search.',
    stars: 18,
    forks: 6,
    language: 'Python',
    updatedAt: '2026-01-20',
    url: 'https://github.com/Golla-Rakesh21/GENAI_RAG'
  },
  {
    name: 'Waste-Classification',
    description: 'Deep Learning Hybrid CNN model for automated multi-class waste classification.',
    stars: 24,
    forks: 8,
    language: 'Python',
    updatedAt: '2025-11-10',
    url: 'https://github.com/Golla-Rakesh21/Waste-Classification'
  },
  {
    name: 'Extension-hide-negative-comments-Facebook',
    description: 'Real-time NLP toxicity filter extension for Facebook comments.',
    stars: 29,
    forks: 11,
    language: 'JavaScript',
    updatedAt: '2025-09-04',
    url: 'https://github.com/Golla-Rakesh21/Extension-hide-negative-comments-Facebook'
  },
  {
    name: 'Java-Programs',
    description: 'Comprehensive repository of Java DSA solutions, Swing apps, OOP concepts & JDBC demos.',
    stars: 35,
    forks: 14,
    language: 'Java',
    updatedAt: '2026-02-01',
    url: 'https://github.com/Golla-Rakesh21/Java-Programs'
  }
];
