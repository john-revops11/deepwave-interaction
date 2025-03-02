
import { useEffect } from 'react';
import { useScene } from '@/contexts/SceneContext';
import WelcomeScene from '@/components/scenes/WelcomeScene';
import VisionScene from '@/components/scenes/VisionScene';
import SolutionsScene from '@/components/scenes/SolutionsScene';
import CreationsScene from '@/components/scenes/CreationsScene';
import ContactScene from '@/components/scenes/ContactScene';
import DashboardScene from '@/components/scenes/DashboardScene';

const Index = () => {
  const { currentScene } = useScene();

  return (
    <main className="relative h-full w-full overflow-hidden">
      <div className={`scene-container ${currentScene === 'welcome' ? 'scene-active' : currentScene === 'dashboard' ? 'scene-before' : 'scene-after'}`}>
        <WelcomeScene />
      </div>
      
      <div className={`scene-container ${currentScene === 'vision' ? 'scene-active' : currentScene === 'welcome' ? 'scene-after' : 'scene-before'}`}>
        <VisionScene />
      </div>
      
      <div className={`scene-container ${currentScene === 'solutions' ? 'scene-active' : currentScene === 'vision' ? 'scene-after' : 'scene-before'}`}>
        <SolutionsScene />
      </div>
      
      <div className={`scene-container ${currentScene === 'creations' ? 'scene-active' : currentScene === 'solutions' ? 'scene-after' : 'scene-before'}`}>
        <CreationsScene />
      </div>
      
      <div className={`scene-container ${currentScene === 'contact' ? 'scene-active' : currentScene === 'creations' ? 'scene-after' : 'scene-before'}`}>
        <ContactScene />
      </div>
      
      <div className={`scene-container ${currentScene === 'dashboard' ? 'scene-active' : currentScene === 'contact' ? 'scene-after' : 'scene-before'}`}>
        <DashboardScene />
      </div>
    </main>
  );
};

export default Index;
