import { agents, projects } from '../../data/mockData';
import type { ActiveMission } from '../../data/mockData';
import { isAgentActive, getAgentMission } from '../../helpers/calcUtilization';

interface Props {
  missions: ActiveMission[];
}

export default function AgentRoster({ missions }: Props) {
  return (
    <div>
      {agents.map(agent => {
        const active = isAgentActive(agent.id, missions);
        const agentMission = getAgentMission(agent.id, missions);
        const project = projects.find(p => p.id === agentMission?.projectId);
        return (
          <div key={agent.id} className="agent-roster-item">
            <img src={agent.avatarUrl} alt={agent.fullName} className="roster-avatar" />
            <span className={`roster-dot ${active ? 'roster-dot-online' : 'roster-dot-offline'}`} />
            <span className="roster-name">{agent.fullName}</span>
            <span className="roster-assignment">
              {active ? project?.title?.slice(0, 22) + '…' : 'Available'}
            </span>
            <span className="roster-rate">{agent.hourlyRate} PLN/h</span>
          </div>
        );
      })}
    </div>
  );
}
