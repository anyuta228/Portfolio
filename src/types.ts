export type ProjectCategory = 'all' | 'web3' | 'edtech' | 'fintech' | 'saas' | 'game-2d' | 'fullstack-web';
export type ProjectOrigin = 'commercial' | 'startup' | 'concept' | 'non_commercial';

export interface ProjectMedia {
  type: 'image' | 'video' | 'iframe';
  src: string;
  poster?: string;
  title?: string;
}

export interface ProjectCase {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  origin: ProjectOrigin;
  originLabel: string;
  isLatest?: boolean;
  isInProgress?: boolean;
  period: string;
  role: string;
  company: string;
  tags: string[];
  metrics: string;
  description: string;
  longDescription: string;
  problemStatement?: string;
  solutionHypothesis?: string;
  duties: string[];
  achievements: string[];
  keyFeatures: string[];
  videoUrl?: string;
  videoTitle?: string;
  videoStages?: {
    step: string;
    title: string;
    desc: string;
    duration?: string;
  }[];
  targetAudience?: {
    persona: string;
    role: string;
    painPoint: string;
  }[];
  externalLinks?: {
    dprofile?: string;
    behance?: string;
    dribbble?: string;
    telegram?: string;
    liveSite?: string;
  };
  accentColor: string;
  coverImage?: string;
  previewMedia?: ProjectMedia[];
  previewVisual?: 'web3-kaspa' | 'game-hud' | 'fintech-p2p' | 'saas-dashboard' | 'uprock-mobile' | 'atoma-lab' | 'librium-mobile' | 'ez-marketplace' | 'belosnezhka-cafe';
}

export interface ClientCaseItem {
  client: string;
  tag: string;
  desc: string;
  value: string;
}

export interface CareerRole {
  period: string;
  title: string;
  company: string;
  type: string;
  location: string;
  duties: string[];
  achievements: string[];
  clients?: string[];
  clientCases?: ClientCaseItem[];
  certificate?: string;
}

export interface ContactChannel {
  label: string;
  handle: string;
  url: string;
  type: 'telegram' | 'email' | 'portfolio' | 'social';
}

export interface MotionWork {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  videoUrl: string;
  stillUrl: string;
  duration?: string;
  dribbbleUrl: string;
  stack: string[];
  description: string;
}

export interface Endorsement {
  id: string;
  author: string;
  role: string;
  company: string;
  relation: string;
  quote: string;
  quoteEn?: string;
  quoteRu?: string;
  context: string;
  authorInitials: string;
  authorPhoto?: string;
  linkedinUrl: string;
  skillsHighlighted: string[];
  verifiedDate: string;
  badgeLabel?: string;
}
