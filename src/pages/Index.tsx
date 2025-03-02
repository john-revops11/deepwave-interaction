
import { useEffect, useState } from 'react';
import { useScene } from '@/contexts/SceneContext';
import WelcomeScene from '@/components/scenes/WelcomeScene';
import VisionScene from '@/components/scenes/VisionScene';
import SolutionsScene from '@/components/scenes/SolutionsScene';
import CreationsScene from '@/components/scenes/CreationsScene';
import ContactScene from '@/components/scenes/ContactScene';
import DashboardScene from '@/components/scenes/DashboardScene';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const { currentScene, toggleChat, setChatPosition } = useScene();
  const [showChat, setShowChat] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Automatically show the chat after a short delay when the page loads
    const timer = setTimeout(() => {
      setShowChat(true);
      toggleChat();
      
      // Set initial chat position to center if on welcome page, minimized otherwise
      if (currentScene === 'welcome') {
        setChatPosition(isMobile ? 'minimized' : 'center');
      } else {
        setChatPosition('minimized');
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

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
