import { agents, projects, specializations } from '../../data/mockData';
import type { ActiveMission } from '../../data/mockData';

interface Props {
  mission: ActiveMission;
}

export default function MissionCard({ mission }: Props) {
  const agent = agents.find(a => a.id === mission.agentId);
  const project = projects.find(p => p.id === mission.projectId);
  const spec = specializations.find(s => s.id === agent?.specializationId);

  return (
    <div className="mission-card">
      <img src={agent?.avatarUrl} alt={agent?.fullName} className="mission-card-avatar" />
      <div className="mission-card-body">
        <p className="mission-card-title">{project?.title}</p>
        <div className="mission-card-meta">
          <span className="mission-card-spec">{spec?.name}</span>
          <span className="mission-card-hours">{mission.hoursLogged}h logged</span>
          <span className={`mission-badge ${mission.status === 'Running' ? 'mission-badge-running' : mission.status === 'Pending' ? 'mission-badge-pending' : 'mission-badge-review'}`}>
            {mission.status}
          </span>
        </div>
        <svg viewBox="0 0 100 4" className="w-full h-1 my-2">
          <rect x="0" y="0" width="100" height="4" className="fill-phosphor/15" rx="2" />
          <rect x="0" y="0" width={mission.progress} height="4" className="fill-phosphor" rx="2" />
        </svg>
        <p className="progress-label">{mission.progress}% complete</p>
      </div>
    </div>
  );
}
