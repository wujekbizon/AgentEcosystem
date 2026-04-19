export default function NodeLineBackground() {
  return (
    <>
      <div className="void-canvas" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow-main">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <g className="node-line [animation-delay:0s]">
            <line x1="216" y1="180" x2="720" y2="90"   stroke="#9DFFB0" strokeWidth="0.5" strokeDasharray="5 10"/>
            <line x1="720" y1="90"  x2="1152" y2="135"  stroke="#9DFFB0" strokeWidth="0.5" strokeDasharray="5 10"/>
            <line x1="1152" y1="135" x2="1296" y2="630" stroke="#9DFFB0" strokeWidth="0.5" strokeDasharray="5 10"/>
            <line x1="1296" y1="630" x2="1080" y2="810" stroke="#9DFFB0" strokeWidth="0.5" strokeDasharray="5 10"/>
            <line x1="648"  y1="765" x2="144"  y2="675" stroke="#9DFFB0" strokeWidth="0.5" strokeDasharray="5 10"/>
            <line x1="144"  y1="675" x2="216"  y2="180" stroke="#9DFFB0" strokeWidth="0.5" strokeDasharray="5 10"/>
            <line x1="432"  y1="360" x2="720"  y2="90"  stroke="#9DFFB0" strokeWidth="0.5" strokeDasharray="5 10"/>
            <line x1="432"  y1="360" x2="648"  y2="765" stroke="#9DFFB0" strokeWidth="0.5" strokeDasharray="5 10"/>
          </g>
          <g className="opacity-30 blur-[1px]">
            <circle className="node-circle [animation-delay:0s]"   cx="216"  cy="180" r="2"   fill="#9DFFB0"/>
            <circle className="node-circle [animation-delay:1.2s]" cx="1152" cy="135" r="2.5" fill="#9DFFB0"/>
            <circle className="node-circle [animation-delay:2.4s]" cx="1080" cy="810" r="1.5" fill="#9DFFB0"/>
          </g>
          <g className="opacity-[0.55] blur-[0.4px]">
            <circle className="node-circle [animation-delay:0.6s]" cx="720"  cy="90"  r="3"   fill="#9DFFB0" filter="url(#glow-main)"/>
            <circle className="node-circle [animation-delay:3s]"   cx="432"  cy="360" r="2"   fill="#9DFFB0"/>
            <circle className="node-circle [animation-delay:1.8s]" cx="144"  cy="675" r="2.5" fill="#9DFFB0"/>
          </g>
          <g className="opacity-75">
            <circle className="node-circle [animation-delay:0.9s]" cx="1296" cy="630" r="4"   fill="#9DFFB0" filter="url(#glow-main)"/>
            <circle className="node-circle [animation-delay:4s]"   cx="648"  cy="765" r="2"   fill="#9DFFB0"/>
          </g>
          <g className="opacity-[0.35] font-mono text-[8px] fill-[#9DFFB0] tracking-widest">
            <text x="222" y="175">AG-882</text>
            <text x="726" y="85">AG-104</text>
            <text x="1158" y="130">AG-993</text>
            <text x="1302" y="625">AG-042</text>
            <text x="654"  y="760">AG-711</text>
            <text x="150"  y="670">AG-550</text>
          </g>
        </svg>
      </div>
      <div className="void-vignette" />
    </>
  );
}
