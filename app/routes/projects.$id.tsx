import { useParams } from 'react-router';
import ProjectDetail from '../components/ProjectDetail';

export default function ProjectDetailPage() {
  const { id } = useParams();
  return <ProjectDetail projectId={Number(id)} />;
}
