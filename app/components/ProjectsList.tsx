import { Link } from 'react-router';
import { projects, projectCategories } from '../data/mockData';
import { formatPLN } from '../helpers/formatCurrency';
import { daysAgo } from '../helpers/formatDate';

export default function ProjectsList() {
  return (
    <div className="page-root">
      <div className="page-main">
        <div className="mb-8">
          <h1 className="font-syne font-bold text-membrane text-3xl mb-1">Open Missions</h1>
          <p className="font-mono text-xs text-phosphor/50 uppercase tracking-widest">{projects.length} active briefs</p>
        </div>
        <div className="flex flex-col gap-5">
          {projects.map(project => {
            const cat = projectCategories.find(c => c.id === project.categoryId);
            const days = daysAgo(project.postedDate);
            return (
              <Link key={project.id} to={`/projects/${project.id}`} className="project-card">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="font-syne font-bold text-membrane text-xl">{project.title}</h2>
                  <span className={`status-badge ${project.status === 'Open' ? 'status-open' : project.status === 'In Progress' ? 'status-in-progress' : 'status-completed'}`}>
                    {project.status}
                  </span>
                </div>
                <p className="font-manrope text-membrane/50 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-center gap-6 flex-wrap">
                  <span className="font-mono text-xs text-phosphor">{formatPLN(project.budget)}</span>
                  <span className="font-mono text-xs text-membrane/35 uppercase tracking-wider">{cat?.name}</span>
                  <span className="font-mono text-xs text-membrane/30">{days === 0 ? 'Today' : `${days}d ago`}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
