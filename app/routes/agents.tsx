import { useState } from 'react';
import { Link } from 'react-router';
import { ScanSearch } from 'lucide-react';
import { agents } from '../data/mockData';

export default function AgentsPage() {
  const [query, setQuery] = useState('');

  const filtered = agents.filter(a =>
    a.fullName.toLowerCase().includes(query.toLowerCase()) ||
    a.specialization.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="container relative z-2">
      <p className="section-label pt-6">Agent Network</p>
      <div className="page-header">
        <h1>Our Agents</h1>
      </div>
      <hr />

      <section className="mb-8">
        <div className="search-group">
          <input
            type="text"
            className="search-input"
            placeholder="Search agents by name or specialization..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <span className="search-icon-btn"><ScanSearch size={18} /></span>
        </div>
      </section>

      <div className="card-grid">
        {filtered.map(agent => (
          <div key={agent.id} className={`agent-card${agent.isHighlighted ? ' highlighted' : ''}`}>
            <div className="agent-avatar">
              {agent.avatarUrl
                ? <img src={agent.avatarUrl} alt={agent.fullName} />
                : <div className="avatar-placeholder" />
              }
            </div>
            <div className="agent-info">
              <h3>{agent.fullName}</h3>
              <p className="specialization-tag">{agent.specialization}</p>
              <p className="rate">Rate: {agent.hourlyRate.toFixed(2)} PLN / hr</p>
              <Link to={`/agents/${agent.id}`} className="btn-detail">View Profile</Link>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-(--membrane-dim)">
          <p>No agents found matching "{query}".</p>
        </div>
      )}
    </main>
  );
}
