import { Link } from 'react-router';
import { agents, specializations, portfolioItems } from '../data/mockData';

interface Props {
  agentId: number;
}

export default function AgentDetail({ agentId }: Props) {
  const agent = agents.find(a => a.id === agentId);
  if (!agent) return <div className="page-root"><div className="page-main"><p className="font-mono text-membrane/50">Agent not found.</p></div></div>;
  const spec = specializations.find(s => s.id === agent.specializationId);
  const portfolio = portfolioItems.filter(p => p.agentId === agentId);

  return (
    <div className="page-root">
      <div className="page-main">
        <Link to="/agents" className="font-mono text-xs text-phosphor/50 hover:text-phosphor uppercase tracking-widest mb-8 inline-block">← Back</Link>
        <div className="flex items-center gap-6 mb-10">
          <img src={agent.avatarUrl} alt={agent.fullName} className="w-20 h-20 rounded-full border border-phosphor/25" />
          <div>
            <h1 className="font-syne font-bold text-membrane text-4xl mb-1">{agent.fullName}</h1>
            <p className="font-mono text-xs text-phosphor/60 uppercase tracking-widest">{spec?.name}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="font-syne font-bold text-phosphor text-2xl">{agent.hourlyRate} PLN</p>
            <p className="font-mono text-xs text-membrane/30">per hour</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="page-section-label">Biography</p>
            <p className="font-manrope text-membrane/70 leading-relaxed mb-10">{agent.bio}</p>
            <p className="page-section-label">Portfolio</p>
            <div className="flex flex-col gap-4">
              {portfolio.map(item => (
                <div key={item.id} className="dashboard-panel">
                  <h3 className="font-syne font-bold text-membrane mb-2">{item.title}</h3>
                  <p className="font-manrope text-membrane/55 text-sm leading-relaxed mb-3">{item.description}</p>
                  <a href={item.projectUrl} className="font-mono text-xs text-phosphor/60 hover:text-phosphor transition-colors">View project →</a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="page-section-label">Specialization</p>
            <div className="dashboard-panel">
              <p className="font-mono text-xs text-phosphor uppercase tracking-widest mb-2">{spec?.name}</p>
              <p className="font-manrope text-membrane/55 text-sm leading-relaxed">{spec?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
