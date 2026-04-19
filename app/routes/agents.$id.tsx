import { useParams } from 'react-router';
import AgentDetail from '../components/AgentDetail';

export default function AgentDetailPage() {
  const { id } = useParams();
  return <AgentDetail agentId={Number(id)} />;
}
