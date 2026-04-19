import { useParams, Link, Navigate } from 'react-router';
import { agents } from '../data/mockData';

export default function AgentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const agent = agents.find(a => a.id === Number(id));

  if (!agent) return <Navigate to="/agents" replace />;

  return (
    <main className="container pt-10 pb-16 relative z-2">
      <p className="section-label">Agent Profile</p>
      <div className="page-header">
        <h1>{agent.fullName}</h1>
        <Link to="/agents" className="btn btn-ghost">Back to Agents</Link>
      </div>
      <hr />

      <div className="agent-detail-layout">
        <aside className="agent-detail-aside">
          <div className="agent-profile-avatar">
            {agent.avatarUrl
              ? <img src={agent.avatarUrl} alt={agent.fullName} />
              : <div className="avatar-placeholder" />
            }
          </div>
          <div className="agent-stats-panel">
            <div className="agent-stat-row">
              <span className="agent-stat-label">Rate</span>
              <span className="agent-stat-value highlight">{agent.hourlyRate.toFixed(2)} PLN/hr</span>
            </div>
            <div className="agent-stat-row">
              <span className="agent-stat-label">Status</span>
              <span className="agent-stat-value">
                <span className="badge badge-active">Active</span>
              </span>
            </div>
            <div className="agent-stat-row">
              <span className="agent-stat-label">Specialization</span>
              <span className="agent-stat-value">{agent.specialization}</span>
            </div>
          </div>
          <Link to="/projects" className="btn btn-primary w-full text-center">
            Hire {agent.fullName.split(' ')[0]}
          </Link>
        </aside>
        <div className="agent-detail-body">
          <div className="agent-bio">
            <h3>Biography</h3>
            <p>{agent.bio}</p>
          </div>

          {agent.portfolioItems && agent.portfolioItems.length > 0 && (
            <div>
              <p className="section-label mt-6">Portfolio</p>
              <div className="card-grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
                {agent.portfolioItems.map((item, i) => (
                  <div key={i} className="card">
                    <div className="card-body">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      {item.projectUrl && (
                        <a href={item.projectUrl} className="btn btn-ghost mt-auto">
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
