
import { useState, useEffect } from 'react';
import { useScene, type SceneType } from '@/contexts/SceneContext';
import { MessageSquare, Home, Eye, Lightbulb, Layers, Phone, User, Menu, X } from 'lucide-react';
import { useMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const { currentScene, changeScene, toggleChat } = useScene();
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();
  const location = useLocation();

  useEffect(() => {
    // Delay the appearance of the navigation for a smooth entry
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu when changing scenes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentScene]);

  const navItems = [
    { 
      id: 'welcome' as SceneType, 
      label: 'Welcome', 
      icon: <Home className="w-5 h-5" />,
      path: '/'
    },
    { 
      id: 'vision' as SceneType, 
      label: 'Our Vision', 
      icon: <Eye className="w-5 h-5" />,
      path: '/' 
    },
    { 
      id: 'solutions' as SceneType, 
      label: 'Solutions', 
      icon: <Lightbulb className="w-5 h-5" />,
      path: '/' 
    },
    { 
      id: 'creations' as SceneType, 
      label: 'Creations', 
      icon: <Layers className="w-5 h-5" />,
      path: '/' 
    },
    { 
      id: 'contact' as SceneType, 
      label: 'Let\'s Build', 
      icon: <Phone className="w-5 h-5" />,
      path: '/contact' 
    },
    { 
      id: 'dashboard' as SceneType, 
      label: 'Dashboard', 
      icon: <User className="w-5 h-5" />,
      path: '/dashboard' 
    },
  ];

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (item) => {
    // For home page scenes, change the scene
    if (location.pathname === '/' || item.path === '/') {
      changeScene(item.id);
    }
  };

  if (isMobile) {
    return (
      <div className={`fixed z-50 top-0 left-0 right-0 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[-20px]'}`}>
        <div className="glass-dark w-full px-4 py-3 flex justify-between items-center shadow-lg">
          <div className="text-mariana-accent font-medium text-lg">Mariana Deep</div>
          
          <div className="flex items-center gap-3">
            <Button 
              onClick={toggleChat}
              size="icon"
              className="bg-mariana-accent text-mariana-deep rounded-full shadow-[0_0_10px_rgba(34,211,238,0.7)]"
              aria-label="Chat with Mariana"
            >
              <MessageSquare className="w-5 h-5" />
            </Button>
            
            <Button
              onClick={toggleMobileMenu}
              size="icon"
              variant="ghost"
              className="text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="glass-dark w-full shadow-lg animate-fade-in">
            <div className="py-2">
              {navItems.map((item) => (
                <Link 
                  key={item.id} 
                  to={item.path}
                  onClick={() => handleNavigation(item)}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start px-4 py-2 ${
                      currentScene === item.id 
                        ? 'text-mariana-accent' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        currentScene === item.id 
                          ? 'bg-mariana-accent/20' 
                          : 'bg-transparent'
                      }`}>
                        {item.icon}
                      </div>
                      <span>{item.label}</span>
                    </div>
                  </Button>
                </Link>
              ))}

              {/* Service links */}
              <div className="px-4 pt-2 pb-1 text-white/50 text-xs font-medium">Services</div>
              <Link to="/services/ai-website">
                <Button variant="ghost" className="w-full justify-start px-4 py-2 text-white/70 hover:text-white">
                  <span className="ml-10">AI Website Development</span>
                </Button>
              </Link>
              <Link to="/services/ai-agent">
                <Button variant="ghost" className="w-full justify-start px-4 py-2 text-white/70 hover:text-white">
                  <span className="ml-10">AI Agent Automations</span>
                </Button>
              </Link>
              <Link to="/services/auto-marketing">
                <Button variant="ghost" className="w-full justify-start px-4 py-2 text-white/70 hover:text-white">
                  <span className="ml-10">Automated Marketing</span>
                </Button>
              </Link>

              {/* Portfolio links */}
              <div className="px-4 pt-2 pb-1 text-white/50 text-xs font-medium">Portfolio</div>
              <Link to="/portfolio/nova-ai">
                <Button variant="ghost" className="w-full justify-start px-4 py-2 text-white/70 hover:text-white">
                  <span className="ml-10">Nova AI</span>
                </Button>
              </Link>
              <Link to="/portfolio/quantum-analytics">
                <Button variant="ghost" className="w-full justify-start px-4 py-2 text-white/70 hover:text-white">
                  <span className="ml-10">Quantum Analytics</span>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`fixed z-50 top-8 right-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[-20px]'}`}>
      <div className="glass rounded-full p-2 shadow-lg animate-pulse-glow">
        <div className="flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => handleNavigation(item)}
            >
              <button
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  currentScene === item.id 
                    ? 'bg-mariana-accent text-mariana-deep shadow-[0_0_10px_rgba(34,211,238,0.7)]' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                aria-label={item.label}
              >
                {item.icon}
              </button>
            </Link>
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
