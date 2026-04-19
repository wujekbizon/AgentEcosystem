import StatusBar from '../components/dashboard/StatusBar';
import MissionCard from '../components/dashboard/MissionCard';
import AgentRoster from '../components/dashboard/AgentRoster';
import SystemMetrics from '../components/dashboard/SystemMetrics';
import EventFeed from '../components/dashboard/EventFeed';
import { activeMissions } from '../data/mockData';

export default function Dashboard() {
  const runningCount = activeMissions.filter(m => m.status === 'Running').length;
  const activeAgentCount = new Set(activeMissions.filter(m => m.status === 'Running').map(m => m.agentId)).size;

  return (
    <div className="min-h-screen bg-void text-membrane pt-16">
      <StatusBar missionCount={runningCount} activeAgents={activeAgentCount} />
      <div className="page-main">
        <div className="dashboard-grid">
          <div>
            <div className="dashboard-panel">
              <p className="dashboard-panel-title">Active Missions</p>
              {activeMissions.map(m => <MissionCard key={m.id} mission={m} />)}
            </div>
            <div className="dashboard-panel">
              <p className="dashboard-panel-title">Agent Roster</p>
              <AgentRoster missions={activeMissions} />
            </div>
          </div>
          <div>
            <div className="dashboard-panel">
              <p className="dashboard-panel-title">System Metrics</p>
              <SystemMetrics />
            </div>
            <div className="dashboard-panel">
              <p className="dashboard-panel-title">Recent Events</p>
              <EventFeed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
