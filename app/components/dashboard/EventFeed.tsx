import { useState, useEffect, useRef } from 'react';
import { activityFeed } from '../../data/mockData';
import type { ActivityItem } from '../../data/mockData';

const newEvents: ActivityItem[] = [
  { id: 100, time: '', agentName: 'Kael', event: 'Vision pipeline batch processed' },
  { id: 101, time: '', agentName: 'Axel', event: 'Memory context compacted — 12k tokens' },
  { id: 102, time: '', agentName: 'Vex', event: 'Injection vector scan complete — 0 found' },
  { id: 103, time: '', agentName: 'Nova', event: 'RLHF batch 5/8 complete' },
];

function nowTime(): string {
  return new Date().toTimeString().slice(0, 5);
}

export default function EventFeed() {
  const [items, setItems] = useState<ActivityItem[]>(activityFeed);
  const feedRef = useRef<HTMLDivElement>(null);
  const eventIdx = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = { ...newEvents[eventIdx.current % newEvents.length], id: Date.now(), time: nowTime() };
      eventIdx.current++;
      setItems(prev => [next, ...prev].slice(0, 12));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (feedRef.current) feedRef.current.scrollTop = 0;
  }, [items]);

  return (
    <div className="event-feed" ref={feedRef}>
      {items.map(item => (
        <div key={item.id} className="event-item">
          <span className="event-time">[{item.time}]</span>
          <span className="event-agent">{item.agentName}</span>
          {' → '}{item.event}
        </div>
      ))}
    </div>
  );
}
