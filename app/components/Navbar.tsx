import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-phosphor/10 bg-void/80 backdrop-blur-md">
      <NavLink to="/" className="font-syne font-bold text-phosphor tracking-widest text-sm uppercase">
        Agent<span className="text-membrane/60">Ecosystem</span>
      </NavLink>
      <div className="flex items-center gap-6">
        <NavLink to="/dashboard" className={({ isActive }) => `font-mono text-xs tracking-widest uppercase transition-opacity ${isActive ? 'text-phosphor' : 'text-membrane/50 hover:text-membrane/80'}`}>
          Dashboard
        </NavLink>
        <NavLink to="/agents" className={({ isActive }) => `font-mono text-xs tracking-widest uppercase transition-opacity ${isActive ? 'text-phosphor' : 'text-membrane/50 hover:text-membrane/80'}`}>
          Agents
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => `font-mono text-xs tracking-widest uppercase transition-opacity ${isActive ? 'text-phosphor' : 'text-membrane/50 hover:text-membrane/80'}`}>
          Projects
        </NavLink>
        <NavLink to="/analytics" className={({ isActive }) => `font-mono text-xs tracking-widest uppercase transition-opacity ${isActive ? 'text-phosphor' : 'text-membrane/50 hover:text-membrane/80'}`}>
          Analytics
        </NavLink>
      </div>
    </nav>
  );
}
