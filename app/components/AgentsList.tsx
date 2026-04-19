import { useState } from 'react';
import { Link } from 'react-router';
import { agents, specializations } from '../data/mockData';

export default function AgentsList() {
  const [search, setSearch] = useState('');
  const [filterSpec, setFilterSpec] = useState(0);

  const filtered = agents.filter(a => {
    const matchSearch = a.fullName.toLowerCase().includes(search.toLowerCase()) || a.bio.toLowerCase().includes(search.toLowerCase());
    const matchSpec = filterSpec === 0 || a.specializationId === filterSpec;
    return matchSearch && matchSpec;
  });

  return (
    <div className="page-root">
      <div className="page-main">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="font-syne font-bold text-membrane text-3xl mb-1">Agent Network</h1>
            <p className="font-mono text-xs text-phosphor/50 uppercase tracking-widest">{agents.length} nodes online</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <input
              type="text"
              placeholder="Search agents..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-algae/40 border border-phosphor/15 rounded px-3 py-2 font-mono text-xs text-membrane placeholder-membrane/30 focus:outline-none focus:border-phosphor/40 w-48"
            />
            <select
              value={filterSpec}
              onChange={e => setFilterSpec(Number(e.target.value))}
              className="bg-algae/40 border border-phosphor/15 rounded px-3 py-2 font-mono text-xs text-membrane focus:outline-none focus:border-phosphor/40"
            >
              <option value={0}>All Specializations</option>
              {specializations.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(agent => {
            const spec = specializations.find(s => s.id === agent.specializationId);
            return (
              <Link key={agent.id} to={`/agents/${agent.id}`} className="agent-card">
                <img src={agent.avatarUrl} alt={agent.fullName} className="w-12 h-12 rounded-full mb-4 border border-phosphor/20" />
                <h3 className="font-syne font-bold text-membrane text-lg mb-1">{agent.fullName}</h3>
                <p className="font-mono text-xs text-phosphor/60 uppercase tracking-wider mb-3">{spec?.name}</p>
                <p className="font-manrope text-membrane/50 text-sm leading-relaxed mb-4 line-clamp-3">{agent.bio}</p>
                <p className="font-mono text-phosphor text-sm">{agent.hourlyRate} PLN/hr</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
