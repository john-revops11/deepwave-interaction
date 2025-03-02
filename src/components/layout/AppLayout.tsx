
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { useScene } from '@/contexts/SceneContext';
import Chat from '../chat/Chat';
import BackgroundEffects from '../effects/BackgroundEffects';
import { useIsMobile } from '@/hooks/use-mobile';

const AppLayout = () => {
  const { currentScene } = useScene();
  const isMobile = useIsMobile();

  return (
    <div className="relative h-full w-full overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative z-10 h-full w-full">
        <Navigation />
        <div className={`${isMobile ? 'pt-20' : ''} h-full w-full`}>
          <Outlet />
        </div>
        <Chat /> {/* Always render Chat component */}
      </div>
    </div>
  );
};

export default AppLayout;
