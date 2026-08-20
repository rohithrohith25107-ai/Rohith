export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: string; description?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bulletSummary?: string;
  bullets: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  bullets: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  achievement?: string;
  coursework?: string[];
  details?: string;
}

export interface CertificationItem {
  id: string;
  provider: string;
  title: string;
  topics: string[];
  icon: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  description: string;
  badge?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "ROHITH R",
    title: "Frontend Web Developer",
    subTitle: "React.js & Next.js | AWS Cloud & Generative AI",
    statusBadge: "Available for Junior Roles & Internships",
    location: "Coimbatore, TN, India",
    phone: "+91 9047918276",
    email: "rohithweb23@gmail.com",
    github: "https://github.com/rohithr",
    linkedin: "https://linkedin.com/in/rohith-r",
    portfolioUrl: "https://rohith-portfolio.vercel.app",
    resumePdf: "/Rohith_R_Resume.pdf",
    summary: "Frontend Web Developer and final-year Computer Science & Engineering student (Expected 2027) with hands-on experience building responsive, high-performance Single Page Applications using React.js, Next.js, and TypeScript. Skilled in frontend optimization, component-based architecture, RESTful API integration, and CI/CD deployment via Vercel. Backed by cloud and Generative AI certifications from AWS, Microsoft, and Google Cloud. Recognized top performer and team leader seeking a Junior Frontend Developer / Web Developer role.",
    aboutShort: "Passionate Frontend Developer dedicated to creating fast, zero-CLS web applications. Blending modern frameworks like React and Next.js with cutting-edge AI APIs and Cloud infrastructure.",
  },

  skills: [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript (ES6+)" },
        { name: "TypeScript" },
        { name: "React.js" },
        { name: "Next.js" },
        { name: "HTML5" },
        { name: "CSS3" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Python" },
        { name: "Java" },
        { name: "SQL" },
      ]
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Vercel" },
        { name: "Vite" },
        { name: "VS Code" },
      ]
    },
    {
      title: "Cloud & AI",
      skills: [
        { name: "AWS Cloud Fundamentals" },
        { name: "Amazon Q Developer/Business" },
        { name: "Generative AI" },
        { name: "NLP & Computer Vision" },
        { name: "Agentic AI" },
        { name: "AI API Integration" },
      ]
    }
  ] as SkillCategory[],

  experience: [
    {
      id: "initz-intern",
      role: "Web Development Intern",
      company: "Initz Institution",
      location: "Coimbatore, India",
      period: "2026",
      type: "Internship",
      bulletSummary: "Worked in an Agile environment optimizing web apps, improving Core Web Vitals, and streamlining internal billing tools.",
      bullets: [
        "Developed and maintained interactive web applications using HTML5, CSS3, JavaScript, and Java within an Agile team environment.",
        "Optimized frontend code, CSS structures, and media assets, improving Core Web Vitals scores.",
        "Executed cross-browser testing across Chrome, Firefox, Safari, and Edge to resolve layout and functional compatibility issues.",
        "Streamlined billing workflow systems during internal tool optimization, boosting operational efficiency by 20%.",
        "Collaborated with senior engineers via Git/GitHub using structured feature branching and pull request code reviews."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Java", "Git", "GitHub"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      category: "Frontend SPA / Next.js",
      description: "Fully responsive, high-performance developer portfolio built with Next.js and TypeScript featuring zero Cumulative Layout Shift.",
      technologies: ["Next.js", "TypeScript", "CSS", "Vercel"],
      bullets: [
        "Built a fully responsive SPA using Next.js and TypeScript with component-based architecture, achieving zero Cumulative Layout Shift (CLS).",
        "Reduced initial page load time from ~4s to under 1.5s through lazy loading, web font optimization, and Vercel edge CDN deployment."
      ],
      featured: true,
      metrics: "Load Time < 1.5s | Zero CLS",
      githubUrl: "https://github.com/rohithr/portfolio",
      liveUrl: "#"
    },
    {
      id: "placement-management",
      title: "College Placement Management System",
      category: "Fullstack (MERN)",
      description: "Integrated fullstack web application with robust client-server workflows for placement tracking and automated continuous delivery.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Vercel"],
      bullets: [
        "Developed and deployed an integrated fullstack web application with robust client-server workflows and responsive UI design.",
        "Configured automated CI/CD deployment pipelines via GitHub for continuous delivery on Vercel."
      ],
      featured: true,
      metrics: "Fullstack MERN | Automated CI/CD",
      githubUrl: "https://github.com/rohithr/placement-system",
      liveUrl: "#"
    },
    {
      id: "vehicle-parking",
      title: "Vehicle Parking Management System",
      category: "Real-time SPA",
      description: "Engineered a real-time SPA managing slot allocation, entry/exit tracking, and automated fee calculations.",
      technologies: ["React.js", "Vite", "JavaScript", "Vercel"],
      bullets: [
        "Engineered a real-time SPA managing slot allocation, entry/exit tracking, and automated fee calculations for 100+ active vehicle records.",
        "Implemented structured state management using React Hooks to ensure modular architecture across modern browsers."
      ],
      featured: false,
      metrics: "100+ Active Vehicle Records",
      githubUrl: "https://github.com/rohithr/parking-system",
      liveUrl: "#"
    },
    {
      id: "restaurant-management",
      title: "Restaurant Management System",
      category: "Web Application",
      description: "Responsive web app enabling interactive menu browsing, real-time order tracking, and dynamic UI feedback.",
      technologies: ["React.js", "CSS", "Vercel"],
      bullets: [
        "Developed a responsive web app enabling interactive menu browsing, real-time order tracking, and dynamic UI feedback in React.js.",
        "Designed a modular, reusable component architecture optimized for mobile and desktop screens with automated Vercel deployments."
      ],
      featured: false,
      metrics: "Real-time Order Feedback",
      githubUrl: "https://github.com/rohithr/restaurant-app",
      liveUrl: "#"
    }
  ] as ProjectItem[],

  education: [
    {
      id: "diploma-cse",
      degree: "Diploma in Computer Science & Engineering (CSE)",
      institution: "Excel Hi-Tech Engineering College",
      period: "2024 – 2027 (Expected)",
      achievement: "Awarded Top Performer by college faculty (selected out of 50+ peers) for leading a 15-member team to deliver an AI-integrated web platform.",
      coursework: ["Web Development", "Data Structures & Algorithms", "OOP", "DBMS", "Software Engineering"],
      details: "Final-year Computer Science & Engineering student specializing in Web Development & Cloud Technologies."
    },
    {
      id: "sslc",
      degree: "Secondary School Education (SSLC)",
      institution: "Govt High School, Kurumbapalayam",
      location: "Madukkarai, Coimbatore, India",
      period: "2021",
      details: "Completed SSLC in 2021 with an aggregate score of 60%, marking the start of my interest in computers and engineering."
    }
  ] as EducationItem[],

  certifications: [
    {
      id: "aws-cert",
      provider: "AWS Training and Certification",
      title: "Cloud & AI Fundamentals",
      topics: ["Cloud Fundamentals", "Amazon Q Developer", "Amazon Q Business"],
      icon: "Cloud"
    },
    {
      id: "ms-cert",
      provider: "Microsoft Learn",
      title: "AI & Cybersecurity Specialist",
      topics: ["Microsoft 365 Copilot & AI Productivity", "NLP / Computer Vision / AI Speech", "Agentic AI", "Cybersecurity Fundamentals"],
      icon: "Shield"
    },
    {
      id: "gcp-ms-cert",
      provider: "Google Cloud & Microsoft Learn",
      title: "Generative AI Principles",
      topics: ["Generative AI", "Responsible AI Principles"],
      icon: "Cpu"
    }
  ] as CertificationItem[],

  achievements: [
    {
      id: "top-performer",
      title: "Top Performer Award",
      organization: "Excel Hi-Tech Engineering College",
      description: "Selected out of 50+ peers by college faculty for leading a 15-member team to deliver an AI-integrated web platform.",
      badge: "Team Lead & Top Performer"
    },
    {
      id: "billing-efficiency",
      title: "Operational Efficiency Booster (+20%)",
      organization: "Initz Institution",
      description: "Streamlined internal billing workflow systems during tool optimization, increasing operational efficiency by 20%.",
      badge: "Internship Achievement"
    },
    {
      id: "performance-boost",
      title: "Core Web Vitals Optimization",
      organization: "Initz Institution",
      description: "Optimized frontend code, CSS structures, and media assets to improve site performance and responsiveness.",
      badge: "Performance Optimization"
    }
  ] as AchievementItem[]
};
