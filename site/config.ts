export interface SiteConfig {
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lang: string;
  base: string;
  website: string;
  social: Record<string, string>;
  googleAnalyticsId?: string;
  homeHeroDescription: string;
  researchDescription: string;
  publicationsDescription: string;
  projectsDescription: string;

  // Homepage projects
  homeProjects: {
    enabled: boolean;
    count: number;
  };

  // Homepage Hero block
  hero: {
    enabled: boolean;
    filePath: string;
  };

  // Giscus comments configuration
  comments: {
    enabled: boolean;
    repo: string; // e.g., 'username/repo'
    repoId: string;
    category: string;
    categoryId: string;
    mapping: "pathname" | "url" | "title" | "og:title" | "specific" | "number";
    reactionsEnabled: boolean;
    emitMetadata: boolean;
    inputPosition: "top" | "bottom";
    theme: string; // e.g., 'preferred_color_scheme', 'light', 'dark'
    lang: string;
  };
}

export const SITE: SiteConfig = {
  author: "Loan BERNAT",
  desc: "PhD student in robotics and Artificial Intelligence",
  comments: {
    enabled: false,
    repo: "loanBRNT/loanBRNT.github.io",
    repoId: "R_kgDOJ1H8gA",
    category: "General",
    categoryId: "DIC_kwDOJ1H8gM4C1gD8",
    mapping: "pathname",
    reactionsEnabled: true,
    emitMetadata: true,
    inputPosition: "bottom",
    theme: "preferred_color_scheme",
    lang: "en",
  },
  title: "Home",
  ogImage: "og.png",
  lang: "en-US",
  base: "/",
  website: "https://github.com/loanBRNT",
  social: {
    github: "https://github.com/loanBRNT",
    linkedin: "https://www.linkedin.com/in/loan-bernat-928b9a1b0/",
    youtube: "https://www.youtube.com/@loanbernat8145",
  },
  googleAnalyticsId: "", // Example: 'G-XXXXXXXXXX'
  homeHeroDescription:
    "PhD researcher in robotics working on language-conditioned, long-horizon manipulation and multi-agent robotic systems. My work focuses on building real systems that can understand and interact with the world in a human-like manner.",
  researchDescription:
    "Projects and collaborations exploring language-conditioned manipulation, multi-agent systems, and real-world robotic autonomy.",
  publicationsDescription:
    "Peer-reviewed papers, preprints, and technical reports from recent work.",
  projectsDescription:
    "Applied robotics and AI projects developed outside formal research publications, including system prototypes, demos, and video-based explorations.",

  // Homepage projects
  homeProjects: {
    enabled: true,
    count: 4,
  },

  hero: {
    enabled: true,
    filePath: "site/hero.md",
  },
};
