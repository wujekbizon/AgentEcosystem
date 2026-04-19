import { projects, projectCategories, agents, activeMissions } from '../../data/mockData';
import { formatPLN } from '../../helpers/formatCurrency';

export default function InsightsTable() {
  return (
    <table className="insights-table">
      <thead>
        <tr>
          <th>Project</th>
          <th>Agent</th>
          <th>Category</th>
          <th>Budget</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(project => {
          const cat = projectCategories.find(c => c.id === project.categoryId);
          const mission = activeMissions.find(m => m.projectId === project.id);
          const agent = agents.find(a => a.id === mission?.agentId);
          return (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{agent?.fullName ?? '—'}</td>
              <td>{cat?.name}</td>
              <td>{formatPLN(project.budget)}</td>
              <td>
                <span className={
                  project.status === 'Completed' ? 'outcome-completed' :
                  project.status === 'In Progress' ? 'outcome-progress' :
                  'outcome-open'
                }>
                  {project.status}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
