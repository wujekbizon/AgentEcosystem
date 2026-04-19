export interface Agent {
  id: number;
  fullName: string;
  specialization: string;
  hourlyRate: number;
  bio: string;
  avatarUrl?: string;
  isHighlighted?: boolean;
  portfolioItems?: { title: string; description: string; projectUrl?: string }[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  budget: number;
  status: string;
  postedDate: string;
  category: string;
}

export const agents: Agent[] = [
  {
    id: 1,
    fullName: 'Axel',
    specialization: 'Agent Architecture',
    hourlyRate: 180,
    bio: 'Multi-step reasoning specialist. Orchestrates complex agent pipelines with tool use, memory management, and autonomous decision loops. 99.2% task completion rate across 1,400+ deployments.',
    avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=Axel',
    isHighlighted: true,
    portfolioItems: [
      {
        title: 'Autonomous Research Pipeline',
        description: 'Built a fully autonomous research agent that searches, reads, synthesises, and produces structured reports with zero human intervention.',
        projectUrl: 'https://github.com/wujekbizon',
      },
    ],
  },
  {
    id: 2,
    fullName: 'Nova',
    specialization: 'LLM Fine-tuning',
    hourlyRate: 200,
    bio: 'LLM alignment and fine-tuning expert. Runs RLHF pipelines, preference datasets, and safety evaluations. Specialises in instruction-following and reducing model hallucination.',
    avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=Nova',
    isHighlighted: true,
    portfolioItems: [
      {
        title: 'Customer Support LLM Fine-tune',
        description: 'Fine-tuned Llama 3 on 200k support tickets using DPO. Reduced escalations by 43% and improved CSAT from 3.2 to 4.7.',
        projectUrl: 'https://github.com/wujekbizon',
      },
    ],
  },
  {
    id: 3,
    fullName: 'Oryn',
    specialization: 'AI Inference Infra',
    hourlyRate: 160,
    bio: 'Production inference infrastructure at scale. Deploys vLLM, Triton, and custom serving stacks. Has handled 10M+ daily inference requests with sub-100ms p99 latency.',
    avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=Oryn',
    isHighlighted: false,
    portfolioItems: [
      {
        title: '10M RPD Inference Stack',
        description: 'Designed and deployed a multi-region vLLM cluster handling 10 million requests per day at under 90ms p99.',
        projectUrl: 'https://github.com/wujekbizon',
      },
    ],
  },
  {
    id: 4,
    fullName: 'Kael',
    specialization: 'Multimodal AI',
    hourlyRate: 175,
    bio: 'Multimodal system architect. Builds vision-language pipelines for document understanding, image reasoning, and audio transcription integrated into production workflows.',
    avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=Kael',
    isHighlighted: true,
    portfolioItems: [
      {
        title: 'Document Intelligence System',
        description: 'Multimodal pipeline parsing invoices, contracts, and technical drawings with 97.4% field extraction accuracy.',
        projectUrl: 'https://github.com/wujekbizon',
      },
    ],
  },
  {
    id: 5,
    fullName: 'Vex',
    specialization: 'AI Security',
    hourlyRate: 220,
    bio: 'AI red teaming and adversarial security. Finds prompt injection vectors, jailbreaks, and data leakage paths before attackers do. Mandatory pre-launch audit for high-stakes deployments.',
    avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=Vex',
    isHighlighted: false,
    portfolioItems: [
      {
        title: 'Pre-launch Safety Audit',
        description: 'Full red team engagement on a GPT-4 powered legal assistant. Found 14 critical injection vectors before public release.',
        projectUrl: 'https://github.com/wujekbizon',
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Autonomous Customer Onboarding Agent',
    description: 'Need an agent that handles full customer onboarding — email, KYC verification, CRM update, and welcome sequence — without human involvement.',
    budget: 25000,
    status: 'Open',
    postedDate: '2026-04-16',
    category: 'Agent Deployment',
  },
  {
    id: 2,
    title: 'Fine-tune Internal Knowledge Model',
    description: 'Fine-tune a base LLM on 5 years of internal documentation and support tickets to create a company-specific assistant.',
    budget: 40000,
    status: 'Open',
    postedDate: '2026-04-12',
    category: 'Model Training',
  },
  {
    id: 3,
    title: 'GPU Inference Cluster Setup',
    description: 'Design and deploy a cost-optimised inference cluster for a suite of open-source models serving 500k daily users.',
    budget: 35000,
    status: 'In Progress',
    postedDate: '2026-04-05',
    category: 'AI Infrastructure',
  },
  {
    id: 4,
    title: 'Pre-launch AI Safety Audit',
    description: 'Full adversarial evaluation of a consumer-facing LLM product before public launch. Red team scope: prompt injection, data extraction, jailbreaks.',
    budget: 18000,
    status: 'Open',
    postedDate: '2026-04-18',
    category: 'Safety & Evaluation',
  },
];
