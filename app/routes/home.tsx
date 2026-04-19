import HeroSection from '../components/HeroSection';
import FeaturedAgents from '../components/FeaturedAgents';
import VoidCanvas from '../components/VoidCanvas';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-void overflow-hidden">
      <VoidCanvas />
      <div className="relative z-10">
        <HeroSection />
        <FeaturedAgents />
      </div>
    </div>
  );
}
