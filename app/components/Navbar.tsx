import { Link, NavLink } from 'react-router';

const Navbar: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-flex">
          <div className="logo">
            <Link to="/">AgentHire</Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/agents" className={({ isActive }) => isActive ? 'active' : ''}>
                  Agents
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
                  Projects
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
