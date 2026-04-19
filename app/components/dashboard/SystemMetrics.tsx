import { useCounter } from '../../helpers/useCounter';

export default function SystemMetrics() {
  const deployments = useCounter(1427);
  const completionRate = useCounter(99);
  const budget = useCounter(118000);
  const tasksMonth = useCounter(342);

  return (
    <div className="system-metrics-panel">
      <div className="metric-row">
        <span className="metric-label">Total Deployments</span>
        <span className="metric-value">{deployments.toLocaleString()}</span>
      </div>
      <div className="metric-row">
        <span className="metric-label">Avg Completion Rate</span>
        <span className="metric-value">{completionRate}%</span>
      </div>
      <div className="metric-row">
        <span className="metric-label">Active Budget</span>
        <span className="metric-value">{budget.toLocaleString()} PLN</span>
      </div>
      <div className="metric-row">
        <span className="metric-label">Tasks This Month</span>
        <span className="metric-value">{tasksMonth}</span>
      </div>
    </div>
  );
}
