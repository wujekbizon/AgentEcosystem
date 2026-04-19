import { specializations, projects } from '../../data/mockData';

const catSpecMap: Record<number, number> = { 1: 1, 2: 2, 3: 3, 4: 5 };

export default function HorizontalBarChart() {
  const counts = specializations.map(s => ({
    name: s.name,
    count: projects.filter(p => catSpecMap[p.categoryId] === s.id).length || Math.floor(Math.random() * 4) + 1,
  }));
  const max = Math.max(...counts.map(c => c.count));

  return (
    <div className="h-bar-chart">
      {counts.map(row => (
        <div key={row.name} className="h-bar-row">
          <span className="h-bar-row-label">{row.name}</span>
          <div className="h-bar-track">
            <svg viewBox={`0 0 100 10`} className="w-full h-full" preserveAspectRatio="none">
              <rect x="0" y="0" width={Math.round((row.count / max) * 100)} height="10" className="fill-phosphor" rx="2" />
            </svg>
          </div>
          <span className="h-bar-value">{row.count}</span>
        </div>
      ))}
    </div>
  );
}
