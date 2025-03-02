
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { useScene } from '@/contexts/SceneContext';
import Chat from '../chat/Chat';
import BackgroundEffects from '../effects/BackgroundEffects';

const AppLayout = () => {
  const { chatOpen } = useScene();

  return (
    <div className="relative h-full w-full overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative z-10 h-full w-full">
        <Navigation />
        <Outlet />
        {chatOpen && <Chat />}
      </div>
    </div>
  );
};

export default AppLayout;
