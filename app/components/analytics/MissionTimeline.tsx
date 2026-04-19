import { projects } from '../../data/mockData';

const timelineData = [
  { projectId: 3, start: 14, width: 28, status: 'progress' },
  { projectId: 1, start: 55, width: 12, status: 'progress' },
  { projectId: 2, start: 60, width: 8,  status: 'open'     },
  { projectId: 4, start: 72, width: 6,  status: 'open'     },
];

export default function MissionTimeline() {
  return (
    <div className="timeline-chart">
      {timelineData.map(row => {
        const project = projects.find(p => p.id === row.projectId);
        return (
          <div key={row.projectId} className="timeline-row">
            <span className="timeline-label">{project?.title}</span>
            <div className="timeline-track">
              <div
                className={`timeline-bar ${row.status === 'progress' ? 'timeline-bar-progress' : 'timeline-bar-open'}`}
                style={{ left: `${row.start}%`, width: `${row.width}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
