interface Props {
  missionCount: number;
  activeAgents: number;
}

export default function StatusBar({ missionCount, activeAgents }: Props) {
  return (
    <div className="status-bar">
      <span className="status-bar-dot" />
      <span>NETWORK ONLINE</span>
      <span className="status-bar-divider">·</span>
      <span>{activeAgents} AGENTS ACTIVE</span>
      <span className="status-bar-divider">·</span>
      <span>{missionCount} MISSIONS RUNNING</span>
      <span className="status-bar-divider">·</span>
      <span>UPTIME 99.9%</span>
    </div>
  );
}
