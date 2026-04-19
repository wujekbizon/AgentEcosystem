const segments = [
  { label: 'Agent Deployment',  pct: 21.2, offset: 25,     dotClass: 'donut-dot-1' },
  { label: 'Model Training',    pct: 33.9, offset: 3.8,    dotClass: 'donut-dot-2' },
  { label: 'AI Infrastructure', pct: 29.7, offset: -30.1,  dotClass: 'donut-dot-3' },
  { label: 'Safety & Eval',     pct: 15.3, offset: -59.75, dotClass: 'donut-dot-4' },
];

const colors = ['#9DFFB0', '#5DDBA0', '#2EB880', '#1A7055'];

export default function DonutChart() {
  return (
    <div className="donut-wrapper">
      <svg viewBox="0 0 42 42" className="w-36 h-36 flex-shrink-0" aria-hidden="true">
        <circle cx="21" cy="21" r="15.9155" fill="none" stroke="#0a1a12" strokeWidth="4" />
        {segments.map((seg, i) => (
          <circle
            key={seg.label}
            cx="21" cy="21" r="15.9155"
            fill="none"
            stroke={colors[i]}
            strokeWidth="4"
            strokeDasharray={`${seg.pct} ${100 - seg.pct}`}
            strokeDashoffset={seg.offset}
            style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
          />
        ))}
        <text x="21" y="19" textAnchor="middle" fontSize="3" fill="#E6F4F1" opacity="0.5">Total</text>
        <text x="21" y="23.5" textAnchor="middle" fontSize="2.8" fill="#9DFFB0" fontWeight="bold">118k PLN</text>
      </svg>
      <div className="donut-legend">
        {segments.map(seg => (
          <div key={seg.label} className="donut-legend-item">
            <span className={`donut-dot ${seg.dotClass}`} />
            <span className="donut-legend-label">{seg.label}</span>
            <span className="donut-legend-pct">{seg.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
