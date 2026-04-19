import { useCounter } from '../../helpers/useCounter';

export default function KpiStrip() {
  const missions = useCounter(12);
  const duration = useCounter(18);
  const rate = useCounter(99);
  const budget = useCounter(118000);

  return (
    <div className="kpi-strip">
      <div className="kpi-chip">
        <p className="kpi-chip-label">Missions Completed</p>
        <p className="kpi-chip-value">{missions}</p>
      </div>
      <div className="kpi-chip">
        <p className="kpi-chip-label">Avg Task Duration</p>
        <p className="kpi-chip-value">{duration}<span className="font-mono text-sm text-membrane/40 ml-1">days</span></p>
      </div>
      <div className="kpi-chip">
        <p className="kpi-chip-label">Success Rate</p>
        <p className="kpi-chip-value">{rate}<span className="font-mono text-sm text-membrane/40">.2%</span></p>
      </div>
      <div className="kpi-chip">
        <p className="kpi-chip-label">Budget Deployed</p>
        <p className="kpi-chip-value text-2xl">{budget.toLocaleString()}<span className="font-mono text-xs text-membrane/40 ml-1">PLN</span></p>
      </div>
    </div>
  );
}
