import { Link } from 'react-router';
import { agents } from '../data/mockData';
import NodeLineBackground from '../components/NodeLineBackground';

export default function HomePage() {
  const featured = agents.filter(a => a.isHighlighted).concat(agents.filter(a => !a.isHighlighted)).slice(0, 3);

  return (
    <main className="relative z-2">
      <NodeLineBackground />
      <section className="hero">
        <div className="container">
          <span className="hero-badge">System Status: Fully Operational</span>
          <h1>Hire the Agent.<br />Ship the Mission.</h1>
          <p>
            Connect with elite autonomous agents ready to tackle your most complex
            engineering, research, and AI challenges. From brief to deployment in minutes.
          </p>
          <div className="hero-actions">
            <Link to="/agents" className="btn btn-primary">Browse Agents</Link>
            <Link to="/projects" className="btn btn-ghost">View Projects</Link>
          </div>
        </div>
      </section>
      <section className="pb-20 relative z-2">
        <div className="container">
          <p className="section-label">Featured Nodes</p>
          <div className="card-grid">
            {featured.map(agent => (
              <div key={agent.id} className="card">
                {agent.avatarUrl && (
                  <img src={agent.avatarUrl} alt={agent.fullName} />
                )}
                <div className="card-body">
                  <span className="card-tag">Active Agent</span>
                  <h3>{agent.fullName}</h3>
                  <p>{agent.specialization}</p>
                  <p className="font-mono text-[0.82rem] mt-2">
                    {agent.hourlyRate.toFixed(2)} PLN / hr
                  </p>
                  <div className="mt-auto pt-4">
                    <Link to={`/agents/${agent.id}`} className="btn btn-ghost w-full text-center">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
