
import { useEffect, useState } from 'react';
import { useScene } from '@/contexts/SceneContext';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMobile } from '@/hooks/use-mobile';

const WelcomeScene = () => {
  const { changeScene } = useScene();
  const [loaded, setLoaded] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 w-full h-full flex flex-col justify-center items-center">
      <div className={`text-center max-w-4xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="inline-block mb-4 px-4 py-1 rounded-full glass text-mariana-accent text-sm font-medium transition-all animate-pulse-glow">
          AI-Powered Innovation
        </div>
        
        <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-bold mb-4 tracking-tight text-balance`}>
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Mariana Deep Intelligence
          </span>
        </h1>
        
        <p className={`${isMobile ? 'text-lg' : 'text-xl'} mb-8 text-white/80 text-balance mx-auto max-w-2xl`}>
          Unlocking the depths of AI-powered automation to create intelligent, immersive web experiences that transform how you connect with your audience.
        </p>
        
        <div className={`flex flex-wrap gap-4 items-center justify-center ${isMobile ? 'flex-col' : ''}`}>
          <Button 
            onClick={() => changeScene('vision')}
            className={`group relative inline-flex items-center gap-2 py-6 px-8 bg-mariana-accent hover:bg-mariana-accent/90 text-mariana-deep font-medium rounded-xl hover-glow ${isMobile ? 'w-full' : ''}`}
          >
            Explore Our Vision
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            onClick={() => changeScene('solutions')}
            variant="outline" 
            className={`py-6 px-8 bg-transparent border border-white/20 hover:bg-white/5 hover:border-white/30 text-white ${isMobile ? 'w-full' : ''}`}
          >
            View Solutions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScene;
