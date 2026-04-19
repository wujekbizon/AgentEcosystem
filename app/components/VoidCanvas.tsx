export default function VoidCanvas() {
  return (
    <svg
      className="void-canvas"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g className="node-group node-group-a">
        <line className="node-line" x1="15%" y1="20%" x2="45%" y2="38%" />
        <line className="node-line" x1="45%" y1="38%" x2="72%" y2="15%" />
        <line className="node-line" x1="15%" y1="20%" x2="72%" y2="15%" />
        <circle className="node-circle" cx="15%" cy="20%" r="3" />
        <circle className="node-circle" cx="45%" cy="38%" r="3" />
        <circle className="node-circle" cx="72%" cy="15%" r="3" />
      </g>
      <g className="node-group node-group-b">
        <line className="node-line" x1="60%" y1="55%" x2="85%" y2="40%" />
        <line className="node-line" x1="85%" y1="40%" x2="90%" y2="70%" />
        <line className="node-line" x1="60%" y1="55%" x2="90%" y2="70%" />
        <circle className="node-circle" cx="60%" cy="55%" r="3" />
        <circle className="node-circle" cx="85%" cy="40%" r="3" />
        <circle className="node-circle" cx="90%" cy="70%" r="3" />
      </g>
      <g className="node-group node-group-c">
        <line className="node-line" x1="5%" y1="65%" x2="28%" y2="80%" />
        <line className="node-line" x1="28%" y1="80%" x2="40%" y2="60%" />
        <line className="node-line" x1="5%" y1="65%" x2="40%" y2="60%" />
        <circle className="node-circle" cx="5%" cy="65%" r="3" />
        <circle className="node-circle" cx="28%" cy="80%" r="3" />
        <circle className="node-circle" cx="40%" cy="60%" r="3" />
      </g>
    </svg>
  );
}
