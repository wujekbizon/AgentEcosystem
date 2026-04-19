import KpiStrip from '../components/analytics/KpiStrip';
import HorizontalBarChart from '../components/analytics/HorizontalBarChart';
import VerticalBarChart from '../components/analytics/VerticalBarChart';
import DonutChart from '../components/analytics/DonutChart';
import MissionTimeline from '../components/analytics/MissionTimeline';
import InsightsTable from '../components/analytics/InsightsTable';

export default function Analytics() {
  return (
    <div className="page-root">
      <div className="page-main">
        <div className="mb-8">
          <h1 className="font-syne font-bold text-membrane text-3xl mb-1">Analytics</h1>
          <p className="font-mono text-xs text-phosphor/50 uppercase tracking-widest">AI workflow intelligence</p>
        </div>
        <KpiStrip />
        <div className="analytics-grid">
          <div className="chart-section">
            <p className="chart-title">Mission Volume by Specialization</p>
            <HorizontalBarChart />
          </div>
          <div className="chart-section">
            <p className="chart-title">Agent Utilization</p>
            <VerticalBarChart />
          </div>
          <div className="chart-section">
            <p className="chart-title">Budget Allocation by Category</p>
            <DonutChart />
          </div>
          <div className="chart-section">
            <p className="chart-title">Mission Status Timeline</p>
            <MissionTimeline />
          </div>
        </div>
        <div className="chart-section">
          <p className="chart-title">All Projects</p>
          <InsightsTable />
        </div>
      </div>
    </div>
  );
}
