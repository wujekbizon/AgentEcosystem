import { Link } from 'react-router';
import { agents, specializations } from '../data/mockData';

export default function FeaturedAgents() {
  const featured = agents.filter(a => a.isHighlighted);

  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <p className="font-mono text-xs tracking-widest uppercase text-phosphor/50 mb-8 text-center">Featured Nodes</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map(agent => {
          const spec = specializations.find(s => s.id === agent.specializationId);
          return (
            <Link key={agent.id} to={`/agents/${agent.id}`} className="agent-card">
              <img src={agent.avatarUrl} alt={agent.fullName} className="w-12 h-12 rounded-full mb-4 border border-phosphor/20" />
              <h3 className="font-syne font-bold text-membrane text-lg mb-1">{agent.fullName}</h3>
              <p className="font-mono text-xs text-phosphor/60 uppercase tracking-wider mb-3">{spec?.name}</p>
              <p className="font-manrope text-membrane/50 text-sm leading-relaxed line-clamp-3">{agent.bio}</p>
              <p className="font-mono text-phosphor text-sm mt-4">{agent.hourlyRate} PLN/hr</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
