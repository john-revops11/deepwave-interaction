
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { useScene } from '@/contexts/SceneContext';
import Chat from '../chat/Chat';
import BackgroundEffects from '../effects/BackgroundEffects';
import { useMobile } from '@/hooks/use-mobile';

const AppLayout = () => {
  const { chatOpen, currentScene } = useScene();
  const isMobile = useMobile();

  return (
    <div className="relative h-full w-full overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative z-10 h-full w-full">
        <Navigation />
        <div className={`${isMobile ? 'pt-20 pb-16' : 'pb-[12vh]'} h-full w-full`}>
          <Outlet />
        </div>
        {chatOpen && <Chat />}
      </div>
    </div>
  );
};

export default AppLayout;
