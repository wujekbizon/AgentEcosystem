export interface Specialization {
  id: number;
  name: string;
  description: string;
}

export interface Agent {
  id: number;
  fullName: string;
  bio: string;
  hourlyRate: number;
  avatarUrl: string;
  isHighlighted: boolean;
  specializationId: number;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  projectUrl: string;
  agentId: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  budget: number;
  status: 'Open' | 'In Progress' | 'Completed';
  postedDate: string;
  categoryId: number;
}

export interface ProjectCategory {
  id: number;
  name: string;
  description: string;
}

export interface ActiveMission {
  id: number;
  projectId: number;
  agentId: number;
  progress: number;
  startDate: string;
  status: 'Running' | 'Pending' | 'Review';
  hoursLogged: number;
}

export interface ActivityItem {
  id: number;
  time: string;
  agentName: string;
  event: string;
}

export const specializations: Specialization[] = [
  { id: 1, name: 'Agent Architecture', description: 'Design and deployment of self-directed AI agents capable of multi-step reasoning and tool use.' },
  { id: 2, name: 'LLM Fine-tuning', description: 'Specialised training pipelines, RLHF, and alignment techniques for large language models.' },
  { id: 3, name: 'AI Inference Infra', description: 'Scalable inference infrastructure, model serving, and MLOps pipelines for production AI systems.' },
  { id: 4, name: 'Multimodal AI', description: 'Vision-language models, audio processing, and cross-modal AI application development.' },
  { id: 5, name: 'AI Security', description: 'Adversarial testing, prompt injection defence, and safety evaluation for AI deployments.' },
];

export const agents: Agent[] = [
  { id: 1, fullName: 'Axel', bio: 'Multi-step reasoning specialist. Orchestrates complex agent pipelines with tool use, memory management, and autonomous decision loops. 99.2% task completion rate across 1,400+ deployments.', hourlyRate: 180, avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=Axel', isHighlighted: true, specializationId: 1 },
  { id: 2, fullName: 'Nova', bio: 'LLM alignment and fine-tuning expert. Runs RLHF pipelines, preference datasets, and safety evaluations. Specialises in instruction-following and reducing model hallucination.', hourlyRate: 200, avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=Nova', isHighlighted: true, specializationId: 2 },
  { id: 3, fullName: 'Oryn', bio: 'Production inference infrastructure at scale. Deploys vLLM, Triton, and custom serving stacks. Has handled 10M+ daily inference requests with sub-100ms p99 latency.', hourlyRate: 160, avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=Oryn', isHighlighted: false, specializationId: 3 },
  { id: 4, fullName: 'Kael', bio: 'Multimodal system architect. Builds vision-language pipelines for document understanding, image reasoning, and audio transcription integrated into production workflows.', hourlyRate: 175, avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=Kael', isHighlighted: true, specializationId: 4 },
  { id: 5, fullName: 'Vex', bio: 'AI red teaming and adversarial security. Finds prompt injection vectors, jailbreaks, and data leakage paths before attackers do. Mandatory pre-launch audit for high-stakes deployments.', hourlyRate: 220, avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=Vex', isHighlighted: false, specializationId: 5 },
];

export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Autonomous Research Pipeline', description: 'Built a fully autonomous research agent that searches, reads, synthesises, and produces structured reports with zero human intervention.', projectUrl: 'https://github.com/example/research-agent', agentId: 1 },
  { id: 2, title: 'Customer Support LLM Fine-tune', description: 'Fine-tuned Llama 3 on 200k support tickets using DPO. Reduced escalations by 43% and improved CSAT from 3.2 to 4.7.', projectUrl: 'https://github.com/example/llm-finetune', agentId: 2 },
  { id: 3, title: '10M RPD Inference Stack', description: 'Designed and deployed a multi-region vLLM cluster handling 10 million requests per day at under 90ms p99.', projectUrl: 'https://github.com/example/inference-stack', agentId: 3 },
  { id: 4, title: 'Document Intelligence System', description: 'Multimodal pipeline parsing invoices, contracts, and technical drawings with 97.4% field extraction accuracy.', projectUrl: 'https://github.com/example/doc-intel', agentId: 4 },
  { id: 5, title: 'Pre-launch Safety Audit', description: 'Full red team engagement on a GPT-4 powered legal assistant. Found 14 critical injection vectors before public release.', projectUrl: 'https://github.com/example/safety-audit', agentId: 5 },
];

export const projectCategories: ProjectCategory[] = [
  { id: 1, name: 'Agent Deployment', description: 'Projects requiring autonomous AI agent setup, integration, and orchestration.' },
  { id: 2, name: 'Model Training', description: 'Custom model fine-tuning, RLHF pipelines, and alignment work.' },
  { id: 3, name: 'AI Infrastructure', description: 'Inference servers, MLOps pipelines, and scalable AI backend systems.' },
  { id: 4, name: 'Safety & Evaluation', description: 'Red teaming, safety audits, and evaluation framework development.' },
];

export const projects: Project[] = [
  { id: 1, title: 'Autonomous Customer Onboarding Agent', description: 'Need an agent that handles full customer onboarding — email, KYC verification, CRM update, and welcome sequence — without human involvement.', budget: 25000, status: 'Open', postedDate: '2026-04-16', categoryId: 1 },
  { id: 2, title: 'Fine-tune Internal Knowledge Model', description: 'Fine-tune a base LLM on 5 years of internal documentation and support tickets to create a company-specific assistant.', budget: 40000, status: 'Open', postedDate: '2026-04-12', categoryId: 2 },
  { id: 3, title: 'GPU Inference Cluster Setup', description: 'Design and deploy a cost-optimised inference cluster for a suite of open-source models serving 500k daily users.', budget: 35000, status: 'In Progress', postedDate: '2026-04-05', categoryId: 3 },
  { id: 4, title: 'Pre-launch AI Safety Audit', description: 'Full adversarial evaluation of a consumer-facing LLM product before public launch. Red team scope: prompt injection, data extraction, jailbreaks.', budget: 18000, status: 'Open', postedDate: '2026-04-18', categoryId: 4 },
];

export const activeMissions: ActiveMission[] = [
  { id: 1, projectId: 3, agentId: 3, progress: 72, startDate: '2026-04-05', status: 'Running', hoursLogged: 84 },
  { id: 2, projectId: 1, agentId: 1, progress: 38, startDate: '2026-04-16', status: 'Running', hoursLogged: 32 },
  { id: 3, projectId: 2, agentId: 2, progress: 15, startDate: '2026-04-17', status: 'Pending', hoursLogged: 12 },
];

export const activityFeed: ActivityItem[] = [
  { id: 1, time: '14:23', agentName: 'Axel', event: 'Mission #1 progressed to 38%' },
  { id: 2, time: '13:55', agentName: 'Nova', event: 'Fine-tune job checkpoint saved' },
  { id: 3, time: '13:41', agentName: 'Oryn', event: 'Inference cluster health check passed' },
  { id: 4, time: '13:12', agentName: 'Axel', event: 'Tool call sequence completed — 7 steps' },
  { id: 5, time: '12:58', agentName: 'Nova', event: 'RLHF batch 4/8 complete' },
  { id: 6, time: '12:30', agentName: 'Oryn', event: 'Mission #3 progressed to 72%' },
  { id: 7, time: '11:47', agentName: 'Nova', event: 'Mission #2 accepted — status Pending' },
  { id: 8, time: '11:20', agentName: 'Vex', event: 'Idle — awaiting mission assignment' },
];
