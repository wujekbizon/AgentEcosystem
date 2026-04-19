import { agents } from '../../data/mockData';

const utilization: Record<number, number> = { 1: 95, 2: 80, 3: 60, 4: 85, 5: 70 };

export default function VerticalBarChart() {
  return (
    <div className="v-bar-chart">
      {agents.map(agent => {
        const pct = utilization[agent.id] ?? 0;
        return (
          <div key={agent.id} className="v-bar-col-inner" style={{ flex: 1 }}>
            <span className="v-bar-pct">{pct}%</span>
            <div className="v-bar-track">
              <svg viewBox="0 0 44 120" className="w-full h-full" preserveAspectRatio="none">
                <rect x="0" y={120 - (pct / 100) * 120} width="44" height={(pct / 100) * 120} className="fill-phosphor" rx="3" />
              </svg>
            </div>
            <img src={agent.avatarUrl} alt={agent.fullName} className="w-7 h-7 rounded-full mt-1" />
            <span className="font-mono text-membrane/40 text-xs">{agent.fullName}</span>
          </div>
        );
      })}
    </div>
  );
}
