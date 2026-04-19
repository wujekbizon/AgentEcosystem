import { Link } from 'react-router';
import { projects } from '../data/mockData';

export default function ProjectsPage() {
  return (
    <main className="container my-10 relative z-2">
      <p className="section-label">Open Missions</p>
      <div className="page-header">
        <h1>Available Projects</h1>
      </div>
      <hr />

      <div className="card-grid">
        {projects.map(project => (
          <div key={project.id} className="card">
            <div className="card-body">
              <span className="card-tag">{project.status}</span>
              <h3>{project.title}</h3>
              <p>{project.description.slice(0, 100)}…</p>
              <p className="font-mono text-[0.78rem] mt-3 text-[var(--membrane)]">
                Budget: <span className="text-[var(--phosphor)]">{project.budget.toFixed(2)} PLN</span>
              </p>
              <div className="mt-auto pt-4">
                <Link to={`/projects/${project.id}`} className="btn-detail">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
