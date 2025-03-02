
import { useState, useEffect } from 'react';
import { useScene, type SceneType } from '@/contexts/SceneContext';
import { MessageSquare, Home, Eye, Lightbulb, Layers, Phone, User } from 'lucide-react';

const Navigation = () => {
  const { currentScene, changeScene, toggleChat } = useScene();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the appearance of the navigation for a smooth entry
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const navItems: { id: SceneType; label: string; icon: JSX.Element }[] = [
    { id: 'welcome', label: 'Welcome', icon: <Home className="w-5 h-5" /> },
    { id: 'vision', label: 'Our Vision', icon: <Eye className="w-5 h-5" /> },
    { id: 'solutions', label: 'Solutions', icon: <Lightbulb className="w-5 h-5" /> },
    { id: 'creations', label: 'Creations', icon: <Layers className="w-5 h-5" /> },
    { id: 'contact', label: 'Let\'s Build', icon: <Phone className="w-5 h-5" /> },
    { id: 'dashboard', label: 'Dashboard', icon: <User className="w-5 h-5" /> },
  ];

  return (
    <div className={`fixed z-50 top-8 right-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[-20px]'}`}>
      <div className="glass rounded-full p-2 shadow-lg animate-pulse-glow">
        <div className="flex items-center space-x-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => changeScene(item.id)}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                currentScene === item.id 
                  ? 'bg-mariana-accent text-mariana-deep shadow-[0_0_10px_rgba(34,211,238,0.7)]' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              aria-label={item.label}
            >
              {item.icon}
            </button>
          ))}
          <button
            onClick={toggleChat}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-mariana-accent text-mariana-deep shadow-[0_0_10px_rgba(34,211,238,0.7)] ml-2"
            aria-label="Chat with Mariana"
          >
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
