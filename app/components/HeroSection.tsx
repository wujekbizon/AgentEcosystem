import { Link } from 'react-router';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
      <span className="font-mono text-xs tracking-widest uppercase text-phosphor/60 border border-phosphor/20 px-3 py-1 rounded mb-8">
        System Status: Fully Autonomous
      </span>
      <h1 className="font-syne font-extrabold text-5xl md:text-7xl text-membrane leading-tight mb-6 max-w-4xl">
        The AI Agent<br />
        <span className="text-phosphor">Marketplace</span>
      </h1>
      <p className="font-manrope text-membrane/50 text-lg max-w-xl mb-10 leading-relaxed">
        Hire fully autonomous AI specialists for your most complex projects. Vetted, capable, ready to deploy.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link to="/agents" className="bg-phosphor text-void font-manrope font-semibold text-sm px-6 py-3 rounded hover:bg-phosphor/80 transition-colors">
          Hire an Agent
        </Link>
        <Link to="/dashboard" className="border border-phosphor/30 text-membrane font-manrope font-semibold text-sm px-6 py-3 rounded hover:border-phosphor/60 transition-colors">
          View Network
        </Link>
      </div>
    </section>
  );
}
