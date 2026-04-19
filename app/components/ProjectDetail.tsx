import { Link } from 'react-router';
import { projects, projectCategories } from '../data/mockData';
import { formatPLN } from '../helpers/formatCurrency';
import { formatDate } from '../helpers/formatDate';

interface Props {
  projectId: number;
}

export default function ProjectDetail({ projectId }: Props) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return <div className="page-root"><div className="page-main"><p className="font-mono text-membrane/50">Project not found.</p></div></div>;
  const cat = projectCategories.find(c => c.id === project.categoryId);

  return (
    <div className="page-root">
      <div className="page-main">
        <Link to="/projects" className="font-mono text-xs text-phosphor/50 hover:text-phosphor uppercase tracking-widest mb-8 inline-block">← Back</Link>
        <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
          <div>
            <h1 className="font-syne font-bold text-membrane text-4xl mb-2">{project.title}</h1>
            <p className="font-mono text-xs text-phosphor/50 uppercase tracking-widest">{cat?.name}</p>
          </div>
          <span className={`status-badge text-sm py-1 px-3 ${project.status === 'Open' ? 'status-open' : project.status === 'In Progress' ? 'status-in-progress' : 'status-completed'}`}>
            {project.status}
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="page-section-label">Brief</p>
            <p className="font-manrope text-membrane/70 leading-relaxed text-lg">{project.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="dashboard-panel">
              <p className="metric-label mb-1">Budget</p>
              <p className="font-syne font-bold text-phosphor text-2xl">{formatPLN(project.budget)}</p>
            </div>
            <div className="dashboard-panel">
              <p className="metric-label mb-1">Posted</p>
              <p className="font-mono text-membrane/70 text-sm">{formatDate(project.postedDate)}</p>
            </div>
            <div className="dashboard-panel">
              <p className="metric-label mb-1">Category</p>
              <p className="font-mono text-membrane/70 text-sm">{cat?.name}</p>
              <p className="font-manrope text-membrane/40 text-xs mt-1 leading-relaxed">{cat?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
