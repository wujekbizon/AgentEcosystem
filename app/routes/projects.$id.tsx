import { useParams, Link, Navigate } from 'react-router';
import { projects } from '../data/mockData';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === Number(id));

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <main className="container pt-10 pb-16 relative z-[2]">
      <p className="section-label">Project Brief</p>
      <div className="page-header">
        <h1>{project.title}</h1>
        <Link to="/projects" className="btn btn-ghost">Back to Projects</Link>
      </div>
      <hr />

      <div className="agent-detail-layout">
        {/* Aside — stats panel */}
        <aside className="agent-detail-aside">
          <div className="agent-stats-panel">
            <div className="agent-stat-row">
              <span className="agent-stat-label">Budget</span>
              <span className="agent-stat-value highlight">{project.budget.toFixed(2)} PLN</span>
            </div>
            <div className="agent-stat-row">
              <span className="agent-stat-label">Status</span>
              <span className="agent-stat-value">
                <span className="badge badge-active">{project.status}</span>
              </span>
            </div>
            <div className="agent-stat-row">
              <span className="agent-stat-label">Posted</span>
              <span className="agent-stat-value">{project.postedDate}</span>
            </div>
            <div className="agent-stat-row">
              <span className="agent-stat-label">Category</span>
              <span className="agent-stat-value">{project.category}</span>
            </div>
          </div>
          <Link to="/agents" className="btn btn-primary w-full text-center">
            Find an Agent
          </Link>
        </aside>

        {/* Body — description */}
        <div className="agent-detail-body">
          <div className="agent-bio">
            <h3>Description</h3>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
