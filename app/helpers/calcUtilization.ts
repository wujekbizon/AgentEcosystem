import type { ActiveMission } from '../data/mockData';

export function isAgentActive(agentId: number, missions: ActiveMission[]): boolean {
  return missions.some(m => m.agentId === agentId && m.status === 'Running');
}

export function getAgentMission(agentId: number, missions: ActiveMission[]): ActiveMission | undefined {
  return missions.find(m => m.agentId === agentId);
}
